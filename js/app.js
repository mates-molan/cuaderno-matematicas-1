// =========================================================================
// MOTOR DE APLICACIÓN: CUADERNO MATEMÁTICAS I
// IES Ricardo Ortega — 1.º Bachillerato de Ciencias y Tecnología
// =========================================================================

let currentTemaId = 1;

// Renderizador de apartados en carrusel / slider horizontal deslizable (izquierda ↔ derecha)
function renderApartadosSlider(apartados, enunciadoBase = null) {
  if (!apartados || apartados.length === 0) return '';

  let baseHtml = '';
  if (enunciadoBase) {
    baseHtml = `<div class="center-math">$${enunciadoBase}$</div>`;
  }

  const badgeColors = ['badge-blue', 'badge-purple', 'badge-emerald', 'badge-amber', 'badge-rose', 'badge-cyan'];
  let cardsHtml = '';
  apartados.forEach((ap, idx) => {
    const colorClass = badgeColors[idx % badgeColors.length];
    cardsHtml += `
      <div class="apartado-card ${colorClass}-card">
        <span class="apartado-badge ${colorClass}">${ap.letra}</span>
        <div class="apartado-math">$${ap.expresion}$</div>
      </div>
    `;
  });

  const num = apartados.length;
  const hintText = num > 1 
    ? `↔ Desliza los <strong>${num} apartados</strong> (${apartados[0].letra} a ${apartados[num - 1].letra})`
    : `Apartado ${apartados[0].letra}`;

  return `
    <div class="apartados-slider-wrapper">
      ${baseHtml}
      <div class="apartados-slider-header">
        <span class="slider-hint">${hintText}</span>
        <div class="slider-arrows">
          <button type="button" class="btn-slider-arrow" onclick="slideTrack(this, -1)" title="Apartado anterior" aria-label="Apartado anterior">‹</button>
          <button type="button" class="btn-slider-arrow" onclick="slideTrack(this, 1)" title="Siguiente apartado" aria-label="Siguiente apartado">›</button>
        </div>
      </div>
      <div class="apartados-slider-track">
        ${cardsHtml}
      </div>
    </div>
  `;
}

// Navegación con flechas del slider
function slideTrack(btn, direction) {
  const wrapper = btn.closest('.apartados-slider-wrapper');
  if (!wrapper) return;
  const track = wrapper.querySelector('.apartados-slider-track');
  if (!track) return;
  const card = track.querySelector('.apartado-card');
  const cardWidth = card ? card.offsetWidth + 14 : 260;
  track.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
}

// Soporte táctil y de arrastre con ratón (drag-to-scroll) para ordenadores y pizarras interactivas
function initDragToScroll() {
  document.querySelectorAll('.apartados-slider-track').forEach(track => {
    if (track.dataset.dragInit) return;
    track.dataset.dragInit = 'true';
    let isDown = false;
    let startX;
    let scrollLeft;

    track.addEventListener('mousedown', (e) => {
      isDown = true;
      track.classList.add('dragging');
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });
    track.addEventListener('mouseleave', () => {
      isDown = false;
      track.classList.remove('dragging');
    });
    track.addEventListener('mouseup', () => {
      isDown = false;
      track.classList.remove('dragging');
    });
    track.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    });
  });
}

// Descompone la instrucción del ejercicio en:
// 1. Enunciado matemático principal (en negrita y tamaño destacado)
// 2. Desplegable de pistas didácticas (plegado por defecto para no saturar al alumnado)
function parseInstruccionEjercicio(ex) {
  let raw = ex.instruccion || '';
  let pistasContent = ex.pistas || null;
  let enunciado = ex.enunciado || '';
  let icon = '💡';

  if (!pistasContent && raw) {
    const match = raw.match(/<div class="nota-aula-box">([\s\S]*?)<\/div><\/div>/);
    if (match) {
      const iconMatch = match[1].match(/<span class="nota-aula-icon">([\s\S]*?)<\/span>/);
      if (iconMatch) icon = iconMatch[1].trim();
      const innerMatch = match[1].match(/<div class="nota-aula-content">([\s\S]*?)$/);
      pistasContent = innerMatch ? innerMatch[1].trim() : match[1].trim();
      enunciado = raw.replace(match[0], '').trim();
    } else {
      const matchSimple = raw.match(/<div class="nota-aula-box">([\s\S]*?)<\/div>/);
      if (matchSimple) {
        const iconMatch = matchSimple[1].match(/<span class="nota-aula-icon">([\s\S]*?)<\/span>/);
        if (iconMatch) icon = iconMatch[1].trim();
        const innerMatch = matchSimple[1].match(/<div class="nota-aula-content">([\s\S]*?)$/);
        pistasContent = innerMatch ? innerMatch[1].trim() : matchSimple[1].trim();
        enunciado = raw.replace(matchSimple[0], '').trim();
      } else {
        enunciado = raw.trim();
      }
    }
  } else if (!enunciado && raw) {
    enunciado = raw.trim();
  }

  if (pistasContent) {
    pistasContent = pistasContent.replace(/<\/div>\s*$/, '').trim();
  }

  let pistasHtml = '';
  if (pistasContent) {
    pistasHtml = `
      <details class="pistas-accordion" ontoggle="onAccordionToggle()">
        <summary class="pistas-summary">
          <div class="pistas-summary-left">
            <span class="pistas-icon">${icon}</span>
            <span class="pistas-title">Pistas para hacer el ejercicio</span>
            <span class="pistas-sub">¡Ábreme solo si te atascas! 🤫</span>
          </div>
          <span class="pistas-toggle-icon">▼</span>
        </summary>
        <div class="pistas-body">
          ${pistasContent}
        </div>
      </details>
    `;
  }

  return { enunciado, pistasHtml };
}

