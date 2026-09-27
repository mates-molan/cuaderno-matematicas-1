// =========================================================================
// CONFIGURACIÓN Y ESTADO GLOBAL DEL CURSO: MATEMÁTICAS I
// =========================================================================
window.CURSO_CONFIG = {
  "nombre": "Matemáticas I",
  "nivel": "1.º de Bachillerato de Ciencias y Tecnología",
  "centro": "IES Ricardo Ortega",
  "ano_academico": "2026-2027",
  "tema_actual_id": 1,
  "ultima_clase": {
    "fecha": "Viernes 25 y Lunes 28 de Septiembre de 2026",
    "tema_id": 1,
    "tema_titulo": "Tema 1: Herramientas del Álgebra",
    "titulo_sesion": "Sesiones 6 y 7: Valor Absoluto: A Trozos, Fracciones e Incógnita a Ambos Lados",
    "referencia_apuntes": "Puntos 1.4 y 1.5 (Págs. 5-8)",
    "mision_semanal": "Ejercicios 5 al 7 en tu libreta (Valor absoluto y potencias). ¡A tu ritmo, pero no lo dejes para el último día! 😉",
    "trabajo_semanal_pendiente": "Resolver en libreta los ejercicios de la Semana 2 (P-05, P-06 y P-07) de la hoja semanal.",
    "ejercicios_vistos": [
      {
        "numero": 9,
        "titulo": "Valor Absoluto: A Trozos, Fracciones e Incógnita a Ambos Lados",
        "referencia": "Puntos 1.4 y 1.5 (Págs. 5-8)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Claves didácticas para no dudar con el valor absoluto:</strong><br>• <strong>Para escribir a trozos:</strong> Las barras solo hacen una cosa: si lo de dentro es positivo o cero, lo dejan tal cual; si es negativo, le dan la vuelta al signo. Para saber dónde cambia, halla su raíz (dónde se hace cero) y prueba el signo a cada lado. Si hay varios valores absolutos, coloca sus raíces en la recta real y analiza cada tramo por separado (¡ojo a los paréntesis si hay un signo menos delante!).<br>• <strong>Para inecuaciones racionales:</strong> Si la incógnita está en el denominador, recuerda la regla de oro: ningún denominador puede anularse jamás (descarta antes de nada los valores prohibidos). Aplica la definición del valor absoluto (quedando acotado en el centro entre $-k$ y $k$, o separando en las dos ramas exteriores $\\le -k$ o $\\ge k$) y resuelve analizando los signos de la fracción, vigilando que los valores prohibidos queden fuera de la solución.<br>• <strong>Con la incógnita fuera de las barras ($|A| < B$):</strong> Recuerda que una longitud jamás puede ser negativa: exige primero la condición de existencia $B > 0$ y resuelve la doble inecuación $-B < A < B$.</div></div>Expresa como función a trozos o resuelve en $\\mathbb{R}$ según corresponda:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "f(x) = \\left|-\\dfrac{x}{2} + 5\\right| = \\begin{cases} -\\dfrac{x}{2} + 5 & \\text{si } x < 10 \\\\[4pt] \\dfrac{x}{2} - 5 & \\text{si } x \\ge 10 \\end{cases}"
          },
          {
            "letra": "b)",
            "expresion": "g(x) = |x + 2| - |2x + 8| = \\begin{cases} x + 6 & \\text{si } x < -4 \\\\[4pt] -3x - 10 & \\text{si } -4 \\le x < -2 \\\\[4pt] -x - 6 & \\text{si } x \\ge -2 \\end{cases}"
          },
          {
            "letra": "c)",
            "expresion": "\\left|\\dfrac{2x}{3} - 12\\right| \\ge 5 \\iff \\dfrac{2x}{3} - 12 \\le -5 \\;\\text{ o }\\; \\dfrac{2x}{3} - 12 \\ge 5 \\iff x \\in \\left(-\\infty, \\dfrac{21}{2}\\right] \\cup \\left[\\dfrac{51}{2}, +\\infty\\right)"
          },
          {
            "letra": "d)",
            "expresion": "\\left|\\dfrac{3x + 2}{-x - 4}\\right| \\le 2 \\quad (x \\ne -4) \\iff x \\in [-2, 6]"
          },
          {
            "letra": "e)",
            "expresion": "\\left|\\dfrac{x + 3}{x - 1}\\right| \\ge 2 \\quad (x \\ne 1) \\iff x \\in \\left[-\\dfrac{1}{3}, 1\\right) \\cup (1, 5]"
          },
          {
            "letra": "f)",
            "expresion": "|3x + 2| < x + 6 \\iff -(x + 6) < 3x + 2 < x + 6 \\iff x \\in (-2, 2)"
          }
        ],
        "idea_clave": "El valor absoluto siempre da un resultado positivo o cero; lo que cambia de signo al cruzar sus raíces es la expresión de su interior. Al abrir a trozos, cambia el signo de la expresión solo en los intervalos donde sea negativa (ubica las raíces en la recta para distinguirlos). En inecuaciones fraccionarias, descarta siempre los valores que anulan el denominador (pueden partir tu intervalo); y si la $x$ aparece fuera de las barras ($|A| < B$), exige que $B > 0$ y resuelve $-B < A < B$."
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
      "estado": "en_curso",
      "sesiones_impartidas": 7,
      "descripcion": "Conjuntos numéricos ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}$), operaciones con intervalos en la recta real, valor absoluto, potencias, radicales, logaritmos, polinomios, factorización con Ruffini y fracciones algebraicas.",
      "apuntes_pdf": "pdf/Apuntes_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "ejercicios_pdf": "pdf/Ficha_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "apuntes_listos": true,
      "ejercicios_listos": true,
      "total_ejercicios_libreta": 7
    }
  ]
};
