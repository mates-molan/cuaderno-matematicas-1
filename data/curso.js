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
    "fecha": "Lunes 21 de Septiembre de 2026",
    "tema_id": 1,
    "tema_titulo": "Tema 1: Herramientas del Álgebra",
    "titulo_sesion": "Sesión 3: Operaciones con Intervalos y Extremos Compartidos",
    "referencia_apuntes": "Puntos 1.2 y 1.3 (Págs. 2-4)",
    "mision_semanal": "Ejercicios 5 al 7 en tu libreta (Valor absoluto y potencias). ¡A tu ritmo, pero no lo dejes para el último día! 😉",
    "trabajo_semanal_pendiente": "Resolver en libreta los ejercicios de la Semana 2 (P-05, P-06 y P-07) de la hoja semanal.",
    "ejercicios_vistos": [
      {
        "numero": 5,
        "titulo": "Extremos Compartidos en Intervalos",
        "referencia": "Puntos 1.2 y 1.3 (Págs. 2-3)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">🎯</span><div class=\"nota-aula-content\"><strong>Extremos compartidos:</strong> El punto frontera es la clave analítica. Comprueba en tu libreta cómo cambia el resultado si el punto frontera entra en uno, en ambos o en ninguno de los intervalos.</div></div>Dados los conjuntos $A = [-4, 2)$, $B = [2, 6]$ y $C = (2, 8)$, calcula aplicando el método gráfico de rectas reales alineadas:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "A \\cap B = \\emptyset \\quad\\text{frente a}\\quad A \\cap C = \\emptyset \\quad\\text{(el punto } 2 \\text{ no pertenece a } A\\text{)}"
          },
          {
            "letra": "b)",
            "expresion": "A \\cup B = [-4, 6] \\quad\\text{frente a}\\quad A \\cup C = [-4, 8] \\setminus \\{2\\} = [-4, 2) \\cup (2, 8)"
          },
          {
            "letra": "c)",
            "expresion": "B \\setminus A = [2, 6] \\quad\\text{y}\\quad A \\setminus B = [-4, 2)"
          },
          {
            "letra": "d)",
            "expresion": "A^c = \\mathbb{R} \\setminus A = (-\\infty, -4) \\cup [2, +\\infty)"
          }
        ],
        "idea_clave": "Regla del Extremo Compartido: en la intersección el punto frontera solo sobrevive si está cerrado en ambos. En la unión no puede fusionarse si ambos son abiertos porque queda un hueco en ese valor."
      },
      {
        "numero": 6,
        "titulo": "Operaciones Combinadas con Intervalos y Semirrectas",
        "referencia": "Punto 1.3 (Págs. 3-4)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">🧩</span><div class=\"nota-aula-content\"><strong>Operaciones combinadas:</strong> Recuerda la jerarquía: resuelve primero los paréntesis o intersecciones interiores y luego aplica complementarios o restas de conjuntos.</div></div>Dados $I = (-\\infty, 3]$, $J = (-2, 5)$ y $K = [0, +\\infty)$, calcula expresando el resultado en forma de intervalo o unión disjunta:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "I \\cap J \\cap K = [0, 3]"
          },
          {
            "letra": "b)",
            "expresion": "(I \\cup K)^c = \\mathbb{R}^c = \\emptyset"
          },
          {
            "letra": "c)",
            "expresion": "J \\setminus (I \\cap K) = (-2, 5) \\setminus [0, 3] = (-2, 0) \\cup (3, 5)"
          },
          {
            "letra": "d)",
            "expresion": "(I \\cap J)^c \\cap K = ((-2, 3])^c \\cap [0, +\\infty) = (3, +\\infty)"
          }
        ],
        "idea_clave": "Prioridad de operaciones de conjuntos, complementarios con inversión de extremos (abierto ↔ cerrado) y extirpación de bloques cerrados dejando extremos abiertos."
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
      "sesiones_impartidas": 3,
      "descripcion": "Conjuntos numéricos ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}$), operaciones con intervalos en la recta real, valor absoluto, potencias, radicales, logaritmos, polinomios, factorización con Ruffini y fracciones algebraicas.",
      "apuntes_pdf": "pdf/Apuntes_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "ejercicios_pdf": "pdf/Ficha_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "apuntes_listos": true,
      "ejercicios_listos": true,
      "total_ejercicios_libreta": 7
    }
  ]
};