// Renderizado Vista 1: Al Día (Última clase impartida)
function renderAlDia() {
  const config = window.CURSO_CONFIG;
  if (!config || !config.ultima_clase) return;
  const u = config.ultima_clase;

  const fechaEl = document.getElementById('heroFecha');
  const tituloSesionEl = document.getElementById('heroTituloSesion');
  const temaNombreEl = document.getElementById('heroTemaNombre');
  const refEl = document.getElementById('heroReferencia');
  const misionEl = document.getElementById('heroMisionSemanal');

  if (fechaEl) fechaEl.innerHTML = `<span>🗓️</span> <span>${u.fecha}</span>`;
  if (tituloSesionEl) tituloSesionEl.textContent = u.titulo_sesion;
  if (temaNombreEl) temaNombreEl.textContent = u.tema_titulo;
  if (refEl) refEl.textContent = '📖 Apuntes: ' + u.referencia_apuntes;
  if (misionEl && (u.mision_semanal || u.trabajo_semanal_pendiente)) {
    const texto = u.mision_semanal || u.trabajo_semanal_pendiente;
    misionEl.innerHTML = `<strong>Misión semanal:</strong> ${texto} <span class="homework-link-btn">Ver semana →</span>`;
  }

  const classroomEl = document.getElementById('heroClassroomNotice');
  if (classroomEl) {
    if (config.tarea_classroom_activa && config.tarea_classroom_activa.existe) {
      const tActiva = config.tarea_classroom_activa;
      classroomEl.style.display = 'flex';
      if (tActiva.estado === 'solucionario_disponible') {
        classroomEl.className = 'classroom-notice solucionario-disponible';
        const labelSol = tActiva.titulo ? ('Solucionario ' + tActiva.titulo.split(':')[0]) : 'Solucionario';
        classroomEl.innerHTML = `
          <span>✅</span>
          <span id="heroClassroomTexto">
            <strong>${labelSol}:</strong> ${tActiva.aviso || 'Solucionario resuelto disponible para auto-corrección.'}
            <span class="classroom-link-btn">Ver y descargar soluciones →</span>
          </span>
        `;
      } else {
        classroomEl.className = 'classroom-notice';
        classroomEl.innerHTML = `
          <span>📤</span>
          <span id="heroClassroomTexto">
            <strong>Tarea Classroom:</strong> ${tActiva.aviso || tActiva.titulo}
            <span class="classroom-link-btn">Ver tarea →</span>
          </span>
        `;
      }
    } else {
      classroomEl.style.display = 'none';
    }
  }

  const testNoticeEl = document.getElementById('heroTestNotice');
  if (testNoticeEl) {
    if (config.control_test_activo && config.control_test_activo.existe) {
      const tTest = config.control_test_activo;
      testNoticeEl.style.display = 'flex';
      if (tTest.estado === 'solucionario_disponible') {
        testNoticeEl.className = 'test-notice solucionario-disponible';
        testNoticeEl.innerHTML = `
          <span>✅</span>
          <span id="heroTestTexto">
            <strong>${tTest.titulo || 'Examen'}:</strong> ${tTest.aviso || 'Enunciado y solucionario resuelto disponibles para auto-corrección.'}
            <span class="test-link-btn">Ver en Temario →</span>
          </span>
        `;
      } else {
        const esEnCurso = tTest.estado === 'en_curso';
        testNoticeEl.className = esEnCurso ? 'test-notice en-curso' : 'test-notice';
        testNoticeEl.innerHTML = `
          <span>✍️</span>
          <span id="heroTestTexto">
            <strong>${esEnCurso ? '🔴 Examen en Vivo hoy:' : '✅ Examen Realizado:'}</strong> ${tTest.aviso || tTest.titulo}
            <span class="test-link-btn">Ver examen →</span>
          </span>
        `;
      }
    } else {
      testNoticeEl.style.display = 'none';
    }
  }

  // Botonera contextual limpia en el Hero (Cero acumulación de PDFs antiguos)
  const heroBtnsEl = document.getElementById('heroPdfBtns');
  if (heroBtnsEl) {
    const temaSesion = (config.temas || []).find(t => t.id === u.tema_id);
    const temaActual = (config.temas || []).find(t => t.id === config.tema_actual_id);
    const tTest = (config.control_test_activo && config.control_test_activo.existe) ? config.control_test_activo : null;
    let heroBtnsHtml = '';

    if (tTest && tTest.pdf_examen) {
      heroBtnsHtml += `
        <a href="${tTest.pdf_examen}" target="_blank" class="btn-action-primary" style="background: linear-gradient(135deg, #e11d48 0%, #be123c 100%); border-color: #be123c;" title="Abrir el Enunciado del Examen en PDF">
          <span>📄</span>
          <span>Enunciado Examen Tema ${tTest.tema_id} (PDF)</span>
        </a>
      `;
    }

    if (tTest && tTest.estado === 'solucionario_disponible' && tTest.pdf_solucionario) {
      heroBtnsHtml += `
        <a href="${tTest.pdf_solucionario}" target="_blank" class="btn-action-emerald" title="Abrir el Solucionario Resuelto del Examen en PDF">
          <span>✅</span>
          <span>Solucionario Examen Tema ${tTest.tema_id} (PDF)</span>
        </a>
      `;
    }

    if (temaSesion && temaSesion.apuntes_pdf) {
      heroBtnsHtml += `
        <a href="${temaSesion.apuntes_pdf}" target="_blank" class="btn-action-primary" title="Abrir los apuntes del tema en PDF">
          <span>📘</span>
          <span>Apuntes Tema ${temaSesion.numero} (PDF)</span>
        </a>
      `;
    } else if (temaActual && temaActual.apuntes_pdf) {
      heroBtnsHtml += `
        <a href="${temaActual.apuntes_pdf}" target="_blank" class="btn-action-primary" title="Descargar Apuntes del Tema ${temaActual.numero}">
          <span>📘</span>
          <span>Apuntes Tema ${temaActual.numero} (PDF)</span>
        </a>
      `;
    }

    if (temaSesion && temaSesion.ejercicios_pdf) {
      heroBtnsHtml += `
        <a href="${temaSesion.ejercicios_pdf}" target="_blank" class="btn-action-purple" title="Abrir la hoja de problemas en PDF">
          <span>📄</span>
          <span>Hoja de Problemas (PDF)</span>
        </a>
      `;
    }

    const temaDataActual = window.TEMAS_DATA && window.TEMAS_DATA[u.tema_id];
    const tieneExamenes = (temaDataActual && temaDataActual.controles_test && temaDataActual.controles_test.length > 0) || (temaSesion && temaSesion.repaso_pdf);

    if (tieneExamenes) {
      heroBtnsHtml += `
        <button type="button" class="btn-action-purple" onclick="irATemaSeccion(${u.tema_id}, 'controles-test')" style="cursor: pointer; font-family: inherit;">
          <span>📂</span>
          <span>Ir a Exámenes del Tema ${u.tema_id} →</span>
        </button>
      `;
    } else {
      heroBtnsHtml += `
        <button type="button" class="btn-action-purple" onclick="irATemaSeccion(${u.tema_id}, 'pizarra-diario')" style="cursor: pointer; font-family: inherit;">
          <span>📅</span>
          <span>Diario de Pizarra (Tema ${u.tema_id}) →</span>
        </button>
      `;
    }

    heroBtnsEl.innerHTML = heroBtnsHtml;
  }

  const container = document.getElementById('heroEjerciciosContainer');
  if (!container || !u.ejercicios_vistos) return;

  let html = '';
  u.ejercicios_vistos.forEach(ex => {
    let apartadosHtml = '';
    if (ex.apartados && ex.apartados.length > 0) {
      apartadosHtml = renderApartadosSlider(ex.apartados, ex.enunciado_base);
    }

    const { enunciado, pistasHtml } = parseInstruccionEjercicio(ex);

    // Los ejercicios vienen plegados por defecto
    html += `
      <details class="pizarra-accordion" ontoggle="onAccordionToggle()">
        <summary class="pizarra-summary">
          <div class="pizarra-summary-left">
            <span class="badge-ref">Ejercicio ${ex.numero}</span>
            <span style="font-weight: 800;">${ex.titulo}</span>
            <span class="badge-apuntes-ref">📖 Apuntes: ${ex.referencia}</span>
          </div>
          <span class="pizarra-toggle-icon">▼</span>
        </summary>
        <div class="pizarra-body">
          <div class="exercise-enunciado">${enunciado}</div>
          ${pistasHtml}
          ${apartadosHtml}
          ${ex.idea_clave ? `<div class="idea-box"><strong>💡 Idea clave para tu libreta:</strong> ${ex.idea_clave}</div>` : ''}
        </div>
      </details>
    `;
  });

  container.innerHTML = html;
  initDragToScroll();
}

