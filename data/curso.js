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
    "titulo_sesion": "Sesión 14: Propiedades Operativas de los Logaritmos (Desarrollo Complejo y Contracción a un Único Logaritmo)",
    "referencia_apuntes": "Punto 3.2 (Págs. 19-21)",
    "mision_semanal": "Hacer los Ejercicios 10, 11 y 12 de la hoja de ejercicios en tu libreta (Racionalización, Identidades Notables y Logaritmos).",
    "trabajo_semanal_pendiente": "Hacer los Ejercicios 10, 11 y 12 de la hoja de ejercicios en la libreta.",
    "ejercicios_vistos": [
      {
        "numero": 20,
        "titulo": "Desarrollo de Expresiones Logarítmicas Complejas: Propiedades al Máximo",
        "referencia": "Punto 3.2 (Págs. 19-21)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Pistas y protocolo infalible para desarrollar logaritmos sin caer en trampas:</strong><br>• <strong>Regla de oro del denominador:</strong> Todo factor que esté dividiendo (en el denominador) sale restando con su propio signo menos. Si abajo hay un producto ($B \\cdot C$), ambos restan: $-\\log(B) - \\log(C)$. ¡Cuidado con no olvidar distribuir el signo menos!<br>• <strong>Constantes que se simplifican:</strong> En base 10, $\\log(100) = 2$ o $\\log(10) = 1$. En base 2, $\\log_2(16) = 4$. En base $e$, $\\ln(e^k) = k$. No dejes logaritmos de números calculables sin simplificar.<br>• <strong>¡Simplifica antes de desarrollar!:</strong> Si dentro del argumento puedes operar potencias de la misma base, extraer raíces o factorizar identidades notables, ¡hazlo antes! Te ahorrarás un desarrollo kilométrico.<br>• <strong>La gran trampa de las sumas:</strong> $\\log(A + B)$ o $\\log(x^2 + y^2)$ <strong>NO se pueden separar</strong> (son sumas irreducibles en $\\mathbb{R}$). En cambio, una diferencia de cuadrados ($x^2 - y^2$) sí se factoriza como $(x-y)(x+y)$ y se separa.</div></div>Desarrolla al máximo las siguientes expresiones aplicando las propiedades de los logaritmos, simplificando los términos numéricos y factorizando cuando sea posible:",
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
        "idea_clave": "Todo factor del numerador suma y todo factor del denominador resta. Las constantes con la misma base se calculan como enteros. Simplifica exponentes y radicales antes de aplicar logaritmos. Recuerda: una suma $(x^2+y^2)$ es intocable, pero una diferencia $(x^2-y^2)$ se factoriza y se separa en dos logaritmos."
      },
      {
        "numero": 21,
        "titulo": "Contracción a un Único Logaritmo: Números Sueltos, Radicales y Colapso Numérico",
        "referencia": "Punto 3.2 (Págs. 19-21)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Pistas para contraer expresiones a un solo logaritmo de forma rápida y limpia:</strong><br>• <strong>Paso 1: Sube los coeficientes a exponentes:</strong> $k\\log(x) = \\log(x^k)$. Las fracciones pasan a ser raíces: $\\frac{1}{2}\\log(y) = \\log(\\sqrt{y})$ y $\\frac{1}{3}\\log(z) = \\log(\\sqrt[3]{z})$.<br>• <strong>Paso 2: Transforma los números sueltos en logaritmos:</strong> Escribe cualquier número entero o fracción en la misma base: en base 10, $2 = \\log(10^2) = \\log(100)$; en base 2, $3 = \\log_2(2^3) = \\log_2(8)$; en base $e$, $1 = \\ln(e)$ o $\\frac{3}{2} = \\ln(e\\sqrt{e})$.<br>• <strong>Paso 3: La regla directa del numerador y denominador:</strong> Pon una única palabra $\\log(\\dots)$ con una gran fracción. Todo término que tenga signo $+$ va multiplicando al <strong>numerador</strong>; todo término que tenga signo $-$ va multiplicando al <strong>denominador</strong>.<br>• <strong>Paso 4: Simplifica el argumento:</strong> Una vez reunido todo en un solo logaritmo, cancela factores comunes si es algebraico o resuelve la aritmética si es numérico.</div></div>Reduce a un único logaritmo y simplifica al máximo la expresión resultante (evalúa el valor exacto final en caso de colapso numérico):",
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
        "idea_clave": "Sube coeficientes a los exponentes, convierte términos independientes en logaritmos de la misma base ($k = \\log_b(b^k)$), y agrupa en una única fracción: los logaritmos positivos van arriba y los negativos abajo. Al final, factoriza y simplifica el interior del argumento."
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
