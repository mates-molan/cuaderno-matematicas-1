// =========================================================================
// DATOS DEL TEMA 2: ECUACIONES, NÚMEROS COMPLEJOS Y SISTEMAS
// =========================================================================
window.TEMAS_DATA = window.TEMAS_DATA || {};
window.TEMAS_DATA[2] = {
  "id": 2,
  "titulo": "Tema 2: Ecuaciones, Números Complejos y Sistemas",
  "evaluacion": "1.ª Evaluación",
  "sesiones_impartidas": 2,
  "apuntes_pdf": "pdf/Apuntes_Tema2_Ecuaciones_Complejos_Sistemas_1Bach.pdf",
  "ejercicios_pdf": "pdf/Ficha_Problemas_Tema2_Ecuaciones_Complejos_Sistemas_1Bach.pdf",
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
          "enunciado": "Una fábrica diseña dos tipos de cajas de cartón para embalaje. El volumen de cada caja (en $\\text{cm}^3$) depende de una medida $x$ (en centímetros): la primera caja tiene un volumen de $V_1 = (x^2 - 9)(2x - 1)$ y la segunda caja tiene un volumen de $V_2 = (x - 3)(x^2 + 7x + 12)$. Queremos averiguar para qué medidas de $x$ tienen ambas cajas exactamente la misma capacidad ($V_1 = V_2$).",
          "instruccion": "Plantea la ecuación que iguala los dos volúmenes y resuélvela factorizando para no multiplicar paréntesis a lo loco:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\textbf{Planteamiento:} \\; (x^2 - 9)(2x - 1) = (x - 3)(x^2 + 7x + 12)"
            },
            {
              "letra": "b)",
              "expresion": "\\textbf{Factorizar antes de multiplicar:} \\; x^2 - 9 = (x - 3)(x + 3) \\quad \\text{y} \\quad x^2 + 7x + 12 = (x + 3)(x + 4)"
            },
            {
              "letra": "c)",
              "expresion": "\\textbf{Pasar a la izquierda y sacar factor común:} \\; (x - 3)(x + 3)(2x - 1) - (x - 3)(x + 3)(x + 4) = 0 \\iff (x - 3)(x + 3)\\big[(2x - 1) - (x + 4)\\big] = 0"
            },
            {
              "letra": "d)",
              "expresion": "\\textbf{Soluciones y sentido real:} \\; (x - 3)(x + 3)(x - 5) = 0 \\implies x_1 = 3, \\; x_2 = -3, \\; x_3 = 5. \\text{ Si } x = -3 \\text{ las dimensiones serían negativas (imposible). Si } x = 3 \\text{ el volumen sería } 0\\text{ cm}^3. \\text{ Por tanto, la \\textbf{única solución válida}} \\text{ es } \\boldsymbol{x = 5\\text{ cm}}, \\text{ que da un volumen positivo real de } V_1 = V_2 = 144\\text{ cm}^3 > 0."
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
    },
    {
      "numero": 2,
      "fecha": "Jueves 29 de Octubre de 2026",
      "titulo": "Modelado Práctico con Parábolas, Racionales, Radicales y Exponenciales",
      "ejercicios": [
        {
          "numero": 1,
          "titulo": "Problema 1: Trayectoria de una bengala de socorro (Parábola y cinemática)",
          "referencia": "Puntos 1.1 y 1.3 (Pág. 6, análogo a Ejemplo 1.1 y caída libre)",
          "enunciado": "Desde un puesto de vigilancia costera en un acantilado a 45 m sobre el mar, se dispara verticalmente una bengala de socorro cuya altura en metros a los $t$ segundos es $h(t) = -5t^2 + 40t + 45$. El radar marítimo la detecta solo si $h(t) \\ge 120\\text{ m}$. Queremos saber cuándo entra y sale del radar, su altura máxima y cuándo impacta en el mar.",
          "instruccion": "Resuelve aplicando las propiedades de la función cuadrática y analizando el sentido real de cada resultado:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\textbf{Zona de radar } (h = 120): \\; -5t^2 + 40t + 45 = 120 \\iff t^2 - 8t + 15 = 0 \\iff (t - 3)(t - 5) = 0 \\implies t_1 = 3\\text{ s (subida)}, \\; t_2 = 5\\text{ s (bajada)}. \\text{ Es visible en el radar durante } 5 - 3 = \\mathbf{2\\text{ segundos}}."
            },
            {
              "letra": "b)",
              "expresion": "\\textbf{Vértice y altura máxima:} \\; t_v = -\\dfrac{b}{2a} = -\\dfrac{40}{2(-5)} = \\mathbf{4\\text{ s}} \\implies h_{\\max} = h(4) = -5(16) + 40(4) + 45 = \\mathbf{125\\text{ metros}}."
            },
            {
              "letra": "c)",
              "expresion": "\\textbf{Impacto en el agua } (h = 0): \\; -5t^2 + 40t + 45 = 0 \\iff t^2 - 8t - 9 = 0 \\iff (t - 9)(t + 1) = 0 \\implies t_1 = 9\\text{ s}, \\; t_2 = -1\\text{ s}."
            },
            {
              "letra": "d)",
              "expresion": "\\textbf{Sentido real del tiempo:} \\; t_2 = -1\\text{ s es una solución matemática imposible en la realidad } (t \\ge 0). \\text{ Por tanto, la bengala cae al mar a los } \\boldsymbol{t = 9\\text{ segundos}}."
            }
          ],
          "idea_clave": "El vértice siempre se sitúa exactamente a la mitad entre los dos instantes en que la bengala está a la misma altura (entre $t=3$ y $t=5$, el punto medio es $t=4$). Descarta siempre los tiempos negativos al modelizar magnitudes físicas."
        },
        {
          "numero": 2,
          "titulo": "Problema 2: Achique de agua en un sótano tras la DANA (Ecuación racional de trabajo conjunto)",
          "referencia": "Puntos 1.3 y 1.5 (Págs. 7-8, análogo a Ejemplo 1.3 y Problema aplicado 1.4)",
          "enunciado": "Para evacuar el agua de un sótano inundado tras un temporal en el Campo de Cartagena se emplean dos motobombas. La bomba principal $A$ tardaría $x$ horas sola, y la bomba auxiliar $B$ tarda 5 horas más ($x + 5$ horas). Si funcionan las dos motobombas juntas a la vez, el sótano se vacía en exactamente 6 horas. Calcula el tiempo que tardaría cada una por separado.",
          "instruccion": "Plantea la ecuación de flujos por unidad de tiempo vigilando los valores prohibidos en el Paso 0:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\textbf{Paso 0 y planteamiento de flujos:} \\; \\text{En 1 hora la bomba } A \\text{ achica } \\dfrac{1}{x}, \\text{ la bomba } B \\text{ achica } \\dfrac{1}{x+5} \\text{ y juntas achican } \\dfrac{1}{6}. \\text{ Ecuación: } \\dfrac{1}{x} + \\dfrac{1}{x+5} = \\dfrac{1}{6}. \\text{ Valores prohibidos: } x \\ne 0, \\; x \\ne -5."
            },
            {
              "letra": "b)",
              "expresion": "\\textbf{Quitar denominadores con el m.c.m. } 6x(x+5): \\; 6(x+5) + 6x = x(x+5) \\iff 12x + 30 = x^2 + 5x \\iff x^2 - 7x - 30 = 0."
            },
            {
              "letra": "c)",
              "expresion": "\\textbf{Resolver la ecuación cuadrática:} \\; (x - 10)(x + 3) = 0 \\implies x_1 = 10, \\quad x_2 = -3."
            },
            {
              "letra": "d)",
              "expresion": "\\textbf{Interpretación en el contexto:} \\; x = -3 \\text{ carece de sentido físico (un tiempo de trabajo no puede ser negativo). La bomba } A \\text{ tarda } \\boldsymbol{10\\text{ horas}} \\text{ y la bomba } B \\text{ tarda } 10 + 5 = \\boldsymbol{15\\text{ horas}}."
            }
          ],
          "idea_clave": "¡Nunca sumes los tiempos directamente ($x + x + 5 = 6$ es un disparate)! En problemas de trabajo conjunto se suman siempre las fracciones de trabajo realizadas en una hora: $\\frac{1}{x} + \\frac{1}{x+5} = \\frac{1}{6}$."
        },
        {
          "numero": 3,
          "titulo": "Problema 3: Longitud del cable de una tirolina (Ecuación con raíz y soluciones falsas)",
          "referencia": "Punto 2.3 (Pág. 13, análogo a Ejemplo 2.1 y 2.2)",
          "enunciado": "En un parque multiaventura se va a instalar una tirolina atando un cable desde una torre hasta una pica clavada en el suelo a $x$ metros de distancia de la base. Para que la caída sea segura, la longitud que debe tener el cable viene dada por $\\sqrt{x + 5}\\text{ metros}$, y el rollo de cable que tienen en el parque mide exactamente $7 - x\\text{ metros}$. Queremos saber a qué distancia $x$ hay que colocar la pica en el suelo para que el cable encaje justo:",
          "instruccion": "Resuelve la ecuación con radical aplicando el Paso 0 y comprueba obligatoriamente las soluciones:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\textbf{Paso 0 (Condiciones para que tenga sentido):} \\; \\text{El interior de la raíz no puede ser negativo: } x + 5 \\ge 0 \\implies x \\ge -5. \\text{ Además, como una raíz da siempre un resultado positivo o cero, la longitud del cable exige: } 7 - x \\ge 0 \\implies x \\le 7. \\text{ Intervalo admisible: } \\boldsymbol{x \\in [-5, 7]}."
            },
            {
              "letra": "b)",
              "expresion": "\\textbf{Elevar al cuadrado para quitar la raíz:} \\; (\\sqrt{x + 5})^2 = (7 - x)^2 \\iff x + 5 = 49 - 14x + x^2 \\iff x^2 - 15x + 44 = 0."
            },
            {
              "letra": "c)",
              "expresion": "\\textbf{Resolver la ecuación de 2.º grado:} \\; (x - 4)(x - 11) = 0 \\implies x_1 = 4, \\quad x_2 = 11."
            },
            {
              "letra": "d)",
              "expresion": "\\textbf{Comprobar en la ecuación original:} \\; \\text{Para } x = 4: \\sqrt{4+5} = \\sqrt{9} = 3 \\text{ y } 7-4=3 \\text{ (\\textbf{VÁLIDA})}. \\text{ Para } x = 11: \\sqrt{11+5} = \\sqrt{16} = 4, \\text{ pero } 7-11=-4 \\; (4 \\ne -4, \\text{ \\textbf{FALSA}}). \\text{ La pica debe colocarse a } \\boldsymbol{x = 4\\text{ metros}} \\text{ de la base}."
            }
          ],
          "idea_clave": "Al elevar ambos miembros al cuadrado se pierde la información del signo (porque $(-4)^2 = 4^2 = 16$), por lo que pueden colarse soluciones falsas. La comprobación en la ecuación original es un paso algebraico obligatorio e innegociable."
        },
        {
          "numero": 4,
          "titulo": "Problema 4: Jugadores en un videojuego online (Ecuación exponencial cuadrática)",
          "referencia": "Punto 2.3 (Pág. 14, análogo a Ejemplo 2.3 situación 2)",
          "enunciado": "Un nuevo videojuego online acaba de salir al mercado. El número de jugadores conectados (en miles) transcurridas $t$ horas desde el estreno viene dado por la fórmula $N(t) = 4^t - 3 \\cdot 2^t$. La empresa necesita encender un servidor de apoyo en cuanto se alcancen los 4000 jugadores conectados a la vez ($N(t) = 4$ miles). ¿A las cuántas horas del estreno tendrán que encender el servidor de apoyo?",
          "instruccion": "Reconoce la misma base de potencias, realiza un cambio de variable y resuelve con rigor:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\textbf{Ecuación y potencias de base 2:} \\; 4^t - 3 \\cdot 2^t = 4. \\text{ Como } 4 = 2^2, \\text{ podemos escribir } 4^t = (2^t)^2, \\text{ quedando: } (2^t)^2 - 3 \\cdot (2^t) - 4 = 0."
            },
            {
              "letra": "b)",
              "expresion": "\\textbf{Cambio de variable:} \\; \\text{Hacemos } y = 2^t \\; (\\text{con la condición obligatoria } y > 0). \\text{ Queda: } y^2 - 3y - 4 = 0."
            },
            {
              "letra": "c)",
              "expresion": "\\textbf{Resolver en } y: \\; (y - 4)(y + 1) = 0 \\implies y_1 = 4, \\quad y_2 = -1."
            },
            {
              "letra": "d)",
              "expresion": "\\textbf{Deshacer el cambio para hallar el tiempo } t: \\; \\text{Para } y_1 = 4: 2^t = 4 = 2^2 \\implies \\boldsymbol{t = 2\\text{ horas}}. \\text{ Para } y_2 = -1: 2^t = -1 \\text{ es \\textbf{imposible en }} \\mathbb{R} \\text{ (una potencia de base positiva nunca da negativo)}."
            }
          ],
          "idea_clave": "No intentes aplicar logaritmos término a término en una resta (el logaritmo de una resta NO es la resta de logaritmos). Al observar bases relacionadas como $4^t$ y $2^t$, el método maestro es el cambio de variable $y = 2^t$ y vigilar que $y > 0$."
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