// Renderizado Cuadrícula de Temas (Vista Temario General: Temas Activos)
function renderTemasGrid() {
  const config = window.CURSO_CONFIG;
  const container = document.getElementById('temasGridContainer');
  if (!config || !config.temas || !container) return;

  let html = '';
  config.temas.forEach(t => {
    let badgeNumClass = 'badge-tema-num';
    let estadoLabel = 'TEMA ' + t.numero;
    let cardClick = `onclick="openTemaDetail(${t.id}, 'pizarra-diario', false)"`;
    let btnText = 'Entrar al Tema ' + t.numero;
    let btnIcon = '→';

    if (t.estado === 'en_curso') {
      estadoLabel += ' • EN CURSO';
    } else if (t.estado === 'completado') {
      estadoLabel += ' • COMPLETADO';
    } else {
      estadoLabel += ' • PRÓXIMAMENTE';
      btnText = 'Consultar Programa';
    }

    const temaData = window.TEMAS_DATA && window.TEMAS_DATA[t.id];
    const numSesiones = (temaData && temaData.sesiones) ? temaData.sesiones.length : (t.sesiones_impartidas || 0);
    const numTareas = (temaData && temaData.tareas_classroom) ? temaData.tareas_classroom.length : (t.total_tareas_classroom || 0);
    const numTests = (temaData && temaData.controles_test) ? temaData.controles_test.length : (t.total_controles_test || 0);
    const numRadar = (temaData && temaData.comprueba) ? temaData.comprueba.length : 0;

    let metaPillsHtml = '';
    if (t.apuntes_listos && t.apuntes_pdf) {
      metaPillsHtml += `<a href="${t.apuntes_pdf}" target="_blank" class="meta-pill meta-pill-btn meta-pill-apuntes" onclick="event.stopPropagation()" title="Abrir directamente los Apuntes en PDF">📘 Apuntes (PDF) ↗</a>`;
    }
    if (t.ejercicios_listos && t.ejercicios_pdf) {
      metaPillsHtml += `<a href="${t.ejercicios_pdf}" target="_blank" class="meta-pill meta-pill-btn meta-pill-hoja" onclick="event.stopPropagation()" title="Abrir directamente la Hoja de Problemas en PDF">📄 Hoja de Problemas (PDF) ↗</a>`;
    }

    // Botones de sección interactivos que llevan directamente a la pestaña correspondiente
    metaPillsHtml += `<button type="button" class="meta-pill meta-pill-btn meta-pill-pizarra" onclick="event.stopPropagation(); irATemaSeccion(${t.id}, 'pizarra-diario')" title="Ir al Diario de Pizarra de este tema">📅 ${t.sesiones_impartidas > 0 ? t.sesiones_impartidas + ' Sesiones de Pizarra' : 'Diario de Pizarra'} →</button>`;

    if (t.total_ejercicios_libreta > 0 || t.ejercicios_listos) {
      metaPillsHtml += `<button type="button" class="meta-pill meta-pill-btn meta-pill-libreta" onclick="event.stopPropagation(); irATemaSeccion(${t.id}, 'semana-hoja')" title="Ir a los Ejercicios de la Semana (Tu Libreta)">📝 ${t.total_ejercicios_libreta > 0 ? t.total_ejercicios_libreta + ' Ejercicios de Libreta' : 'Tu Libreta'} →</button>`;
    }

    if (numTareas > 0) {
      const labelTareas = numTareas === 1 ? '1 Tarea de Classroom' : `${numTareas} Tareas de Classroom`;
      metaPillsHtml += `<button type="button" class="meta-pill meta-pill-btn meta-pill-classroom" onclick="event.stopPropagation(); irATemaSeccion(${t.id}, 'tareas-classroom')" title="Ir a las Tareas y Solucionarios de Classroom">📤 ${labelTareas} →</button>`;
    }

    if (numTests > 0 || t.repaso_pdf) {
      const labelTests = numTests > 0 ? (numTests === 1 ? '1 Control / Examen' : `${numTests} Controles / Exámenes`) : 'Exámenes y Repaso';
      metaPillsHtml += `<button type="button" class="meta-pill meta-pill-btn meta-pill-test" onclick="event.stopPropagation(); irATemaSeccion(${t.id}, 'controles-test')" title="Ir a los Controles Tipo Test y Solucionarios">✍️ ${labelTests} →</button>`;
    }

    if (numRadar > 0) {
      metaPillsHtml += `<button type="button" class="meta-pill meta-pill-btn meta-pill-radar" onclick="event.stopPropagation(); irATemaSeccion(${t.id}, 'comprueba-tema')" title="Ir al Radar de Autoevaluación de este tema">🎯 Tu Radar (${numRadar}) →</button>`;
    }

    html += `
      <article class="tema-card" ${cardClick}>
        <div>
          <div class="tema-card-top">
            <span class="${badgeNumClass}">${estadoLabel}</span>
            <span class="badge-eval">${t.evaluacion}</span>
          </div>
          <h4 class="tema-card-title">${t.titulo}</h4>
          <p class="tema-card-desc">${t.descripcion}</p>
        </div>
        <div>
          <div class="tema-card-meta-label">🧭 Ir directo a una sección o material:</div>
          <div class="tema-card-meta">
            ${metaPillsHtml}
          </div>
          <div class="tema-card-btn">
            <span>${btnText}</span>
            <span>${btnIcon}</span>
          </div>
        </div>
      </article>
    `;
  });

  container.innerHTML = html;
}

