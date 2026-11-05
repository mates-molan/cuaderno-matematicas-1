// =========================================================================
// DATOS DEL TEMA 2: ECUACIONES, NÚMEROS COMPLEJOS Y SISTEMAS
// =========================================================================
window.TEMAS_DATA = window.TEMAS_DATA || {};
window.TEMAS_DATA[2] = {
  "id": 2,
  "titulo": "Tema 2: Ecuaciones, Números Complejos y Sistemas",
  "evaluacion": "1.ª Evaluación",
  "sesiones_impartidas": 6,
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
          "instruccion": "Plantea la ecuación que iguala ambos volúmenes y resuélvela para hallar las medidas posibles:",
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
          "instruccion": "Plantea la ecuación $h(x) = 0$ y resuélvela para hallar los puntos de contacto con el suelo:",
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
          "titulo": "Problema 3: Temperatura de equilibrio en el laboratorio (Ecuación con exponente 6)",
          "referencia": "Punto 1.3 (Pág. 6, análogo a Ejemplo 1.2 b)",
          "enunciado": "En una práctica de laboratorio de ciencias, la temperatura $x$ (en grados) a la que se estabiliza una mezcla química cumple la ecuación $x^6 - 26x^3 = 27$, es decir, $x^6 - 26x^3 - 27 = 0$. Averigua todas las temperaturas reales a las que la mezcla puede estar en equilibrio.",
          "instruccion": "Resuelve la ecuación y halla las temperaturas reales a las que la mezcla está en equilibrio:",
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
          "instruccion": "Plantea la ecuación de equilibrio teniendo en cuenta el Paso 0 y calcula el valor de $x$:",
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
      "numero": "2 y 3",
      "fecha": "Jueves 29 y Viernes 30 de Octubre de 2026",
      "titulo": "Modelado Práctico con Parábolas, Racionales, Radicales, Exponenciales y Logaritmos",
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
          "instruccion": "Plantea la ecuación de trabajo conjunto y calcula el tiempo que tardaría cada motobomba por separado:",
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
          "titulo": "Problema 3: Longitud del cable de una tirolina (Ecuación con radical)",
          "referencia": "Punto 2.3 (Pág. 13, análogo a Ejemplo 2.1 y 2.2)",
          "enunciado": "En un parque multiaventura se va a instalar una tirolina atando un cable desde una torre hasta una pica clavada en el suelo a $x$ metros de distancia de la base. Para que la caída sea segura, la longitud que debe tener el cable viene dada por $\\sqrt{x + 5}\\text{ metros}$, y el rollo de cable que tienen en el parque mide exactamente $7 - x\\text{ metros}$. Queremos saber a qué distancia $x$ hay que colocar la pica en el suelo para que el cable encaje justo:",
          "instruccion": "Determina la región factible (Paso 0), resuelve la ecuación y halla a qué distancia se debe colocar la pica:",
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
          "titulo": "Problema 4: Jugadores en un videojuego online (Ecuación exponencial)",
          "referencia": "Punto 2.3 (Pág. 14, análogo a Ejemplo 2.3 situación 2)",
          "enunciado": "Un nuevo videojuego online acaba de salir al mercado. El número de jugadores conectados (en miles) transcurridas $t$ horas desde el estreno viene dado por la fórmula $N(t) = 4^t - 3 \\cdot 2^t$. La empresa necesita encender un servidor de apoyo en cuanto se alcancen los 4000 jugadores conectados a la vez ($N(t) = 4$ miles). ¿A las cuántas horas del estreno tendrán que encender el servidor de apoyo?",
          "instruccion": "Plantea la ecuación que iguala el número de jugadores a 4000 ($N(t) = 4$) y resuélvela para hallar las horas transcurridas:",
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
        },
        {
          "numero": 5,
          "titulo": "Problema 5: Los altavoces del concierto de fiestas (Ecuación logarítmica)",
          "referencia": "Puntos 2.2 C y 2.3 (Págs. 12-14, análogo a Ejemplo 2.4 y decibelios)",
          "enunciado": "En el concierto de las fiestas patronales se colocan dos torres de altavoces. La fuerza del sonido que llega desde la torre principal a una distancia de $x$ metros es de $20\\log(x^2 - 2x - 8)\\text{ decibelios}$, y la que llega desde la torre de apoyo es de $10\\big[\\log(x + 2) + \\log(x + 26)\\big]\\text{ decibelios}$. ¿A qué distancia $x$ (en metros) debemos colocarnos para escuchar la música exactamente al mismo volumen desde ambas torres?",
          "instruccion": "Plantea la ecuación que iguala el nivel de sonido de ambas torres, resuélvela y determina la distancia $x$:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\textbf{Planteamiento:} \\; \\text{Para escuchar ambas torres con la misma intensidad, igualamos ambas expresiones: } 20\\log(x^2 - 2x - 8) = 10\\big[\\log(x + 2) + \\log(x + 26)\\big]."
            },
            {
              "letra": "b)",
              "expresion": "\\textbf{Paso 0 (Valores permitidos en } \\mathbb{R}\\textbf{):} \\; \\text{Los argumentos de los logaritmos deben ser estrictamente positivos: } x^2 - 2x - 8 > 0 \\iff (x - 4)(x + 2) > 0 \\implies x \\in (-\\infty, -2) \\cup (4, +\\infty); \\; x + 2 > 0 \\implies x > -2; \\; x + 26 > 0 \\implies x > -26. \\text{ Zona permitida (intersección): } \\boldsymbol{x > 4}."
            },
            {
              "letra": "c)",
              "expresion": "\\textbf{Simplificar y agrupar a ambos lados:} \\; \\text{Dividiendo entre 10: } 2\\log(x^2 - 2x - 8) = \\log(x + 2) + \\log(x + 26). \\text{ Subimos el 2 al exponente y agrupamos la suma en un producto: } \\log\\big((x^2 - 2x - 8)^2\\big) = \\log\\big((x + 2)(x + 26)\\big)."
            },
            {
              "letra": "d)",
              "expresion": "\\textbf{Igualar argumentos y obtener la ecuación de 4.º grado:} \\; (x^2 - 2x - 8)^2 = (x + 2)(x + 26) \\iff x^4 - 4x^3 - 12x^2 + 32x + 64 = x^2 + 28x + 52 \\iff \\boldsymbol{x^4 - 4x^3 - 13x^2 + 4x + 12 = 0}."
            },
            {
              "letra": "e)",
              "expresion": "\\textbf{Resolución por Ruffini (divisores de 12):} \\; \\text{Probamos } x = 1: \\; (1)^4 - 4(1)^3 - 13(1)^2 + 4(1) + 12 = 0 \\implies \\text{Ruffini por } (x - 1) \\text{ da cociente } x^3 - 3x^2 - 16x - 12 = 0. \\text{ En el cociente probamos } x = -1: \\; (-1)^3 - 3(-1)^2 - 16(-1) - 12 = 0 \\implies \\text{Ruffini por } (x + 1) \\text{ da } x^2 - 4x - 12 = 0 \\iff (x - 6)(x + 2) = 0. \\text{ Cuatro soluciones exactas: } x_1 = 6, \\; x_2 = 1, \\; x_3 = -1, \\; x_4 = -2."
            },
            {
              "letra": "f)",
              "expresion": "\\textbf{Filtro del Paso 0 y solución final:} \\; \\text{Contrastamos con } x > 4: \\; x_2 = 1, \\; x_3 = -1 \\text{ y } x_4 = -2 \\text{ son \\textbf{soluciones falsas}} \\text{ (hacen negativos o cero los argumentos de los logaritmos). La \\textbf{única solución válida}} \\text{ es } \\boldsymbol{x = 6\\text{ metros}}."
            }
          ],
          "idea_clave": "Al simplificar entre 10 y subir el coeficiente $2$ al exponente ($2\\log A = \\log(A^2)$), el argumento cuadrático se eleva al cuadrado produciendo un polinomio de 4.º grado. Se igualan argumentos, se pasa todo a un miembro y se aplica la regla de Ruffini dos veces hasta llegar a una ecuación de 2.º grado. Es imprescindible contrastar siempre los 4 candidatos con el Paso 0 ($x > 4$): las tres raíces falsas quedan descartadas, sobreviviendo únicamente la distancia real $x = 6\\text{ m}$.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Plantea la ecuación que iguala el nivel de sonido de ambas torres e indica su región factible (Paso 0)."
            },
            {
              "letra": "b)",
              "texto": "Resuelve la ecuación y calcula a qué distancia $x$ debemos colocarnos."
            }
          ]
        }
      ]
    },
    {
      "numero": "4, 5 y 6",
      "fecha": "Lunes 2, Martes 3 y Jueves 5 de Noviembre de 2026",
      "titulo": "Modelado Geométrico con Ecuaciones (Prismas, Círculos, Rectángulos y Áreas)",
      "ejercicios": [
        {
          "numero": 1,
          "titulo": "Problema 1: Capacidad de dos depósitos de agua (Ecuación polinómica)",
          "referencia": "Punto 1.3 (Pág. 6, análogo a Ejemplo 1.1 y cálculo de volúmenes)",
          "enunciado": "Una empresa agrícola instala dos depósitos de agua con forma de prisma rectangular. El primer depósito tiene una altura de $(x + 4)\\text{ m}$, un ancho de $(x + 2)\\text{ m}$ y un largo de $(2x + 1)\\text{ m}$. El segundo depósito comparte la misma altura $(x + 4)\\text{ m}$ y el mismo ancho $(x + 2)\\text{ m}$, pero su largo mide $(x + 6)\\text{ m}$. Queremos saber para qué medida de $x$ tienen exactamente la misma capacidad de agua ($V_1 = V_2$).",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Plantea la ecuación que iguala la capacidad de ambos depósitos ($V_1 = V_2$) y resuélvela para hallar el valor de $x$."
            },
            {
              "letra": "b)",
              "texto": "Calcula las tres dimensiones reales (largo, ancho y alto) de cada depósito y su volumen común en metros cúbicos."
            }
          ],
          "instruccion": "Plantea la ecuación que iguala ambos volúmenes, resuélvela y calcula las dimensiones y el volumen común:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\textbf{Planteamiento de volúmenes } (V_1 = V_2): \\; (x + 4)(x + 2)(2x + 1) = (x + 4)(x + 2)(x + 6)"
            },
            {
              "letra": "b)",
              "expresion": "\\textbf{Paso 0 (Medidas reales):} \\; \\text{Todas las dimensiones deben ser estrictamente positivas: } x + 4 > 0, \\; x + 2 > 0, \\; 2x + 1 > 0, \\; x + 6 > 0 \\implies \\boldsymbol{x > -1/2} \\text{ (y en la práctica física, } x > 0\\text{)}."
            },
            {
              "letra": "c)",
              "expresion": "\\textbf{Pasar todo a la izquierda y sacar factor común:} \\; (x + 4)(x + 2)(2x + 1) - (x + 4)(x + 2)(x + 6) = 0 \\iff (x + 4)(x + 2)\\big[(2x + 1) - (x + 6)\\big] = 0 \\iff \\boldsymbol{(x + 4)(x + 2)(x - 5) = 0}."
            },
            {
              "letra": "d)",
              "expresion": "\\textbf{Soluciones y sentido físico:} \\; x_1 = -4, \\; x_2 = -2, \\; x_3 = 5. \\text{ Las opciones } x = -4 \\text{ y } x = -2 \\text{ son \\textbf{imposibles}} \\text{ (darían altura o ancho nulo o negativo). Por tanto, la \\textbf{única solución válida}} \\text{ es } \\boldsymbol{x = 5\\text{ metros}}."
            },
            {
              "letra": "e)",
              "expresion": "\\textbf{Dimensiones y volumen final:} \\; \\text{Alto } = 5 + 4 = \\mathbf{9\\text{ m}}, \\; \\text{Ancho } = 5 + 2 = \\mathbf{7\\text{ m}}, \\; \\text{Largo } = 2(5) + 1 = 5 + 6 = \\mathbf{11\\text{ m}}. \\; \\text{Volumen común: } V = 11 \\times 7 \\times 9 = \\mathbf{693\\text{ m}^3}."
            }
          ],
          "idea_clave": "Si multiplicas los tres paréntesis a cada lado generas polinomios de grado 3 y te verías obligado a pasar todo a un miembro y aplicar la regla de Ruffini. Al observar que ambos depósitos comparten la altura $(x+4)$ y el ancho $(x+2)$, sacas directamente factor común $(x+4)(x+2)$ y la ecuación se resuelve en dos pasos simples."
        },
        {
          "numero": 2,
          "titulo": "Problema 2: Fuente circular y paseo de adoquines (Círculos y corona circular)",
          "referencia": "Punto 1.3 (Pág. 6, análogo a Ejemplo 1.1 y cálculo con áreas circulares)",
          "enunciado": "En el centro de una plaza se construye una fuente circular de radio $x\\text{ metros}$. Alrededor de la fuente se instala un paseo circular de adoquines (corona circular) con una anchura fija de $4\\text{ metros}$, de modo que el radio exterior total del conjunto es $(x + 4)\\text{ metros}$. El ayuntamiento exige que la superficie del paseo de adoquines sea exactamente el triple de la superficie ocupada por el agua de la fuente.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Expresa en función de $x$ el área de la fuente central y el área del paseo de adoquines, y plantea la ecuación correspondiente."
            },
            {
              "letra": "b)",
              "texto": "Resuelve la ecuación para hallar el radio de la fuente, el radio exterior del conjunto y la superficie de cada zona."
            }
          ],
          "instruccion": "Plantea la ecuación que relaciona ambas superficies, resuélvela y calcula los radios y las áreas:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\textbf{Fórmulas de áreas:} \\; \\text{Área fuente: } A_{\\text{fuente}} = \\pi x^2. \\; \\text{Radio exterior: } R = x + 4. \\; \\text{Área del paseo (corona): } A_{\\text{paseo}} = \\pi(x + 4)^2 - \\pi x^2."
            },
            {
              "letra": "b)",
              "expresion": "\\textbf{Planteamiento de la condición } (A_{\\text{paseo}} = 3 A_{\\text{fuente}}): \\; \\pi(x + 4)^2 - \\pi x^2 = 3\\pi x^2."
            },
            {
              "letra": "c)",
              "expresion": "\\textbf{Paso 0 y simplificación de } \\pi: \\; \\text{El radio debe ser positivo: } \\boldsymbol{x > 0}. \\text{ Dividiendo toda la ecuación entre } \\pi \\text{ (no hace falta usar decimales): } (x + 4)^2 - x^2 = 3x^2."
            },
            {
              "letra": "d)",
              "expresion": "\\textbf{Desarrollar y agrupar en ecuación de 2.º grado:} \\; x^2 + 8x + 16 - x^2 = 3x^2 \\iff 8x + 16 = 3x^2 \\iff \\boldsymbol{3x^2 - 8x - 16 = 0}."
            },
            {
              "letra": "e)",
              "expresion": "\\textbf{Resolución de la cuadrática:} \\; x = \\dfrac{8 \\pm \\sqrt{(-8)^2 - 4(3)(-16)}}{2(3)} = \\dfrac{8 \\pm \\sqrt{64 + 192}}{6} = \\dfrac{8 \\pm \\sqrt{256}}{6} = \\dfrac{8 \\pm 16}{6} \\implies x_1 = \\dfrac{24}{6} = 4, \\; x_2 = -\\dfrac{8}{6} = -\\dfrac{4}{3}."
            },
            {
              "letra": "f)",
              "expresion": "\\textbf{Filtro con el Paso 0 y sentido real:} \\; x_2 = -4/3 \\text{ queda \\textbf{descartada}} \\text{ porque un radio no puede ser negativo } (x > 0). \\text{ Por tanto, la \\textbf{única solución válida}} \\text{ es } \\boldsymbol{x = 4\\text{ metros}}."
            },
            {
              "letra": "g)",
              "expresion": "\\textbf{Dimensiones y áreas finales:} \\; \\text{Radio de la fuente: } r = \\mathbf{4\\text{ m}} \\implies A_{\\text{fuente}} = \\pi(4^2) = \\mathbf{16\\pi\\text{ m}^2} \\approx 50{,}27\\text{ m}^2. \\; \\text{Radio exterior: } R = 4 + 4 = \\mathbf{8\\text{ m}}. \\; \\text{Área del paseo: } \\pi(8^2) - 16\\pi = 64\\pi - 16\\pi = \\mathbf{48\\pi\\text{ m}^2} \\approx 150{,}80\\text{ m}^2. \\text{ (Comprobación: } 48\\pi = 3 \\times 16\\pi)."
            }
          ],
          "idea_clave": "Al calcular el área de una corona circular restando el círculo interior del exterior ($A = \\pi R^2 - \\pi r^2$), el número $\\pi$ multiplica a todos los términos de la igualdad y se cancela dividiendo entre $\\pi$. Esto evita operar con decimales infinitos y conduce a una ecuación de segundo grado limpia y exacta."
        },
        {
          "numero": 3,
          "titulo": "Problema 3: Pantalla panorámica y diagonal (Ecuación bicuadrada)",
          "referencia": "Punto 1.3 (Pág. 7, análogo a Ejemplo 1.2 y Teorema de Pitágoras)",
          "enunciado": "Un fabricante diseña una pantalla rectangular con una superficie fija de $48\\text{ cm}^2$. Para mantener esa área, la base mide $2x\\text{ cm}$ y la altura mide $\\dfrac{24}{x}\\text{ cm}$. La empresa necesita que la diagonal entre esquinas opuestas de la pantalla mida exactamente $10\\text{ cm}$.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Aplica el Teorema de Pitágoras para plantear la ecuación que relaciona la base, la altura y la diagonal de la pantalla."
            },
            {
              "letra": "b)",
              "texto": "Resuelve la ecuación obtenida y calcula las posibles dimensiones reales (base y altura) de la pantalla."
            }
          ],
          "instruccion": "Aplica el Teorema de Pitágoras para relacionar los lados con la diagonal, resuelve la ecuación y calcula las medidas de la pantalla:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\textbf{Planteamiento por Pitágoras:} \\; (\\text{base})^2 + (\\text{altura})^2 = (\\text{diagonal})^2 \\iff (2x)^2 + \\left(\\frac{24}{x}\\right)^2 = 10^2 \\iff 4x^2 + \\frac{576}{x^2} = 100."
            },
            {
              "letra": "b)",
              "expresion": "\\textbf{Obtención de la ecuación bicuadrada:} \\; \\text{Multiplicamos toda la ecuación por } x^2 \\text{ (con } x > 0\\text{)}: \\; 4x^4 + 576 = 100x^2 \\iff \\boldsymbol{4x^4 - 100x^2 + 576 = 0}."
            },
            {
              "letra": "c)",
              "expresion": "\\textbf{Cambio de variable } z = x^2: \\; 4z^2 - 100z + 576 = 0. \\text{ Dividiendo entre 4 para simplificar el cálculo: } z^2 - 25z + 144 = 0."
            },
            {
              "letra": "d)",
              "expresion": "\\textbf{Resolución de la cuadrática:} \\; z = \\dfrac{25 \\pm \\sqrt{625 - 576}}{2} = \\dfrac{25 \\pm 7}{2} \\implies z_1 = 16, \\; z_2 = 9."
            },
            {
              "letra": "e)",
              "expresion": "\\textbf{Deshacer el cambio y dimensiones reales:} \\; \\text{Para } z = 16: x^2 = 16 \\implies x = 4\\text{ cm } (x = -4 \\text{ descartado por ser longitud}). \\text{ Base } = 2(4) = \\mathbf{8\\text{ cm}}, \\; \\text{Altura } = 24/4 = \\mathbf{6\\text{ cm}}. \\; \\text{Para } z = 9: x^2 = 9 \\implies x = 3\\text{ cm}. \\text{ Base } = 2(3) = \\mathbf{6\\text{ cm}}, \\; \\text{Altura } = 24/3 = \\mathbf{8\\text{ cm}}."
            }
          ],
          "idea_clave": "Al elevar la fracción al cuadrado y multiplicar por $x^2$ aparece una ecuación bicuadrada pura con coeficiente principal 4. Las cuatro soluciones matemáticas ($\\pm 4$ y $\\pm 3$) se reducen a dos dimensiones físicas positivas: $8 \\times 6\\text{ cm}$ (pantalla horizontal) o $6 \\times 8\\text{ cm}$ (pantalla vertical), ambas con la misma diagonal de 10 cm."
        },
        {
          "numero": 4,
          "titulo": "Problema 4: Carteles publicitarios y proporciones (Ecuación racional)",
          "referencia": "Punto 1.3 (Pág. 8, análogo a Ejemplo 1.3 y fracciones algebraicas)",
          "enunciado": "Un diseñador crea dos carteles publicitarios rectangulares. El primer cartel tiene un largo de $(x + 3)\\text{ m}$ y un alto de $(x - 1)\\text{ m}$. El segundo cartel invierte la orientación para un espacio vertical: su largo mide $(x - 1)\\text{ m}$ y su alto mide $(x + 3)\\text{ m}$. Queremos que la suma de las proporciones de ambos carteles (largo dividido entre alto de cada uno) sea exactamente igual a $2{,}5 = \\dfrac{5}{2}$.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Indica qué condiciones deben cumplir las medidas (Paso 0) y plantea la ecuación correspondiente a la suma de las proporciones de ambos carteles."
            },
            {
              "letra": "b)",
              "texto": "Resuelve la ecuación y calcula el largo y el alto de cada uno de los carteles."
            }
          ],
          "instruccion": "Plantea la ecuación de proporciones teniendo en cuenta el Paso 0, resuélvela y halla las medidas de cada cartel:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\textbf{Planteamiento:} \\; \\frac{\\text{Largo } 1}{\\text{Alto } 1} + \\frac{\\text{Largo } 2}{\\text{Alto } 2} = \\frac{5}{2} \\iff \\frac{x + 3}{x - 1} + \\frac{x - 1}{x + 3} = \\frac{5}{2}."
            },
            {
              "letra": "b)",
              "expresion": "\\textbf{Paso 0 (Valores prohibidos y medidas reales):} \\; \\text{Los denominadores no pueden anularse: } x \\ne 1, \\; x \\ne -3. \\text{ Además, para que el alto sea positivo: } x - 1 > 0 \\implies \\boldsymbol{x > 1}."
            },
            {
              "letra": "c)",
              "expresion": "\\textbf{Eliminar denominadores con el m.c.m. } 2(x - 1)(x + 3): \\; 2(x + 3)^2 + 2(x - 1)^2 = 5(x - 1)(x + 3)."
            },
            {
              "letra": "d)",
              "expresion": "\\textbf{Desarrollar y agrupar:} \\; 2(x^2 + 6x + 9) + 2(x^2 - 2x + 1) = 5(x^2 + 2x - 3) \\iff 4x^2 + 8x + 20 = 5x^2 + 10x - 15 \\iff \\boldsymbol{x^2 + 2x - 35 = 0}."
            },
            {
              "letra": "e)",
              "expresion": "\\textbf{Soluciones y filtro con el Paso 0:} \\; (x + 7)(x - 5) = 0 \\implies x_1 = 5, \\; x_2 = -7. \\text{ Descartamos } x_2 = -7 \\text{ porque queda fuera de la zona permitida } (x > 1). \\text{ La \\textbf{única solución válida}} \\text{ es } \\boldsymbol{x = 5\\text{ metros}}."
            },
            {
              "letra": "f)",
              "expresion": "\\textbf{Dimensiones de los carteles:} \\; \\text{Cartel 1: Largo } = 5 + 3 = \\mathbf{8\\text{ m}}, \\; \\text{Alto } = 5 - 1 = \\mathbf{4\\text{ m}} \\text{ (proporción } 8/4 = 2). \\; \\text{Cartel 2: Largo } = \\mathbf{4\\text{ m}}, \\; \\text{Alto } = \\mathbf{8\\text{ m}} \\text{ (proporción } 4/8 = 0{,}5). \\; \\text{Suma: } 2 + 0{,}5 = \\mathbf{2{,}5}."
            }
          ],
          "idea_clave": "En una ecuación racional con la incógnita en numeradores y denominadores, es obligatorio fijar primero el Paso 0 ($x > 1$). Al multiplicar por el m.c.m. se transforma en una ecuación de segundo grado donde la raíz negativa se descarta por anular el sentido físico de las longitudes."
        },
        {
          "numero": 5,
          "titulo": "Problema 5: Tirantes de sujeción de una carpa (Ecuación con radicales)",
          "referencia": "Punto 2.2 A (Pág. 11, análogo a Ejemplo 2.1 y eliminación de raíces)",
          "enunciado": "Para sujetar la estructura triangular del techo de una carpa de eventos se instalan dos cables tensores de acero. La longitud del primer tirante es de $L_1 = \\sqrt{2x + 7}\\text{ metros}$ y la del segundo tirante es de $L_2 = \\sqrt{x + 3}\\text{ metros}$. El equipo de montaje dispone de un cable continuo de exactamente $5\\text{ metros}$ para fabricar ambos tirantes sin que sobre material ($L_1 + L_2 = 5$).",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Determina la región factible (Paso 0), plantea la ecuación y halla sus posibles soluciones."
            },
            {
              "letra": "b)",
              "texto": "Comprueba las soluciones obtenidas y calcula cuántos metros mide cada uno de los dos tirantes de acero."
            }
          ],
          "instruccion": "Determina la región factible (Paso 0), resuelve la ecuación y halla la longitud de cada tirante:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\textbf{Planteamiento:} \\; \\sqrt{2x + 7} + \\sqrt{x + 3} = 5."
            },
            {
              "letra": "b)",
              "expresion": "\\textbf{Paso 0 (Región factible estricta):} \\; \\text{Las longitudes de los cables son las raíces } L_1 \\text{ y } L_2, \\text{ por lo que } x \\text{ no representa una longitud directa ni tiene por qué ser positiva; solo debe garantizar radicandos no negativos: } 2x + 7 \\ge 0 \\implies x \\ge -3{,}5; \\; x + 3 \\ge 0 \\implies x \\ge -3 \\implies x \\ge -3. \\text{ Al aislar la primera raíz: } \\sqrt{2x+7} = 5 - \\sqrt{x+3} \\ge 0 \\implies \\sqrt{x+3} \\le 5 \\implies x + 3 \\le 25 \\implies x \\le 22. \\text{ Al aislar la segunda raíz en el siguiente paso: } 21 - x \\ge 0 \\implies x \\le 21. \\text{ Por tanto, la \\textbf{región factible estricta}} \\text{ es } \\boldsymbol{x \\in [-3, 21]}."
            },
            {
              "letra": "c)",
              "expresion": "\\textbf{Primer aislamiento y cuadrado:} \\; \\sqrt{2x + 7} = 5 - \\sqrt{x + 3} \\implies (\\sqrt{2x + 7})^2 = (5 - \\sqrt{x + 3})^2 \\iff 2x + 7 = 25 - 10\\sqrt{x + 3} + (x + 3)."
            },
            {
              "letra": "d)",
              "expresion": "\\textbf{Segundo aislamiento y cuadrado:} \\; 2x + 7 = x + 28 - 10\\sqrt{x + 3} \\iff 10\\sqrt{x + 3} = 21 - x \\implies \\big(10\\sqrt{x + 3}\\big)^2 = (21 - x)^2."
            },
            {
              "letra": "e)",
              "expresion": "\\textbf{Resolución de la cuadrática:} \\; 100(x + 3) = 441 - 42x + x^2 \\iff 100x + 300 = x^2 - 42x + 441 \\iff \\boldsymbol{x^2 - 142x + 141 = 0} \\iff (x - 1)(x - 141) = 0 \\implies x_1 = 1, \\; x_2 = 141."
            },
            {
              "letra": "f)",
              "expresion": "\\textbf{Filtro con la región factible y comprobación:} \\; \\text{El valor } x_2 = 141 \\text{ queda \\textbf{descartado de inmediato}} \\text{ porque cae fuera de la región factible } (141 > 21) \\text{ y genera una solución falsa: } \\sqrt{289} + \\sqrt{144} = 17 + 12 = 29 \\ne 5. \\text{ La \\textbf{única solución válida}} \\text{ es } \\boldsymbol{x = 1}."
            },
            {
              "letra": "g)",
              "expresion": "\\textbf{Longitud de los tirantes:} \\; L_1 = \\sqrt{2(1) + 7} = \\sqrt{9} = \\mathbf{3\\text{ m}}, \\; L_2 = \\sqrt{1 + 3} = \\sqrt{4} = \\mathbf{2\\text{ m}}. \\; \\text{Comprobación: } 3 + 2 = \\mathbf{5\\text{ m}}."
            }
          ],
          "idea_clave": "Al tener dos raíces, es imprescindible aislar una de ellas antes de elevar al cuadrado para que solo quede un radical en el siguiente paso. Al elevar dos veces al cuadrado se pueden introducir soluciones falsas; la región factible del Paso 0 ($x \\in [-3, 21]$) permite detectar y eliminar la raíz espuria $x=141$ al instante sin dudas."
        },
        {
          "numero": 6,
          "titulo": "Problema 6: Superficie de columnas y paneles (Ecuación exponencial)",
          "referencia": "Punto 2.2 B (Pág. 12, análogo a Ejemplo 2.2 y cambio de variable)",
          "enunciado": "En el diseño de una pérgola metálica para un parque se instalan dos tipos de elementos de apoyo: 2 columnas cuadradas cuya base tiene una superficie de $9^x\\text{ m}^2$ cada una, y 5 paneles rectangulares de apoyo cuya base mide $3^x\\text{ m}^2$ cada uno. Entre las dos columnas y los cinco paneles ocupan una superficie total de suelo de exactamente $33\\text{ m}^2$.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Plantea la ecuación que suma la superficie de las dos columnas y los cinco paneles, y resuélvela para hallar el valor de $x$."
            },
            {
              "letra": "b)",
              "texto": "Calcula la superficie que ocupa cada columna y cada panel por separado."
            }
          ],
          "instruccion": "Plantea la ecuación de la superficie total, resuélvela y calcula el área de cada columna y de cada panel:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\textbf{Planteamiento de la superficie total:} \\; 2 \\cdot 9^x + 5 \\cdot 3^x = 33 \\iff 2(3^2)^x + 5 \\cdot 3^x = 33 \\iff \\mathbf{2(3^x)^2 + 5 \\cdot 3^x - 33 = 0}."
            },
            {
              "letra": "b)",
              "expresion": "\\textbf{Cambio de variable } t = 3^x \\text{ (con } t > 0\\text{):} \\; 2t^2 + 5t - 33 = 0."
            },
            {
              "letra": "c)",
              "expresion": "\\textbf{Resolución de la cuadrática con coeficiente 2:} \\; t = \\dfrac{-5 \\pm \\sqrt{5^2 - 4(2)(-33)}}{2(2)} = \\dfrac{-5 \\pm \\sqrt{25 + 264}}{4} = \\dfrac{-5 \\pm \\sqrt{289}}{4} = \\dfrac{-5 \\pm 17}{4}."
            },
            {
              "letra": "d)",
              "expresion": "\\textbf{Valores de } t \\textbf{ y filtro real:} \\; t_1 = \\dfrac{12}{4} = 3, \\quad t_2 = \\dfrac{-22}{4} = -\\dfrac{11}{2}. \\text{ Descartamos } t_2 = -11/2 \\text{ porque una potencia de base positiva nunca puede dar un valor negativo } (3^x > 0)."
            },
            {
              "letra": "e)",
              "expresion": "\\textbf{Deshacer el cambio y hallar } x: \\; 3^x = 3 = 3^1 \\implies \\boldsymbol{x = 1}."
            },
            {
              "letra": "f)",
              "expresion": "\\textbf{Superficie de los elementos:} \\; \\text{Área de cada columna: } 9^1 = 3^{2(1)} = \\mathbf{9\\text{ m}^2} \\text{ (las dos suman } 2 \\times 9 = 18\\text{ m}^2). \\; \\text{Área de cada panel: } 3^1 = \\mathbf{3\\text{ m}^2} \\text{ (los cinco suman } 5 \\times 3 = 15\\text{ m}^2). \\; \\text{Total: } 18 + 15 = \\mathbf{33\\text{ m}^2}."
            }
          ],
          "idea_clave": "Al expresar $9^x$ como $(3^x)^2$, la ecuación se reduce a una cuadrática con coeficiente principal 2. Al deshacer el cambio $t = 3^x$, cualquier valor negativo se descarta directamente porque la función exponencial de base positiva siempre toma valores estrictamente mayores que cero."
        },
        {
          "numero": 7,
          "titulo": "Problema 7: Pista deportiva y zona de césped (Ecuación logarítmica)",
          "referencia": "Puntos 2.2 C y 2.3 (Págs. 12-14, análogo a Ejemplo 2.4 y propiedades de potencias)",
          "enunciado": "En un polideportivo municipal se diseña una pista cuadrada de patinaje de lado $(x - 2)\\text{ metros}$ y una zona de césped rectangular de $8\\text{ metros}$ de ancho por $(x + 4)\\text{ metros}$ de largo. Para equilibrar el diseño de ambas zonas, el arquitecto establece que <strong>el doble del logaritmo del lado de la pista</strong> debe ser igual a <strong>el triple del logaritmo de 2 más el logaritmo del largo de la zona de césped</strong>.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Traduce la condición del arquitecto a una ecuación matemática e indica su región factible (Paso 0)."
            },
            {
              "letra": "b)",
              "texto": "Resuelve la ecuación obtenida y calcula las dimensiones y el área de ambas zonas."
            }
          ],
          "instruccion": "Traduce la condición a una ecuación matemática con su región factible (Paso 0), resuélvela y calcula las dimensiones y áreas:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\textbf{Traducción del texto a ecuación matemática:} \\; \\text{«El doble del logaritmo de } (x - 2)\\text{»} \\to 2\\log(x - 2); \\; \\text{«el triple del logaritmo de 2»} \\to 3\\log(2); \\; \\text{«más el logaritmo de } (x + 4)\\text{»} \\to +\\log(x + 4): \\; \\mathbf{2\\log(x - 2) = 3\\log(2) + \\log(x + 4)}."
            },
            {
              "letra": "b)",
              "expresion": "\\textbf{Paso 0 (Región factible estricta):} \\; \\text{Los argumentos deben ser estrictamente positivos: } x - 2 > 0 \\implies x > 2; \\; x + 4 > 0 \\implies x > -4. \\text{ Por tanto, la \\textbf{región factible}} \\text{ es } \\boldsymbol{x > 2}."
            },
            {
              "letra": "c)",
              "expresion": "\\textbf{Meter los números multiplicando como exponentes:} \\; 2\\log(x - 2) = \\log\\big((x - 2)^2\\big) \\quad \\text{y} \\quad 3\\log(2) = \\log(2^3) = \\log(8). \\text{ La ecuación queda: } \\log\\big((x - 2)^2\\big) = \\log(8) + \\log(x + 4)."
            },
            {
              "letra": "d)",
              "expresion": "\\textbf{Agrupar la suma en un producto e igualar argumentos:} \\; \\log\\big((x - 2)^2\\big) = \\log\\big(8(x + 4)\\big) \\iff (x - 2)^2 = 8(x + 4)."
            },
            {
              "letra": "e)",
              "expresion": "\\textbf{Resolución de la ecuación de segundo grado:} \\; x^2 - 4x + 4 = 8x + 32 \\iff \\boldsymbol{x^2 - 12x - 28 = 0} \\iff (x - 14)(x + 2) = 0 \\implies x_1 = 14, \\; x_2 = -2."
            },
            {
              "letra": "f)",
              "expresion": "\\textbf{Filtro con la región factible y sentido real:} \\; x_2 = -2 \\text{ queda \\textbf{descartada}} \\text{ porque cae fuera de la región factible } (x > 2) \\text{ y generaría } \\log(-4) \\text{ (imposible en } \\mathbb{R}\\text{)}. \\text{ La \\textbf{única solución válida}} \\text{ es } \\boldsymbol{x = 14\\text{ metros}}."
            },
            {
              "letra": "g)",
              "expresion": "\\textbf{Dimensiones y áreas de ambas zonas:} \\; \\text{Pista cuadrada: Lado } = 14 - 2 = \\mathbf{12\\text{ m}} \\implies \\text{Área } = 12^2 = \\mathbf{144\\text{ m}^2}. \\; \\text{Zona de césped: Ancho } = \\mathbf{8\\text{ m}}, \\; \\text{Largo } = 14 + 4 = \\mathbf{18\\text{ m}} \\implies \\text{Área } = 8 \\times 18 = \\mathbf{144\\text{ m}^2}."
            }
          ],
          "idea_clave": "Cuando el enunciado dice «el doble de un logaritmo» o «el triple de un logaritmo», se traduce como un coeficiente multiplicando por fuera ($2\\log A$ o $3\\log B$). Para poder agrupar o igualar logaritmos, la regla de oro es meter primero esos coeficientes dentro como exponentes ($2\\log A = \\log(A^2)$ y $3\\log 2 = \\log(2^3) = \\log 8$). El filtro con la región factible ($x > 2$) descarta de raíz la solución falsa negativa."
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
