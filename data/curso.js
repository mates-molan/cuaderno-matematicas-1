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
    "fecha": "Martes 29 de Septiembre de 2026",
    "tema_id": 1,
    "tema_titulo": "Tema 1: Herramientas del Álgebra",
    "titulo_sesion": "Sesión 8: Potencias, Radicales y Extracción de Factores",
    "referencia_apuntes": "Puntos 2.1 y 2.2 (Págs. 8-11)",
    "mision_semanal": "Ejercicios 7 al 11 en tu libreta (Potencias, radicales, racionalización e identidades notables). ¡A tu ritmo, pero no lo dejes para el último día! 😉",
    "trabajo_semanal_pendiente": "Resolver en libreta los ejercicios de la Semana 3 (P-07, P-08, P-09, P-10 y P-11) de la hoja semanal.",
    "ejercicios_vistos": [
      {
        "numero": 10,
        "titulo": "Potencias y Signos: Exponentes Enteros y Fraccionarios",
        "referencia": "Punto 2.1 (Págs. 8-9)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Claves didácticas para potencias:</strong><br>• Descomponer siempre en factores primos antes de operar.<br>• Distinguir con precisión $(-a)^n$ de $-a^n$: el signo solo entra si está dentro del paréntesis.<br>• Invertir fracciones $(\\frac{a}{b})^{-n} = (\\frac{b}{a})^n$ y dejar el resultado final únicamente con exponentes positivos.</div></div>Simplifica al máximo aplicando las propiedades operativas de las potencias y expresando el resultado final con exponentes positivos:",
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
            "expresion": "\\left(\\dfrac{x^{-3} y^2}{z^{-2}}\\right)^{-3} \\cdot \\left(\\dfrac{x^4 z^{-3}}{y^{-2}}\right)^2"
          },
          {
            "letra": "d)",
            "expresion": "\\dfrac{(a^{3/5} b^{-1/2})^{10}}{(a^{-2} b^{2/3})^6}"
          }
        ],
        "idea_clave": "Descomponer siempre en bases primas antes de operar. Distinguir con precisión $(-a)^n$ de $-a^n$. En el paso final, ningún factor debe quedar con exponente negativo."
      },
      {
        "numero": 11,
        "titulo": "Radicales: Mínimo Común Índice, Extracción de Factores y Radicales Semejantes",
        "referencia": "Punto 2.2 (Págs. 9-11)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Claves didácticas para raíces:</strong><br>• Para multiplicar o dividir raíces con distinto índice es obligatorio hallar el $\\text{mcm}$ de los índices.<br>• Para extraer factores: dividir exponente entre índice (el cociente sale fuera y el resto permanece dentro).<br>• Solo se suman o restan radicales si son semejantes tras extraer factores.<br>• Si los exponentes del radicando y el índice tienen divisor común, ¡simplifica el radical!</div></div>Realiza las siguientes operaciones expresando el resultado en un único radical irreducible con factores simplificados (extrae todos los factores posibles):",
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
        "idea_clave": "Obligatorio mcm de índices para multiplicar/dividir raíces. Solo sumar radicales semejantes tras extracción. Simplificar siempre el radical resultante dividiendo índice y exponentes entre su mcd."
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
      "total_ejercicios_libreta": 11
    }
  ]
};
