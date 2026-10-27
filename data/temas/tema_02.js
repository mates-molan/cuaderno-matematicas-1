// =========================================================================
// DATOS DEL TEMA 2: ECUACIONES, NÚMEROS COMPLEJOS Y SISTEMAS
// =========================================================================
window.TEMAS_DATA = window.TEMAS_DATA || {};
window.TEMAS_DATA[2] = {
  "id": 2,
  "titulo": "Tema 2: Ecuaciones, Números Complejos y Sistemas",
  "evaluacion": "1.ª Evaluación",
  "sesiones_impartidas": 1,
  "apuntes_pdf": "pdf/Apuntes_Tema2_Ecuaciones_Complejos_Sistemas_1Bach.pdf",
  "ejercicios_pdf": "",
  "repaso_pdf": "",
  "repaso_solucionario_pdf": "",
  "tareas_classroom": [],
  "controles_test": [],
  "semanas_ejercicios": [],
  "sesiones": [
    {
      "numero": 1,
      "fecha": "Martes 27 de Octubre de 2026",
      "titulo": "Problemas Prácticos con Ecuaciones (Polinómicas, Bicuadradas y Racionales)",
      "ejercicios": [
        {
          "numero": 1,
          "titulo": "Problema 1: Comparar el volumen de dos cajas (Ecuación polinómica)",
          "referencia": "Punto 1.3 (Pág. 6, análogo a Ejemplo 1.1)",
          "enunciado": "Una fábrica diseña dos tipos de cajas de cartón para embalaje. El volumen de cada caja (en $\\text{cm}^3$) depende de una medida $x$ (en centímetros): la primera caja tiene un volumen de $V_1 = (x^2 - 9)(3x - 2)$ y la segunda caja tiene un volumen de $V_2 = (x - 3)(x^2 + 4x + 3)$. Queremos averiguar para qué medidas de $x$ tienen ambas cajas exactamente la misma capacidad ($V_1 = V_2$).",
          "instruccion": "Plantea la ecuación que iguala los dos volúmenes y resuélvela factorizando para no multiplicar paréntesis a lo loco:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\textbf{Planteamiento:} \\; (x^2 - 9)(3x - 2) = (x - 3)(x^2 + 4x + 3)"
            },
            {
              "letra": "b)",
              "expresion": "\\textbf{Factorizar antes de multiplicar:} \\; x^2 - 9 = (x - 3)(x + 3) \\quad \\text{y} \\quad x^2 + 4x + 3 = (x + 1)(x + 3)"
            },
            {
              "letra": "c)",
              "expresion": "\\textbf{Pasar a la izquierda y sacar factor común:} \\; (x - 3)(x + 3)(3x - 2) - (x - 3)(x + 3)(x + 1) = 0 \\iff (x - 3)(x + 3)\\big[(3x - 2) - (x + 1)\\big] = 0"
            },
            {
              "letra": "d)",
              "expresion": "\\textbf{Soluciones y sentido real:} \\; (x - 3)(x + 3)(2x - 3) = 0 \\implies x_1 = 3, \\; x_2 = -3, \\; x_3 = 1{,}5. \\text{ Como una longitud no puede ser negativa, descartamos } x = -3. \\text{ Con } x = 3 \\text{ las cajas tendrían volumen cero, luego la única medida útil es } x = 1{,}5\\text{ cm}."
            }
          ],
          "idea_clave": "Si multiplicas los paréntesis a ambos lados generas un polinomio de grado 3 y tendrías que usar Ruffini. Reconociendo identidades notables antes de operar, sacas factor común $(x - 3)(x + 3)$ y resuelves la ecuación en tres líneas."
        },
        {
          "numero": 2,
          "titulo": "Problema 2: Puntos de apoyo en una rampa de skate (Ecuación bicuadrada)",
          "referencia": "Punto 1.3 (Pág. 6, análogo a Ejemplo 1.2 a)",
          "enunciado": "En el diseño de una rampa para una pista de patinaje (skatepark), la altura $h$ respecto al suelo (en metros) a una distancia horizontal $x$ del centro viene dada por la fórmula $h(x) = x^4 - 10x^2 + 9$. Queremos encontrar en qué puntos la rampa toca exactamente el suelo ($h(x) = 0$).",
          "instruccion": "Resuelve la ecuación bicuadrada aplicando el cambio de variable $t = x^2$ para hallar todas sus soluciones reales:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\textbf{Ecuación y cambio de variable:} \\; x^4 - 10x^2 + 9 = 0. \\text{ Hacemos } t = x^2 \\implies t^2 - 10t + 9 = 0"
            },
            {
              "letra": "b)",
              "expresion": "\\textbf{Resolver en } t: \\; (t - 9)(t - 1) = 0 \\implies t_1 = 9, \\quad t_2 = 1 \\quad (\\text{ambos positivos, luego darán soluciones reales})"
            },
            {
              "letra": "c)",
              "expresion": "\\textbf{Deshacer el cambio con } \\pm: \\; \\begin{cases} x^2 = 9 \\implies x = \\pm\\sqrt{9} = \\pm 3 \\\\ x^2 = 1 \\implies x = \\pm\\sqrt{1} = \\pm 1 \\end{cases} \\implies S = \\{-3, -1, 1, 3\\}"
            },
            {
              "letra": "d)",
              "expresion": "\\textbf{Interpretación en la pista:} \\; \\text{La rampa toca el suelo en 4 puntos situados simétricamente a } 1\\text{ m y a } 3\\text{ m a la izquierda y a la derecha del centro } (x = -3,\\, -1,\\, 1,\\, 3\\text{ m})."
            }
          ],
          "idea_clave": "No te pares al hallar los valores de $t$: la incógnita que te piden es la distancia $x$. Recuerda siempre deshacer el cambio sacando la raíz cuadrada con el doble signo $\\pm$."
        },
        {
          "numero": 3,
          "titulo": "Problema 3: Temperatura de equilibrio en el laboratorio (Cambio con exponente impar)",
          "referencia": "Punto 1.3 (Pág. 6, análogo a Ejemplo 1.2 b)",
          "enunciado": "En una práctica de laboratorio de ciencias, la temperatura $x$ (en grados) a la que se estabiliza una mezcla química cumple la ecuación $x^6 - 26x^3 = 27$, es decir, $x^6 - 26x^3 - 27 = 0$. Averigua todas las temperaturas reales a las que la mezcla puede estar en equilibrio.",
          "instruccion": "Aplica el cambio de variable con exponente impar y analiza qué ocurre con el signo de las soluciones:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\textbf{Cambio de variable:} \\; \\text{Hacemos } t = x^3 \\implies t^2 = x^6, \\text{ con lo que queda la ecuación } t^2 - 26t - 27 = 0"
            },
            {
              "letra": "b)",
              "expresion": "\\textbf{Resolver en } t: \\; (t - 27)(t + 1) = 0 \\implies t_1 = 27, \\quad t_2 = -1"
            },
            {
              "letra": "c)",
              "expresion": "\\textbf{Deshacer el cambio con raíz cúbica:} \\; \\begin{cases} x^3 = 27 \\implies x_1 = \\sqrt[3]{27} = 3 \\\\ x^3 = -1 \\implies x_2 = \\sqrt[3]{-1} = -1 \\end{cases} \\implies S = \\{-1, 3\\}"
            },
            {
              "letra": "d)",
              "expresion": "\\textbf{Atención al exponente impar:} \\; \\text{A diferencia del exponente par, las raíces cúbicas de números negativos SÍ existen en los números reales } (\\sqrt[3]{-1} = -1). \\text{ Hay dos temperaturas de equilibrio: } -1^\\circ\\text{C y } 3^\\circ\\text{C}."
            }
          ],
          "idea_clave": "Fíjate bien en el exponente: al hacer $t = x^3$, la raíz cúbica conserva el signo y admite números negativos ($\\sqrt[3]{-1} = -1$). Cada valor de $t$ produce una única solución real."
        },
        {
          "numero": 4,
          "titulo": "Problema 4: Grifos y tuberías en un depósito de agua (Ecuación con fracciones y valores prohibidos)",
          "referencia": "Punto 1.3 (Pág. 7, análogo a Ejemplo 1.3)",
          "enunciado": "Un depósito de agua tiene conectadas dos tuberías: la primera introduce agua a un ritmo de $\\dfrac{2x}{x - 1}$ litros por minuto, y la segunda desagua a un ritmo de $\\dfrac{x + 3}{x + 4}$ litros por minuto (donde $x$ es la posición de apertura de las llaves). Para mantener el nivel estable, la diferencia entre lo que entra y lo que sale debe ser igual a $\\dfrac{10}{x^2 + 3x - 4}$. Calcula el valor de $x$ que permite regular el depósito.",
          "instruccion": "Resuelve la ecuación con fracciones siguiendo el método en 4 pasos y vigila los valores prohibidos:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\textbf{Paso 0 (Valores prohibidos):} \\; x^2 + 3x - 4 = (x - 1)(x + 4). \\text{ Los valores que anulan denominadores son } x = 1 \\text{ y } x = -4 \\text{ (jamás pueden ser solución).}"
            },
            {
              "letra": "b)",
              "expresion": "\\textbf{Quitar denominadores con el m.c.m.:} \\; \\text{Multiplicamos todo por } (x - 1)(x + 4): \\quad 2x(x + 4) - (x + 3)(x - 1) = 10"
            },
            {
              "letra": "c)",
              "expresion": "\\textbf{Operar con cuidado de los signos:} \\; (2x^2 + 8x) - (x^2 + 2x - 3) = 10 \\iff x^2 + 6x - 7 = 0 \\iff (x - 1)(x + 7) = 0 \\implies x_1 = 1, \\; x_2 = -7"
            },
            {
              "letra": "d)",
              "expresion": "\\textbf{Comprobar con el Paso 0:} \\; x_1 = 1 \\text{ es una \\textbf{solución falsa}} \\text{ porque anula el denominador } (x - 1). \\text{ La \\textbf{única solución válida}} \\text{ es } x = -7."
            }
          ],
          "idea_clave": "Anota siempre los valores prohibidos en el Paso 0 antes de quitar denominadores. El álgebra da $x = 1$, pero si sustituyes en la fracción te quedaría una división entre cero, que es imposible."
        }
      ]
    }
  ],
  "comprueba": [
    {
      "id": "c2_01",
      "bloque": "1. Ecuaciones Polinómicas y Racionales",
      "texto": "Sé resolver ecuaciones de segundo grado completas e incompletas de manera directa (sin aplicar la fórmula si falta $b$ o $c$) y de grado superior mediante factorización y Ruffini, vigilando no perder el coeficiente principal ni simplificar dividiendo entre expresiones con incógnita."
    },
    {
      "id": "c2_02",
      "bloque": "1. Ecuaciones Polinómicas y Racionales",
      "texto": "Domino las ecuaciones bicuadradas y reducibles a segundo grado mediante el cambio de variable $z = x^n$, deshaciendo el cambio con rigor y distinguiendo cuándo las soluciones pertenecen a $\\mathbb{R}$."
    },
    {
      "id": "c2_03",
      "bloque": "1. Ecuaciones Polinómicas y Racionales",
      "texto": "Sé resolver ecuaciones racionales reduciendo a común denominador mediante el mínimo común múltiplo algebraico, fijando previamente los valores prohibidos (Paso 0) que anulan denominadores."
    },
    {
      "id": "c2_04",
      "bloque": "2. Ecuaciones con Raíces, Exponenciales y Logarítmicas",
      "texto": "Sé aislar radicales cuadráticos y elevar al cuadrado ambos miembros, aplicando la comprobación final de soluciones para detectar y descartar las raíces extrañas producidas por «la trampa del cuadrado»."
    },
    {
      "id": "c2_05",
      "bloque": "2. Ecuaciones con Raíces, Exponenciales y Logarítmicas",
      "texto": "Domino la resolución de ecuaciones exponenciales igualando bases o aplicando el cambio de variable $t = a^x$, descartando soluciones imposibles como $t \\le 0$."
    },
    {
      "id": "c2_06",
      "bloque": "2. Ecuaciones con Raíces, Exponenciales y Logarítmicas",
      "texto": "Sé resolver ecuaciones logarítmicas concentrando términos en un solo logaritmo mediante sus propiedades analíticas y verificando que los argumentos sean estrictamente positivos ($> 0$)."
    },
    {
      "id": "c2_07",
      "bloque": "3. Números Complejos",
      "texto": "Comprendo la unidad imaginaria $i = \\sqrt{-1}$ ($i^2 = -1$), sé representar números complejos en forma binómica $z = a + bi$ en el plano complejo de Argand y calcular su conjugado $\\bar{z}$ y módulo $|z|$."
    },
    {
      "id": "c2_08",
      "bloque": "3. Números Complejos",
      "texto": "Sé operar con números complejos en forma binómica (suma, resta, producto y división multiplicando por el conjugado del denominador) y simplificar potencias cíclicas de $i^n$ dividiendo el exponente entre 4."
    },
    {
      "id": "c2_09",
      "bloque": "3. Números Complejos",
      "texto": "Sé resolver ecuaciones de segundo grado y polinómicas con discriminante negativo hallando sus soluciones en el cuerpo de los números complejos $\\mathbb{C}$."
    },
    {
      "id": "c2_10",
      "bloque": "4. Sistemas de Ecuaciones con Dos Incógnitas",
      "texto": "Interpreto geométricamente los sistemas de ecuaciones en el plano como intersección de rectas o curvas (recta, parábola, hipérbola y circunferencia), relacionando el número algebraico de soluciones con los puntos de corte."
    },
    {
      "id": "c2_11",
      "bloque": "4. Sistemas de Ecuaciones con Dos Incógnitas",
      "texto": "Sé resolver sistemas no lineales, exponenciales y logarítmicos seleccionando la técnica analítica más limpia (sustitución, igualación o cambio de variable) y comprobando la validez de los pares $(x, y)$."
    },
    {
      "id": "c2_12",
      "bloque": "5. Método de Gauss con Matrices ($3 \\times 3$)",
      "texto": "Sé plantear problemas contextualizados de tres incógnitas, escribir su matriz ampliada $(A \\mid B)$ y aplicar transformaciones lineales entre filas hacia la derecha ($F_i \\rightarrow aF_i + bF_j$) para triangular el sistema."
    },
    {
      "id": "c2_13",
      "bloque": "5. Método de Gauss con Matrices ($3 \\times 3$)",
      "texto": "Sé interpretar la última fila de la matriz triangulada para clasificar el sistema: Determinado (SCD, solución única), Indeterminado (SCI, infinitas soluciones en función de un parámetro $\\lambda$) o Incompatible (SI, contradicción $0 = k$)."
    }
  ]
};