// Renderizado de la Cabecera de Detalle del Tema
function renderTemaDetailHeader(temaId) {
  const config = window.CURSO_CONFIG;
  const temaMeta = config.temas.find(t => t.id === temaId);
  const temaData = window.TEMAS_DATA && window.TEMAS_DATA[temaId];

  const titleEl = document.getElementById('temaDetailTitle');
  const badgeEl = document.getElementById('temaDetailBadge');
  const subEl = document.getElementById('temaDetailSub');
  const actionsEl = document.getElementById('temaDetailActions');

  const numSesiones = (temaMeta && temaMeta.sesiones_impartidas) || 0;
  const numLibreta = (temaMeta && temaMeta.total_ejercicios_libreta) || 0;
  const numTareas = (temaData && temaData.tareas_classroom) ? temaData.tareas_classroom.length : ((temaMeta && temaMeta.total_tareas_classroom) || 0);
  const numTests = (temaData && temaData.controles_test) ? temaData.controles_test.length : ((temaMeta && temaMeta.total_controles_test) || 0);
  const numRadar = (temaData && temaData.comprueba) ? temaData.comprueba.length : 0;

  // Actualizar contadores en los botones de pestañas del tema
  const lblPizarra = document.getElementById('subtab-label-pizarra');
  const lblLibreta = document.getElementById('subtab-label-libreta');
  const lblClassroom = document.getElementById('subtab-label-classroom');
  const lblTest = document.getElementById('subtab-label-test');
  const lblRadar = document.getElementById('subtab-label-radar');

  if (lblPizarra) lblPizarra.textContent = numSesiones > 0 ? `Diario de Pizarra (${numSesiones} ses.)` : 'Diario de Pizarra';
  if (lblLibreta) lblLibreta.textContent = numLibreta > 0 ? `Tu Libreta (${numLibreta} ej.)` : 'Tu Libreta (semanal)';
  if (lblClassroom) lblClassroom.textContent = numTareas > 0 ? `Tareas Classroom (${numTareas})` : 'Tareas Classroom';
  if (lblTest) lblTest.textContent = numTests > 0 ? `Controles y Test (${numTests})` : 'Controles y Test';
  if (lblRadar) lblRadar.textContent = numRadar > 0 ? `Tu Radar (${numRadar} ítems)` : 'Tu Radar';

  if (temaMeta) {
    if (titleEl) titleEl.textContent = `Tema ${temaMeta.numero}: ${temaMeta.titulo}`;
    if (badgeEl) {
      badgeEl.textContent = temaMeta.estado === 'en_curso' ? 'TEMA EN CURSO' : (temaMeta.estado === 'completado' ? 'TEMA COMPLETADO' : 'TEMA PROGRAMADO');
    }
    if (subEl) {
      let pillsSub = [];
      pillsSub.push(`<button type="button" class="detail-sub-link" onclick="switchSubTab('pizarra-diario', null, true)">📅 ${numSesiones} sesiones impartidas</button>`);
      if (numLibreta > 0) {
        pillsSub.push(`<button type="button" class="detail-sub-link" onclick="switchSubTab('semana-hoja', null, true)">📝 ${numLibreta} ejercicios de libreta</button>`);
      }
      if (numTareas > 0) {
        pillsSub.push(`<button type="button" class="detail-sub-link" onclick="switchSubTab('tareas-classroom', null, true)">📤 ${numTareas} ${numTareas === 1 ? 'tarea' : 'tareas'} de Classroom</button>`);
      }
      if (numTests > 0) {
        pillsSub.push(`<button type="button" class="detail-sub-link" onclick="switchSubTab('controles-test', null, true)">✍️ ${numTests} ${numTests === 1 ? 'control test' : 'controles test'}</button>`);
      }
      pillsSub.push(`<span style="color: var(--text-muted);">${temaMeta.evaluacion}</span>`);
      subEl.innerHTML = pillsSub.join(' <span style="color: #cbd5e1;">•</span> ');
    }
  }

  if (actionsEl) {
    let btnsHtml = '';
    const apuntesUrl = (temaData && temaData.apuntes_pdf) || (temaMeta && temaMeta.apuntes_pdf);
    const ejerciciosUrl = (temaData && temaData.ejercicios_pdf) || (temaMeta && temaMeta.ejercicios_pdf);

    if (apuntesUrl) {
      btnsHtml += `
        <a href="${apuntesUrl}" target="_blank" class="btn-action-primary">
          <span>📘</span>
          <span>Apuntes del Tema (PDF)</span>
        </a>
      `;
    }
    if (ejerciciosUrl) {
      btnsHtml += `
        <a href="${ejerciciosUrl}" target="_blank" class="btn-action-purple">
          <span>📄</span>
          <span>Hoja de Problemas (PDF)</span>
        </a>
      `;
    }
    actionsEl.innerHTML = btnsHtml;
  }
}

// Renderizado Vista 2: Diario de Pizarra con Sesiones y Ejercicios Plegados
function renderDiarioPlegado(temaId = currentTemaId) {
  const container = document.getElementById('diarioPizarraAcordeon');
  if (!container) return;

  const t = window.TEMAS_DATA && window.TEMAS_DATA[temaId];
  if (!t || !t.sesiones || t.sesiones.length === 0) {
    container.innerHTML = `
      <div style="padding: 24px; background: #ffffff; border-radius: 12px; border: 1.5px solid var(--border-soft); text-align: center; color: var(--text-muted);">
        <p style="font-size: 1.05rem;">📅 Las sesiones de pizarra para este tema se publicarán conforme se impartan en el aula.</p>
      </div>
    `;
    return;
  }

  let html = '';
  // Orden cronológico inverso: la sesión más reciente arriba
  const sesionesOrdenadas = [...t.sesiones].reverse();
  sesionesOrdenadas.forEach((s, idx) => {
    let ejerciciosHtml = '';
    s.ejercicios.forEach(ex => {
      let apartadosHtml = '';
      if (ex.apartados && ex.apartados.length > 0) {
        apartadosHtml = renderApartadosSlider(ex.apartados, ex.enunciado_base);
      }

      const { enunciado, pistasHtml } = parseInstruccionEjercicio(ex);

      ejerciciosHtml += `
        <details class="pizarra-accordion" ontoggle="onAccordionToggle()" style="margin-bottom: 14px;">
          <summary class="pizarra-summary">
            <div class="pizarra-summary-left">
              <span class="badge-ref">Ejercicio ${ex.numero}</span>
              <span style="font-weight: 800;">${ex.titulo}</span>
              <span class="badge-apuntes-ref">📖 ${ex.referencia}</span>
            </div>
            <span class="pizarra-toggle-icon">▼</span>
          </summary>
          <div class="pizarra-body">
            <div class="exercise-enunciado">${enunciado}</div>
            ${pistasHtml}
            ${apartadosHtml}
            ${ex.idea_clave ? `<div class="idea-box"><strong>💡 Idea clave:</strong> ${ex.idea_clave}</div>` : ''}
          </div>
        </details>
      `;
    });

    const esReciente = (idx === 0);
    const badgeReciente = esReciente ? '<span class="badge-reciente">⚡ Más reciente</span>' : '';
    const sesionLabel = String(s.numero).includes('y') || String(s.numero).includes('-') ? `Sesiones ${s.numero}` : `Sesión ${s.numero}`;

    html += `
      <details class="sesion-accordion" ontoggle="onAccordionToggle()">
        <summary class="sesion-summary">
          <div class="sesion-summary-left">
            <span class="sesion-badge">${sesionLabel}</span>
            ${badgeReciente}
            <span>🗓️ ${s.fecha}: ${s.titulo}</span>
          </div>
          <span class="sesion-toggle-icon">▼</span>
        </summary>
        <div class="sesion-body">
          ${ejerciciosHtml}
        </div>
      </details>
    `;
  });

  container.innerHTML = html;
  initDragToScroll();
}

