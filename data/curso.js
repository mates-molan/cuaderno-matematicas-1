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
    "existe": false,
    "tema_id": 2,
    "tarea_id": "Tarea-04",
    "titulo": "Tarea 4: Números Complejos (Problemas 13 al 16 de la Hoja)",
    "fecha_limite": "Lunes 16 de Noviembre de 2026 (20:00 h)",
    "estado": "cerrada",
    "pdf_tarea": "pdf/Ficha_Problemas_Tema2_Ecuaciones_Complejos_Sistemas_1Bach.pdf",
    "pdf_solucionario": null,
    "aviso": "Plazo de entrega finalizado el Lunes 16 de Noviembre a las 20:00 h."
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
    "fecha": "Jueves 19 de Noviembre de 2026",
    "tema_id": 2,
    "tema_titulo": "Tema 2: Ecuaciones, Números Complejos y Sistemas",
    "titulo_sesion": "Sesión 14: Sistemas de 3 Ecuaciones con 3 Incógnitas — El Método de Gauss (SCD, SCI y SI)",
    "referencia_apuntes": "Bloque 5: Método de Gauss (Págs. 30–35)",
    "mision_semanal": "Repasar los tres casos del Método de Gauss (SCD, SCI con parámetro $\\lambda$ y SI) y empezar a trabajar la Ficha de Repaso de Examen del Tema 2.",
    "trabajo_semanal_pendiente": "Pasar a limpio los 3 problemas del Método de Gauss en tu libreta y empezar los ejercicios de la Ficha de Repaso de Examen.",
    "ejercicios_vistos": [
      {
        "numero": 1,
        "titulo": "Problema 1: La excursión de Biología en vehículos de alquiler (SCD y simplificación de filas)",
        "referencia": "Bloque 5: Puntos 5.2 y 5.3 (Págs. 30–32)",
        "enunciado": "El departamento de Biología contrata $22\\text{ vehículos}$ para transportar exactamente a $138\\text{ personas}$ en una salida de campo. Alquila coches de $4\\text{ plazas}$ ($50\\text{ €}$ cada uno), furgonetas de $7\\text{ plazas}$ ($90\\text{ €}$ cada una) y microbuses de $12\\text{ plazas}$ ($150\\text{ €}$ cada uno). Todos los vehículos van completos y la factura total asciende a $1740\\text{ €}$.",
        "preguntas": [
          {
            "letra": "a)",
            "texto": "Plantea el sistema de tres ecuaciones con tres incógnitas (definiendo antes qué representa cada incógnita y su significado real) y simplifica alguna ecuación si es posible."
          },
          {
            "letra": "b)",
            "texto": "Escálonalo por el Método de Gauss en forma de matriz ampliada, clasifica el sistema según la última fila y calcula cuántos vehículos de cada tipo se alquilan."
          }
        ],
        "instruccion": "Planteamiento, simplificación de filas, escalonamiento de Gauss, clasificación y comprobación:",
        "apartados": [
          {
            "letra": "a)",
            "texto": "<strong>Incógnitas y planteamiento ($x, y, z \\in \\mathbb{N}$):</strong> Llamamos $x$ al número de coches, $y$ al de furgonetas y $z$ al de microbuses: $\\begin{cases} x + y + z = 22 \\\\ 4x + 7y + 12z = 138 \\\\ 50x + 90y + 150z = 1740 \\xrightarrow{:10} 5x + 9y + 15z = 174 \\end{cases}$."
          },
          {
            "letra": "b)",
            "texto": "<strong>Escalonamiento de Gauss, clasificación (SCD) y sustitución regresiva:</strong><br>$\\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 22 \\\\ 4 & 7 & 12 & 138 \\\\ 5 & 9 & 15 & 174 \\end{array}\\right) \\xrightarrow{\\substack{F_2 - 4F_1 \\\\ F_3 - 5F_1}} \\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 22 \\\\ 0 & 3 & 8 & 50 \\\\ 0 & 4 & 10 & 64 \\end{array}\\right) \\xrightarrow{F_3 \\div 2} \\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 22 \\\\ 0 & 3 & 8 & 50 \\\\ 0 & 2 & 5 & 32 \\end{array}\\right) \\xrightarrow{3F_3 - 2F_2} \\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 22 \\\\ 0 & 3 & 8 & 50 \\\\ 0 & 0 & -1 & -4 \\end{array}\\right)$.<br>Última fila $-z = -4 \\implies z = 4$ (<strong>Sistema Compatible Determinado, SCD</strong>: solución única). Sustituyendo hacia atrás: $2y + 5(4) = 32 \\implies y = 6$ y $x = 22 - 6 - 4 = 12$. Solución: <strong>$12$ coches, $6$ furgonetas y $4$ microbuses</strong> (comprobación: $48+42+48=138$; $600+540+600=1740\\text{ €}$)."
          }
        ],
        "idea_clave": "En Gauss no estás obligado a multiplicar números gigantes: dividir toda una fila por un número distinto de cero (como $\\div 10$ al inicio o $\\div 2$ en medio del proceso) reduce los errores de cálculo a la mitad y deja intactas las soluciones."
      },
      {
        "numero": 2,
        "titulo": "Problema 2: Las gafas de Realidad Virtual para la Feria de Ciencias (SCI con parámetro $\\lambda$ y filtro entero)",
        "referencia": "Bloque 5: Punto 5.4 y Ejemplo 5.3 (Pág. 33)",
        "enunciado": "Para los talleres de la Feria de Ciencias se alquilan $18\\text{ equipos}$ de Realidad Virtual entre tres gamas: Básico ($2\\text{ horas}$ de batería y $20\\text{ €}$), Pro ($3\\text{ horas}$ y $25\\text{ €}$) y Ultra ($4\\text{ horas}$ y $30\\text{ €}$). La autonomía acumulada entre todos suma $46\\text{ horas}$ y la factura total asciende a $410\\text{ €}$.",
        "preguntas": [
          {
            "letra": "a)",
            "texto": "¿Se puede determinar de forma única cuántos equipos hay de cada gama? Plantea el sistema, escálonalo por Gauss, clasifícalo y expresa todas sus soluciones reales en función de un parámetro $\\lambda$."
          },
          {
            "letra": "b)",
            "texto": "Si por logística es obligatorio pedir al menos $1\\text{ equipo}$ de cada tipo, ¿qué configuraciones reales son posibles?"
          }
        ],
        "instruccion": "Escalonamiento de Gauss hasta $0 = 0$, parametrización con $\\lambda$ y filtrado de soluciones enteras:",
        "apartados": [
          {
            "letra": "a)",
            "texto": "<strong>Planteamiento, Gauss y clasificación (SCI):</strong> Sean $x$ Básico, $y$ Pro y $z$ Ultra ($x, y, z \\in \\mathbb{N}$). Dividiendo la 3.ª ecuación ($20x+25y+30z=410$) entre $5$:<br>$\\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 18 \\\\ 2 & 3 & 4 & 46 \\\\ 4 & 5 & 6 & 82 \\end{array}\\right) \\xrightarrow{\\substack{F_2 - 2F_1 \\\\ F_3 - 4F_1}} \\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 18 \\\\ 0 & 1 & 2 & 10 \\\\ 0 & 1 & 2 & 10 \\end{array}\\right) \\xrightarrow{F_3 - F_2} \\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 18 \\\\ 0 & 1 & 2 & 10 \\\\ 0 & 0 & 0 & 0 \\end{array}\\right)$.<br>La última fila $0 = 0$ es una identidad: <strong>Sistema Compatible Indeterminado (SCI)</strong> con infinitas soluciones reales (la tarifa oculta es $10\\text{ €}$ fijos por unidad más $5\\text{ €}$ por hora de batería, de modo que $E_3/5 = 2E_1 + E_2$). Tomando $z = \\lambda \\in \\mathbb{R}$: $y = 10 - 2\\lambda$ y $x = 18 - (10 - 2\\lambda) - \\lambda = 8 + \\lambda \\implies \\boldsymbol{(8 + \\lambda,\\; 10 - 2\\lambda,\\; \\lambda)}$."
          },
          {
            "letra": "b)",
            "texto": "<strong>Filtrado realista ($x, y, z \\ge 1$ enteros):</strong> $x = 8 + \\lambda \\ge 1 \\implies \\lambda \\ge -7$; $y = 10 - 2\\lambda \\ge 1 \\implies \\lambda \\le 4{,}5$; $z = \\lambda \\ge 1 \\implies \\lambda \\in \\{1, 2, 3, 4\\}$. Existen <strong>$4$ configuraciones posibles</strong>: $\\boldsymbol{(9, 8, 1)}$, $\\boldsymbol{(10, 6, 2)}$, $\\boldsymbol{(11, 4, 3)}$ y $\\boldsymbol{(12, 2, 4)}$."
          }
        ],
        "idea_clave": "Un Sistema Compatible Indeterminado ($0 = 0$) tiene infinitas soluciones matemáticas en $\\mathbb{R}$, pero cuando representa objetos reales (enteros positivos y restricciones mínimas) el parámetro $\\lambda$ queda acotado a un puñado finito de soluciones válidas."
      },
      {
        "numero": 3,
        "titulo": "Problema 3: El torneo de tiro con arco (SI, fallo de marcador y paso a SCI)",
        "referencia": "Bloque 5: Puntos 5.4, 5.5 y Cuadro Resumen (Págs. 33–35)",
        "enunciado": "En un torneo de tiro con arco por equipos, las dianas Roja, Azul y Verde otorgan distintas puntuaciones fijas por acierto. El Tirador 1 acierta $1\\text{ Roja}$, $2\\text{ Azules}$ y $1\\text{ Verde}$, y suma $30\\text{ puntos}$. El Tirador 2 acierta $2\\text{ Rojas}$, $1\\text{ Azul}$ y $3\\text{ Verdes}$, y suma $45\\text{ puntos}$. La aplicación del torneo registra que el Tirador 3 acertó $4\\text{ Rojas}$, $5\\text{ Azules}$ y $5\\text{ Verdes}$, con un total de $100\\text{ puntos}$.",
        "preguntas": [
          {
            "letra": "a)",
            "texto": "Plantea el sistema con las puntuaciones de cada diana, escálonalo por Gauss y clasifícalo."
          },
          {
            "letra": "b)",
            "texto": "La aplicación tiene un fallo en el marcador del Tirador 3: explica por qué es imposible ese resultado y qué puntuación debería haber mostrado."
          },
          {
            "letra": "c)",
            "texto": "Una vez corregido el marcador, ¿sabremos ya cuánto vale cada diana? Si el juez añade que «acertar una diana de cada color suma $23\\text{ puntos}$», calcula el valor exacto de cada diana."
          }
        ],
        "instruccion": "Escalonamiento de Gauss hasta $0 = -5$, detección de la combinación lineal y cierre del sistema:",
        "apartados": [
          {
            "letra": "a)",
            "texto": "<strong>Planteamiento, Gauss y clasificación (SI):</strong> Sean $x$ Roja, $y$ Azul y $z$ Verde:<br>$\\left(\\begin{array}{ccc|c} 1 & 2 & 1 & 30 \\\\ 2 & 1 & 3 & 45 \\\\ 4 & 5 & 5 & 100 \\end{array}\\right) \\xrightarrow{\\substack{F_2 - 2F_1 \\\\ F_3 - 4F_1}} \\left(\\begin{array}{ccc|c} 1 & 2 & 1 & 30 \\\\ 0 & -3 & 1 & -15 \\\\ 0 & -3 & 1 & -20 \\end{array}\\right) \\xrightarrow{F_3 - F_2} \\left(\\begin{array}{ccc|c} 1 & 2 & 1 & 30 \\\\ 0 & -3 & 1 & -15 \\\\ 0 & 0 & 0 & -5 \\end{array}\\right)$.<br>La última fila $0 = -5$ es una contradicción imposible: <strong>Sistema Incompatible (SI)</strong>, sin solución."
          },
          {
            "letra": "b)",
            "texto": "<strong>Detección del fallo del marcador:</strong> El Tirador 3 acertó exactamente $2\\cdot T_1 + T_2$ dianas de cada color ($2(1,2,1)+(2,1,3)=(4,5,5)$), luego su puntuación obligatoria es $2(30) + 45 = \\boldsymbol{105\\text{ puntos}}$ (faltan $5\\text{ puntos}$ en el marcador)."
          },
          {
            "letra": "c)",
            "texto": "<strong>De SI a SCI y cierre con el dato nuevo:</strong> Si cambiamos $100$ por $105$, la última fila pasa a $0 = 0$: el sistema pasa a <strong>SCI</strong> (sigue faltando información independiente). Al añadir $x + y + z = 23$: restando $(x+2y+z)-(x+y+z) \\implies \\boldsymbol{y = 7}$; luego $x + z = 16$ y $2x + 3z = 38 \\implies \\boldsymbol{z = 6}$ y $\\boldsymbol{x = 10}$. Valores: <strong>Roja $10$, Azul $7$ y Verde $6$ puntos</strong>."
          }
        ],
        "idea_clave": "Cuando al corregir una contradicción ($0 = -5$) ajustas solo el término independiente para hacer cuadrar la combinación lineal, no consigues un SCD sino un SCI ($0 = 0$): para hallar una solución única hace falta sustituir la fila dependiente por una ecuación realmente independiente."
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
      "sesiones_impartidas": 14,
      "descripcion": "Ecuaciones polinómicas y racionales, ecuaciones con radicales, exponenciales y logarítmicas, números complejos (forma binómica, operaciones y plano complejo), sistemas de ecuaciones algebraicos y geométricos, y Método de Gauss con matrices.",
      "apuntes_pdf": "pdf/Apuntes_Tema2_Ecuaciones_Complejos_Sistemas_1Bach.pdf",
      "ejercicios_pdf": "pdf/Ficha_Problemas_Tema2_Ecuaciones_Complejos_Sistemas_1Bach.pdf",
      "repaso_pdf": "pdf/Ficha_Repaso_Examen_Tema2_Ecuaciones_Sistemas_Gauss_1Bach.pdf",
      "repaso_solucionario_pdf": null,
      "apuntes_listos": true,
      "ejercicios_listos": true,
      "total_ejercicios_libreta": 0,
      "total_tareas_classroom": 2,
      "total_controles_test": 0
    }
  ]
};
