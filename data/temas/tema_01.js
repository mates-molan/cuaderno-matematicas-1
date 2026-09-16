// =========================================================================
// DATOS DEL TEMA 1: HERRAMIENTAS DEL ÁLGEBRA
// =========================================================================
window.TEMAS_DATA = window.TEMAS_DATA || {};
window.TEMAS_DATA[1] = {
  "id": 1,
  "titulo": "Tema 1: Herramientas del Álgebra",
  "evaluacion": "1.ª Evaluación",
  "sesiones_impartidas": 1,
  "apuntes_pdf": "pdf/Apuntes_Tema1_Herramientas_del_Algebra_1Bach.pdf",
  "ejercicios_pdf": "pdf/Ficha_Tema1_Herramientas_del_Algebra_1Bach.pdf",
  "sesiones": [
    {
      "numero": 1,
      "fecha": "Martes 15 de Septiembre de 2026",
      "titulo": "Clasificación Numérica en ℝ y ℂ",
      "ejercicios": [
        {
          "numero": 1,
          "titulo": "Clasificación Numérica",
          "referencia": "Punto 1.1 (Págs. 1-2)",
          "instruccion": "Clasifica razonadamente cada número en el conjunto más restrictivo ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}$) e indica su cadena de pertenencia e inclusión:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "7"
            },
            {
              "letra": "b)",
              "expresion": "-12"
            },
            {
              "letra": "c)",
              "expresion": "\\dfrac{18}{3}"
            },
            {
              "letra": "d)",
              "expresion": "-\\dfrac{14}{5}"
            },
            {
              "letra": "e)",
              "expresion": "3.45"
            },
            {
              "letra": "f)",
              "expresion": "2.\\widehat{6}"
            },
            {
              "letra": "g)",
              "expresion": "\\sqrt{13}"
            },
            {
              "letra": "h)",
              "expresion": "-2\\pi"
            }
          ],
          "idea_clave": "Todo natural es entero, todo entero es racional y todo racional es real. No confundir $\\in$ con $\\subset$."
        },
        {
          "numero": 2,
          "titulo": "Clasificación Numérica",
          "referencia": "Punto 1.1 (Págs. 1-2)",
          "instruccion": "Clasifica razonadamente cada número en el conjunto más restrictivo ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}, \\mathbb{C}$) e indica su cadena de pertenencia e inclusión:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "A = 0.9999\\dots = 0.\\widehat{9}"
            },
            {
              "letra": "b)",
              "expresion": "B = \\sqrt[3]{-27} \\quad\\text{y}\\quad C = \\sqrt{-16}"
            },
            {
              "letra": "c)",
              "expresion": "D = \\dfrac{\\sqrt{72}}{\\sqrt{2}}"
            },
            {
              "letra": "d)",
              "expresion": "E = 1.01001000100001\\dots"
            },
            {
              "letra": "e)",
              "expresion": "F = (\\sqrt{3}-1)(\\sqrt{3}+1)"
            },
            {
              "letra": "f)",
              "expresion": "G = \\pi - 3.14159"
            }
          ],
          "idea_clave": "$0.\\widehat{9} = 1$. Raíces impares de negativos son reales; raíces pares de negativos son complejas en $\\mathbb{C}$. Operar antes de clasificar."
        }
      ]
    },
    {
      "numero": 2,
      "fecha": "Jueves 17 de Septiembre de 2026",
      "titulo": "Operaciones con Intervalos y Extremos Compartidos",
      "ejercicios": [
        {
          "numero": 3,
          "titulo": "Extremos Compartidos en Intervalos",
          "referencia": "Puntos 1.2 y 1.3 (Págs. 2-3)",
          "enunciado_base": "A = [-4, 2) \\qquad B = [2, 6] \\qquad C = (2, 8)",
          "instruccion": "Calcula de forma justificada aplicando el método gráfico de rectas reales alineadas:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "A \\cap B \\quad\\text{frente a}\\quad A \\cap C"
            },
            {
              "letra": "b)",
              "expresion": "A \\cup B \\quad\\text{frente a}\\quad A \\cup C"
            },
            {
              "letra": "c)",
              "expresion": "B \\setminus A \\quad\\text{y}\\quad A \\setminus B"
            },
            {
              "letra": "d)",
              "expresion": "A^c = \\mathbb{R} \\setminus A"
            }
          ],
          "idea_clave": "Regla del Extremo Compartido: en la intersección el punto frontera solo sobrevive si está cerrado en ambos. En la unión no puede fusionarse si ambos son abiertos porque queda un agujero."
        },
        {
          "numero": 4,
          "titulo": "Operaciones Combinadas y Semirrectas",
          "referencia": "Punto 1.3 (Págs. 3-4)",
          "enunciado_base": "I = (-\\infty, 3] \\qquad J = (-2, 5) \\qquad K = [0, +\\infty)",
          "instruccion": "Calcula de forma justificada expresando el resultado en forma de intervalo:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "I \\cap J \\cap K"
            },
            {
              "letra": "b)",
              "expresion": "(I \\cup K)^c"
            },
            {
              "letra": "c)",
              "expresion": "J \\setminus (I \\cap K)"
            },
            {
              "letra": "d)",
              "expresion": "(I \\cap J)^c \\cap K"
            }
          ],
          "idea_clave": "Prioridad de operaciones de conjuntos, complementarios con inversión de extremos (abierto ↔ cerrado) y extirpación de bloques cerrados dejando extremos abiertos."
        }
      ]
    }
  ],
  "semanas_ejercicios": [
    {
      "semana_numero": 1,
      "rango_fechas": "14 Sep - 18 Sep 2026",
      "estado": "actual",
      "meta_semanal": "Dominar la clasificación rigurosa en la recta real, la distinción entre pertenencia (∈) e inclusión (⊂) y las operaciones con intervalos.",
      "ejercicios": [
        {
          "id": "P-01",
          "caso": "Clasificación Numérica Elemental (Ejercicio 1 de la Hoja)",
          "apartados_count": 12,
          "enunciado": "Clasifica razonadamente cada número en el conjunto más restrictivo al que pertenece ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}$) e indica su cadena completa de pertenencia e inclusión: $$a)\\; 15 \\qquad b)\\; -28 \\qquad c)\\; \\dfrac{54}{9} \\qquad d)\\; -\\dfrac{7}{4} \\qquad e)\\; 0{,}625 \\qquad f)\\; 3{,}\\widehat{7}$$ $$g)\\; 1{,}2\\widehat{45} \\qquad h)\\; \\sqrt{41} \\qquad i)\\; -\\dfrac{5\\pi}{3} \\qquad j)\\; \\sqrt{225} \\qquad k)\\; \\sqrt[3]{-64} \\qquad l)\\; 2{,}5050050005\\dots$$",
          "solucion": "a)\\; 15 \\in \\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}; \\quad b)\\; -28 \\in \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}; \\quad c)\\; \\dfrac{54}{9}=6 \\in \\mathbb{N} \\subset \\dots; \\quad d)\\; -\\dfrac{7}{4} = -1{,}75 \\in \\mathbb{Q} \\subset \\mathbb{R}; \\quad e)\\; 0{,}625 = \\dfrac{5}{8} \\in \\mathbb{Q}; \\quad f)\\; 3{,}\\widehat{7} = \\dfrac{34}{9} \\in \\mathbb{Q}; \\quad g)\\; 1{,}2\\widehat{45} = \\dfrac{137}{110} \\in \\mathbb{Q}; \\quad h)\\; \\sqrt{41} \\in \\mathbb{I} \\subset \\mathbb{R}; \\quad i)\\; -\\dfrac{5\\pi}{3} \\in \\mathbb{I} \\subset \\mathbb{R}; \\quad j)\\; \\sqrt{225} = 15 \\in \\mathbb{N}; \\quad k)\\; \\sqrt[3]{-64} = -4 \\in \\mathbb{Z} \\subset \\mathbb{Q}; \\quad l)\\; 2{,}5050050005\\dots \\in \\mathbb{I} \\subset \\mathbb{R}"
        },
        {
          "id": "P-02",
          "caso": "Clasificación Numérica con Operaciones Previas (Ejercicio 2 de la Hoja)",
          "apartados_count": 8,
          "enunciado": "Opera y simplifica al máximo cada expresión antes de clasificar el resultado razonadamente en $\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}, \\mathbb{C}$: $$a)\\; A = 0{,}\\widehat{3} + 0{,}\\widehat{6} \\qquad b)\\; B = \\sqrt[3]{-216} \\quad\\text{frente a}\\quad C = \\sqrt{-81} \\qquad c)\\; D = \\dfrac{\\sqrt{98} - \\sqrt{2}}{\\sqrt{8}}$$ $$d)\\; E = (\\sqrt{7} - \\sqrt{2})(\\sqrt{7} + \\sqrt{2}) \\qquad e)\\; F = (3\\sqrt{2} - 1)^2 \\qquad f)\\; G = \\dfrac{6\\pi - 2\\pi}{2\\pi}$$ $$g)\\; H = \\sqrt[4]{(-3)^4} \\quad\\text{frente a}\\quad K = (\\sqrt[4]{-3})^4 \\qquad h)\\; L = 3{,}400400400400400\\dots$$",
          "solucion": "a)\\; A = 1 \\in \\mathbb{N}; \\quad b)\\; B = -6 \\in \\mathbb{Z}, \\; C = 9i \\in \\mathbb{C} \\setminus \\mathbb{R}; \\quad c)\\; D = 3 \\in \\mathbb{N}; \\quad d)\\; E = 5 \\in \\mathbb{N}; \\quad e)\\; F = 19 - 6\\sqrt{2} \\in \\mathbb{I}; \\quad f)\\; G = 2 \\in \\mathbb{N}; \\quad g)\\; H = 3 \\in \\mathbb{N}; \\; K \\notin \\mathbb{R} \\text{ (en } \\mathbb{C}: K = -3\\text{)}; \\quad h)\\; L = 3{,}\\widehat{400} = \\dfrac{3397}{999} \\in \\mathbb{Q}"
        },
        {
          "id": "P-03",
          "caso": "Operaciones con Intervalos y Semirrectas (Ejercicio 3 de la Hoja)",
          "apartados_count": 6,
          "enunciado": "Representa sobre rectas reales alineadas y calcula las siguientes operaciones, justificando de forma rigurosa si los extremos de los intervalos son abiertos o cerrados: $$a)\\; [-4, 3) \\cap [1, 7] \\quad\\text{frente a}\\quad [-4, 3) \\cup [1, 7] \\qquad b)\\; [-4, 3) \\setminus [1, 7] \\quad\\text{y}\\quad [1, 7] \\setminus [-4, 3)$$ $$c)\\; (-\\infty, 2] \\cap (-1, 6) \\cap [0, +\\infty) \\qquad d)\\; (-\\infty, -2) \\cup [-2, 5]$$ $$e)\\; [-3, 2) \\cup (2, 6] \\qquad f)\\; ([-5, 2] \\cap [0, 4]) \\cup (3, 7)$$",
          "solucion": "a)\\; [1, 3) \\quad\\text{y}\\quad [-4, 7]; \\quad b)\\; [-4, 1) \\quad\\text{y}\\quad [3, 7]; \\quad c)\\; [0, 2]; \\quad d)\\; (-\\infty, 5]; \\quad e)\\; [-3, 6] \\setminus \\{2\\}; \\quad f)\\; [0, 2] \\cup (3, 7)"
        },
        {
          "id": "P-04",
          "caso": "Complementarios y Operaciones Combinadas (Ejercicio 4 de la Hoja)",
          "apartados_count": 5,
          "enunciado": "Dados los conjuntos $I = (-\\infty, 4]$, $J = (-3, 6)$ y $K = [1, +\\infty)$, calcula y expresa el resultado en forma de intervalo o unión disjunta de intervalos: $$a)\\; I^c = \\mathbb{R} \\setminus I \\quad\\text{y}\\quad J^c = \\mathbb{R} \\setminus J \\qquad b)\\; (I \\cup K)^c = \\mathbb{R} \\setminus (I \\cup K)$$ $$c)\\; J \\setminus (I \\cap K) \\qquad d)\\; (I \\cap J)^c \\cap K \\qquad e)\\; (U \\cup V)^c \\quad\\text{siendo } U = (-\\infty, -2] \\quad\\text{y}\\quad V = [5, +\\infty)$$",
          "solucion": "a)\\; I^c = (4, +\\infty), \\quad J^c = (-\\infty, -3] \\cup [6, +\\infty); \\quad b)\\; (I \\cup K)^c = \\emptyset; \\quad c)\\; J \\setminus (I \\cap K) = (-3, 1) \\cup (4, 6); \\quad d)\\; (I \\cap J)^c \\cap K = (4, +\\infty); \\quad e)\\; (U \\cup V)^c = (-2, 5)"
        }
      ]
    }
  ],
  "ejercicios_semana": [
    {
      "id": "P-01",
      "caso": "Clasificación Numérica Elemental (Ejercicio 1 de la Hoja)",
      "apartados_count": 12,
      "enunciado": "Clasifica razonadamente cada número en el conjunto más restrictivo al que pertenece ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}$) e indica su cadena completa de pertenencia e inclusión: $$a)\\; 15 \\qquad b)\\; -28 \\qquad c)\\; \\dfrac{54}{9} \\qquad d)\\; -\\dfrac{7}{4} \\qquad e)\\; 0{,}625 \\qquad f)\\; 3{,}\\widehat{7}$$ $$g)\\; 1{,}2\\widehat{45} \\qquad h)\\; \\sqrt{41} \\qquad i)\\; -\\dfrac{5\\pi}{3} \\qquad j)\\; \\sqrt{225} \\qquad k)\\; \\sqrt[3]{-64} \\qquad l)\\; 2{,}5050050005\\dots$$",
      "solucion": "a)\\; 15 \\in \\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}; \\quad b)\\; -28 \\in \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}; \\quad c)\\; \\dfrac{54}{9}=6 \\in \\mathbb{N} \\subset \\dots; \\quad d)\\; -\\dfrac{7}{4} = -1{,}75 \\in \\mathbb{Q} \\subset \\mathbb{R}; \\quad e)\\; 0{,}625 = \\dfrac{5}{8} \\in \\mathbb{Q}; \\quad f)\\; 3{,}\\widehat{7} = \\dfrac{34}{9} \\in \\mathbb{Q}; \\quad g)\\; 1{,}2\\widehat{45} = \\dfrac{137}{110} \\in \\mathbb{Q}; \\quad h)\\; \\sqrt{41} \\in \\mathbb{I} \\subset \\mathbb{R}; \\quad i)\\; -\\dfrac{5\\pi}{3} \\in \\mathbb{I} \\subset \\mathbb{R}; \\quad j)\\; \\sqrt{225} = 15 \\in \\mathbb{N}; \\quad k)\\; \\sqrt[3]{-64} = -4 \\in \\mathbb{Z} \\subset \\mathbb{Q}; \\quad l)\\; 2{,}5050050005\\dots \\in \\mathbb{I} \\subset \\mathbb{R}"
    },
    {
      "id": "P-02",
      "caso": "Clasificación Numérica con Operaciones Previas (Ejercicio 2 de la Hoja)",
      "apartados_count": 8,
      "enunciado": "Opera y simplifica al máximo cada expresión antes de clasificar el resultado razonadamente en $\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}, \\mathbb{C}$: $$a)\\; A = 0{,}\\widehat{3} + 0{,}\\widehat{6} \\qquad b)\\; B = \\sqrt[3]{-216} \\quad\\text{frente a}\\quad C = \\sqrt{-81} \\qquad c)\\; D = \\dfrac{\\sqrt{98} - \\sqrt{2}}{\\sqrt{8}}$$ $$d)\\; E = (\\sqrt{7} - \\sqrt{2})(\\sqrt{7} + \\sqrt{2}) \\qquad e)\\; F = (3\\sqrt{2} - 1)^2 \\qquad f)\\; G = \\dfrac{6\\pi - 2\\pi}{2\\pi}$$ $$g)\\; H = \\sqrt[4]{(-3)^4} \\quad\\text{frente a}\\quad K = (\\sqrt[4]{-3})^4 \\qquad h)\\; L = 3{,}400400400400400\\dots$$",
      "solucion": "a)\\; A = 1 \\in \\mathbb{N}; \\quad b)\\; B = -6 \\in \\mathbb{Z}, \\; C = 9i \\in \\mathbb{C} \\setminus \\mathbb{R}; \\quad c)\\; D = 3 \\in \\mathbb{N}; \\quad d)\\; E = 5 \\in \\mathbb{N}; \\quad e)\\; F = 19 - 6\\sqrt{2} \\in \\mathbb{I}; \\quad f)\\; G = 2 \\in \\mathbb{N}; \\quad g)\\; H = 3 \\in \\mathbb{N}; \\; K \\notin \\mathbb{R} \\text{ (en } \\mathbb{C}: K = -3\\text{)}; \\quad h)\\; L = 3{,}\\widehat{400} = \\dfrac{3397}{999} \\in \\mathbb{Q}"
    },
    {
      "id": "P-03",
      "caso": "Operaciones con Intervalos y Semirrectas (Ejercicio 3 de la Hoja)",
      "apartados_count": 6,
      "enunciado": "Representa sobre rectas reales alineadas y calcula las siguientes operaciones, justificando de forma rigurosa si los extremos de los intervalos son abiertos o cerrados: $$a)\\; [-4, 3) \\cap [1, 7] \\quad\\text{frente a}\\quad [-4, 3) \\cup [1, 7] \\qquad b)\\; [-4, 3) \\setminus [1, 7] \\quad\\text{y}\\quad [1, 7] \\setminus [-4, 3)$$ $$c)\\; (-\\infty, 2] \\cap (-1, 6) \\cap [0, +\\infty) \\qquad d)\\; (-\\infty, -2) \\cup [-2, 5]$$ $$e)\\; [-3, 2) \\cup (2, 6] \\qquad f)\\; ([-5, 2] \\cap [0, 4]) \\cup (3, 7)$$",
      "solucion": "a)\\; [1, 3) \\quad\\text{y}\\quad [-4, 7]; \\quad b)\\; [-4, 1) \\quad\\text{y}\\quad [3, 7]; \\quad c)\\; [0, 2]; \\quad d)\\; (-\\infty, 5]; \\quad e)\\; [-3, 6] \\setminus \\{2\\}; \\quad f)\\; [0, 2] \\cup (3, 7)"
    },
    {
      "id": "P-04",
      "caso": "Complementarios y Operaciones Combinadas (Ejercicio 4 de la Hoja)",
      "apartados_count": 5,
      "enunciado": "Dados los conjuntos $I = (-\\infty, 4]$, $J = (-3, 6)$ y $K = [1, +\\infty)$, calcula y expresa el resultado en forma de intervalo o unión disjunta de intervalos: $$a)\\; I^c = \\mathbb{R} \\setminus I \\quad\\text{y}\\quad J^c = \\mathbb{R} \\setminus J \\qquad b)\\; (I \\cup K)^c = \\mathbb{R} \\setminus (I \\cup K)$$ $$c)\\; J \\setminus (I \\cap K) \\qquad d)\\; (I \\cap J)^c \\cap K \\qquad e)\\; (U \\cup V)^c \\quad\\text{siendo } U = (-\\infty, -2] \\quad\\text{y}\\quad V = [5, +\\infty)$$",
      "solucion": "a)\\; I^c = (4, +\\infty), \\quad J^c = (-\\infty, -3] \\cup [6, +\\infty); \\quad b)\\; (I \\cup K)^c = \\emptyset; \\quad c)\\; J \\setminus (I \\cap K) = (-3, 1) \\cup (4, 6); \\quad d)\\; (I \\cap J)^c \\cap K = (4, +\\infty); \\quad e)\\; (U \\cup V)^c = (-2, 5)"
    }
  ],
  "comprueba": [
    {
      "id": "c01",
      "bloque": "1. Números Reales, Intervalos y Valor Absoluto",
      "texto": "Sé clasificar cualquier número real en su conjunto más restrictivo ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}$) justificando su cadena de pertenencia e inclusión ($\\in, \\subset$), distinguiendo cuándo un número pertenece a $\\mathbb{C} \\setminus \\mathbb{R}$ (como $\\sqrt{-16}$)."
    },
    {
      "id": "c02",
      "bloque": "1. Números Reales, Intervalos y Valor Absoluto",
      "texto": "Sé representar intervalos y semirrectas en la recta real y calcular su unión, intersección y diferencia aplicando la Regla del Extremo Compartido para decidir con rigor si un extremo frontera es abierto o cerrado."
    },
    {
      "id": "c03",
      "bloque": "1. Números Reales, Intervalos y Valor Absoluto",
      "texto": "Sé calcular el complementario de cualquier intervalo o unión de semirrectas en $\\mathbb{R}$, determinando cuándo genera un intervalo acotado o el conjunto vacío ($\\emptyset$)."
    },
    {
      "id": "c04",
      "bloque": "1. Números Reales, Intervalos y Valor Absoluto",
      "texto": "Conozco la definición analítica de valor absoluto como función a trozos y su interpretación geométrica como distancia al origen ($|x| = d(x, 0)$) o entre dos puntos ($|x - c| = d(x, c)$)."
    },
    {
      "id": "c05",
      "bloque": "1. Números Reales, Intervalos y Valor Absoluto",
      "texto": "Sé resolver ecuaciones e inecuaciones con valor absoluto de forma general, tanto lineales (del tipo $|2x - 3| < 5$, $|ax + b| \\le r$ o $|ax + b| \\ge r$) como con expresiones algebraicas fraccionarias (del tipo $\\left|\\frac{ax+b}{cx+d}\\right| \\le k$ o con denominadores), aplicando la equivalencia por ramas o el estudio de signos, verificando las restricciones de dominio ($cx+d \\ne 0$) y detectando casos imposibles (como $|f(x)| \\le -k$)."
    },
    {
      "id": "c06",
      "bloque": "2. Potencias y Radicales",
      "texto": "Domino con soltura las propiedades de las potencias enteras y fraccionarias, evitando la trampa de signos entre $(-a)^n$ y $-a^n$ y aplicando correctamente exponentes negativos y nulos."
    },
    {
      "id": "c07",
      "bloque": "2. Potencias y Radicales",
      "texto": "Sé expresar cualquier radical como potencia de exponente fraccionario ($\\sqrt[n]{a^m} = a^{m/n}$) y operar raíces de índices distintos hallando el mínimo común índice ($k = \\text{mcm}(n, m)$)."
    },
    {
      "id": "c08",
      "bloque": "2. Potencias y Radicales",
      "texto": "Sé extraer e introducir factores en radicales sucesivos y operar productos, cocientes y potencias con raíces de distinto índice, reduciendo expresiones complejas de radicales anidados con factores intermedios (del tipo $\\sqrt{x \\sqrt[3]{x^2 \\sqrt{x}}}$ o $\\sqrt[4]{\\frac{a^3}{\\sqrt{b}}} \\cdot \\sqrt[3]{\\frac{b^2}{\\sqrt{a}}}$) a una única raíz o potencia de exponente fraccionario irreducible."
    },
    {
      "id": "c09",
      "bloque": "2. Potencias y Radicales",
      "texto": "Sé sumar y restar radicales transformándolos previamente en radicales semejantes mediante extracción de factores (ej. $\\sqrt{50} - 2\\sqrt{18} + \\sqrt{8}$)."
    },
    {
      "id": "c10",
      "bloque": "2. Potencias y Radicales",
      "texto": "Domino las tres técnicas esenciales de racionalización: 1) Tipo I: denominador con raíz simple cuadrada o enésima ($\\frac{A}{\\sqrt[n]{b^k}}$ multiplicando por $\\sqrt[n]{b^{n-k}}$ para completar el exponente $n$); 2) Tipo II: denominador con binomio de raíces cuadradas ($\\frac{A}{\\sqrt{a} \\pm \\sqrt{b}}$ o $\\frac{A}{a \\pm \\sqrt{b}}$ mediante binomio conjugado); 3) Tipo III: denominador con raíces cúbicas ($\\frac{A}{\\sqrt[3]{a} \\pm \\sqrt[3]{b}}$ mediante la identidad de suma o diferencia de cubos $(u \\mp v)(u^2 \\pm uv + v^2) = u^3 \\mp v^3$)."
    },
    {
      "id": "c11",
      "bloque": "3. Identidades Notables y Expresiones Algebraicas",
      "texto": "Domino instantáneamente las identidades notables fundamentales: cuadrado de una suma $(a+b)^2$, cuadrado de una diferencia $(a-b)^2$, suma por diferencia $(a+b)(a-b) = a^2 - b^2$ y el cubo de un binomio $(a \\pm b)^3$."
    },
    {
      "id": "c12",
      "bloque": "3. Identidades Notables y Expresiones Algebraicas",
      "texto": "Reconozco patrones de identidades notables hacia atrás (factorización directa), evitando el error grave de asumir que $(a+b)^2 = a^2 + b^2$ o que $\\sqrt{a^2+b^2} = a+b$."
    },
    {
      "id": "c13",
      "bloque": "4. Logaritmos y sus Propiedades",
      "texto": "Conozco la definición formal de logaritmo ($\\log_b(a) = c \\iff b^c = a$) y sus condiciones estrictas de existencia ($b > 0, b \\ne 1, a > 0$)."
    },
    {
      "id": "c14",
      "bloque": "4. Logaritmos y sus Propiedades",
      "texto": "Aplico con rigor las propiedades operativas: logaritmo de un producto (suma), de un cociente (resta), de una potencia (producto por exponente) y de una raíz (división por el índice)."
    },
    {
      "id": "c15",
      "bloque": "4. Logaritmos y sus Propiedades",
      "texto": "Sé utilizar la fórmula del cambio de base ($\\log_b(a) = \\frac{\\log_c(a)}{\\log_c(b)}$) y calcular logaritmos desconocidos a partir de datos conocidos descomponiendo en factores primos (incluido el truco $\\log(5) = \\log(10/2) = 1 - \\log(2)$)."
    },
    {
      "id": "c16",
      "bloque": "4. Logaritmos y sus Propiedades",
      "texto": "Evito las trampas clásicas de logaritmos: no aplico falsas distributivas ($\\log(A+B) \\ne \\log A + \\log B$) ni confundo el logaritmo de un cociente con el cociente de logaritmos."
    },
    {
      "id": "c17",
      "bloque": "5. Polinomios, Ruffini y Factorización Completa",
      "texto": "Sé aplicar el Teorema del Resto y del Factor para calcular restos instantáneos sin dividir, certificar si un valor es raíz de $P(x)$, y hallar parámetros desconocidos $k$ para que una división sea exacta."
    },
    {
      "id": "c18",
      "bloque": "5. Polinomios, Ruffini y Factorización Completa",
      "texto": "Sé aplicar la Regla de Ruffini buscando posibles raíces enteras entre los divisores del término independiente."
    },
    {
      "id": "c19",
      "bloque": "5. Polinomios, Ruffini y Factorización Completa",
      "texto": "Sé realizar la factorización completa de un polinomio en $\\mathbb{R}$ combinando: 1) sacar factor común, 2) identidades notables, 3) Ruffini y 4) fórmula cuadrática, identificando factores de 2.º grado irreducibles ($\\Delta < 0$) y sin olvidar nunca el coeficiente principal $a_n$."
    },
    {
      "id": "c20",
      "bloque": "6. Fracciones Algebraicas",
      "texto": "Sé determinar el dominio de existencia de una fracción algebraica identificando e indicando siempre los valores reales que anulan el denominador."
    },
    {
      "id": "c21",
      "bloque": "6. Fracciones Algebraicas",
      "texto": "Sé simplificar fracciones algebraicas factorizando previamente numerador y denominador, cancelando únicamente factores completos y nunca sumandos sueltos."
    },
    {
      "id": "c22",
      "bloque": "6. Fracciones Algebraicas",
      "texto": "Sé sumar y restar fracciones algebraicas reduciendo a común denominador mediante el cálculo del mínimo común múltiplo ($\\text{mcm}$) de los denominadores factorizados."
    },
    {
      "id": "c23",
      "bloque": "6. Fracciones Algebraicas",
      "texto": "Sé multiplicar y dividir fracciones algebraicas factorizando todos los términos antes de operar, para simplificar al máximo el resultado final."
    },
    {
      "id": "c24",
      "bloque": "7. Números Combinatorios y Binomio de Newton",
      "texto": "Conozco la definición de número combinatorio $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$, sus propiedades de simetría ($\\binom{n}{k} = \\binom{n}{n-k}$) y su relación con el Triángulo de Tartaglia."
    },
    {
      "id": "c25",
      "bloque": "7. Números Combinatorios y Binomio de Newton",
      "texto": "Sé desarrollar cualquier potencia de un binomio $(a \\pm b)^n$ aplicando el Teorema del Binomio de Newton con sus signos alternados o positivos."
    },
    {
      "id": "c26",
      "bloque": "7. Números Combinatorios y Binomio de Newton",
      "texto": "Sé calcular un término específico o el término independiente de un desarrollo $(a \\pm b)^n$ aplicando directamente la fórmula del término general $T_{k+1} = \\binom{n}{k} a^{n-k} b^k$ sin necesidad de desarrollar todo el binomio."
    }
  ]
};