// Renderizado de Ejercicios de la Semana (Hoja de Trabajo Autónomo)
function renderSemanaHoja(temaId = currentTemaId) {
  const container = document.getElementById('temaEjerciciosSemanaContainer');
  const bannerContainer = document.getElementById('hojaDownloadBannerContainer');
  if (!container) return;

  const t = window.TEMAS_DATA && window.TEMAS_DATA[temaId];

  // Banner superior de descarga (Hoja de Ejercicios y Ficha de Repaso si existen)
  if (bannerContainer) {
    let bannersHtml = '';
    if (t && t.ejercicios_pdf) {
      bannersHtml += `
        <div class="hoja-download-banner">
          <div class="hoja-download-info">
            <span class="hoja-download-icon">📑</span>
            <div>
              <h4 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin-bottom: 2px;">Hoja de Ejercicios: Tema ${t.id}</h4>
              <p style="color: var(--text-muted); font-size: 0.92rem;">Documento completo en PDF con soluciones finales para contrastar tu trabajo.</p>
            </div>
          </div>
          <a href="${t.ejercicios_pdf}" target="_blank" class="btn-action-purple">
            <span>📄</span>
            <span>Ver / Descargar Hoja (PDF)</span>
          </a>
        </div>
      `;
    }
    if (t && t.repaso_pdf) {
      bannersHtml += `
        <div class="hoja-download-banner" style="background: linear-gradient(135deg, #ffffff 0%, #fffbeb 100%); border-color: #fde68a;">
          <div class="hoja-download-info">
            <span class="hoja-download-icon">🎯</span>
            <div>
              <h4 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin-bottom: 2px;">Ficha de Repaso de Examen: Tema ${t.id}</h4>
              <p style="color: var(--text-muted); font-size: 0.92rem;">Selección de ejercicios de preparación de examen con su solucionario resuelto paso a paso.</p>
            </div>
          </div>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <a href="${t.repaso_pdf}" target="_blank" class="btn-action-primary" style="background: linear-gradient(135deg, #d97706 0%, #b45309 100%); border-color: #b45309;">
              <span>🎯</span>
              <span>Enunciado Repaso (PDF)</span>
            </a>
            ${t.repaso_solucionario_pdf ? `
              <a href="${t.repaso_solucionario_pdf}" target="_blank" class="btn-action-emerald">
                <span>✅</span>
                <span>Solucionario Resuelto (PDF)</span>
              </a>
            ` : ''}
          </div>
        </div>
      `;
    }
    if (bannersHtml) {
      bannerContainer.innerHTML = bannersHtml;
      bannerContainer.style.display = 'block';
    } else {
      bannerContainer.style.display = 'none';
    }
  }

  if (!t || !t.semanas_ejercicios || t.semanas_ejercicios.length === 0) {
    container.innerHTML = `
      <div style="padding: 24px; background: #ffffff; border-radius: 12px; border: 1.5px solid var(--border-soft); text-align: center; color: var(--text-muted);">
        <p style="font-size: 1.05rem;">📝 Las hojas de trabajo para este tema se activarán al comenzar la unidad.</p>
      </div>
    `;
    return;
  }

  let html = '';
  t.semanas_ejercicios.forEach(sem => {
    let ejerciciosHtml = '';
    sem.ejercicios.forEach(p => {
      let apartadosHtml = '';
      if (p.apartados && p.apartados.length > 0) {
        apartadosHtml = renderApartadosSlider(p.apartados, p.enunciado_base);
      } else if (p.enunciado) {
        apartadosHtml = `<div class="semana-enunciado">${p.enunciado}</div>`;
      }

      const instruccionText = p.instruccion 
        ? `<div class="exercise-instruction">${p.instruccion}</div>`
        : '';

      ejerciciosHtml += `
        <details class="ejercicio-accordion" ontoggle="onAccordionToggle()">
          <summary class="ejercicio-summary">
            <div class="ejercicio-summary-left">
              <span class="semana-id">${p.id}</span>
              <span style="font-weight: 700;">${p.caso}</span>
            </div>
            <div class="ejercicio-summary-right">
              <span class="ejercicio-badge-count">${p.apartados_count} apartados</span>
              <span class="ejercicio-toggle-icon">▼</span>
            </div>
          </summary>
          <div class="ejercicio-body">
            ${instruccionText}
            ${apartadosHtml}
            <button class="btn-toggle-sol" onclick="toggleSol('${p.id}')">
              <span>🔍</span>
              <span>Comprobar soluciones finales</span>
            </button>
            <div class="panel-sol-final" id="sol-${p.id}">
              <div style="font-weight: 800; margin-bottom: 8px; color: #166534;">🎯 Soluciones finales para contrastar con tu libreta:</div>
              <div style="overflow-x: auto; line-height: 1.8;">
                $${p.solucion}$
              </div>
            </div>
          </div>
        </details>
      `;
    });

    const esSemanaActual = (sem.estado === 'actual');
    const estadoBadge = esSemanaActual
      ? '<span class="semana-badge-estado actual">🟢 En Curso</span>'
      : '<span class="semana-badge-estado anterior">⚪ Anterior</span>';

    html += `
      <details class="semana-accordion" id="semana-bloque-${sem.semana_numero}" data-estado="${sem.estado}" ${esSemanaActual ? 'open' : ''} ontoggle="onAccordionToggle()">
        <summary class="semana-summary">
          <div class="semana-summary-left">
            <span class="semana-badge-num">Semana ${sem.semana_numero}</span>
            ${estadoBadge}
            <span class="semana-rango-fechas">🗓️ ${sem.rango_fechas}</span>
          </div>
          <div class="semana-summary-right">
            <span class="ejercicio-badge-count">${sem.ejercicios.length} problemas</span>
            <span class="semana-toggle-icon">▼</span>
          </div>
        </summary>
        <div class="semana-body">
          <div class="semana-meta-card">
            <strong>🎯 Meta Pedagógica de la Semana:</strong> ${sem.meta_semanal}
          </div>
          <div class="semana-ejercicios-list">
            ${ejerciciosHtml}
          </div>
        </div>
      </details>
    `;
  });

  container.innerHTML = html;
  initDragToScroll();
}

