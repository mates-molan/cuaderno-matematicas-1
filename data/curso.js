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
    "aviso": "¡Solucionario oficial de la Tarea 1 disponible! Consulta las soluciones resueltas paso a paso para auto-corregir tu libreta."
  },
  "ultima_clase": {
    "fecha": "Martes 29 de Septiembre, Jueves 1 y Viernes 2 de Octubre de 2026",
    "tema_id": 1,
    "tema_titulo": "Tema 1: Herramientas del Álgebra",
    "titulo_sesion": "Sesiones 8, 9 y 10: Potencias, Radicales, Radicales Anidados y Racionalización",
    "referencia_apuntes": "Puntos 2, 2.1 y 2.2 (Págs. 9-14)",
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
            "expresion": "\\dfrac{2^{-4} \\cdot 3^3 \\cdot 6^3}{4^{-2} \\cdot 9^2 \\cdot 12^{-1}} = 2^5 \\cdot 3^3 = 864"
          },
          {
            "letra": "b)",
            "expresion": "\\dfrac{(-2)^6 \\cdot (-5)^3 \\cdot (-3)^0}{-2^4 \\cdot 5^2 \\cdot 10^{-2}} = 2^4 \\cdot 5^3 = 2000"
          },
          {
            "letra": "c)",
            "expresion": "\\left(\\dfrac{x^{-3} y^2}{z^{-2}}\\right)^{-3} \\cdot \\left(\\dfrac{x^4 z^{-3}}{y^{-2}}\\right)^2 = \\dfrac{x^{17}}{y^2 z^{12}}"
          },
          {
            "letra": "d)",
            "expresion": "\\dfrac{(a^{3/5} b^{-1/2})^{10}}{(a^{-2} b^{2/3})^6} = \\dfrac{a^{18}}{b^9}"
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
            "expresion": "\\sqrt[4]{x^3} \\cdot \\sqrt[6]{x^5} \\cdot \\sqrt[3]{x^2} = x^2 \\sqrt[4]{x}"
          },
          {
            "letra": "b)",
            "expresion": "\\dfrac{\\sqrt[4]{a^3 b^2}}{\\sqrt[6]{a^4 b^3}} = \\sqrt[12]{a}"
          },
          {
            "letra": "c)",
            "expresion": "2\\sqrt{27} - 4\\sqrt{75} + 3\\sqrt{48} - \\sqrt{12} = -4\\sqrt{3}"
          },
          {
            "letra": "d)",
            "expresion": "3\\sqrt[3]{24} - 2\\sqrt[3]{81} + 2\\sqrt[3]{375} - \\sqrt[3]{192} = 6\\sqrt[3]{3}"
          },
          {
            "letra": "e)",
            "expresion": "\\dfrac{\\sqrt[3]{9x^4 y} \\cdot \\sqrt[4]{27x^5 y^6}}{\\sqrt[6]{3x^5 y^2}} = 3xy \\sqrt[4]{3x^3 y^2}"
          },
          {
            "letra": "f)",
            "expresion": "4\\sqrt[3]{\\dfrac{16}{27}} - 5\\sqrt[3]{\\dfrac{2}{125}} + \\dfrac{1}{2}\\sqrt[3]{128} = \\dfrac{11}{3}\\sqrt[3]{2}"
          }
        ],
        "idea_clave": "Para multiplicar o dividir raíces con distinto índice, ponles primero el mismo índice con el mcm. Solo se pueden sumar o restar raíces si son radicales semejantes: deben coincidir en el índice y en el radicando tras extraer factores. Al final, extrae todos los factores posibles y simplifica el radical si el índice y los exponentes tienen divisores comunes."
      },
      {
        "numero": 12,
        "titulo": "Radicales Anidados y Factores Intermedios",
        "referencia": "Punto 2.1 (Pág. 11)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Pistas para no liarte con raíces dentro de raíces:</strong><br>• <strong>Mete los factores hacia dentro:</strong> Para introducir un factor en la siguiente raíz, multiplica su exponente por el índice de esa raíz ($a \\cdot \\sqrt[n]{b} = \\sqrt[n]{a^n b}$). Ve paso a paso, siempre de fuera hacia dentro.<br>• <strong>Raíz de una raíz:</strong> Cuando ya no queden factores intermedios entre las raíces, junta todas en una sola multiplicando sus índices ($\\sqrt[m]{\\sqrt[n]{A}} = \\sqrt[m \\cdot n]{A}$).<br>• <strong>Al terminar:</strong> Si el exponente de algún factor es mayor o igual que el índice, ¡extrae factores fuera! Y si el índice y los exponentes tienen divisores comunes, simplifica dividiendo entre su $\\text{mcd}$.</div></div>Haz las siguientes operaciones dejando una sola raíz y sacando fuera todo lo que puedas:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "\\sqrt[3]{\\dfrac{x^2}{y} \\cdot \\sqrt{\\dfrac{y^3}{x} \\cdot \\sqrt[4]{\\dfrac{x^3}{y^2}}}} = \\sqrt[24]{x^{15} y^2}"
          },
          {
            "letra": "b)",
            "expresion": "\\sqrt[3]{16 \\cdot \\sqrt{8 \\cdot \\sqrt[4]{32}}} = 4\\sqrt[24]{2}"
          },
          {
            "letra": "c)",
            "expresion": "\\dfrac{\\sqrt[3]{x^2 \\cdot \\sqrt{x^3 \\cdot \\sqrt[4]{x}}}}{\\sqrt{x \\cdot \\sqrt[3]{x}}} = \\sqrt[24]{x^{13}}"
          },
          {
            "letra": "d)",
            "expresion": "\\sqrt{\\dfrac{x}{y} \\sqrt[3]{\\dfrac{y^2}{x}}} \\cdot \\sqrt[3]{\\dfrac{y}{x^2} \\sqrt{\\dfrac{x^3}{y}}} = \\sqrt[6]{x}"
          },
          {
            "letra": "e)",
            "expresion": "\\sqrt{a \\cdot \\sqrt[3]{\\dfrac{b}{a} \\cdot \\sqrt[4]{\\dfrac{a^5}{b^2}}}} = \\sqrt[24]{a^{13} b^2}"
          }
        ],
        "idea_clave": "Para simplificar radicales anidados, introduce los factores intermedios de fuera hacia dentro multiplicando su exponente por el índice de la raíz en la que entran. Cuando las raíces queden juntas, multiplica sus índices y extrae todo lo que puedas al final."
      },
      {
        "numero": 13,
        "titulo": "Racionalización: Raíces en Numerador y Denominador",
        "referencia": "Punto 2.2 (Págs. 12-14)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Pistas para racionalizar con calma y sin agobios:</strong><br>• <strong>Raíz simple en el denominador ($\\frac{A}{\\sqrt[n]{b^k}}$):</strong> Si se pueden sacar factores, sácalos primero. Luego multiplica arriba y abajo por la raíz con lo que le falta al exponente para llegar al índice ($\\sqrt[n]{b^{n-k}}$).<br>• <strong>Suma o resta con raíces en el denominador:</strong> Multiplica numerador y denominador por el conjugado (cambia el signo del medio) para que quede suma por diferencia: $(u+v)(u-v) = u^2 - v^2$. Si también tienes raíces en el numerador, haz la multiplicación despacio con la propiedad distributiva.<br>• <strong>Fracciones que se restan:</strong> Fíjate bien antes de empezar; si los denominadores ya son conjugados el uno del otro, su producto es el común denominador directo.<br>• <strong>Tres raíces en el denominador:</strong> Agrupa dos de ellas entre paréntesis como si fueran un solo bloque y haz el conjugado en dos pasos sencillos.</div></div>Racionaliza los denominadores y simplifica al máximo las expresiones resultantes:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "\\dfrac{6}{\\sqrt[4]{8}} = 3\\sqrt[4]{2} \\quad\\text{y}\\quad \\dfrac{12x}{\\sqrt[5]{64x^3}} = 3\\sqrt[5]{16x^2}"
          },
          {
            "letra": "b)",
            "expresion": "\\dfrac{3\\sqrt{2} - 2\\sqrt{3}}{2\\sqrt{2} + 3\\sqrt{3}} = \\dfrac{13\\sqrt{6} - 30}{19}"
          },
          {
            "letra": "c)",
            "expresion": "\\dfrac{2\\sqrt{5} + 3\\sqrt{2}}{3\\sqrt{5} - 4\\sqrt{2}} = \\dfrac{54 + 17\\sqrt{10}}{13}"
          },
          {
            "letra": "d)",
            "expresion": "\\dfrac{\\sqrt{3} + 1}{\\sqrt{3} - 1} - \\dfrac{\\sqrt{3} - 1}{\\sqrt{3} + 1} = 2\\sqrt{3}"
          },
          {
            "letra": "e)",
            "expresion": "\\dfrac{1}{\\sqrt{2} + \\sqrt{3} - \\sqrt{5}} = \\dfrac{3\\sqrt{2} + 2\\sqrt{3} + \\sqrt{30}}{12}"
          },
          {
            "letra": "f)",
            "expresion": "\\dfrac{x - y}{\\sqrt{x} + \\sqrt{y}} = \\sqrt{x} - \\sqrt{y} \\quad\\text{y}\\quad \\dfrac{\\sqrt{x + 1} - \\sqrt{x}}{\\sqrt{x + 1} + \\sqrt{x}} = 2x + 1 - 2\\sqrt{x^2 + x}"
          }
        ],
        "idea_clave": "En raíces simples completa los exponentes que faltan para alcanzar el índice. Con binomios de raíces cuadradas, el conjugado elimina las raíces del denominador aplicando diferencia de cuadrados ($u^2 - v^2$). Si hay raíces arriba y abajo, multiplica con cuidado término a término. Y si hay tres raíces, agrupa en bloque y repite el proceso."
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
      "sesiones_impartidas": 10,
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
