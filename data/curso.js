// =========================================================================
// CONFIGURACIÓN Y ESTADO GLOBAL DEL CURSO: MATEMÁTICAS I
// =========================================================================
window.CURSO_CONFIG = {
  "nombre": "Matemáticas I",
  "nivel": "1.º de Bachillerato de Ciencias y Tecnología",
  "centro": "IES Ricardo Ortega",
  "ano_academico": "2026-2027",
  "tema_actual_id": 1,
  "tarea_classroom_activa": {
    "existe": true,
    "tema_id": 1,
    "tarea_id": "Tarea-01",
    "titulo": "Tarea 1: Números Reales, Intervalos y Valor Absoluto",
    "fecha_limite": "Sábado 3 de Octubre de 2026 (23:59 h) - Plazo Finalizado",
    "estado": "solucionario_disponible",
    "pdf_tarea": "pdf/Tarea1_Herramientas_del_Algebra_1Bach.pdf",
    "pdf_solucionario": "pdf/Tarea1_Herramientas_del_Algebra_1Bach_Solucionario.pdf",
    "aviso": "¡Solucionario de la Tarea 1 disponible! Consulta las soluciones resueltas paso a paso para auto-corregir tu libreta."
  },
  "control_test_activo": {
    "existe": true,
    "tema_id": 1,
    "test_id": "Test-01",
    "titulo": "Control Test 1: Radicales, Racionalización y Logaritmos",
    "fecha": "Martes 13 de Octubre de 2026",
    "estado": "solucionario_disponible",
    "pdf_examen": "pdf/Examen_Test_Radicales_Logaritmos_1Bach_Master.pdf",
    "pdf_solucionario": "pdf/Examen_Test_Radicales_Logaritmos_1Bach_Solucionario.pdf",
    "aviso": "¡Control Test 1 y Solucionario disponibles! Consulta el enunciado oficial y las soluciones resueltas paso a paso para auto-corregir."
  },
  "ultima_clase": {
    "fecha": "Miércoles 14 de Octubre de 2026",
    "tema_id": 1,
    "tema_titulo": "Tema 1: Herramientas del Álgebra",
    "titulo_sesion": "Sesión 15: Fracciones Algebraicas (Factorización, Identidades Notables y Operaciones con m.c.m.)",
    "referencia_apuntes": "Punto 4 (Págs. 21-25)",
    "mision_semanal": "Hacer el Ejercicio 13 de la hoja de ejercicios en tu libreta (Polinomios: Teorema del Resto, Ruffini y Factorización Completa).",
    "trabajo_semanal_pendiente": "Hacer el Ejercicio 13 de la hoja de ejercicios en la libreta.",
    "ejercicios_vistos": [
      {
        "numero": 22,
        "titulo": "Simplificación de Fracciones Algebraicas (El Ojo Clínico)",
        "referencia": "Punto 4 (Págs. 21-22)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Regla de oro para simplificar:</strong><br>• <strong>¡Prohibido tachar sumandos!:</strong> Solo se cancelan factores completos que multipliquen a TODO el numerador y a TODO el denominador.<br>• <strong>Filtro 1 — Factor común:</strong> Extrae siempre factor común numérico o literal antes de nada.<br>• <strong>Filtro 2 — Identidades notables:</strong> Reconoce al vuelo $(a+b)^2$, $(a-b)^2$ o $(a+b)(a-b)$.<br>• <strong>Filtro 3 — Factores opuestos:</strong> Si encuentras $(b - a)$ frente a $(a - b)$, extrae el signo menos: $(b - a) = -(a - b)$ para cancelar dejando un $-1$.</div></div>Simplifica al máximo las siguientes fracciones algebraicas e indica los valores que anulan el denominador (restricciones de existencia):",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "\\dfrac{4x^2 - 9}{4x^2 + 12x + 9} = \\dfrac{(2x-3)(2x+3)}{(2x+3)^2} = \\dfrac{2x-3}{2x+3} \\quad \\left(x \\ne -\\dfrac{3}{2}\\right)"
          },
          {
            "letra": "b)",
            "expresion": "\\dfrac{3x^3 - 12x^2 + 12x}{6x^3 - 24x} = \\dfrac{3x(x-2)^2}{6x(x-2)(x+2)} = \\dfrac{x-2}{2(x+2)} = \\dfrac{x-2}{2x+4} \\quad (x \\ne 0, \\pm 2)"
          },
          {
            "letra": "c)",
            "expresion": "\\dfrac{x^2 - 25}{15 - 3x} = \\dfrac{(x-5)(x+5)}{-3(x-5)} = -\\dfrac{x+5}{3} \\quad (x \\ne 5)"
          },
          {
            "letra": "d)",
            "expresion": "\\dfrac{x^4 - 16}{(x^2 + 4)(x^2 - 4x + 4)} = \\dfrac{(x-2)(x+2)(x^2+4)}{(x^2+4)(x-2)^2} = \\dfrac{x+2}{x-2} \\quad (x \\ne 2)"
          }
        ],
        "idea_clave": "Nunca simplifiques sumandos sueltos. Primero saca factor común, luego descompón con identidades notables y vigila si aparecen factores opuestos extrayendo el signo menos."
      },
      {
        "numero": 23,
        "titulo": "Suma y Resta con Denominadores Polinómicos (m.c.m. con Identidades Notables)",
        "referencia": "Punto 4 (Págs. 23-24)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Pasos seguros para sumar y restar:</strong><br>• <strong>1. No multipliques los denominadores a lo bruto:</strong> Factoriza cada denominador primero usando identidades notables para calcular el mínimo común múltiplo ($\\text{mcm}$).<br>• <strong>2. ¡Cuidado con el signo menos!:</strong> El signo menos que precede a una fracción afecta a TODOS los términos de su numerador. Pon siempre paréntesis protectores.<br>• <strong>3. Opera el numerador y mantén el denominador factorizado:</strong> No desarrolles el denominador común. Al final, factoriza el numerador resultante por si se puede simplificar con el denominador.</div></div>Realiza las siguientes operaciones reduciendo a común denominador y simplificando al máximo el resultado final:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "\\dfrac{x}{x-1} - \\dfrac{2}{x+1} - \\dfrac{x^2+1}{x^2-1} = \\dfrac{x(x+1) - 2(x-1) - (x^2+1)}{(x-1)(x+1)} = \\dfrac{-(x-1)}{(x-1)(x+1)} = -\\dfrac{1}{x+1}"
          },
          {
            "letra": "b)",
            "expresion": "\\dfrac{x+2}{x^2 - 2x + 1} - \\dfrac{x}{x^2 - 1} = \\dfrac{(x+2)(x+1) - x(x-1)}{(x-1)^2(x+1)} = \\dfrac{2(2x+1)}{(x-1)^2(x+1)}"
          },
          {
            "letra": "c)",
            "expresion": "\\dfrac{x^2 + 9}{x^2 - 9} - \\dfrac{x - 3}{x + 3} = \\dfrac{(x^2+9) - (x-3)^2}{x^2-9} = \\dfrac{x^2+9 - (x^2-6x+9)}{x^2-9} = \\dfrac{6x}{x^2 - 9}"
          },
          {
            "letra": "d)",
            "expresion": "\\dfrac{2}{x^2 - 4} - \\dfrac{1}{x^2 + 2x} + \\dfrac{1}{x^2 - 2x} = \\dfrac{2x - (x-2) + (x+2)}{x(x-2)(x+2)} = \\dfrac{2(x+2)}{x(x-2)(x+2)} = \\dfrac{2}{x(x-2)}"
          }
        ],
        "idea_clave": "Para sumar o restar fracciones algebraicas, factoriza los denominadores para calcular el m.c.m. Protege siempre los numeradores tras un signo menos y vuelve a factorizar el numerador resultante al final."
      },
      {
        "numero": 24,
        "titulo": "Multiplicación, División y Operaciones Combinadas",
        "referencia": "Punto 4 (Pág. 25)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Estrategia infalible en productos y cocientes:</strong><br>• <strong>¡Prohibido multiplicar polinomios!:</strong> En una multiplicación o división de fracciones, NUNCA multipliques los polinomios para generar grados 3 o 4 inmanejables.<br>• <strong>Factoriza TODO de antemano:</strong> Descompón en factores primos cada numerador y denominador con identidades notables y factor común.<br>• <strong>Convierte la división en producto:</strong> Invierte la segunda fracción ($A:B = A \\cdot \\frac{1}{B}$) y cancela factores comunes en vertical o en cruz antes de escribir el resultado.</div></div>Opera y simplifica al máximo las siguientes expresiones algebraicas:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "\\dfrac{x^2 - 4}{x^2 + 6x + 9} \\cdot \\dfrac{2x + 6}{x^2 - 2x} = \\dfrac{(x-2)(x+2) \\cdot 2(x+3)}{(x+3)^2 \\cdot x(x-2)} = \\dfrac{2(x+2)}{x(x+3)} = \\dfrac{2x+4}{x^2+3x}"
          },
          {
            "letra": "b)",
            "expresion": "\\dfrac{x^2 - 25}{x^2 - 10x + 25} : \\dfrac{3x + 15}{x^2 - x} = \\dfrac{(x-5)(x+5)}{(x-5)^2} \\cdot \\dfrac{x(x-1)}{3(x+5)} = \\dfrac{x(x-1)}{3(x-5)} = \\dfrac{x^2-x}{3x-15}"
          },
          {
            "letra": "c)",
            "expresion": "\\left( \\dfrac{x}{x+2} - \\dfrac{x}{x-2} \\right) : \\dfrac{4x}{x^2 - 4} = \\dfrac{x(x-2) - x(x+2)}{x^2 - 4} : \\dfrac{4x}{x^2 - 4} = \\dfrac{-4x}{x^2 - 4} : \\dfrac{4x}{x^2 - 4} = -1"
          },
          {
            "letra": "d)",
            "expresion": "\\dfrac{x^3 - 9x}{x^2 + 4x + 4} \\cdot \\dfrac{x^2 - 4}{(x - 3)^2} = \\dfrac{x(x-3)(x+3) \\cdot (x-2)(x+2)}{(x+2)^2 (x-3)^2} = \\dfrac{x(x+3)(x-2)}{(x+2)(x-3)}"
          }
        ],
        "idea_clave": "En productos y cocientes, factoriza antes de multiplicar. Una expresión que parece gigantesca colapsa a términos mínimos o a constantes gracias a la simetría de las identidades notables."
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
      "sesiones_impartidas": 15,
      "descripcion": "Conjuntos numéricos ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}$), operaciones con intervalos en la recta real, valor absoluto, potencias, radicales, logaritmos, polinomios, factorización con Ruffini y fracciones algebraicas.",
      "apuntes_pdf": "pdf/Apuntes_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "ejercicios_pdf": "pdf/Ficha_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "apuntes_listos": true,
      "ejercicios_listos": true,
      "total_ejercicios_libreta": 13,
      "total_tareas_classroom": 1,
      "total_controles_test": 1
    }
  ]
};
