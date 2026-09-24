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
    "fecha": "Viernes 25 de Septiembre de 2026",
    "tema_id": 1,
    "tema_titulo": "Tema 1: Herramientas del Álgebra",
    "titulo_sesion": "Sesión 6: Taller de Pizarra: Valor Absoluto a Trozos e Inecuaciones Racionales",
    "referencia_apuntes": "Puntos 1.4 y 1.5 (Págs. 4-7)",
    "mision_semanal": "Ejercicios 5 al 7 en tu libreta (Valor absoluto y potencias). ¡A tu ritmo, pero no lo dejes para el último día! 😉",
    "trabajo_semanal_pendiente": "Resolver en libreta los ejercicios de la Semana 2 (P-05, P-06 y P-07) de la hoja semanal.",
    "ejercicios_vistos": [
      {
        "numero": 9,
        "titulo": "Taller de Valor Absoluto: Funciones a Trozos e Inecuaciones Racionales",
        "referencia": "Puntos 1.4 y 1.5 (Págs. 4-7)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">🎯</span><div class=\"nota-aula-content\"><strong>Cierre semanal de Valor Absoluto:</strong> Dos retos esenciales para rematar la semana con soltura:<br>1) <strong>Funciones a trozos:</strong> Atento al signo del coeficiente de $x$ (si es negativo, la función es decreciente y es positiva a la izquierda de la raíz) y a la resta de dos valores absolutos (separa la recta en 3 zonas con sus raíces ordenadas: $-4$ antes que $-2$).<br>2) <strong>Inecuaciones:</strong> En $\\ge 5$, la solución se escapa hacia los extremos exteriores (unión de semirrectas). En expresiones algebraicas fraccionarias, ¡marca primero la restricción de dominio ($x \\ne -4$)! Como $|-x-4| = |x+4| > 0$, puedes operar con seguridad analizando los signos de las ramas.</div></div>Expresa como función a trozos o resuelve en $\\mathbb{R}$ según corresponda:",
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
            "expresion": "\\left|\\dfrac{3x + 2}{-x - 4}\\right| \\le 2 \\quad (x \\ne -4) \\iff |3x + 2| \\le 2|x + 4| \\iff x \\in [-2, 6]"
          }
        ],
        "idea_clave": "En funciones a trozos, localiza las raíces de cada valor absoluto y estudia los signos en los intervalos resultantes cuidando los paréntesis en las restas. En inecuaciones fraccionarias, elimina los puntos que anulan denominadores ($x \\ne -4$) y opera aprovechando que $|-x-4| = |x+4| > 0$."
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
      "sesiones_impartidas": 6,
      "descripcion": "Conjuntos numéricos ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}$), operaciones con intervalos en la recta real, valor absoluto, potencias, radicales, logaritmos, polinomios, factorización con Ruffini y fracciones algebraicas.",
      "apuntes_pdf": "pdf/Apuntes_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "ejercicios_pdf": "pdf/Ficha_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "apuntes_listos": true,
      "ejercicios_listos": true,
      "total_ejercicios_libreta": 7
    }
  ]
};
