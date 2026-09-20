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

  let cardsHtml = '';
  apartados.forEach(ap => {
    cardsHtml += `
      <div class="apartado-card">
        <span class="apartado-badge">${ap.letra}</span>
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

// Renderizado Vista 1: Al Día (Última clase impartida)
function renderAlDia() {
  const config = window.CURSO_CONFIG;
  if (!config || !config.ultima_clase) return;
  const u = config.ultima_clase;

  const fechaEl = document.getElementById('heroFecha');
  const tituloSesionEl = document.getElementById('heroTituloSesion');
  const temaNombreEl = document.getElementById('heroTemaNombre');
  const refEl = document.getElementById('heroReferencia');

  if (fechaEl) fechaEl.innerHTML = `<span>🗓️</span> <span>${u.fecha}</span>`;
  if (tituloSesionEl) tituloSesionEl.textContent = u.titulo_sesion;
  if (temaNombreEl) temaNombreEl.textContent = u.tema_titulo;
  if (refEl) refEl.textContent = '📖 Apuntes: ' + u.referencia_apuntes;

  const container = document.getElementById('heroEjerciciosContainer');
  if (!container || !u.ejercicios_vistos) return;

  let html = '';
  u.ejercicios_vistos.forEach(ex => {
    let apartadosHtml = '';
    if (ex.apartados && ex.apartados.length > 0) {
      apartadosHtml = renderApartadosSlider(ex.apartados, ex.enunciado_base);
    }

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
          <div class="exercise-instruction">${ex.instruccion}</div>
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
    let cardClick = `onclick="openTemaDetail(${t.id})"`;
    let btnText = 'Entrar al Tema ' + t.numero;
    let btnIcon = '→';

    if (t.estado === 'en_curso') {
      estadoLabel += ' • EN CURSO';
    } else if (t.estado === 'completado') {
      estadoLabel += ' • COMPLETADO';
    } else {
      estadoLabel += ' • PRÓXIMAMENTE';
      cardClick = `onclick="openTemaDetail(${t.id})"`;
      btnText = 'Consultar Programa';
    }

    let metaPillsHtml = '';
    if (t.apuntes_listos) {
      metaPillsHtml += '<span class="meta-pill">📘 Apuntes Listos</span>';
    }
    if (t.ejercicios_listos) {
      metaPillsHtml += '<span class="meta-pill">📥 Hoja de Ejercicios Lista</span>';
    }
    if (t.sesiones_impartidas > 0) {
      metaPillsHtml += `<span class="meta-pill">📅 ${t.sesiones_impartidas} Sesiones Impartidas</span>`;
    }
    if (t.total_ejercicios_libreta > 0) {
      metaPillsHtml += `<span class="meta-pill">📝 ${t.total_ejercicios_libreta} Ejercicios de Libreta</span>`;
    }
    if (!t.apuntes_listos && !t.ejercicios_listos) {
      metaPillsHtml += '<span class="meta-pill">⏳ En preparación didáctica</span>';
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

  if (temaMeta) {
    if (titleEl) titleEl.textContent = `Tema ${temaMeta.numero}: ${temaMeta.titulo}`;
    if (badgeEl) {
      badgeEl.textContent = temaMeta.estado === 'en_curso' ? 'TEMA EN CURSO' : (temaMeta.estado === 'completado' ? 'TEMA COMPLETADO' : 'TEMA PROGRAMADO');
    }
    if (subEl) {
      subEl.textContent = `${temaMeta.sesiones_impartidas} sesiones impartidas • ${temaMeta.evaluacion}`;
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
          <span>Apuntes Oficiales (PDF)</span>
        </a>
      `;
    }
    if (ejerciciosUrl) {
      btnsHtml += `
        <a href="${ejerciciosUrl}" target="_blank" class="btn-action-purple">
          <span>📄</span>
          <span>Hoja de Ejercicios (PDF)</span>
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
            <div class="exercise-instruction">${ex.instruccion}</div>
            ${apartadosHtml}
            ${ex.idea_clave ? `<div class="idea-box"><strong>💡 Idea clave:</strong> ${ex.idea_clave}</div>` : ''}
          </div>
        </details>
      `;
    });

    const esReciente = (idx === 0);
    const badgeReciente = esReciente ? '<span class="badge-reciente">⚡ Más reciente</span>' : '';

    html += `
      <details class="sesion-accordion" ontoggle="onAccordionToggle()">
        <summary class="sesion-summary">
          <div class="sesion-summary-left">
            <span class="sesion-badge">Sesión ${s.numero}</span>
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

  // Banner superior de descarga
  if (bannerContainer) {
    if (t && t.ejercicios_pdf) {
      bannerContainer.innerHTML = `
        <div class="hoja-download-banner">
          <div class="hoja-download-info">
            <span class="hoja-download-icon">📑</span>
            <div>
              <h4 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin-bottom: 2px;">Hoja de Ejercicios: Tema ${t.id}</h4>
              <p style="color: var(--text-muted); font-size: 0.92rem;">Documento oficial completo en PDF con soluciones finales para contrastar tu trabajo.</p>
            </div>
          </div>
          <a href="${t.ejercicios_pdf}" target="_blank" class="btn-action-purple">
            <span>📄</span>
            <span>Ver / Descargar PDF</span>
          </a>
        </div>
      `;
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
      <details class="semana-accordion" id="semana-bloque-${sem.semana_numero}" ontoggle="onAccordionToggle()">
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

// Navegación dentro del Temario: Abrir detalle de un tema
function openTemaDetail(temaId) {
  currentTemaId = temaId;
  document.getElementById('temario-grid-view').style.display = 'none';
  document.getElementById('temario-detail-view').style.display = 'block';

  renderTemaDetailHeader(temaId);
  renderDiarioPlegado(temaId);
  renderSemanaHoja(temaId);
  renderComprueba(temaId);

  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderMath();
}

// Volver a la cuadrícula de temas
function showTemarioGrid() {
  document.getElementById('temario-grid-view').style.display = 'block';
  document.getElementById('temario-detail-view').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderMath();
}

// Sub-pestañas dentro del tema (Diario, Ejercicios de la Semana, Comprueba)
function switchSubTab(subId, clickedBtn) {
  document.querySelectorAll('.subtab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.subtab-panel').forEach(p => p.classList.remove('active'));

  if (clickedBtn) {
    clickedBtn.classList.add('active');
  } else {
    const btn = document.querySelector(`.subtab-btn[onclick*="${subId}"]`);
    if (btn) btn.classList.add('active');
  }

  const panel = document.getElementById('subtab-' + subId);
  if (panel) panel.classList.add('active');
  renderMath();
}

// Enlace rápido desde la portada a los problemas de la semana
function irASemanaActual() {
  const config = window.CURSO_CONFIG;
  const temaId = (config && config.tema_actual_id) || 1;
  switchMainView('temario');
  openTemaDetail(temaId);
  switchSubTab('semana-hoja');
  const semActual = document.querySelector('.semana-accordion[id^="semana-bloque-"]');
  if (semActual) {
    semActual.open = true;
    setTimeout(() => {
      semActual.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  }
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
  renderComprueba(currentTemaId);
  setTimeout(renderMath, 100);
}

window.addEventListener('DOMContentLoaded', init);
