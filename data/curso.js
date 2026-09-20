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
    "fecha": "Viernes 18 de Septiembre de 2026",
    "tema_id": 1,
    "tema_titulo": "Tema 1: Herramientas del Álgebra",
    "titulo_sesion": "Sesión 2: Intervalos, Semirrectas, Operaciones y Complementarios («El Resto del Mundo»)",
    "referencia_apuntes": "Puntos 1.2 y 1.3 (Págs. 2-4)",
    "ejercicios_vistos": [
      {
        "numero": 3,
        "titulo": "Diferencia entre Puntos Aislados, Intervalos y Semirrectas",
        "referencia": "Punto 1.2 (Págs. 2-3)",
        "instruccion": "<span style=\"display:block; padding:10px 14px; background: #eff6ff; border-left: 4px solid #2563eb; border-radius: 6px; margin-bottom: 14px; font-size: 0.95rem; color: #1e3a8a; line-height: 1.5;\">👀 <strong>Ojo a los ejemplos:</strong> En clase el viernes me inventé los números sobre la marcha en la pizarra para explicar la teoría. Los que tenéis aquí son <em>otros diferentes</em> a los que copiasteis, pero os sirven exactamente para lo mismo: repasar y comprobar que tenéis clara la diferencia en vuestra libreta.</span>Diferencia razonadamente sobre la recta real entre un conjunto de puntos sueltos (aislados), un intervalo y una semirrecta, indicando su dibujo y si tienen finitos o infinitos números reales:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "A = \\{-3, 2\\} \\quad\\text{(Puntos sueltos: solo dos números)}"
          },
          {
            "letra": "b)",
            "expresion": "B = (-3, 2) \\quad\\text{(Intervalo abierto: infinitos números, sin los extremos)}"
          },
          {
            "letra": "c)",
            "expresion": "C = [-3, 2] \\quad\\text{(Intervalo cerrado: infinitos números, con ambos extremos)}"
          },
          {
            "letra": "d)",
            "expresion": "D = [-3, 2) \\quad\\text{(Semiabierto: entra el } -3 \\text{ y no entra el } 2\\text{)}"
          },
          {
            "letra": "e)",
            "expresion": "E = [2, +\\infty) \\quad\\text{(Semirrecta cerrada hacia la derecha)}"
          },
          {
            "letra": "f)",
            "expresion": "F = (-\\infty, -3) \\quad\\text{(Semirrecta abierta hacia la izquierda)}"
          }
        ],
        "idea_clave": "Las llaves $\\{ \\}$ son solo para elementos sueltos. Los paréntesis y corchetes son para intervalos (infinitos números reales seguidos en la recta). El infinito nunca lleva corchete."
      },
      {
        "numero": 4,
        "titulo": "Operaciones y Complementarios («El Resto del Mundo»)",
        "referencia": "Punto 1.3 (Págs. 3-4)",
        "instruccion": "<span style=\"display:block; padding:10px 14px; background: #eff6ff; border-left: 4px solid #2563eb; border-radius: 6px; margin-bottom: 14px; font-size: 0.95rem; color: #1e3a8a; line-height: 1.5;\">💡 <strong>Igual que en el ejercicio anterior:</strong> Los números que hicimos en la pizarra fueron improvisados en directo (esos ya los tenéis en vuestra libreta). Aquí os pongo otros distintos para que practiquéis cómo se unen, se cortan o se restan conjuntos de números, y cómo hallar el <strong>complementario</strong> (lo que llamamos en clase «coger el resto del mundo»).</span>Calcula de forma justificada aplicando el método de rectas reales alineadas las siguientes operaciones y complementarios ($A^c = \\mathbb{R} \\setminus A$):",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "(-1, 4) \\cup \\{4\\} = (-1, 4] \\quad\\text{frente a}\\quad (-1, 4) \\cap \\{4\\} = \\emptyset"
          },
          {
            "letra": "b)",
            "expresion": "(-1, 4) \\cap \\{1, 4, 7\\} = \\{1\\}"
          },
          {
            "letra": "c)",
            "expresion": "[-2, 5] \\setminus \\{2\\} = [-2, 2) \\cup (2, 5]"
          },
          {
            "letra": "d)",
            "expresion": "(-\\infty, 3] \\cap [0, +\\infty) = [0, 3]"
          },
          {
            "letra": "e)",
            "expresion": "A^c \\quad\\text{siendo } A = [2, +\\infty) \\implies A^c = (-\\infty, 2)"
          },
          {
            "letra": "f)",
            "expresion": "B^c \\quad\\text{siendo } B = (-1, 5] \\implies B^c = (-\\infty, -1] \\cup (5, +\\infty)"
          },
          {
            "letra": "g)",
            "expresion": "C^c \\quad\\text{siendo } C = \\{3\\} \\implies C^c = \\mathbb{R} \\setminus \\{3\\} = (-\\infty, 3) \\cup (3, +\\infty)"
          }
        ],
        "idea_clave": "El complementario $A^c = \\mathbb{R} \\setminus A$ es «coger el resto del mundo»: quedarse con toda la recta real menos el conjunto. Lo que estaba dentro de $A$ se queda fuera, y lo que estaba fuera entra al complementario (cerrado $\\leftrightarrow$ abierto). Si quitas un punto suelto, dejas un agujero en la recta."
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
      "sesiones_impartidas": 2,
      "descripcion": "Conjuntos numéricos ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}$), operaciones con intervalos en la recta real, potencias, radicales, logaritmos, polinomios, factorización con Ruffini y fracciones algebraicas.",
      "apuntes_pdf": "pdf/Apuntes_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "ejercicios_pdf": "pdf/Ficha_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "apuntes_listos": true,
      "ejercicios_listos": true,
      "total_ejercicios_libreta": 4
    }
  ]
};
