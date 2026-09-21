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
    "fecha": "Martes 22 de Septiembre de 2026",
    "tema_id": 1,
    "tema_titulo": "Tema 1: Herramientas del Álgebra",
    "titulo_sesion": "Sesión 4: El Valor Absoluto: Longitudes e Inecuaciones",
    "referencia_apuntes": "Puntos 1.4 y 1.5 (Págs. 4-7)",
    "mision_semanal": "Ejercicios 5 al 7 en tu libreta (Valor absoluto y potencias). ¡A tu ritmo, pero no lo dejes para el último día! 😉",
    "trabajo_semanal_pendiente": "Resolver en libreta los ejercicios de la Semana 2 (P-05, P-06 y P-07) de la hoja semanal.",
    "ejercicios_vistos": [
      {
        "numero": 7,
        "titulo": "El Valor Absoluto: Distancias en la Recta y Función a Trozos",
        "referencia": "Punto 1.4 (Págs. 4-5)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">📏</span><div class=\"nota-aula-content\"><strong>Distancia entre dos puntos:</strong> El valor absoluto mide la <strong>distancia entre dos puntos</strong> de la recta real. Si dentro solo está la $x$ ($|x|$), es la distancia entre $x$ y el origen $0$ ($|x - 0|$). Cuando hay una resta ($|x - a|$), mide la distancia entre $x$ y el punto $a$. Si te piden que la distancia sea pequeña ($\\le$), estás cerca del punto y te quedas en el tramo central; si te piden que sea grande ($>$), te alejas hacia los lados.</div></div>Interpreta geométricamente como distancias en la recta real y resuelve:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "|x| < 4 \\iff x \\in (-4, 4) \\quad\\text{(distancia al origen menor que 4)}"
          },
          {
            "letra": "b)",
            "expresion": "|x - 3| \\le 5 \\iff -5 \\le x - 3 \\le 5 \\iff x \\in [-2, 8] \\quad\\text{(a distancia 5 del punto 3)}"
          },
          {
            "letra": "c)",
            "expresion": "|x + 2| > 3 \\iff x + 2 > 3 \\;\\text{o}\\; x + 2 < -3 \\iff x \\in (-\\infty, -5) \\cup (1, +\\infty)"
          },
          {
            "letra": "d)",
            "expresion": "f(x) = |x| = \\begin{cases} -x & \\text{si } x < 0 \\\\ x & \\text{si } x \\ge 0 \\end{cases}"
          },
          {
            "letra": "e)",
            "expresion": "g(x) = |2x - 6| = \\begin{cases} -2x + 6 & \\text{si } x < 3 \\\\ 2x - 6 & \\text{si } x \\ge 3 \\end{cases}"
          }
        ],
        "idea_clave": "Para expresar $|ax + b|$ a trozos se busca su raíz y se prueba el signo a ambos lados para cambiarlo únicamente donde lo de dentro sea negativo. En $|x|$, la raíz elemental es el 0."
      },
      {
        "numero": 8,
        "titulo": "Inecuaciones con Valor Absoluto (El Centro vs. Los Extremos)",
        "referencia": "Punto 1.5 (Págs. 5-7)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">🎯</span><div class=\"nota-aula-content\"><strong>Distancia al origen en inecuaciones:</strong> Piensa que las barras miden la distancia de <strong>lo de dentro</strong> al cero. Si esa distancia debe ser menor ($\\le r$), lo de dentro no puede alejarse y queda atrapado en el centro entre el negativo y el positivo ($-r \\le \\dots \\le r$). Si la distancia debe ser mayor ($> r$), se aleja hacia los extremos. ¡Y sentido común: una distancia jamás puede ser negativa!</div></div>Resuelve en $\\mathbb{R}$ aplicando la regla de las distancias en la recta:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "|x - 1| \\le 4 \\iff -4 \\le x - 1 \\le 4 \\iff x \\in [-3, 5]"
          },
          {
            "letra": "b)",
            "expresion": "|2x - 5| \\le 7 \\iff -7 \\le 2x - 5 \\le 7 \\iff x \\in [-1, 6]"
          },
          {
            "letra": "c)",
            "expresion": "|x + 3| > 2 \\iff x + 3 > 2 \\;\\text{o}\\; x + 3 < -2 \\iff x \\in (-\\infty, -5) \\cup (-1, +\\infty)"
          },
          {
            "letra": "d)",
            "expresion": "|3x - 1| > 8 \\iff x \\in \\left(-\\infty, -\\dfrac{7}{3}\\right) \\cup (3, +\\infty)"
          },
          {
            "letra": "e)",
            "expresion": "|x - 4| \\le -2 \\implies \\emptyset \\quad\\text{frente a}\\quad |x + 1| \\ge -3 \\implies \\mathbb{R}"
          }
        ],
        "idea_clave": "El valor absoluto mide distancias: si la distancia es menor (≤ r), lo de dentro queda atrapado en el centro entre -r y +r; si es mayor (> r), se escapa hacia los extremos. Una distancia jamás puede dar negativo."
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
      "sesiones_impartidas": 4,
      "descripcion": "Conjuntos numéricos ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}$), operaciones con intervalos en la recta real, valor absoluto, potencias, radicales, logaritmos, polinomios, factorización con Ruffini y fracciones algebraicas.",
      "apuntes_pdf": "pdf/Apuntes_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "ejercicios_pdf": "pdf/Ficha_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "apuntes_listos": true,
      "ejercicios_listos": true,
      "total_ejercicios_libreta": 7
    }
  ]
};