// Renderizado de Tareas de Google Classroom (Entregas y Solucionarios)
function renderTareasClassroom(temaId = currentTemaId) {
  const container = document.getElementById('temaTareasClassroomContainer');
  if (!container) return;

  const t = window.TEMAS_DATA && window.TEMAS_DATA[temaId];
  if (!t || !t.tareas_classroom || t.tareas_classroom.length === 0) {
    container.innerHTML = `
      <div style="padding: 28px; background: #ffffff; border-radius: 12px; border: 1.5px solid var(--border-soft); text-align: center; color: var(--text-muted);">
        <p style="font-size: 1.05rem;">📤 No hay tareas de Classroom registradas para esta unidad en este momento.</p>
        <p style="font-size: 0.9rem; margin-top: 6px;">Las tareas entregables se publicarán aquí conforme se asignen en Google Classroom.</p>
      </div>
    `;
    return;
  }

  let html = '<div class="tareas-classroom-list">';
  t.tareas_classroom.forEach(tarea => {
    let estadoBadgeHtml = '';
    let actionButtonsHtml = '';
    let cardClass = 'tarea-accordion';

    if (tarea.estado === 'activa') {
      cardClass += ' activa';
      estadoBadgeHtml = '<span class="tarea-badge-estado activa">🟡 Plazo Abierto (Entrega en Classroom)</span>';
      actionButtonsHtml = `
        <a href="${tarea.pdf_tarea}" target="_blank" class="btn-action-primary">
          <span>📄</span>
          <span>Descargar Enunciado de la Tarea (PDF)</span>
        </a>
        <div class="solucion-pendiente-box">
          <span>🔒</span>
          <span>Solucionario cerrado (se publicará aquí tras vencer el plazo de entrega)</span>
        </div>
      `;
    } else if (tarea.estado === 'solucionario_disponible') {
      cardClass += ' solucionario-disponible';
      estadoBadgeHtml = '<span class="tarea-badge-estado solucionario-disponible">🟢 Solucionario Disponible (Auto-corrección)</span>';
      actionButtonsHtml = `
        <a href="${tarea.pdf_tarea}" target="_blank" class="btn-action-purple">
          <span>📄</span>
          <span>Ver Enunciado (PDF)</span>
        </a>
        <a href="${tarea.pdf_solucionario}" target="_blank" class="btn-action-emerald">
          <span>✅</span>
          <span>Descargar Solucionario Resuelto (PDF)</span>
        </a>
      `;
    } else {
      cardClass += ' cerrada';
      estadoBadgeHtml = '<span class="tarea-badge-estado cerrada">🔒 Plazo Cerrado</span>';
      actionButtonsHtml = `
        <a href="${tarea.pdf_tarea}" target="_blank" class="btn-action-purple">
          <span>📄</span>
          <span>Ver Enunciado (PDF)</span>
        </a>
      `;
    }

    let ejerciciosHtml = '';
    if (tarea.ejercicios_incluidos && tarea.ejercicios_incluidos.length > 0) {
      let listItems = tarea.ejercicios_incluidos.map(e => `<li>${e}</li>`).join('');
      ejerciciosHtml = `
        <details class="tarea-ejercicios-resumen">
          <summary>📋 Ver ejercicios incluidos en esta tarea (${tarea.ejercicios_incluidos.length} apartados/bloques)</summary>
          <ul>${listItems}</ul>
        </details>
      `;
    }

    // Las tareas vienen plegadas por defecto a petición docente
    html += `
      <details class="${cardClass}" ontoggle="onAccordionToggle()">
        <summary class="tarea-summary">
          <div class="tarea-summary-left">
            <span class="tarea-badge-id">${tarea.id}</span>
            <span class="tarea-title">${tarea.titulo}</span>
            ${estadoBadgeHtml}
          </div>
          <div class="tarea-summary-right">
            <span class="tarea-deadline-pill">⏰ ${tarea.fecha_limite}</span>
            <span class="tarea-toggle-icon">▼</span>
          </div>
        </summary>

        <div class="tarea-body">
          <div class="tarea-meta-row">
            <span class="tarea-meta-item">🗓️ <strong>Asignada:</strong> ${tarea.fecha_asignacion}</span>
            <span class="tarea-meta-item tarea-deadline">⏰ <strong>Plazo de Entrega:</strong> ${tarea.fecha_limite}</span>
          </div>

          ${tarea.criterios_entrega ? `
            <div class="tarea-instructions-box">
              <strong>📌 Indicaciones de Entrega:</strong> ${tarea.criterios_entrega}
            </div>
          ` : ''}

          ${ejerciciosHtml}

          <div class="tarea-actions-bar">
            ${actionButtonsHtml}
          </div>
        </div>
      </details>
    `;
  });

  html += '</div>';
  container.innerHTML = html;
}

// Renderizado de Controles y Exámenes Test de Aula (Enunciados y Solucionarios)
function renderControlesTest(temaId = currentTemaId) {
  const container = document.getElementById('temaControlesTestContainer');
  if (!container) return;

  const t = window.TEMAS_DATA && window.TEMAS_DATA[temaId];
  const hasTests = t && t.controles_test && t.controles_test.length > 0;
  const hasRepaso = t && t.repaso_pdf;

  if (!hasTests && !hasRepaso) {
    container.innerHTML = `
      <div style="padding: 28px; background: #ffffff; border-radius: 12px; border: 1.5px solid var(--border-soft); text-align: center; color: var(--text-muted);">
        <p style="font-size: 1.05rem;">✍️ No hay controles ni material de examen registrados para esta unidad en este momento.</p>
        <p style="font-size: 0.9rem; margin-top: 6px;">Las pruebas escritas y fichas de repaso se publicarán aquí conforme avancemos en el aula.</p>
      </div>
    `;
    return;
  }

  let html = '<div class="controles-test-list">';

  if (hasRepaso) {
    html += `
      <div class="hoja-download-banner" style="background: linear-gradient(135deg, #ffffff 0%, #fffbeb 100%); border-color: #fde68a; margin-bottom: 18px;">
        <div class="hoja-download-info">
          <span class="hoja-download-icon">🎯</span>
          <div>
            <h4 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin-bottom: 2px;">Preparación de Examen: Ficha de Repaso (Tema ${t.id})</h4>
            <p style="color: var(--text-muted); font-size: 0.92rem;">Colección de problemas modelo de examen con solucionario resuelto paso a paso.</p>
          </div>
        </div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <a href="${t.repaso_pdf}" target="_blank" class="btn-action-primary" style="background: linear-gradient(135deg, #d97706 0%, #b45309 100%); border-color: #b45309;">
            <span>📄</span>
            <span>Enunciado Repaso (PDF)</span>
          </a>
          ${t.repaso_solucionario_pdf ? `
            <a href="${t.repaso_solucionario_pdf}" target="_blank" class="btn-action-emerald">
              <span>✅</span>
              <span>Solucionario Resuelto (PDF)</span>
            </a>
          ` : ''}
        </div>
      </div>
    `;
  }

  if (hasTests) {
    t.controles_test.forEach(test => {
    let estadoBadgeHtml = '';
    let actionButtonsHtml = '';
    let cardClass = 'test-accordion';

    const btnRespuestas = test.pdf_respuestas ? `
        <a href="${test.pdf_respuestas}" target="_blank" class="btn-action-purple">
          <span>📝</span>
          <span>Ficha de Respuestas (PDF)</span>
        </a>
    ` : '';

    if (test.estado === 'en_curso') {
      cardClass += ' en-curso';
      estadoBadgeHtml = '<span class="test-badge-estado en-curso">🔴 En Curso en el Aula</span>';
      actionButtonsHtml = `
        <a href="${test.pdf_examen}" target="_blank" class="btn-action-primary">
          <span>📄</span>
          <span>Descargar Enunciado del Examen (PDF)</span>
        </a>
        ${btnRespuestas}
        <div class="solucion-pendiente-box">
          <span>🔒</span>
          <span>${test.aviso_solucionario || 'Solucionario cerrado temporalmente durante la prueba'}</span>
        </div>
      `;
    } else if (test.estado === 'solucionario_disponible') {
      cardClass += ' solucionario-disponible';
      estadoBadgeHtml = '<span class="test-badge-estado solucionario-disponible">🟢 Solucionario Disponible (Auto-corrección)</span>';
      actionButtonsHtml = `
        <a href="${test.pdf_examen}" target="_blank" class="btn-action-purple">
          <span>📄</span>
          <span>Ver Enunciado del Examen (PDF)</span>
        </a>
        ${btnRespuestas}
        <a href="${test.pdf_solucionario}" target="_blank" class="btn-action-emerald">
          <span>✅</span>
          <span>Descargar Solucionario Resuelto (PDF)</span>
        </a>
      `;
    } else {
      cardClass += ' cerrada';
      estadoBadgeHtml = '<span class="test-badge-estado cerrada">⚪ Prueba Realizada</span>';
      actionButtonsHtml = `
        <a href="${test.pdf_examen}" target="_blank" class="btn-action-purple">
          <span>📄</span>
          <span>Ver Enunciado (PDF)</span>
        </a>
        ${btnRespuestas}
        <a href="${test.pdf_solucionario}" target="_blank" class="btn-action-emerald">
          <span>✅</span>
          <span>Solucionario (PDF)</span>
        </a>
      `;
    }

    html += `
      <details class="${cardClass}" ontoggle="onAccordionToggle()">
        <summary class="test-summary">
          <div class="test-summary-left">
            <span class="test-badge-id">${test.id}</span>
            <span class="test-title">${test.titulo}</span>
            ${estadoBadgeHtml}
          </div>
          <div class="test-summary-right">
            <span class="test-date-pill">🗓️ ${test.fecha}</span>
            <span class="test-toggle-icon">▼</span>
          </div>
        </summary>

        <div class="test-body">
          <div class="test-meta-row">
            <span class="test-meta-item">📝 <strong>Formato:</strong> ${test.num_preguntas} cuestiones</span>
            <span class="test-meta-item">🎯 <strong>Temas:</strong> ${test.descripcion || 'Contenidos de la unidad'}</span>
          </div>

          ${test.criterios ? `
            <details class="tarea-ejercicios-resumen" style="margin-bottom: 12px;">
              <summary>📌 Ver indicaciones adicionales</summary>
              <p style="margin: 6px 0 0 0; font-size: 0.9rem; color: var(--text-muted);">${test.criterios}</p>
            </details>
          ` : ''}

          <div class="test-actions-bar">
            ${actionButtonsHtml}
          </div>
        </div>
      </details>
    `;
    });
  }

  html += '</div>';
  container.innerHTML = html;
}

