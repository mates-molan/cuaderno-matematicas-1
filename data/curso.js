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
  "ultima_clase": {
    "fecha": "Viernes 9 de Octubre de 2026",
    "tema_id": 1,
    "tema_titulo": "Tema 1: Herramientas del Álgebra",
    "titulo_sesion": "Sesión 14: Propiedades de los Logaritmos (Desarrollar y Unir en un Único Logaritmo)",
    "referencia_apuntes": "Punto 3.2 (Págs. 19-21)",
    "mision_semanal": "Hacer los Ejercicios 10, 11 y 12 de la hoja de ejercicios en tu libreta (Racionalización, Identidades Notables y Logaritmos).",
    "trabajo_semanal_pendiente": "Hacer los Ejercicios 10, 11 y 12 de la hoja de ejercicios en la libreta.",
    "ejercicios_vistos": [
      {
        "numero": 20,
        "titulo": "Desarrollo de Expresiones: Aplicar las Propiedades Paso a Paso",
        "referencia": "Punto 3.2 (Págs. 19-21)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Pistas clave para desarrollar paso a paso:</strong><br>• <strong>Lo que multiplica, suma:</strong> los factores del numerador se separan sumando logaritmos.<br>• <strong>Lo que divide, resta:</strong> los factores del denominador se separan restando logaritmos.<br>• <strong>Los exponentes y raíces bajan delante:</strong> una potencia pasa multiplicando ($n \\cdot \\log(x)$) y una raíz pasa dividiendo.<br>• <strong>Cuidado con las sumas dentro del paréntesis:</strong> expresiones como $(A + B)$ o $(x^2 + y^2)$ no se pueden separar directamente. Solo separamos productos y cocientes.<br>• <strong>Calcula los números conocidos:</strong> si aparece un valor exacto como $\\log(100) = 2$, $\\log_2(16) = 4$ o $\\ln(e) = 1$, escríbelo directamente en su forma numérica.</div></div>Desarrolla las siguientes expresiones aplicando las propiedades de los logaritmos y simplificando los términos numéricos:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "\\log\\left(\\dfrac{100 \\cdot x^3 \\cdot \\sqrt{y}}{z^4 \\cdot \\sqrt[3]{w}}\\right) = 2 + 3\\log(x) + \\dfrac{1}{2}\\log(y) - 4\\log(z) - \\dfrac{1}{3}\\log(w)"
          },
          {
            "letra": "b)",
            "expresion": "\\log_2\\left(\\dfrac{(x^2 - 9) \\cdot \\sqrt[4]{x+3}}{16 \\cdot (x-3)^3}\\right) = \\dfrac{5}{4}\\log_2(x+3) - 2\\log_2(x-3) - 4"
          },
          {
            "letra": "c)",
            "expresion": "\\ln\\left(\\dfrac{e^3 \\cdot x^2}{\\sqrt{e \\cdot \\sqrt[3]{x \\cdot y^2}}}\\right) = \\dfrac{5}{2} + \\dfrac{11}{6}\\ln(x) - \\dfrac{1}{3}\\ln(y)"
          },
          {
            "letra": "d)",
            "expresion": "\\log\\left(\\dfrac{\\sqrt{x^2 + y^2}}{x^2 - y^2}\\right) = \\dfrac{1}{2}\\log(x^2 + y^2) - \\log(x+y) - \\log(x-y)"
          }
        ],
        "idea_clave": "Para desarrollar expresiones: lo que está arriba suma, lo que está abajo resta, y los exponentes bajan delante multiplicando. Las sumas dentro de un logaritmo no se pueden separar a menos que se puedan factorizar en productos."
      },
      {
        "numero": 21,
        "titulo": "Unir en un Único Logaritmo: El Camino Inverso",
        "referencia": "Punto 3.2 (Págs. 19-21)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Pistas clave para juntar todo en un solo logaritmo:</strong><br>• <strong>1. Sube los números de delante como exponentes:</strong> $k \\cdot \\log(x)$ pasa a ser $\\log(x^k)$. Si el exponente es una fracción, se expresa como raíz.<br>• <strong>2. Disfraza los números sueltos de logaritmo:</strong> escríbelos en la misma base. Por ejemplo, en base 10 el $2$ es $\\log(100)$; en base 2 el $3$ es $\\log_2(8)$; y en base $e$, el $1$ es $\\ln(e)$.<br>• <strong>3. Agrupa en una sola fracción:</strong> escribe un único logaritmo. Los términos que suman van al numerador y los que restan van al denominador.<br>• <strong>4. Simplifica al final:</strong> una vez dentro del mismo logaritmo, opera las potencias o simplifica la fracción si es posible.</div></div>Reduce a un único logaritmo y simplifica el resultado:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "3\\log(x) - \\dfrac{1}{2}\\log(y) + 2\\log(z) - 2 = \\log\\left(\\dfrac{x^3 \\cdot z^2}{100\\sqrt{y}}\\right)"
          },
          {
            "letra": "b)",
            "expresion": "2\\log_2(x+1) - \\log_2(x^2 - 1) + 3 - \\dfrac{1}{2}\\log_2(x-1) = \\log_2\\left(\\dfrac{8(x+1)}{\\sqrt{(x-1)^3}}\\right)"
          },
          {
            "letra": "c)",
            "expresion": "\\dfrac{1}{3}\\ln(x) - 2\\ln(y) + \\dfrac{1}{2}\\ln(z) + \\dfrac{3}{2} = \\ln\\left(\\dfrac{e\\sqrt{e} \\cdot \\sqrt[3]{x} \\cdot \\sqrt{z}}{y^2}\\right) = \\ln\\left(\\dfrac{\\sqrt{e^3 z} \\cdot \\sqrt[3]{x}}{y^2}\\right)"
          },
          {
            "letra": "d)",
            "expresion": "\\log(40) + 2\\log(5) - \\log(2) + \\log\\left(\\dfrac{1}{5}\\right) = \\log\\left(\\dfrac{40 \\cdot 25 \\cdot 1}{2 \\cdot 5}\\right) = \\log\\left(\\dfrac{1000}{10}\\right) = \\log(100) = 2"
          }
        ],
        "idea_clave": "Para unir en un único logaritmo: sube los coeficientes a los exponentes, convierte los números sueltos en logaritmos de la misma base y agrupa todo en una sola fracción (positivos arriba y negativos abajo). Al final, simplifica el interior."
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
      "sesiones_impartidas": 14,
      "descripcion": "Conjuntos numéricos ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}$), operaciones con intervalos en la recta real, valor absoluto, potencias, radicales, logaritmos, polinomios, factorización con Ruffini y fracciones algebraicas.",
      "apuntes_pdf": "pdf/Apuntes_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "ejercicios_pdf": "pdf/Ficha_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "apuntes_listos": true,
      "ejercicios_listos": true,
      "total_ejercicios_libreta": 12,
      "total_tareas_classroom": 1
    }
  ]
};
