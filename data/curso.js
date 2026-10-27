// =========================================================================
// CONFIGURACIÓN Y ESTADO GLOBAL DEL CURSO: MATEMÁTICAS I
// =========================================================================
window.CURSO_CONFIG = {
  "nombre": "Matemáticas I",
  "nivel": "1.º de Bachillerato de Ciencias y Tecnología",
  "centro": "IES Ricardo Ortega",
  "ano_academico": "2026-2027",
  "tema_actual_id": 2,
  "tarea_classroom_activa": {
    "existe": true,
    "tema_id": 1,
    "tarea_id": "Tarea-02",
    "titulo": "Tarea 2: Radicales, Logaritmos, Fracciones Algebraicas y Binomio de Newton",
    "fecha_limite": "Domingo 25 de Octubre de 2026 (20:00 h) - Plazo Finalizado",
    "estado": "solucionario_disponible",
    "pdf_tarea": "pdf/Tarea2_Herramientas_del_Algebra_1Bach.pdf",
    "pdf_solucionario": "pdf/Tarea2_Herramientas_del_Algebra_1Bach_Solucionario.pdf",
    "aviso": "¡Solucionario de la Tarea 2 disponible! Consulta las soluciones resueltas paso a paso para auto-corregir tu libreta."
  },
  "control_test_activo": {
    "existe": false,
    "tema_id": 1,
    "test_id": "Examen-01",
    "titulo": "Examen Tema 1: Herramientas del Álgebra",
    "fecha": "Lunes 26 de Octubre de 2026",
    "estado": "solucionario_disponible",
    "pdf_examen": "pdf/Examen_Tema1_Herramientas_del_Algebra_1Bach.pdf",
    "pdf_solucionario": "pdf/Examen_Tema1_Herramientas_del_Algebra_1Bach_Solucionario.pdf",
    "aviso": "Examen del Tema 1 finalizado. Consulta el enunciado y el solucionario resuelto en la pestaña del Tema 1."
  },
  "ultima_clase": {
    "fecha": "Martes 27 de Octubre de 2026",
    "tema_id": 2,
    "tema_titulo": "Tema 2: Ecuaciones, Números Complejos y Sistemas",
    "titulo_sesion": "Sesión 1: Modelado Competencial con Ecuaciones Polinómicas, Bicuadradas y Racionales",
    "referencia_apuntes": "Bloque 1: Punto 1.3 (Págs. 6-7)",
    "mision_semanal": "Dominar la resolución analítica de ecuaciones factorizando identidades notables y verificando siempre los valores prohibidos en denominadores antes de operar.",
    "trabajo_semanal_pendiente": "Comprobar el modelado de los 4 problemas de pizarra en tu libreta y repasar los Ejemplos 1.1 a 1.3 de las páginas 6 y 7 de los apuntes.",
    "ejercicios_vistos": [
      {
        "numero": 1,
        "titulo": "Problema 1: Autonomía de Drones y Factorización Eficiente (Ecuación Polinómica)",
        "referencia": "Bloque 1: Punto 1.3 (Pág. 6, análogo a Ejemplo 1.1)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">🚁</span><div class=\"nota-aula-content\"><strong>Contexto de Ingeniería Aeroespacial:</strong> Dos prototipos de drones para entrega de material médico en zonas rurales, <em>Zephyr</em> y <em>AeroPulse</em>, tienen autonomías de vuelo (en kilómetros) en función de un parámetro dimensional de perfil alar $x$ (en decímetros):<br>• Prototipo Zephyr: $A_1(x) = (x^2 - 9)(3x - 2)$<br>• Prototipo AeroPulse: $A_2(x) = (x - 3)(x^2 + 4x + 3)$<br>Para coordinar una misión conjunta, los ingenieros necesitan hallar qué cotas $x$ proporcionan idéntica autonomía ($A_1(x) = A_2(x)$).</div></div>Plantea la ecuación $(x^2 - 9)(3x - 2) = (x - 3)(x^2 + 4x + 3)$ y resuélvela sin multiplicar paréntesis a lo loco:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "\\textbf{Factorización previa:} \\; x^2 - 9 = (x - 3)(x + 3) \\quad \\text{y} \\quad x^2 + 4x + 3 = (x + 1)(x + 3)"
          },
          {
            "letra": "b)",
            "expresion": "\\textbf{Pasar a la izquierda y extraer factores comunes:} \\; (x - 3)(x + 3)(3x - 2) - (x - 3)(x + 3)(x + 1) = 0 \\iff (x - 3)(x + 3)\\big[(3x - 2) - (x + 1)\\big] = 0"
          },
          {
            "letra": "c)",
            "expresion": "\\textbf{Regla del producto nulo y soluciones reales:} \\; (x - 3)(x + 3)(2x - 3) = 0 \\implies x_1 = 3, \\quad x_2 = -3, \\quad x_3 = \\dfrac{3}{2} = 1{,}5"
          },
          {
            "letra": "d)",
            "expresion": "\\textbf{Interpretación física de las soluciones:} \\; \\text{La cota es una medida dimensional real } (x > 0), \\text{ por lo que descartamos } x_2 = -3. \\text{ Con } x = 3\\text{ la autonomía colapsa a } 0\\text{ km (ala degenerada), por lo que el diseño operativo óptimo es } x = 1{,}5\\text{ dm} \\; (A = 34{,}375\\text{ km})."
          }
        ],
        "idea_clave": "Si multiplicas los paréntesis a ambos lados generas un polinomio cúbico y te obligas a hacer Ruffini. Mirando identidades notables antes de operar, sacas factor común $(x - 3)(x + 3)$ y el problema se resuelve en 3 líneas."
      },
      {
        "numero": 2,
        "titulo": "Problema 2: Nodos de Vibración en una Pasarela Peatonal (Ecuación Bicuadrada)",
        "referencia": "Bloque 1: Punto 1.3 (Pág. 6, análogo a Ejemplo 1.2 a)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">🌉</span><div class=\"nota-aula-content\"><strong>Contexto de Mecánica Estructural:</strong> Al estudiar la resonancia provocada por el paso de peatones sobre una pasarela suspendida, la curva de flexión vertical $y$ (en mm) respecto al centro simétrico ($x = 0$, con $x$ en metros) responde a la función:<br>$$y(x) = x^4 - 10x^2 + 9$$Para anclar los amortiguadores de masa sintonizados (TMD) que eliminen el balanceo sin sufrir fatiga, los técnicos deben ubicarlos exactamente en los <strong>nodos de deformación nula</strong> ($y(x) = 0$).</div></div>Resuelve la ecuación bicuadrada $x^4 - 10x^2 + 9 = 0$ mediante cambio de variable:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "\\textbf{Cambio de variable:} \\; \\text{Definimos } t = x^2 \\implies t^2 = x^4, \\text{ transformando la ecuación en } t^2 - 10t + 9 = 0"
          },
          {
            "letra": "b)",
            "expresion": "\\textbf{Resolución en } t: \\; (t - 9)(t - 1) = 0 \\implies t_1 = 9, \\quad t_2 = 1 \\quad (\\text{ambos } > 0, \\text{ luego ambos generan soluciones reales})"
          },
          {
            "letra": "c)",
            "expresion": "\\textbf{Deshacer el cambio con doble signo } \\pm: \\; \\begin{cases} x^2 = 9 \\implies x = \\pm\\sqrt{9} = \\pm 3 \\\\ x^2 = 1 \\implies x = \\pm\\sqrt{1} = \\pm 1 \\end{cases} \\implies S = \\{-3, -1, 1, 3\\}"
          },
          {
            "letra": "d)",
            "expresion": "\\textbf{Conclusión estructural:} \\; \\text{La pasarela presenta 4 nodos de anclaje simétricos a } 1\\text{ m y } 3\\text{ m a ambos lados del centro } (x = \\pm 1\\text{ m},\\; x = \\pm 3\\text{ m})."
          }
        ],
        "idea_clave": "Al terminar la ecuación cuadrática en $t$ no has resuelto el problema: la incógnita era la distancia $x$. Recuerda siempre deshacer el cambio ($x = \\pm\\sqrt{t}$) y tener en cuenta que cada $t > 0$ genera dos soluciones simétricas opuestas."
      },
      {
        "numero": 3,
        "titulo": "Problema 3: Transición de Fase Térmica en Sensores Satelitales (Cambio de Variable Impar)",
        "referencia": "Bloque 1: Punto 1.3 (Pág. 6, análogo a Ejemplo 1.2 b)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">🛰️</span><div class=\"nota-aula-content\"><strong>Contexto de Ciencia de Materiales Aeroespaciales:</strong> La conductividad de un nanocompuesto semiconductor para satélites meteorológicos experimenta una transición cuántica de fase cuando la variación térmica relativa $x$ (respecto al punto criogénico base) cumple la ley física no lineal:<br>$$x^6 - 26x^3 = 27 \\iff x^6 - 26x^3 - 27 = 0$$Los ingenieros de instrumentación deben predecir todas las temperaturas reales donde ocurre dicha transición.</div></div>Resuelve la ecuación $x^6 - 26x^3 - 27 = 0$ analizando la particularidad del exponente impar:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "\\textbf{Cambio de variable:} \\; \\text{Definimos } t = x^3 \\implies t^2 = x^6, \\text{ obteniendo la ecuación } t^2 - 26t - 27 = 0"
          },
          {
            "letra": "b)",
            "expresion": "\\textbf{Resolución en } t: \\; (t - 27)(t + 1) = 0 \\implies t_1 = 27, \\quad t_2 = -1"
          },
          {
            "letra": "c)",
            "expresion": "\\textbf{Deshacer el cambio (raíz cúbica real):} \\; \\begin{cases} x^3 = 27 \\implies x_1 = \\sqrt[3]{27} = 3 \\\\ x^3 = -1 \\implies x_2 = \\sqrt[3]{-1} = -1 \\end{cases} \\implies S = \\{-1, 3\\}"
          },
          {
            "letra": "d)",
            "expresion": "\\textbf{Contraste didáctico:} \\; \\text{A diferencia de las bicuadradas pares } (x^2), \\text{ las raíces de índice impar SÍ están definidas para números negativos en } \\mathbb{R}. \\text{ Existen dos temperaturas críticas reales: frío } (x = -1) \\text{ y calor } (x = 3)."
          }
        ],
        "idea_clave": "En $x^6 + \\dots + x^3$, el cambio natural es $t = x^3$. Al deshacerlo, cada valor de $t$ (sea positivo o negativo) da una única solución real mediante la raíz cúbica: $\\sqrt[3]{-1} = -1$ es un número real perfectamente válido."
      },
      {
        "numero": 4,
        "titulo": "Problema 4: Control de Presión y Válvulas en Biorreactor (Ecuación Racional y Valores Prohibidos)",
        "referencia": "Bloque 1: Punto 1.3 (Pág. 7, análogo a Ejemplo 1.3)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">🧪</span><div class=\"nota-aula-content\"><strong>Contexto de Ingeniería de Procesos Químicos:</strong> El caudal neto de recirculación en un biorreactor automatizado combina dos líneas de alimentación dependientes de la presión manométrica $x$ (en bares): $T_1(x) = \\dfrac{2x}{x - 1}$ y $T_2(x) = \\dfrac{x + 3}{x + 4}$. Para equilibrar la pérdida de carga en la válvula central, el sistema debe calibrarse según la ecuación:<br>$$\\frac{2x}{x - 1} - \\frac{x + 3}{x + 4} = \\frac{10}{x^2 + 3x - 4}$$</div></div>Aplica el protocolo en 4 pasos para resolver la ecuación racional y evitar soluciones falsas:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "\\textbf{Paso 0 (Valores prohibidos):} \\; x^2 + 3x - 4 = (x - 1)(x + 4) \\implies \\text{Valores prohibidos: } x = 1 \\text{ y } x = -4 \\quad (\\text{provocan división entre cero / bloqueo hidráulico})"
          },
          {
            "letra": "b)",
            "expresion": "\\textbf{Eliminar denominadores con m.c.m. } (x - 1)(x + 4): \\; 2x(x + 4) - (x + 3)(x - 1) = 10"
          },
          {
            "letra": "c)",
            "expresion": "\\textbf{Operar protegiendo con paréntesis:} \\; (2x^2 + 8x) - (x^2 + 2x - 3) = 10 \\iff x^2 + 6x - 7 = 0 \\iff (x - 1)(x + 7) = 0 \\implies x_1 = 1, \\quad x_2 = -7"
          },
          {
            "letra": "d)",
            "expresion": "\\textbf{Auditoría de soluciones frente al Paso 0:} \\; \\begin{cases} x_1 = 1: \\text{ ¡SOLUCIÓN FALSA! Se descarta porque anula el denominador } (x - 1) \\\\ x_2 = -7: \\text{ VÁLIDA. Comprobación: } \\frac{-14}{-8} - \\frac{-4}{-3} = \\frac{7}{4} - \\frac{4}{3} = \\frac{5}{12} = \\frac{10}{24} \\end{cases} \\implies \\text{Solución única: } x = -7\\text{ bares}"
          }
        ],
        "idea_clave": "Hacer siempre el Paso 0 anotando los valores prohibidos antes de multiplicar por el m.c.m. El álgebra de 2.º grado arroja $x = 1$, pero es un falso positivo producido por la multiplicación que destruiría la instalación por división entre cero."
      }
    ]
  },
  "temas": [
    {
      "id": 1,
      "codigo": "T01",
      "numero": 1,
      "titulo": "Herramientas del Álgebra",
      "evaluacion": "1.ª Evaluación",
      "estado": "completado",
      "sesiones_impartidas": 20,
      "descripcion": "Conjuntos numéricos ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}$), operaciones con intervalos en la recta real, valor absoluto, potencias, radicales, logaritmos, polinomios, factorización con Ruffini, fracciones algebraicas y Binomio de Newton.",
      "apuntes_pdf": "pdf/Apuntes_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "ejercicios_pdf": "pdf/Ficha_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "repaso_pdf": "pdf/Ficha_Repaso_Examen_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "repaso_solucionario_pdf": "pdf/Ficha_Repaso_Examen_Tema1_Herramientas_del_Algebra_1Bach_Solucionario.pdf",
      "apuntes_listos": true,
      "ejercicios_listos": true,
      "total_ejercicios_libreta": 15,
      "total_tareas_classroom": 2,
      "total_controles_test": 2
    },
    {
      "id": 2,
      "codigo": "T02",
      "numero": 2,
      "titulo": "Ecuaciones, Números Complejos y Sistemas",
      "evaluacion": "1.ª Evaluación",
      "estado": "en_curso",
      "sesiones_impartidas": 1,
      "descripcion": "Ecuaciones polinómicas y racionales, ecuaciones con radicales, exponenciales y logarítmicas, números complejos (forma binómica, operaciones y plano complejo), sistemas de ecuaciones algebraicos y geométricos, y Método de Gauss con matrices.",
      "apuntes_pdf": "pdf/Apuntes_Tema2_Ecuaciones_Complejos_Sistemas_1Bach.pdf",
      "ejercicios_pdf": "",
      "repaso_pdf": "",
      "repaso_solucionario_pdf": "",
      "apuntes_listos": true,
      "ejercicios_listos": false,
      "total_ejercicios_libreta": 0,
      "total_tareas_classroom": 0,
      "total_controles_test": 0
    }
  ]
};