// Renderizado de la Autoevaluación Semafórica (Comprueba lo que sabes)
function renderComprueba(temaId = currentTemaId) {
  const container = document.getElementById('temaCompruebaContainer');
  if (!container) return;

  const t = window.TEMAS_DATA && window.TEMAS_DATA[temaId];
  if (!t || !t.comprueba || t.comprueba.length === 0) {
    container.innerHTML = `
      <div style="padding: 24px; background: #ffffff; border-radius: 12px; border: 1.5px solid var(--border-soft); text-align: center; color: var(--text-muted);">
        <p style="font-size: 1.05rem;">🎯 Las preguntas de autoevaluación se activarán conforme avancemos en el tema.</p>
      </div>
    `;
    return;
  }

  // Preservar bloques abiertos previamente
  const previouslyOpen = new Set();
  document.querySelectorAll('.criterio-bloque-accordion[open]').forEach(el => {
    if (el.dataset.bloqueId) {
      previouslyOpen.add(el.dataset.bloqueId);
    }
  });

  let greenCount = 0;
  let yellowCount = 0;
  let redCount = 0;
  const total = t.comprueba.length;

  const bloques = {};
  t.comprueba.forEach(c => {
    const storageKey = `criterio_t${temaId}_${c.id}`;
    const val = localStorage.getItem(storageKey) || 'none';
    if (val === 'green') greenCount++;
    else if (val === 'yellow') yellowCount++;
    else if (val === 'red') redCount++;

    if (!bloques[c.bloque]) {
      bloques[c.bloque] = [];
    }
    bloques[c.bloque].push({ ...c, val });
  });

  const unratedCount = total - (greenCount + yellowCount + redCount);
  const greenPct = Math.round((greenCount / total) * 100);
  const yellowPct = Math.round((yellowCount / total) * 100);
  const redPct = Math.round((redCount / total) * 100);

  let html = `
    <div class="comprueba-summary-card">
      <div class="summary-header">
        <span class="summary-title">📊 Tu Radar de Confianza: Tema ${temaId}</span>
        <span class="summary-score"><strong>${greenCount}</strong> de ${total} apartados dominados (${greenPct}%)</span>
      </div>
      <div class="summary-progress-bar">
        <div class="progress-fill green" style="width: ${greenPct}%;"></div>
        <div class="progress-fill yellow" style="width: ${yellowPct}%;"></div>
        <div class="progress-fill red" style="width: ${redPct}%;"></div>
      </div>
      <div class="summary-badges">
        <span class="badge-pill green-pill">🟢 Lo domino: ${greenCount}</span>
        <span class="badge-pill yellow-pill">🟡 Con apuntes: ${yellowCount}</span>
        <span class="badge-pill red-pill">🔴 Me cuesta: ${redCount}</span>
        <span class="badge-pill gray-pill">⚪ Por mirar: ${unratedCount}</span>
      </div>
    </div>
  `;

  Object.keys(bloques).forEach((bloqueName, bIdx) => {
    const items = bloques[bloqueName];
    const blockDone = items.filter(i => i.val === 'green').length;
    const isComplete = blockDone === items.length && items.length > 0;
    const bId = 'b-' + bIdx;
    const isOpen = previouslyOpen.has(bId) ? ' open' : '';

    html += `
      <details class="criterio-bloque-accordion" data-bloque-id="${bId}"${isOpen} ontoggle="onAccordionToggle()">
        <summary class="criterio-bloque-summary">
          <div class="criterio-bloque-summary-left">
            <span>📁</span>
            <span>${bloqueName}</span>
          </div>
          <div class="criterio-bloque-summary-right">
            <span class="bloque-count-tag ${isComplete ? 'completed' : ''}">${blockDone} / ${items.length} dominados</span>
            <span class="criterio-bloque-toggle-icon">▼</span>
          </div>
        </summary>
        <div class="criterio-bloque-body">
    `;
    items.forEach(c => {
      html += `
        <div class="criterio-card ${c.val !== 'none' ? 'rated-' + c.val : ''}">
          <div class="criterio-text">
            <span class="criterio-id">${c.id.toUpperCase()}</span>
            <span>${c.texto}</span>
          </div>
          <div class="semaforo-btns">
            <button class="btn-semaforo red ${c.val === 'red' ? 'active' : ''}" onclick="setSemaforo(${temaId}, '${c.id}', 'red')" title="Tengo dudas">🔴 Dudas</button>
            <button class="btn-semaforo yellow ${c.val === 'yellow' ? 'active' : ''}" onclick="setSemaforo(${temaId}, '${c.id}', 'yellow')" title="Necesito ayuda o apuntes">🟡 Con ayuda</button>
            <button class="btn-semaforo green ${c.val === 'green' ? 'active' : ''}" onclick="setSemaforo(${temaId}, '${c.id}', 'green')" title="Lo domino con soltura">🟢 Lo domino</button>
          </div>
        </div>
      `;
    });
    html += `
        </div>
      </details>
    `;
  });

  container.innerHTML = html;
}

