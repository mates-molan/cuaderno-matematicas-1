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
    "fecha_limite": "Sábado 3 de Octubre de 2026 (23:59 h)",
    "estado": "activa",
    "pdf_tarea": "pdf/Tarea1_Herramientas_del_Algebra_1Bach.pdf",
    "pdf_solucionario": "pdf/Tarea1_Herramientas_del_Algebra_1Bach_Solucionario.pdf",
    "aviso": "Tarea 1 activa (Entrega en Google Classroom antes del Sábado 3 Octubre a las 23:59 h)"
  },
  "ultima_clase": {
    "fecha": "Martes 29 de Septiembre de 2026",
    "tema_id": 1,
    "tema_titulo": "Tema 1: Herramientas del Álgebra",
    "titulo_sesion": "Sesión 8: Potencias, Radicales y Extracción de Factores",
    "referencia_apuntes": "Puntos 2 y 2.1 (Págs. 9-11)",
    "mision_semanal": "Ejercicios 7 al 11 en tu libreta (Potencias, radicales, racionalización e identidades notables). ¡A tu ritmo, pero no lo dejes para el último día! 😉",
    "trabajo_semanal_pendiente": "Resolver en libreta los ejercicios de la Semana 3 (P-07, P-08, P-09, P-10 y P-11) de la hoja semanal.",
    "ejercicios_vistos": [
      {
        "numero": 10,
        "titulo": "Potencias y Signos: Cómo Simplificar Paso a Paso",
        "referencia": "Punto 2 (Pág. 9)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Pistas para no liarte con las potencias:</strong><br>• Pasa siempre los números a primos ($2, 3, 5\\dots$) antes de hacer nada.<br>• Cuidado con los signos: el menos solo entra en la potencia si está dentro del paréntesis, como en $(-2)^4$. Si ves $-2^4$, el menos no se eleva.<br>• Fracción con exponente negativo: dale la vuelta para poner el exponente positivo: $(\\frac{a}{b})^{-n} = (\\frac{b}{a})^n$.<br>• Al terminar, que no quede ningún exponente negativo: pásalos al otro lado con exponente positivo.</div></div>Simplifica al máximo aplicando las propiedades de las potencias y expresando el resultado final con exponentes positivos:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "\\dfrac{2^{-4} \\cdot 3^3 \\cdot 6^3}{4^{-2} \\cdot 9^2 \\cdot 12^{-1}}"
          },
          {
            "letra": "b)",
            "expresion": "\\dfrac{(-2)^6 \\cdot (-5)^3 \\cdot (-3)^0}{-2^4 \\cdot 5^2 \\cdot 10^{-2}}"
          },
          {
            "letra": "c)",
            "expresion": "\\left(\\dfrac{x^{-3} y^2}{z^{-2}}\\right)^{-3} \\cdot \\left(\\dfrac{x^4 z^{-3}}{y^{-2}}\\right)^2"
          },
          {
            "letra": "d)",
            "expresion": "\\dfrac{(a^{3/5} b^{-1/2})^{10}}{(a^{-2} b^{2/3})^6}"
          }
        ],
        "idea_clave": "Pasa los números a primos ($2, 3, 5\\dots$) antes de hacer nada. Cuidado con $(-a)^n$ y $-a^n$: el signo solo se eleva si está entre paréntesis. Si una fracción tiene exponente negativo, dale la vuelta para ponerlo positivo. Al terminar, no dejes exponentes negativos."
      },
      {
        "numero": 11,
        "titulo": "Raíces: Mismo Índice, Sacar Factores y Sumar Raíces Iguales",
        "referencia": "Punto 2.1 (Pág. 11)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Pistas para no liarte con las raíces:</strong><br>• Para multiplicar o dividir raíces con distinto índice, redúcelas primero a índice común calculando el mínimo común múltiplo ($\\text{mcm}$) de los índices.<br>• Para extraer factores fuera de la raíz: divide el exponente de cada factor entre el índice. El cociente sale fuera y el resto se queda dentro del radicando.<br>• Para sumar o restar raíces, deben ser radicales semejantes (mismo índice y mismo radicando). Si a simple vista no coinciden, ¡extrae primero factores!<br>• Al terminar, simplifica el radical si es posible: divide el índice y los exponentes del radicando entre su máximo común divisor ($\\text{mcd}$).</div></div>Haz las siguientes operaciones dejando una sola raíz y sacando fuera todo lo que puedas:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "\\sqrt[4]{x^3} \\cdot \\sqrt[6]{x^5} \\cdot \\sqrt[3]{x^2}"
          },
          {
            "letra": "b)",
            "expresion": "\\dfrac{\\sqrt[4]{a^3 b^2}}{\\sqrt[6]{a^4 b^3}}"
          },
          {
            "letra": "c)",
            "expresion": "2\\sqrt{27} - 4\\sqrt{75} + 3\\sqrt{48} - \\sqrt{12}"
          },
          {
            "letra": "d)",
            "expresion": "3\\sqrt[3]{24} - 2\\sqrt[3]{81} + 2\\sqrt[3]{375} - \\sqrt[3]{192}"
          },
          {
            "letra": "e)",
            "expresion": "\\dfrac{\\sqrt[3]{9x^4 y} \\cdot \\sqrt[4]{27x^5 y^6}}{\\sqrt[6]{3x^5 y^2}}"
          },
          {
            "letra": "f)",
            "expresion": "4\\sqrt[3]{\\dfrac{16}{27}} - 5\\sqrt[3]{\\dfrac{2}{125}} + \\dfrac{1}{2}\\sqrt[3]{128}"
          }
        ],
        "idea_clave": "Para multiplicar o dividir raíces con distinto índice, ponles primero el mismo índice con el mcm. Solo se pueden sumar o restar raíces si son radicales semejantes: deben coincidir en el índice y en el radicando tras extraer factores. Al final, extrae todos los factores posibles y simplifica el radical si el índice y los exponentes tienen divisores comunes."
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
      "sesiones_impartidas": 8,
      "descripcion": "Conjuntos numéricos ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}$), operaciones con intervalos en la recta real, valor absoluto, potencias, radicales, logaritmos, polinomios, factorización con Ruffini y fracciones algebraicas.",
      "apuntes_pdf": "pdf/Apuntes_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "ejercicios_pdf": "pdf/Ficha_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "apuntes_listos": true,
      "ejercicios_listos": true,
      "total_ejercicios_libreta": 11,
      "total_tareas_classroom": 1
    }
  ]
};