function setSemaforo(temaId, id, col) {
  const storageKey = `criterio_t${temaId}_${id}`;
  const current = localStorage.getItem(storageKey);
  if (current === col) {
    localStorage.removeItem(storageKey);
  } else {
    localStorage.setItem(storageKey, col);
  }
  renderComprueba(temaId);
  renderMath();
}

function toggleSol(id) {
  const el = document.getElementById('sol-' + id);
  if (el) {
    el.classList.toggle('show');
    renderMath();
  }
}

function onAccordionToggle() {
  setTimeout(() => {
    renderMath();
    initDragToScroll();
  }, 50);
}

// Navegación entre Vistas Principales (Al Día vs Temario)
function switchMainView(view) {
  document.querySelectorAll('.view-container').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));

  if (view === 'al-dia') {
    document.getElementById('view-al-dia').classList.add('active');
    document.getElementById('btn-view-al-dia').classList.add('active');
  } else {
    document.getElementById('view-temario').classList.add('active');
    document.getElementById('btn-view-temario').classList.add('active');
    showTemarioGrid();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderMath();
}

// Navegación directa desde cualquier tarjeta o botón hacia una sección concreta de un tema
function irATemaSeccion(temaId, subTabId = 'pizarra-diario') {
  document.querySelectorAll('.view-container').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('view-temario').classList.add('active');
  document.getElementById('btn-view-temario').classList.add('active');
  openTemaDetail(temaId, subTabId, true);
}

// Navegación dentro del Temario: Abrir detalle de un tema en la pestaña indicada
function openTemaDetail(temaId, subTabId = 'pizarra-diario', scrollToSection = false) {
  currentTemaId = temaId;
  document.getElementById('temario-grid-view').style.display = 'none';
  document.getElementById('temario-detail-view').style.display = 'block';

  renderTemaDetailHeader(temaId);
  renderDiarioPlegado(temaId);
  renderSemanaHoja(temaId);
  renderTareasClassroom(temaId);
  renderControlesTest(temaId);
  renderComprueba(temaId);

  switchSubTab(subTabId, null, scrollToSection);
  if (!scrollToSection) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  renderMath();
}

// Volver a la cuadrícula de temas
function showTemarioGrid() {
  document.getElementById('temario-grid-view').style.display = 'block';
  document.getElementById('temario-detail-view').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderMath();
}

// Sub-pestañas dentro del tema (Diario, Ejercicios de la Semana, Classroom, Controles, Comprueba)
function switchSubTab(subId, clickedBtn = null, scrollToSection = false) {
  document.querySelectorAll('.subtab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.subtab-panel').forEach(p => p.classList.remove('active'));

  const subtabMap = {
    'pizarra-diario': 'subtab-btn-pizarra',
    'semana-hoja': 'subtab-btn-libreta',
    'tareas-classroom': 'subtab-btn-classroom',
    'controles-test': 'subtab-btn-test',
    'comprueba-tema': 'subtab-btn-radar'
  };

  if (clickedBtn) {
    clickedBtn.classList.add('active');
  } else {
    const mappedId = subtabMap[subId];
    const btn = (mappedId && document.getElementById(mappedId))
      || document.querySelector(`.subtab-btn[onclick*="${subId}"]`);
    if (btn) btn.classList.add('active');
  }

  const panel = document.getElementById('subtab-' + subId);
  if (panel) panel.classList.add('active');

  if (scrollToSection) {
    setTimeout(() => {
      const navEl = document.getElementById('temaSubtabsNav') || panel;
      if (navEl) navEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }

  renderMath();
}

// Enlace rápido desde la portada a los problemas de la semana
function irASemanaActual() {
  const config = window.CURSO_CONFIG;
  const temaId = (config && config.ultima_clase && config.ultima_clase.tema_id) || (config && config.tema_actual_id) || 1;
  irATemaSeccion(temaId, 'semana-hoja');
  const semActual = document.querySelector('.semana-accordion[data-estado="actual"]')
    || document.querySelector('.semana-accordion[id^="semana-bloque-"]:last-of-type')
    || document.querySelector('.semana-accordion');
  if (semActual) {
    semActual.open = true;
    setTimeout(() => {
      semActual.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  }
  renderMath();
}

// Enlace rápido desde la portada a las tareas de Classroom
function irATareasClassroom() {
  const config = window.CURSO_CONFIG;
  const temaId = (config && config.tarea_classroom_activa && config.tarea_classroom_activa.tema_id) || (config && config.tema_actual_id) || 1;
  irATemaSeccion(temaId, 'tareas-classroom');
  const allSol = document.querySelectorAll('.tarea-accordion.solucionario-disponible');
  const tareaActivaAcc = document.querySelector('.tarea-accordion.activa')
    || (allSol.length ? allSol[allSol.length - 1] : document.querySelector('.tarea-accordion'));
  if (tareaActivaAcc) {
    tareaActivaAcc.open = true;
  }
  setTimeout(() => {
    const target = tareaActivaAcc || document.getElementById('subtab-tareas-classroom');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 150);
  renderMath();
}

// Enlace rápido desde la portada a los controles y exámenes test de aula
function irAControlesTest() {
  const config = window.CURSO_CONFIG;
  const temaId = (config && config.control_test_activo && config.control_test_activo.tema_id) || (config && config.tema_actual_id) || 1;
  irATemaSeccion(temaId, 'controles-test');
  const allTests = document.querySelectorAll('.test-accordion.solucionario-disponible');
  const testActivoAcc = document.querySelector('.test-accordion.en-curso')
    || (allTests.length ? allTests[allTests.length - 1] : document.querySelector('.test-accordion'));
  if (testActivoAcc) {
    testActivoAcc.open = true;
  }
  setTimeout(() => {
    const target = testActivoAcc || document.getElementById('subtab-controles-test');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 150);
  renderMath();
}

// KaTeX renderizado universal de fórmulas
function renderMath() {
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false }
      ],
      throwOnError: false
    });
  }
}

// Inicialización de la aplicación
function init() {
  renderAlDia();
  renderTemasGrid();
  renderTemaDetailHeader(currentTemaId);
  renderDiarioPlegado(currentTemaId);
  renderSemanaHoja(currentTemaId);
  renderTareasClassroom(currentTemaId);
  renderControlesTest(currentTemaId);
  renderComprueba(currentTemaId);
  setTimeout(renderMath, 100);
}

window.addEventListener('DOMContentLoaded', init);
