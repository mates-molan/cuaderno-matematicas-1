// =========================================================================
// DATOS DEL TEMA 2: ECUACIONES, NÚMEROS COMPLEJOS Y SISTEMAS
// =========================================================================
window.TEMAS_DATA = window.TEMAS_DATA || {};
window.TEMAS_DATA[2] = {
  "id": 2,
  "titulo": "Tema 2: Ecuaciones, Números Complejos y Sistemas",
  "evaluacion": "1.ª Evaluación",
  "sesiones_impartidas": 14,
  "apuntes_pdf": "pdf/Apuntes_Tema2_Ecuaciones_Complejos_Sistemas_1Bach.pdf",
  "ejercicios_pdf": "pdf/Ficha_Problemas_Tema2_Ecuaciones_Complejos_Sistemas_1Bach.pdf",
  "repaso_pdf": "pdf/Ficha_Repaso_Examen_Tema2_Ecuaciones_Sistemas_Gauss_1Bach.pdf",
  "repaso_solucionario_pdf": null,
  "tareas_classroom": [
    {
      "id": "Tarea-03",
      "numero": 3,
      "titulo": "Tarea 3: Ecuaciones y Modelado (Problemas 1 al 12 de la Hoja)",
      "fecha_asignacion": "5 de Noviembre de 2026",
      "fecha_limite": "Jueves 12 de Noviembre de 2026 (20:00 h)",
      "estado": "cerrada",
      "pdf_tarea": "pdf/Ficha_Problemas_Tema2_Ecuaciones_Complejos_Sistemas_1Bach.pdf",
      "pdf_solucionario": "pdf/Ficha_Problemas_Tema2_Ecuaciones_Complejos_Sistemas_1Bach_Solucionario.pdf",
      "criterios_entrega": "Resuelve los problemas 1 al 12 de la hoja en tu libreta a mano, con orden, limpieza y todos los pasos algebraicos bien explicados (planteamiento, resolución y sentido real). Sube un único archivo PDF escaneado a Google Classroom (no se admiten fotos sueltas ni más de un archivo) antes del jueves 12 de Noviembre a las 20:00 h.",
      "ejercicios_incluidos": [
        "Problema 1: El cohete de agua (Ecuación de 2.º grado y cinemática).",
        "Problema 2: La pizza monstruo (Ecuación cuadrática y comparación de áreas).",
        "Problema 3: La caja de los auriculares (Ecuación polinómica de volumen y Ruffini).",
        "Problema 4: La pecera (Ecuación polinómica y dimensiones).",
        "Problema 5: La placa solar de la autocaravana (Ecuación bicuadrada con cambio de variable).",
        "Problema 6: El dron de la farmacia (Ecuación reducible a cuadrática).",
        "Problema 7: La casa rural de fin de curso (Ecuación racional y reparto de gastos).",
        "Problema 8: La escalera de los bomberos (Ecuación con radical y Teorema de Pitágoras).",
        "Problema 9: La cuerda del campamento (Ecuación con dos radicales y comprobación).",
        "Problema 10: El vídeo viral (Ecuación exponencial de base común).",
        "Problema 11: Los servidores del juego online (Ecuación exponencial con cambio de variable).",
        "Problema 12: Logaritmos en el juego y en el festival (Ecuaciones logarítmicas con propiedades)."
      ]
    },
    {
      "id": "Tarea-04",
      "numero": 4,
      "titulo": "Tarea 4: Números Complejos (Problemas 13 al 16 de la Hoja)",
      "fecha_asignacion": "13 de Noviembre de 2026",
      "fecha_limite": "Lunes 16 de Noviembre de 2026 (20:00 h)",
      "estado": "cerrada",
      "pdf_tarea": "pdf/Ficha_Problemas_Tema2_Ecuaciones_Complejos_Sistemas_1Bach.pdf",
      "pdf_solucionario": null,
      "criterios_entrega": "Resuelve los problemas 13 al 16 de la hoja (Bloque II: Números complejos) en tu libreta a mano, con orden, limpieza, operaciones paso a paso en forma binómica y representaciones gráficas claras en el plano complejo. Sube un único archivo PDF escaneado a Google Classroom (no se admiten fotos sueltas ni más de un archivo) antes del lunes 16 de Noviembre a las 20:00 h.",
      "ejercicios_incluidos": [
        "Problema 13: El problema «inútil» de Cardano (Ecuación de 2.º grado en ℂ y raíces complejas conjugadas).",
        "Problema 14: Los circuitos eléctricos (Operaciones e impedancias en forma binómica y producto z·z̄).",
        "Problema 15: El mapa del videojuego (Giros de 90° con potencias de i y simetría del conjugado en el plano complejo).",
        "Problema 16: El robot aspirador (Potencias altas de i módulo 4 y suma de potencias consecutivas)."
      ]
    }
  ],
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
              "texto": "<strong>Planteamiento y factorización:</strong> $(x^2 - 9)(2x - 1) = (x - 3)(x^2 + 7x + 12) \\iff (x - 3)(x + 3)(2x - 1) - (x - 3)(x + 3)(x + 4) = 0$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Factor común y soluciones:</strong> $(x - 3)(x + 3)(x - 5) = 0 \\implies x_1 = 3, \\; x_2 = -3, \\; x_3 = 5$."
            },
            {
              "letra": "c)",
              "texto": "<strong>Sentido real:</strong> Descartamos $x = -3$ (medida negativa) y $x = 3$ ($V = 0$). Única solución válida: $\\boldsymbol{x = 5\\text{ cm}}$ ($V = 144\\text{ cm}^3$)."
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
              "texto": "<strong>Cambio de variable ($t = x^2$):</strong> $x^4 - 10x^2 + 9 = 0 \\implies t^2 - 10t + 9 = 0 \\implies (t - 9)(t - 1) = 0 \\implies t_1 = 9, \\; t_2 = 1$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Deshacer el cambio ($x = \\pm\\sqrt{t}$):</strong> $x = \\pm 3$ y $x = \\pm 1$. La rampa toca el suelo en $\\boldsymbol{x \\in \\{-3, -1, 1, 3\\}\\text{ m}}$."
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
              "texto": "<strong>Cambio de variable ($t = x^3$):</strong> $t^2 - 26t - 27 = 0 \\implies (t - 27)(t + 1) = 0 \\implies t_1 = 27, \\; t_2 = -1$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Deshacer el cambio ($x = \\sqrt[3]{t}$):</strong> $x_1 = \\sqrt[3]{27} = \\mathbf{3^\\circ\\text{C}}$ y $x_2 = \\sqrt[3]{-1} = \\mathbf{-1^\\circ\\text{C}}$."
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
              "texto": "<strong>Paso 0 (Valores prohibidos):</strong> $x^2 + 3x - 4 = (x - 1)(x + 4) \\neq 0 \\implies \\boldsymbol{x \\neq 1, \\; x \\neq -4}$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Quitar denominadores y resolver:</strong> $2x(x + 4) - (x + 3)(x - 1) = 10 \\iff x^2 + 6x - 7 = 0 \\implies x_1 = 1\\text{ (falsa por Paso 0)}, \\; \\boldsymbol{x_2 = -7\\text{ (válida)}}$."
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
              "texto": "<strong>Zona de radar ($h = 120$):</strong> $-5t^2 + 40t + 45 = 120 \\iff t^2 - 8t + 15 = 0 \\implies t_1 = 3\\text{ s}, \\; t_2 = 5\\text{ s}$ (visible durante $\\mathbf{2\\text{ s}}$)."
            },
            {
              "letra": "b)",
              "texto": "<strong>Altura máxima (vértice):</strong> $t_v = -\\dfrac{40}{2(-5)} = \\mathbf{4\\text{ s}} \\implies h_{\\max} = h(4) = \\mathbf{125\\text{ m}}$."
            },
            {
              "letra": "c)",
              "texto": "<strong>Impacto en el mar ($h = 0$):</strong> $-5t^2 + 40t + 45 = 0 \\iff t^2 - 8t - 9 = 0 \\implies \\boldsymbol{t = 9\\text{ s}}$ ($t = -1\\text{ s}$ descartado)."
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
              "texto": "<strong>Planteamiento de caudales ($x > 0$):</strong> $\\dfrac{1}{x} + \\dfrac{1}{x+5} = \\dfrac{1}{6}$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Quitar denominadores y resolver:</strong> $6(x+5) + 6x = x(x+5) \\iff x^2 - 7x - 30 = 0 \\implies x_1 = 10, \\; x_2 = -3\\text{ (descartado)}$."
            },
            {
              "letra": "c)",
              "texto": "<strong>Solución:</strong> La bomba $A$ tarda $\\mathbf{10\\text{ h}}$ y la bomba $B$ tarda $\\mathbf{15\\text{ h}}$."
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
              "texto": "<strong>Paso 0 (Región factible):</strong> $x + 5 \\ge 0$ y $7 - x \\ge 0 \\implies \\boldsymbol{x \\in [-5, 7]}$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Elevar al cuadrado y resolver:</strong> $x + 5 = (7 - x)^2 \\iff x^2 - 15x + 44 = 0 \\implies x_1 = 4, \\; x_2 = 11\\text{ (falsa, } 11 \\notin [-5, 7])$."
            },
            {
              "letra": "c)",
              "texto": "<strong>Solución válida:</strong> La pica debe colocarse a $\\boldsymbol{x = 4\\text{ metros}}$."
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
              "texto": "<strong>Cambio de variable ($y = 2^t > 0$):</strong> $(2^t)^2 - 3\\cdot 2^t - 4 = 0 \\iff y^2 - 3y - 4 = 0 \\implies y_1 = 4, \\; y_2 = -1\\text{ (imposible)}$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Deshacer el cambio:</strong> $2^t = 4 = 2^2 \\implies \\boldsymbol{t = 2\\text{ horas}}$."
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
              "texto": "<strong>Planteamiento y Paso 0:</strong> $2\\log(x^2 - 2x - 8) = \\log(x + 2) + \\log(x + 26)$. Argumentos $> 0 \\implies \\boldsymbol{x > 4}$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Agrupar e igualar argumentos:</strong> $(x^2 - 2x - 8)^2 = (x + 2)(x + 26) \\iff x^4 - 4x^3 - 13x^2 + 4x + 12 = 0$."
            },
            {
              "letra": "c)",
              "texto": "<strong>Ruffini y filtro con Paso 0:</strong> Raíces $x \\in \\{1, -1, -2, 6\\}$. Como $x > 4$, la única solución válida es $\\boldsymbol{x = 6\\text{ metros}}$."
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
              "texto": "<strong>Planteamiento y factor común ($x > 0$):</strong> $(x + 4)(x + 2)(2x + 1) = (x + 4)(x + 2)(x + 6) \\iff (x + 4)(x + 2)(x - 5) = 0$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Solución válida y dimensiones:</strong> $\\boldsymbol{x = 5\\text{ m}}$ ($-4$ y $-2$ descartadas). Dimensiones: $11\\text{ m} \\times 7\\text{ m} \\times 9\\text{ m} \\implies V = \\mathbf{693\\text{ m}^3}$."
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
              "texto": "<strong>Planteamiento ($x > 0$) y simplificación de $\\pi$:</strong> $\\pi(x + 4)^2 - \\pi x^2 = 3\\pi x^2 \\iff (x + 4)^2 - x^2 = 3x^2 \\iff 3x^2 - 8x - 16 = 0$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Solución y áreas:</strong> $\\boldsymbol{x = 4\\text{ m}}$ ($-4/3$ descartada). Radio exterior $R = \\mathbf{8\\text{ m}}$, $A_{\\text{fuente}} = \\mathbf{16\\pi\\text{ m}^2}$ y $A_{\\text{paseo}} = \\mathbf{48\\pi\\text{ m}^2}$."
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
              "texto": "<strong>Pitágoras y bicuadrada ($x > 0$):</strong> $(2x)^2 + \\left(\\dfrac{24}{x}\\right)^2 = 10^2 \\iff 4x^4 - 100x^2 + 576 = 0 \\iff x^4 - 25x^2 + 144 = 0$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Cambio $z = x^2$ y dimensiones:</strong> $z_1 = 16 \\implies x = 4\\text{ cm}$ (pantalla de $\\mathbf{8\\text{ cm} \\times 6\\text{ cm}}$); $z_2 = 9 \\implies x = 3\\text{ cm}$ (pantalla de $\\mathbf{6\\text{ cm} \\times 8\\text{ cm}}$)."
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
              "texto": "<strong>Planteamiento y Paso 0 ($x > 1$):</strong> $\\dfrac{x + 3}{x - 1} + \\dfrac{x - 1}{x + 3} = \\dfrac{5}{2} \\iff 2(x + 3)^2 + 2(x - 1)^2 = 5(x - 1)(x + 3)$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Resolución y medidas:</strong> $x^2 + 2x - 35 = 0 \\implies \\boldsymbol{x = 5\\text{ m}}$ ($x = -7$ descartada). Cartel 1 de $\\mathbf{8\\text{ m} \\times 4\\text{ m}}$ y Cartel 2 de $\\mathbf{4\\text{ m} \\times 8\\text{ m}}$."
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
              "texto": "<strong>Planteamiento y Paso 0:</strong> $\\sqrt{2x + 7} + \\sqrt{x + 3} = 5$. Radicandos $\\ge 0 \\implies x \\ge -3$; al aislar raíces $\\implies x \\le 21$. Región factible: $\\boldsymbol{x \\in [-3, 21]}$ ($x$ no es longitud directa, las longitudes son las raíces)."
            },
            {
              "letra": "b)",
              "texto": "<strong>Aislar, elevar al cuadrado y resolver:</strong> $\\sqrt{2x + 7} = 5 - \\sqrt{x + 3} \\implies 10\\sqrt{x + 3} = 21 - x \\implies x^2 - 142x + 141 = 0 \\implies x_1 = 1, \\; x_2 = 141\\text{ (falsa, } 141 \\notin [-3, 21])$."
            },
            {
              "letra": "c)",
              "texto": "<strong>Solución y longitud de tirantes:</strong> $\\boldsymbol{x = 1} \\implies L_1 = \\sqrt{9} = \\mathbf{3\\text{ m}}$ y $L_2 = \\sqrt{4} = \\mathbf{2\\text{ m}}$."
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
              "texto": "<strong>Planteamiento y cambio ($t = 3^x > 0$):</strong> $2\\cdot 9^x + 5\\cdot 3^x = 33 \\iff 2t^2 + 5t - 33 = 0 \\implies t_1 = 3, \\; t_2 = -11/2\\text{ (imposible)}$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Deshacer cambio y superficies:</strong> $3^x = 3 \\implies \\boldsymbol{x = 1}$. Cada columna ocupa $9^1 = \\mathbf{9\\text{ m}^2}$ y cada panel $3^1 = \\mathbf{3\\text{ m}^2}$."
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
              "texto": "<strong>Planteamiento y Paso 0 ($x > 2$):</strong> $2\\log(x - 2) = 3\\log(2) + \\log(x + 4) \\iff \\log\\big((x - 2)^2\\big) = \\log\\big(8(x + 4)\\big)$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Resolución y áreas:</strong> $(x - 2)^2 = 8(x + 4) \\iff x^2 - 12x - 28 = 0 \\implies \\boldsymbol{x = 14\\text{ m}}$ ($x = -2$ descartada). Pista de lado $\\mathbf{12\\text{ m}}$ ($144\\text{ m}^2$) y césped de $\\mathbf{8\\text{ m} \\times 18\\text{ m}}$ ($144\\text{ m}^2$)."
            }
          ],
          "idea_clave": "Cuando el enunciado dice «el doble de un logaritmo» o «el triple de un logaritmo», se traduce como un coeficiente multiplicando por fuera ($2\\log A$ o $3\\log B$). Para poder agrupar o igualar logaritmos, la regla de oro es meter primero esos coeficientes dentro como exponentes ($2\\log A = \\log(A^2)$ y $3\\log 2 = \\log(2^3) = \\log 8$). El filtro con la región factible ($x > 2$) descarta de raíz la solución falsa negativa."
        }
      ]
    },
    {
      "numero": "7 y 8",
      "fecha": "Viernes 6 y Lunes 9 de Noviembre de 2026",
      "titulo": "Introducción a los Números Complejos (Ecuaciones con Discriminante Negativo, Representación en el Plano, Operaciones y Parámetros)",
      "ejercicios": [
        {
          "numero": 1,
          "titulo": "Ejercicio 1: Ecuaciones con raíz negativa y la unidad imaginaria $i$",
          "referencia": "Bloque 3: Puntos 3.1 y 3.3 (Págs. 11-12)",
          "enunciado": "Cuando una ecuación de segundo grado tiene discriminante negativo ($\\Delta < 0$), no existen soluciones en $\\mathbb{R}$, pero sí en el cuerpo de los números complejos $\\mathbb{C}$ definiendo la unidad imaginaria $\\boldsymbol{i = \\sqrt{-1}}$ (con $\\boldsymbol{i^2 = -1}$).",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Resuelve en $\\mathbb{C}$ la ecuación incompleta $x^2 + 16 = 0$ e indica la parte real e imaginaria de sus soluciones."
            },
            {
              "letra": "b)",
              "texto": "Resuelve en $\\mathbb{C}$ la ecuación completa $x^2 - 6x + 25 = 0$ y expresa sus soluciones en forma binómica $a + bi$."
            }
          ],
          "instruccion": "Resuelve ambas ecuaciones en $\\mathbb{C}$ identificando la parte real e imaginaria:",
          "apartados": [
            {
              "letra": "a)",
              "texto": "<strong>Incompleta:</strong> $x^2 = -16 \\implies x = \\pm\\sqrt{-16} = \\pm\\sqrt{16}\\cdot\\sqrt{-1} = \\boldsymbol{\\pm 4i}$ (imaginarios puros: $\\text{Re} = 0, \\; \\text{Im} = \\pm 4$)."
            },
            {
              "letra": "b)",
              "texto": "<strong>Completa ($\\Delta = 36 - 100 = -64 < 0$):</strong> $x = \\dfrac{6 \\pm \\sqrt{-64}}{2} = \\dfrac{6 \\pm 8i}{2} = \\boldsymbol{3 \\pm 4i}$ (pareja conjugada: $x_1 = 3 + 4i, \\; x_2 = 3 - 4i$)."
            }
          ],
          "idea_clave": "En cualquier ecuación polinómica con coeficientes reales, si el discriminante es negativo ($\\Delta < 0$), las soluciones complejas aparecen siempre en parejas de números complejos conjugados ($a + bi$ y $a - bi$). Recuerda que la parte imaginaria $\\text{Im}(z) = b$ es solo el coeficiente real que multiplica a la $i$, sin incluir la $i$."
        },
        {
          "numero": 2,
          "titulo": "Ejercicio 2: Dibujar números complejos en el plano, conjugado y módulo",
          "referencia": "Bloque 3: Punto 3.1 (Pág. 11, plano complejo)",
          "enunciado": "Considera los números complejos obtenidos en el ejercicio anterior: $z_1 = 3 + 4i$, su conjugado $\\overline{z_1} = 3 - 4i$, el imaginario puro $z_2 = 4i$ y el número real $z_3 = -5$.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Dibuja los puntos correspondientes en el plano complejo (eje real horizontal y eje imaginario vertical) y explica la simetría entre $z_1$ y $\\overline{z_1}$."
            },
            {
              "letra": "b)",
              "texto": "Calcula el módulo $|z_1|$ e interpreta geométricamente su valor mediante el Teorema de Pitágoras."
            }
          ],
          "instruccion": "Dibuja los números en el plano complejo y calcula el módulo:",
          "apartados": [
            {
              "letra": "a)",
              "texto": "<strong>Puntos en el plano y simetría:</strong> $z_1(3, 4)$, $\\overline{z_1}(3, -4)$, $z_2(0, 4)$ (en el eje vertical) y $z_3(-5, 0)$ (en el eje horizontal). Un número y su conjugado son <strong>simétricos respecto del eje real</strong>."
            },
            {
              "letra": "b)",
              "texto": "<strong>Módulo (distancia al origen):</strong> $|z_1| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = \\boldsymbol{5}$."
            }
          ],
          "idea_clave": "Cada número complejo $z = a + bi$ se identifica con el punto o vector $(a, b)$ del plano: los números reales viven sobre el eje horizontal y los imaginarios puros sobre el eje vertical. Su módulo $|z| = \\sqrt{a^2 + b^2}$ es la hipotenusa del triángulo rectángulo de catetos $|a|$ y $|b|$."
        },
        {
          "numero": 3,
          "titulo": "Ejercicio 3: Operaciones en forma binómica y división por el conjugado",
          "referencia": "Bloque 3: Puntos 3.2 y 3.4 (Págs. 12-13)",
          "enunciado": "Dados los números complejos $z_1 = 3 + 2i$ y $z_2 = 1 - 2i$, se pide operar en forma binómica recordando sustituir siempre $i^2 = -1$:",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Calcula la combinación lineal $2z_1 - 3z_2$."
            },
            {
              "letra": "b)",
              "texto": "Calcula el producto $z_1 \\cdot z_2$ y la potencia $(z_1)^2$."
            },
            {
              "letra": "c)",
              "texto": "Efectúa el cociente $\\dfrac{z_1}{z_2}$ multiplicando por el conjugado del denominador."
            }
          ],
          "instruccion": "Opera en forma binómica y simplifica sustituyendo $i^2 = -1$:",
          "apartados": [
            {
              "letra": "a)",
              "texto": "<strong>Combinada:</strong> $2(3 + 2i) - 3(1 - 2i) = (6 - 3) + (4 + 6)i = \\boldsymbol{3 + 10i}$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Producto y cuadrado:</strong> $z_1 \\cdot z_2 = 3 - 6i + 2i - 4i^2 = 3 - 4i + 4 = \\boldsymbol{7 - 4i}$. Para el cuadrado: $(3 + 2i)^2 = 9 + 12i + 4i^2 = 9 + 12i - 4 = \\boldsymbol{5 + 12i}$."
            },
            {
              "letra": "c)",
              "texto": "<strong>Cociente (por el conjugado $1 + 2i$):</strong> $\\dfrac{3 + 2i}{1 - 2i} = \\dfrac{(3 + 2i)(1 + 2i)}{1^2 + 2^2} = \\dfrac{3 + 8i + 4i^2}{5} = \\dfrac{-1 + 8i}{5} = \\boldsymbol{-\\dfrac{1}{5} + \\dfrac{8}{5}i}$."
            }
          ],
          "idea_clave": "Al elevar un complejo al cuadrado $(a + bi)^2$, no olvides nunca el doble producto $2abi$. Para dividir complejos, multiplicar arriba y abajo por el conjugado del denominador ($c - di \\to c + di$) equivale a racionalizar con suma por diferencia: el denominador se convierte siempre en el número real positivo $c^2 + d^2$."
        },
        {
          "numero": 4,
          "titulo": "Ejercicio 4: El reloj de las potencias de $i$ y sumas cíclicas",
          "referencia": "Bloque 3: Punto 3.2 (Pág. 12)",
          "enunciado": "Las potencias de la unidad imaginaria se repiten periódicamente en ciclos de 4 ($i^0 = 1, \\; i^1 = i, \\; i^2 = -1, \\; i^3 = -i$). Para calcular $i^n$, basta dividir $n$ entre 4 y quedarse con el resto $r$ ($i^n = i^r$).",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Calcula el valor simplificado de $i^{27}$, $i^{68}$ y la potencia del año actual $i^{2026}$."
            },
            {
              "letra": "b)",
              "texto": "Comprueba que cuatro potencias consecutivas suman cero ($i^1 + i^2 + i^3 + i^4 = 0$) y deduce el valor de $S = i^1 + i^2 + i^3 + \\dots + i^{100}$."
            }
          ],
          "instruccion": "Aplica la regla del resto módulo 4 para simplificar las potencias:",
          "apartados": [
            {
              "letra": "a)",
              "texto": "<strong>Regla del resto ($\\div 4$):</strong> $27 = 4\\cdot 6 + 3 \\implies i^{27} = i^3 = \\boldsymbol{-i}$; $\\; 68 = 4\\cdot 17 + 0 \\implies i^{68} = i^0 = \\boldsymbol{1}$; $\\; 2026 = 4\\cdot 506 + 2 \\implies i^{2026} = i^2 = \\boldsymbol{-1}$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Suma cíclica:</strong> $i + (-1) + (-i) + 1 = 0$. Como 100 términos forman 25 bloques exactos de 4 potencias consecutivas: $S = 25 \\cdot 0 = \\boldsymbol{0}$."
            }
          ],
          "idea_clave": "Para dividir mentalmente entre 4 un número grande como $2026$, basta fijarse solo en sus dos últimas cifras ($26 = 4 \\cdot 6 + 2$, resto $2$). Además, cada ciclo completo de 4 potencias consecutivas de $i$ se neutraliza sumando exactamente $0$."
        },
        {
          "numero": 5,
          "titulo": "Ejercicio 5: El reto del parámetro $k$ (Número real puro e imaginario puro)",
          "referencia": "Bloque 3: Puntos 3.1 y 3.2 (Págs. 11-12)",
          "enunciado": "Considera el siguiente cociente de números complejos que depende de un parámetro real $k \\in \\mathbb{R}$: $$z = \\frac{2 + ki}{1 - i}$$",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Efectúa la división multiplicando por el conjugado y expresa $z$ en forma binómica $A + Bi$ en función de $k$."
            },
            {
              "letra": "b)",
              "texto": "Determina el valor de $k$ para que $z$ sea un <strong>número real puro</strong> y el valor de $k$ para que sea un <strong>imaginario puro</strong>."
            }
          ],
          "instruccion": "Expresa el cociente en forma binómica e impón las condiciones sobre sus partes real e imaginaria:",
          "apartados": [
            {
              "letra": "a)",
              "texto": "<strong>Forma binómica (conjugado $1 + i$):</strong> $z = \\dfrac{(2 + ki)(1 + i)}{1^2 + 1^2} = \\dfrac{(2 - k) + (2 + k)i}{2} = \\boldsymbol{\\dfrac{2 - k}{2} + \\dfrac{2 + k}{2}i}$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Real puro ($\\text{Im}(z) = 0$):</strong> $\\dfrac{2 + k}{2} = 0 \\implies \\boldsymbol{k = -2}$ (queda $z = 2$). <strong>Imaginario puro ($\\text{Re}(z) = 0$):</strong> $\\dfrac{2 - k}{2} = 0 \\implies \\boldsymbol{k = 2}$ (queda $z = 2i$)."
            }
          ],
          "idea_clave": "En los problemas con parámetro $k$ dentro de una fracción, nunca impongas condiciones antes de quitar la $i$ del denominador. Primero multiplica por el conjugado, separa con nitidez la fracción de $\\text{Re}(z)$ y la de $\\text{Im}(z)$, e iguala a cero la que corresponda."
        }
      ]
    },
    {
      "numero": "9 y 10",
      "fecha": "Martes 10 y Jueves 12 de Noviembre de 2026",
      "titulo": "Problemas con Sistemas de Ecuaciones Lineales ($2 \\times 2$)",
      "ejercicios": [
        {
          "numero": 1,
          "titulo": "Problema 1: Alquiler de tablas de paddle surf",
          "referencia": "Bloque 4: Puntos 4.1, 4.3 y 4.4 (Págs. 22-24)",
          "enunciado": "Una escuela náutica del Mar Menor alquila tablas de paddle surf cobrando una tarifa fija inicial por el seguro y el chaleco más un precio fijo por cada hora de navegación. Ayer un grupo alquiló una tabla durante $2\\text{ horas}$ y pagó $19\\text{ €}$; hoy otro grupo ha navegado durante $5\\text{ horas}$ y ha pagado $37\\text{ €}$.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Plantea y resuelve un sistema de ecuaciones para calcular la tarifa fija inicial y el precio por hora de navegación."
            },
            {
              "letra": "b)",
              "texto": "Una segunda escuela ofrece las tablas sin tarifa fija inicial, cobrando directamente a $9{,}50\\text{ €/h}$. ¿Con cuántas horas de alquiler cuestan lo mismo ambas escuelas y a partir de cuántas horas compensa elegir la primera?"
            }
          ],
          "instruccion": "Definición de incógnitas, planteamiento y resolución del sistema:",
          "apartados": [
            {
              "letra": "a)",
              "texto": "<strong>Incógnitas y sistema (SCD):</strong> Llamando $x$ a la tarifa fija (€) e $y$ al precio por hora (€/h): $\\begin{cases} x + 2y = 19 \\\\ x + 5y = 37 \\end{cases} \\implies 3y = 18 \\implies \\boldsymbol{y = 6\\text{ €/h}}$ y $\\boldsymbol{x = 7\\text{ €}}$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Comparativa de tarifas ($t$ horas):</strong> $7 + 6t = 9{,}5t \\implies 3{,}5t = 7 \\implies \\boldsymbol{t = 2\\text{ horas}}$ (ambas cuestan $19\\text{ €}$, punto de corte $P(2, 19)$). Para <strong>más de 2 horas</strong> sale más barata la primera escuela."
            }
          ],
          "idea_clave": "Cada tarifa lineal con coste fijo y coste por hora es una recta en el plano. Cuando dos rectas tienen distinta pendiente (distinto precio por hora), forman un Sistema Compatible Determinado (SCD) y se cortan en un único punto $(t_0, C_0)$ que marca la frontera exacta donde una tarifa pasa a superar a la otra."
        },
        {
          "numero": 2,
          "titulo": "Problema 2: Mezcla de cafés de especialidad",
          "referencia": "Bloque 4: Puntos 4.3 y 4.4 (Págs. 23-24)",
          "enunciado": "Una cafetería quiere preparar un lote de $10\\text{ kg}$ de café mezclando grano natural de Colombia (que cuesta a $14\\text{ €/kg}$) y grano de Brasil (a $9\\text{ €/kg}$), de manera que el precio medio de la mezcla resultante sea exactamente de $11\\text{ €/kg}$.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Plantea y resuelve un sistema de ecuaciones para averiguar cuántos kilos de cada tipo de café debe llevar la mezcla."
            },
            {
              "letra": "b)",
              "texto": "Interpreta geométricamente las dos ecuaciones en el plano indicando las coordenadas de su punto de corte."
            }
          ],
          "instruccion": "Definición de incógnitas, planteamiento y resolución del sistema:",
          "apartados": [
            {
              "letra": "a)",
              "texto": "<strong>Incógnitas y planteamiento:</strong> Llamando $x$ a los kg de Colombia e $y$ a los kg de Brasil: $\\begin{cases} x + y = 10 \\\\ 14x + 9y = 110 \\end{cases} \\implies 14x + 9(10 - x) = 110 \\iff 5x = 20$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Solución única (SCD):</strong> $\\boldsymbol{x = 4\\text{ kg de Colombia}}$ e $\\boldsymbol{y = 6\\text{ kg de Brasil}}$. Geométricamente son dos <strong>rectas secantes</strong> que se cortan en el único punto $\\boldsymbol{P(4, 6)}$."
            }
          ],
          "idea_clave": "En los problemas de mezclas, la segunda ecuación nunca suma los precios por kilo sueltos ($14 + 9 \\neq 11$), sino el coste total en euros de cada ingrediente: $(\\text{kg de A}\\cdot\\text{precio de A}) + (\\text{kg de B}\\cdot\\text{precio de B}) = (\\text{kg totales}\\cdot\\text{precio medio})$."
        },
        {
          "numero": 3,
          "titulo": "Problema 3: Navegación a favor y en contra de la corriente",
          "referencia": "Bloque 4: Puntos 4.3 y 4.4 (Págs. 23-24)",
          "enunciado": "Una embarcación turística recorre un tramo recto de $24\\text{ km}$ por un río. A la ida navega a favor de la corriente y completa el recorrido en $2\\text{ horas}$; a la vuelta navega en contra de la misma corriente y tarda $3\\text{ horas}$ en regresar al punto de partida.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Plantea y resuelve un sistema de ecuaciones para hallar la velocidad propia del barco en agua tranquila y la velocidad de la corriente del río."
            },
            {
              "letra": "b)",
              "texto": "¿Cuánto tiempo tardaría el barco en recorrer esos mismos $24\\text{ km}$ si navegara por un lago sin corriente?"
            }
          ],
          "instruccion": "Definición de incógnitas, planteamiento y resolución del sistema:",
          "apartados": [
            {
              "letra": "a)",
              "texto": "<strong>Incógnitas y velocidades ($v = e/t$):</strong> Llamando $x$ a la velocidad del barco e $y$ a la de la corriente (en km/h), a la ida $x + y = \\dfrac{24}{2} = 12$ y a la vuelta $x - y = \\dfrac{24}{3} = 8 \\implies \\begin{cases} x + y = 12 \\\\ x - y = 8 \\end{cases} \\implies \\boldsymbol{x = 10\\text{ km/h}}$ (barco) e $\\boldsymbol{y = 2\\text{ km/h}}$ (corriente)."
            },
            {
              "letra": "b)",
              "texto": "<strong>Tiempo en agua tranquila ($y = 0$):</strong> $t = \\dfrac{24\\text{ km}}{10\\text{ km/h}} = \\boldsymbol{2{,}4\\text{ horas}}$ ($2\\text{ horas y } 24\\text{ minutos}$)."
            }
          ],
          "idea_clave": "Al navegar a favor de la corriente las velocidades se suman ($x + y$) y al navegar en contra se restan ($x - y$). Conocer la distancia y el tiempo de cada trayecto permite obtener directamente la velocidad real de ida y de vuelta antes de resolver el sistema."
        },
        {
          "numero": 4,
          "titulo": "Problema 4: Las cajas de envío de la tienda online",
          "referencia": "Bloque 4: Puntos 4.1 y 4.4 (Págs. 22 y 24)",
          "enunciado": "Una tienda de informática prepara un envío de $18\\text{ tarjetas gráficas}$ repartidas en cajas pequeñas (con capacidad para $2\\text{ tarjetas}$ cada una) y cajas grandes (con capacidad para $3\\text{ tarjetas}$ cada una), llenando todas las cajas al máximo. En la nota del almacén figura además que el cuádruple de cajas pequeñas más el séxtuple de cajas grandes es igual a $36$.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Plantea el sistema de ecuaciones correspondiente, resuélvelo y clasifícalo según su número de soluciones. ¿Qué posición tienen las dos rectas en el plano?"
            },
            {
              "letra": "b)",
              "texto": "Escribe todas las combinaciones reales de cajas pequeñas y grandes que pudo utilizar la tienda para enviar el pedido."
            }
          ],
          "instruccion": "Definición de incógnitas, clasificación del sistema y soluciones naturales:",
          "apartados": [
            {
              "letra": "a)",
              "texto": "<strong>Incógnitas y clasificación:</strong> Llamando $x$ a las cajas pequeñas e $y$ a las grandes: $\\begin{cases} 2x + 3y = 18 \\\\ 4x + 6y = 36 \\end{cases} \\implies \\boldsymbol{0 = 0}$. Es un <strong>Sistema Compatible Indeterminado (SCI)</strong>: la 2.ª ecuación es el doble de la 1.ª ($\\frac{2}{4} = \\frac{3}{6} = \\frac{18}{36}$) y representan <strong>la misma recta (rectas coincidentes)</strong> con infinitos puntos."
            },
            {
              "letra": "b)",
              "texto": "<strong>Soluciones en los números naturales ($x, y \\in \\mathbb{N}$):</strong> Con $y = \\lambda$, queda $x = 9 - \\dfrac{3}{2}\\lambda$. Para que las cantidades de cajas sean naturales ($x, y \\in \\mathbb{N}$), $\\lambda$ debe ser un número par entre $0$ y $6$: $\\boldsymbol{(x, y) \\in \\{(9, 0), \\; (6, 2), \\; (3, 4), \\; (0, 6)\\}}$ (4 combinaciones)."
            }
          ],
          "idea_clave": "Cuando al resolver un sistema desaparecen las dos incógnitas y queda una igualdad cierta ($0 = 0$), no significa que no haya solución, sino todo lo contrario: la segunda ecuación no aportaba información nueva (rectas coincidentes, SCI). En la recta real hay infinitos puntos, pero como el número de cajas tiene que ser un número natural ($x, y \\in \\mathbb{N}$) solo existen 4 formas reales de preparar el envío."
        },
        {
          "numero": 5,
          "titulo": "Problema 5: El presupuesto del viaje de estudios",
          "referencia": "Bloque 4: Puntos 4.1 y 4.4 (Págs. 22 y 24)",
          "enunciado": "Para recaudar fondos para el viaje de estudios, dos comisiones de alumnos encargan lotes de camisetas y lotes de sudaderas al mismo proveedor (a precio fijo sin descuentos). La comisión A encarga $2\\text{ lotes de camisetas}$ y $3\\text{ de sudaderas}$ y paga $130\\text{ €}$. La comisión B encarga $4\\text{ lotes de camisetas}$ y $6\\text{ de sudaderas}$, y apunta en la pizarra que su factura ha sido de $250\\text{ €}$.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Plantea un sistema de ecuaciones para hallar el precio de cada lote, intenta resolverlo y clasifícalo. ¿Cómo son geométricamente las dos rectas?"
            },
            {
              "letra": "b)",
              "texto": "Explica de forma razonada por qué la comisión B ha apuntado mal el importe y calcula cuánto debería haber pagado exactamente para que las cuentas cuadren."
            }
          ],
          "instruccion": "Definición de incógnitas, análisis de la contradicción y corrección del dato:",
          "apartados": [
            {
              "letra": "a)",
              "texto": "<strong>Incógnitas y clasificación:</strong> Llamando $x$ al precio del lote de camisetas e $y$ al de sudaderas: $\\begin{cases} 2x + 3y = 130 \\\\ 4x + 6y = 250 \\end{cases} \\implies \\boldsymbol{0 = -10\\text{ (imposible)}}$. Es un <strong>Sistema Incompatible (SI, sin solución)</strong>: $\\frac{2}{4} = \\frac{3}{6} \\neq \\frac{130}{250}$, por lo que en el plano son <strong>dos rectas paralelas</strong> que jamás se cortan."
            },
            {
              "letra": "b)",
              "texto": "<strong>Corrección del error:</strong> Como la comisión B encarga exactamente el doble de camisetas y el doble de sudaderas que la A, su factura tiene que ser obligatoriamente el doble: $2 \\cdot 130 = \\boldsymbol{260\\text{ €}}$ (en lugar de $250\\text{ €}$)."
            }
          ],
          "idea_clave": "Si al resolver el sistema desaparecen las incógnitas y llegas a una contradicción como $0 = -10$, el sistema es Incompatible (SI) y no tiene ninguna solución. Geométricamente las dos ecuaciones tienen la misma inclinación (pendiente $m = -2/3$) pero distinta ordenada en el origen, formando dos rectas paralelas separadas."
        }
      ]
    },
    {
      "numero": "11 y 12",
      "fecha": "Viernes 13 y Lunes 16 de Noviembre de 2026",
      "titulo": "Problemas con Sistemas de Ecuaciones No Lineales, Exponenciales y Logarítmicos",
      "ejercicios": [
        {
          "numero": 1,
          "titulo": "Problema 1: El salto de motocross y el cañón láser (Parábola y recta)",
          "referencia": "Bloque 4: Puntos 4.2, 4.3 y 4.5 (Págs. 22, 23 y 25, análogo a Ejemplo 4.3)",
          "enunciado": "En una exhibición nocturna de motocross estilo libre, un piloto salta desde una rampa situada en el origen $(0, 0)$ siguiendo la trayectoria parabólica $y = -\\dfrac{x^2}{4} + 3x$ (donde $x$ es la distancia horizontal e $y$ la altura sobre la pista, ambas en metros). Desde una grada lateral, un cañón proyecta un haz de luz láser en línea recta siguiendo la ecuación $y = \\dfrac{x}{2} + 4$.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Plantea y resuelve un sistema de ecuaciones para calcular las coordenadas de los puntos en los que la moto atraviesa el haz de luz láser."
            },
            {
              "letra": "b)",
              "texto": "Sabiendo que el piloto alcanza su altura máxima a mitad del salto ($x = 6\\text{ m}$), indica en cuál de los dos puntos de corte atraviesa el láser mientras va subiendo y en cuál mientras va cayendo."
            }
          ],
          "instruccion": "Planteamiento del sistema, cálculo de los puntos de corte e interpretación de la trayectoria:",
          "apartados": [
            {
              "letra": "a)",
              "texto": "<strong>Sistema y puntos de corte:</strong> $\\begin{cases} y = -\\dfrac{x^2}{4} + 3x \\\\ y = \\dfrac{x}{2} + 4 \\end{cases} \\implies -\\dfrac{x^2}{4} + 3x = \\dfrac{x}{2} + 4 \\xrightarrow{\\cdot 4} x^2 - 10x + 16 = 0 \\implies x_1 = 2, \\; x_2 = 8$. Sustituyendo en la recta ($y = \\frac{x}{2} + 4$): $\\boldsymbol{P_1(2, 5)}$ y $\\boldsymbol{P_2(8, 8)}$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Sentido físico del salto:</strong> Como el vértice (altura máxima de $9\\text{ m}$) se alcanza en $x = 6\\text{ m}$, en $\\boldsymbol{P_1(2, 5)}$ el piloto corta el láser <strong>mientras sube</strong> ($2 < 6$) y en $\\boldsymbol{P_2(8, 8)}$ lo vuelve a cortar <strong>mientras baja</strong> ($8 > 6$)."
            }
          ],
          "idea_clave": "Una parábola y una recta pueden cortarse en 2 puntos (secante), en 1 punto (tangente) o en ninguno (exterior). Al igualar ambas expresiones de $y$ y quitar denominadores multiplicando toda la ecuación por el m.c.m., el problema se reduce a una ecuación de segundo grado cuyas soluciones dan las abscisas $x$ de los puntos de impacto."
        },
        {
          "numero": 2,
          "titulo": "Problema 2: El radar del puerto y el rumbo del yate (Circunferencia y recta)",
          "referencia": "Bloque 4: Puntos 4.2, 4.5 y 4.7 (Págs. 22, 25 y 28, análogo a Ejemplo 4.4)",
          "enunciado": "Un radar costero situado en el origen de coordenadas $(0, 0)$ de una carta náutica (con las distancias en kilómetros) detecta cualquier embarcación en un radio de $5\\text{ km}$. Un yate navega en línea recta siguiendo el rumbo de ecuación $y = 2x - 5$.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "¿Qué curva geométrica forma el límite de alcance del radar? Escribe su ecuación y calcula las coordenadas de los puntos donde el yate entra y sale de la zona del radar."
            },
            {
              "letra": "b)",
              "texto": "¿Cuántos kilómetros recorre el yate dentro de la zona del radar? Si navega a una velocidad constante de $20\\text{ km/h}$, ¿durante cuántos minutos aparece en la pantalla?"
            }
          ],
          "instruccion": "Ecuación de la circunferencia, puntos de entrada y salida, distancia recorrida y tiempo:",
          "apartados": [
            {
              "letra": "a)",
              "texto": "<strong>Circunferencia y puntos de corte:</strong> El borde es la circunferencia $x^2 + y^2 = 25$. Sustituyendo la recta $y = 2x - 5$: $x^2 + (2x - 5)^2 = 25 \\implies 5x^2 - 20x = 0 \\implies 5x(x - 4) = 0 \\implies x_1 = 0, \\; x_2 = 4$. Sustituyendo en la recta: entra y sale en $\\boldsymbol{P_1(0, -5)}$ y $\\boldsymbol{P_2(4, 3)}$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Distancia (Pitágoras) y tiempo:</strong> $d = \\sqrt{(4 - 0)^2 + (3 - (-5))^2} = \\sqrt{16 + 64} = \\sqrt{80} = \\boldsymbol{4\\sqrt{5} \\approx 8{,}94\\text{ km}}$. A $20\\text{ km/h}$: $t = \\dfrac{4\\sqrt{5}}{20}\\text{ h} \\cdot 60 = 12\\sqrt{5} \\approx \\boldsymbol{26{,}8\\text{ minutos}}$."
            }
          ],
          "idea_clave": "Al resolver una circunferencia con una recta hay dos trampas clásicas que debes evitar (Pág. 28): no olvidar nunca el doble producto al elevar $(2x - 5)^2 = 4x^2 - 20x + 25$, y sustituir los valores de $x$ al final siempre en la ecuación de grado 1 (la recta $y = 2x - 5$), nunca en la circunferencia, para no inventar puntos falsos."
        },
        {
          "numero": 3,
          "titulo": "Problema 3: La pantalla gigante LED del escenario (Hipérbola y recta)",
          "referencia": "Bloque 4: Puntos 4.2, 4.5 y 4.8 (Págs. 22, 26 y 29, análogo a Ejemplo 4.5)",
          "enunciado": "Para el escenario principal de un concierto se quiere montar una pantalla gigante rectangular con paneles LED que tenga una superficie exacta de $48\\text{ m}^2$. Los técnicos calculan que, si se añadieran $2\\text{ m}$ al ancho y $1\\text{ m}$ al alto, la superficie de la pantalla pasaría a ser de $70\\text{ m}^2$.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Plantea un sistema de ecuaciones y resuélvelo para averiguar qué dimensiones iniciales puede tener la pantalla LED. ¿Cuántos diseños distintos cumplen las condiciones?"
            },
            {
              "letra": "b)",
              "texto": "Explica qué tipo de curva representa la ecuación del área inicial y qué figura representa la segunda ecuación una vez simplificada."
            }
          ],
          "instruccion": "Definición de incógnitas, simplificación del sistema, dimensiones posibles e interpretación geométrica:",
          "apartados": [
            {
              "letra": "a)",
              "texto": "<strong>Planteamiento y resolución:</strong> Llamando $x$ al ancho e $y$ al alto (en m): $\\begin{cases} x \\cdot y = 48 \\\\ (x + 2)(y + 1) = 70 \\end{cases}$. Como $xy + x + 2y + 2 = 70$ y $xy = 48$, queda $x + 2y = 20 \\implies x = 20 - 2y$. Sustituyendo: $(20 - 2y)y = 48 \\iff y^2 - 10y + 24 = 0 \\implies y_1 = 4, \\; y_2 = 6$. Hay <strong>2 diseños válidos</strong>: uno panorámico de $\\boldsymbol{12\\text{ m} \\times 4\\text{ m}}$ y otro de $\\boldsymbol{8\\text{ m} \\times 6\\text{ m}}$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Curvas en el plano:</strong> La ecuación $x \\cdot y = 48$ es una <strong>hipérbola equilátera</strong> y $x + 2y = 20$ es una <strong>recta</strong> que la corta en dos puntos del primer cuadrante: $P_1(12, 4)$ y $P_2(8, 6)$."
            }
          ],
          "idea_clave": "Cuando una ecuación multiplica los lados modificados $(x + 2)(y + 1) = 70$, al quitar paréntesis aparece el bloque $x \\cdot y$. Sustituyendo ahí el área conocida ($x \\cdot y = 48$), los términos de grado 2 desaparecen y obtienes directamente la ecuación de una recta ($x + 2y = 20$)."
        },
        {
          "numero": 4,
          "titulo": "Problema 4: Los dos centros de datos de Inteligencia Artificial (Sistema exponencial)",
          "referencia": "Bloque 4: Puntos 4.3, 4.6 y 4.8 (Págs. 23, 27 y 29, análogo a Ejemplo 4.7)",
          "enunciado": "Una empresa tecnológica entrena un modelo de Inteligencia Artificial con dos centros de datos (Norte y Sur) que se encendieron en momentos distintos. Cuando el centro Norte lleva activo cierto número de horas, su potencia de cálculo es de $2^{\\,\\text{horas}}$ millones de operaciones por segundo, mientras que la del centro Sur es de $3^{\\,\\text{horas}}$ millones según las horas que lleva encendido. Ahora mismo, entre los dos centros suman $43\\text{ millones}$ de operaciones por segundo; pero si el centro Norte llevara $1\\text{ hora más}$ funcionando y el Sur llevara $1\\text{ hora menos}$, entre los dos sumarían $41\\text{ millones}$.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Plantea un sistema de ecuaciones exponenciales y resuélvelo para calcular cuántas horas lleva funcionando cada centro de datos."
            },
            {
              "letra": "b)",
              "texto": "¿Cuántos millones de operaciones por segundo está procesando ahora mismo cada centro por separado?"
            }
          ],
          "instruccion": "Definición de incógnitas, propiedades de las potencias, cambio de variable y solución:",
          "apartados": [
            {
              "letra": "a)",
              "texto": "<strong>Sistema y cambio ($u = 2^x > 0, \\; v = 3^y > 0$):</strong> Llamando $x$ a las horas del centro Norte e $y$ a las del Sur: $\\begin{cases} 2^x + 3^y = 43 \\\\ 2^{x+1} + 3^{y-1} = 41 \\end{cases} \\iff \\begin{cases} u + v = 43 \\\\ 2u + \\dfrac{v}{3} = 41 \\end{cases} \\xrightarrow{\\text{2.ª}\\cdot 3} \\begin{cases} u + v = 43 \\\\ 6u + v = 123 \\end{cases} \\implies 5u = 80 \\implies u = 16, \\; v = 27$. Deshaciendo el cambio: $2^x = 16 = 2^4 \\implies \\boldsymbol{x = 4\\text{ h}}$ y $3^y = 27 = 3^3 \\implies \\boldsymbol{y = 3\\text{ h}}$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Potencia actual de cada centro:</strong> El centro Norte procesa $\\boldsymbol{u = 16\\text{ millones}}$ de operaciones/s y el centro Sur procesa $\\boldsymbol{v = 27\\text{ millones}}$ ($16 + 27 = 43$)."
            }
          ],
          "idea_clave": "En los sistemas donde se suman potencias de distinta base ($2^x$ y $3^y$), primero separa los números sumados o restados en el exponente aplicando las propiedades de las potencias ($2^{x+1} = 2 \\cdot 2^x$ y $3^{y-1} = \\frac{3^y}{3}$). Así puedes hacer el cambio de variable $u = 2^x$ y $v = 3^y$ y resolver un sistema lineal sencillo."
        },
        {
          "numero": 5,
          "titulo": "Problema 5: Los dos temblores y el sismógrafo (Sistema logarítmico)",
          "referencia": "Bloque 4: Puntos 4.3, 4.6 y 4.8 (Págs. 23, 27 y 29, análogo a Ejemplo 4.8)",
          "enunciado": "Un observatorio sísmico registra dos temblores leves. Cuando la amplitud máxima de las ondas en el sismógrafo es de $A$ micrómetros, su magnitud en la escala de Richter viene dada por su logaritmo decimal, $M = \\log A$. Sabemos que el primer temblor tuvo $15\\text{ micrómetros}$ más de amplitud que el segundo, y que la suma de las magnitudes de ambos temblores en la escala de Richter es exactamente igual a $3$.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Plantea el sistema de ecuaciones indicando previamente las condiciones de existencia de los logaritmos (Paso 0) y calcula la amplitud en micrómetros de cada temblor."
            },
            {
              "letra": "b)",
              "texto": "Sabiendo que $\\log 2 \\approx 0{,}30$, calcula sin usar la tecla $\\log$ de la calculadora cuál fue la magnitud de cada temblor en la escala de Richter."
            }
          ],
          "instruccion": "Condiciones de existencia (Paso 0), transformación a sistema algebraico y cálculo de magnitudes:",
          "apartados": [
            {
              "letra": "a)",
              "texto": "<strong>Paso 0 ($x > 0, \\; y > 0$) y resolución:</strong> Llamando $x$ e $y$ a las amplitudes: $\\begin{cases} x - y = 15 \\\\ \\log x + \\log y = 3 \\end{cases}$. Agrupando logaritmos: $\\log(x \\cdot y) = 3 \\implies x \\cdot y = 10^3 = 1000$. Con $x = y + 15$: $(y + 15)y = 1000 \\iff y^2 + 15y - 1000 = 0 \\implies y_1 = 25, \\; y_2 = -40\\text{ (descartada por Paso 0)}$. Amplitudes: $\\boldsymbol{x = 40\\text{ }\\mu\\text{m}}$ e $\\boldsymbol{y = 25\\text{ }\\mu\\text{m}}$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Magnitudes aplicando propiedades de logaritmos:</strong> $M_1 = \\log(40) = \\log(2^2 \\cdot 10) = 2\\log 2 + 1 \\approx \\boldsymbol{1{,}60}$, y $M_2 = \\log(25) = \\log(100/4) = 2 - 2\\log 2 \\approx \\boldsymbol{1{,}40}$ (suman $1{,}60 + 1{,}40 = 3$)."
            }
          ],
          "idea_clave": "Al agrupar $\\log x + \\log y = \\log(x \\cdot y) = 3$ y pasar a $x \\cdot y = 1000$, transformas el sistema logarítmico en el corte de una recta y una hipérbola. La pareja negativa $(-25, -40)$ cumple $x \\cdot y = 1000$, pero el Paso 0 ($x > 0, y > 0$) es indispensable para descartarla porque en $\\mathbb{R}$ no existen logaritmos de números negativos."
        }
      ]
    },
    {
      "numero": "13",
      "fecha": "Martes 17 de Noviembre de 2026",
      "titulo": "Más Problemas Geométricos con Sistemas No Lineales (Circunferencias, Elipse, Parábola y Tangencias)",
      "ejercicios": [
        {
          "numero": 1,
          "titulo": "Problema 1: Los dos repetidores Wi-Fi del patio",
          "referencia": "Bloque 4: Puntos 4.2, 4.5 y 4.7 (Págs. 22, 25 y 28)",
          "enunciado": "En el patio de un instituto (con las distancias en metros) se han instalado dos repetidores Wi-Fi: el primero está situado en el origen de coordenadas $(0, 0)$ y el segundo está en el punto $(14, 14)$. Cada repetidor tiene un alcance máximo de $10\\text{ metros}$ a la redonda.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "¿Qué figura geométrica forma el límite de cobertura de cada repetidor? Escribe las ecuaciones de ambos límites, plantea un sistema y calcula las coordenadas de los dos puntos del patio donde se cruzan las dos líneas de cobertura."
            },
            {
              "letra": "b)",
              "texto": "Si dos alumnos se colocan justo en esos dos puntos de corte, ¿qué distancia en línea recta hay entre uno y otro?"
            }
          ],
          "instruccion": "Ecuaciones de las dos circunferencias, eliminación de términos cuadráticos, puntos de corte y distancia:",
          "apartados": [
            {
              "letra": "a)",
              "texto": "<strong>Circunferencias y puntos de corte:</strong> Cada límite es una <strong>circunferencia</strong> de radio $R = 10\\text{ m}$ ($R^2 = 100$): $\\begin{cases} x^2 + y^2 = 100 \\\\ (x - 14)^2 + (y - 14)^2 = 100 \\end{cases}$. Desarrollando la 2.ª ($x^2 - 28x + 196 + y^2 - 28y + 196 = 100$) y sustituyendo $x^2 + y^2 = 100$, queda $28x + 28y = 392 \\xrightarrow{:28} x + y = 14 \\implies y = 14 - x$. Sustituyendo en la 1.ª: $x^2 + (14 - x)^2 = 100 \\implies 2x^2 - 28x + 96 = 0 \\xrightarrow{:2} x^2 - 14x + 48 = 0 \\implies x_1 = 6, \\; x_2 = 8$. Se cortan en $\\boldsymbol{P_1(6, 8)}$ y $\\boldsymbol{P_2(8, 6)}$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Distancia entre ambos puntos (Pitágoras):</strong> $d = \\sqrt{(8 - 6)^2 + (6 - 8)^2} = \\sqrt{4 + 4} = \\sqrt{8} = \\boldsymbol{2\\sqrt{2} \\approx 2{,}83\\text{ metros}}$."
            }
          ],
          "idea_clave": "Todos los puntos que están a una distancia fija $R$ de un centro $(a, b)$ forman una circunferencia de ecuación $(x - a)^2 + (y - b)^2 = R^2$. Para resolver el corte de dos circunferencias, desarrolla los cuadrados y resta ambas ecuaciones: desaparecen $x^2$ e $y^2$ de golpe y obtienes la recta que pasa por los puntos de corte ($x + y = 14$)."
        },
        {
          "numero": 2,
          "titulo": "Problema 2: Los dos aspersores de césped",
          "referencia": "Bloque 4: Puntos 4.2, 4.5 y 4.7 (Págs. 22, 25 y 28)",
          "enunciado": "En un jardín hay dos aspersores de agua (con las distancias en metros): el primero está situado en el origen $(0, 0)$ y el segundo en el punto $(6, 8)$. El chorro de cada aspersor lanza agua hasta una distancia máxima de $5\\text{ metros}$ en todas las direcciones.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "¿Qué figura geométrica forma el límite hasta donde llega el agua de cada aspersor? Escribe sus ecuaciones, plantea el sistema y resuélvelo para averiguar en cuántos puntos se tocan los bordes de riego de ambos aspersores y cuáles son sus coordenadas."
            },
            {
              "letra": "b)",
              "texto": "Calcula la distancia que separa a los dos aspersores entre sí y explica con ese dato por qué las dos zonas de agua solo llegan a rozarse en ese único punto sin solaparse."
            }
          ],
          "instruccion": "Ecuaciones de los bordes de riego, resolución del sistema y comprobación con la distancia entre centros:",
          "apartados": [
            {
              "letra": "a)",
              "texto": "<strong>Ecuaciones y punto único de contacto:</strong> Los bordes son dos <strong>circunferencias</strong> de radio $R = 5\\text{ m}$ ($R^2 = 25$): $\\begin{cases} x^2 + y^2 = 25 \\\\ (x - 6)^2 + (y - 8)^2 = 25 \\end{cases}$. Desarrollando la 2.ª ($x^2 + y^2 - 12x - 16y + 100 = 25$) y sustituyendo $x^2 + y^2 = 25$, queda $12x + 16y = 100 \\xrightarrow{:4} 3x + 4y = 25 \\implies y = \\dfrac{25 - 3x}{4}$. En la 1.ª: $x^2 + \\left(\\dfrac{25 - 3x}{4}\\right)^2 = 25 \\xrightarrow{\\cdot 16} 25x^2 - 150x + 225 = 0 \\xrightarrow{:25} x^2 - 6x + 9 = 0 \\iff (x - 3)^2 = 0$ ($\\Delta = 0$). Son <strong>circunferencias tangentes</strong> que se tocan en el único punto $\\boldsymbol{T(3, 4)}$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Distancia entre aspersores:</strong> $d = \\sqrt{(6 - 0)^2 + (8 - 0)^2} = \\sqrt{36 + 64} = \\sqrt{100} = \\boldsymbol{10\\text{ metros}}$. Como están separados $10\\text{ m}$ y cada chorro alcanza $5\\text{ m}$ ($5 + 5 = 10\\text{ m}$), los dos bordes se tocan justo a mitad de camino en $T(3, 4)$ sin solaparse."
            }
          ],
          "idea_clave": "Cuando al resolver el sistema de dos circunferencias la ecuación de segundo grado tiene discriminante cero ($\\Delta = 0$), existe una única solución doble: las dos circunferencias son tangentes y se tocan en un solo punto."
        },
        {
          "numero": 3,
          "titulo": "Problema 3: La pista ovalada del parque y la tubería",
          "referencia": "Bloque 4: Puntos 4.2 y 4.5 (Págs. 22 y 25)",
          "enunciado": "El borde de una pista de patinaje tiene forma de elipse centrada en el origen de coordenadas $(0, 0)$ (con las medidas en metros). Desde el centro, la pista mide $10\\text{ metros}$ hacia la derecha y hacia la izquierda, y $5\\text{ metros}$ hacia arriba y hacia abajo. Una tubería recta atraviesa la pista por debajo del suelo siguiendo la línea en la que la coordenada $x$ menos el doble de la coordenada $y$ es siempre igual a $2$.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Escribe la ecuación de la elipse y la ecuación de la recta, plantea el sistema y calcula las coordenadas de los dos puntos del borde por donde la tubería entra y sale de la pista."
            },
            {
              "letra": "b)",
              "texto": "¿Cuántos metros de tubería quedan justo debajo de la pista entre el punto de entrada y el de salida?"
            }
          ],
          "instruccion": "Construcción de las ecuaciones de la elipse y la recta, puntos de corte y longitud del tramo:",
          "apartados": [
            {
              "letra": "a)",
              "texto": "<strong>Ecuaciones y puntos de corte:</strong> Con semiejes $a = 10\\text{ m}$ y $b = 5\\text{ m}$, el sistema es $\\begin{cases} \\dfrac{x^2}{100} + \\dfrac{y^2}{25} = 1 \\\\ x - 2y = 2 \\end{cases}$. Quitando denominadores en la elipse ($\\cdot 100 \\implies x^2 + 4y^2 = 100$) y sustituyendo $x = 2y + 2$: $(2y + 2)^2 + 4y^2 = 100 \\implies 8y^2 + 8y - 96 = 0 \\xrightarrow{:8} y^2 + y - 12 = 0 \\implies y_1 = 3, \\; y_2 = -4$. Sustituyendo en $x = 2y + 2$, entra y sale en $\\boldsymbol{P_1(8, 3)}$ y $\\boldsymbol{P_2(-6, -4)}$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Longitud bajo la pista:</strong> $d = \\sqrt{(8 - (-6))^2 + (3 - (-4))^2} = \\sqrt{14^2 + 7^2} = \\sqrt{196 + 49} = \\sqrt{245} = \\boldsymbol{7\\sqrt{5} \\approx 15{,}65\\text{ metros}}$."
            }
          ],
          "idea_clave": "Una elipse centrada en el origen que se extiende $a$ unidades en horizontal y $b$ unidades en vertical tiene por ecuación $\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = 1$. Antes de sustituir la recta, multiplica toda la ecuación de la elipse por el mínimo común múltiplo de los denominadores para trabajar sin fracciones."
        },
        {
          "numero": 4,
          "titulo": "Problema 4: El chorro de la fuente y el foco de luz",
          "referencia": "Bloque 4: Puntos 4.2 y 4.5 (Págs. 22 y 25)",
          "enunciado": "En una fuente, un chorro de agua describe un arco con forma de parábola cuya altura $y$ (en metros) a una distancia horizontal $x$ cumple la ecuación $y = -x^2 + 6x - 4$. En el suelo, justo en el origen $(0, 0)$, hay un foco que lanza un rayo de luz en línea recta que sube $2\\text{ metros}$ de altura por cada metro que avanza en horizontal.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Escribe la ecuación de la recta que sigue el rayo de luz, plantea el sistema con la parábola y resuélvelo para comprobar que el rayo es tangente al chorro de agua (lo roza en un único punto), indicando sus coordenadas."
            },
            {
              "letra": "b)",
              "texto": "¿Qué pasaría si inclináramos más el foco para que el rayo subiera $4\\text{ metros}$ por cada metro que avanza en horizontal? Plantea y resuelve el nuevo sistema y explica qué ocurre en la realidad."
            }
          ],
          "instruccion": "Ecuación del rayo de luz, comprobación de tangencia ($\\Delta = 0$) y análisis con la nueva inclinación:",
          "apartados": [
            {
              "letra": "a)",
              "texto": "<strong>Recta y punto de tangencia:</strong> Como el rayo pasa por $(0, 0)$ y tiene pendiente $2$, su ecuación es $y = 2x$. Resolviendo $\\begin{cases} y = -x^2 + 6x - 4 \\\\ y = 2x \\end{cases} \\implies -x^2 + 6x - 4 = 2x \\iff x^2 - 4x + 4 = 0 \\iff (x - 2)^2 = 0$. Como $\\Delta = 16 - 16 = 0$, hay una única solución doble $x = 2 \\implies y = 4$: el rayo es <strong>tangente</strong> y roza el chorro en el único punto $\\boldsymbol{T(2, 4)}$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Con la recta $y = 4x$:</strong> Igualando $-x^2 + 6x - 4 = 4x \\iff x^2 - 2x + 4 = 0$, cuyo discriminante es $\\boldsymbol{\\Delta = (-2)^2 - 4(1)(4) = -12 < 0}$ (<strong>sin solución real</strong>). Es una <strong>recta exterior</strong>: el rayo de luz pasa por encima del chorro de agua sin llegar a tocarlo."
            }
          ],
          "idea_clave": "Al igualar una parábola y una recta obtienes una ecuación de segundo grado cuyo discriminante $\\Delta = b^2 - 4ac$ decide la posición geométrica: si $\\Delta > 0$ se cortan en 2 puntos (secante), si $\\Delta = 0$ se tocan en 1 único punto (tangente) y si $\\Delta < 0$ no se tocan (exterior)."
        },
        {
          "numero": 5,
          "titulo": "Problema 5: El perro atado en la parcela y la valla recta",
          "referencia": "Bloque 4: Puntos 4.2, 4.5 y 4.7 (Págs. 22, 25 y 28)",
          "enunciado": "En el jardín de una casa (con las distancias en metros) hay un poste clavado en el origen de coordenadas $(0, 0)$ al que está sujeta una correa de $5\\text{ metros}$ de largo para un perro. Cerca pasa una valla totalmente recta cuya línea cumple que el cuádruple de la coordenada $x$ más el triple de la coordenada $y$ es igual a $25$.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "¿Qué curva forma el límite máximo hasta donde puede llegar el perro con la correa estirada? Escribe su ecuación y la de la valla, y resuelve el sistema para averiguar si el perro no llega a la valla, si la toca en un solo punto o si la valla corta su zona en dos puntos."
            },
            {
              "letra": "b)",
              "texto": "Indica las coordenadas exactas del punto de la valla al que consigue llegar el perro y qué ángulo forman en ese instante la correa tensada y la valla."
            }
          ],
          "instruccion": "Ecuación del límite de la correa y de la valla, resolución del sistema e interpretación geométrica:",
          "apartados": [
            {
              "letra": "a)",
              "texto": "<strong>Sistema y posición relativa:</strong> El límite de la correa es la <strong>circunferencia</strong> de centro $(0, 0)$ y radio $5\\text{ m}$ ($x^2 + y^2 = 25$), y la valla es la recta $4x + 3y = 25 \\implies y = \\dfrac{25 - 4x}{3}$. Sustituyendo: $x^2 + \\left(\\dfrac{25 - 4x}{3}\\right)^2 = 25 \\xrightarrow{\\cdot 9} 9x^2 + 625 - 200x + 16x^2 = 225 \\iff 25x^2 - 200x + 400 = 0 \\xrightarrow{:25} x^2 - 8x + 16 = 0 \\iff (x - 4)^2 = 0$ ($\\Delta = 0$). La valla es <strong>tangente</strong> y el perro llega a tocarla en <strong>un único punto</strong>."
            },
            {
              "letra": "b)",
              "texto": "<strong>Punto de contacto y ángulo:</strong> Para $x = 4$, queda $y = \\dfrac{25 - 16}{3} = 3 \\implies$ toca la valla en el punto $\\boldsymbol{T(4, 3)}$. Como toda recta tangente a una circunferencia es perpendicular al radio en el punto de contacto, la correa tensada y la valla forman un ángulo de $\\boldsymbol{90^\\circ}$."
            }
          ],
          "idea_clave": "Cuando una recta es tangente a una circunferencia ($\\Delta = 0$), solo comparten un punto $T(x_0, y_0)$, que es el punto de la recta más cercano al centro. En ese punto, el radio (la correa tensada) y la recta tangente (la valla) son siempre perpendiculares ($90^\\circ$)."
        }
      ]
    },
    {
      "numero": "14",
      "fecha": "Jueves 19 de Noviembre de 2026",
      "titulo": "Sistemas de 3 Ecuaciones con 3 Incógnitas — El Método de Gauss (SCD, SCI y SI)",
      "ejercicios": [
        {
          "numero": 1,
          "titulo": "Problema 1: La excursión de Biología en vehículos de alquiler (SCD y simplificación de filas)",
          "referencia": "Bloque 5: Puntos 5.2 y 5.3 (Págs. 30–32)",
          "enunciado": "El departamento de Biología contrata $22\\text{ vehículos}$ para transportar exactamente a $138\\text{ personas}$ en una salida de campo. Alquila coches de $4\\text{ plazas}$ ($50\\text{ €}$ cada uno), furgonetas de $7\\text{ plazas}$ ($90\\text{ €}$ cada una) y microbuses de $12\\text{ plazas}$ ($150\\text{ €}$ cada uno). Todos los vehículos van completos y la factura total asciende a $1740\\text{ €}$.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Plantea el sistema de tres ecuaciones con tres incógnitas (definiendo antes qué representa cada incógnita y su significado real) y simplifica alguna ecuación si es posible."
            },
            {
              "letra": "b)",
              "texto": "Escálonalo por el Método de Gauss en forma de matriz ampliada, clasifica el sistema según la última fila y calcula cuántos vehículos de cada tipo se alquilan."
            }
          ],
          "instruccion": "Planteamiento, simplificación de filas, escalonamiento de Gauss, clasificación y comprobación:",
          "apartados": [
            {
              "letra": "a)",
              "texto": "<strong>Incógnitas y planteamiento ($x, y, z \\in \\mathbb{N}$):</strong> Llamamos $x$ al número de coches, $y$ al de furgonetas y $z$ al de microbuses: $\\begin{cases} x + y + z = 22 \\\\ 4x + 7y + 12z = 138 \\\\ 50x + 90y + 150z = 1740 \\xrightarrow{:10} 5x + 9y + 15z = 174 \\end{cases}$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Escalonamiento de Gauss, clasificación (SCD) y sustitución regresiva:</strong><br>$\\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 22 \\\\ 4 & 7 & 12 & 138 \\\\ 5 & 9 & 15 & 174 \\end{array}\\right) \\xrightarrow{\\substack{F_2 - 4F_1 \\\\ F_3 - 5F_1}} \\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 22 \\\\ 0 & 3 & 8 & 50 \\\\ 0 & 4 & 10 & 64 \\end{array}\\right) \\xrightarrow{F_3 \\div 2} \\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 22 \\\\ 0 & 3 & 8 & 50 \\\\ 0 & 2 & 5 & 32 \\end{array}\\right) \\xrightarrow{3F_3 - 2F_2} \\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 22 \\\\ 0 & 3 & 8 & 50 \\\\ 0 & 0 & -1 & -4 \\end{array}\\right)$.<br>Última fila $-z = -4 \\implies z = 4$ (<strong>Sistema Compatible Determinado, SCD</strong>: solución única). Sustituyendo hacia atrás: $2y + 5(4) = 32 \\implies y = 6$ y $x = 22 - 6 - 4 = 12$. Solución: <strong>$12$ coches, $6$ furgonetas y $4$ microbuses</strong> (comprobación: $48+42+48=138$; $600+540+600=1740\\text{ €}$)."
            }
          ],
          "idea_clave": "En Gauss no estás obligado a multiplicar números gigantes: dividir toda una fila por un número distinto de cero (como $\\div 10$ al inicio o $\\div 2$ en medio del proceso) reduce los errores de cálculo a la mitad y deja intactas las soluciones."
        },
        {
          "numero": 2,
          "titulo": "Problema 2: Las gafas de Realidad Virtual para la Feria de Ciencias (SCI con parámetro $\\lambda$ y filtro entero)",
          "referencia": "Bloque 5: Punto 5.4 y Ejemplo 5.3 (Pág. 33)",
          "enunciado": "Para los talleres de la Feria de Ciencias se alquilan $18\\text{ equipos}$ de Realidad Virtual entre tres gamas: Básico ($2\\text{ horas}$ de batería y $20\\text{ €}$), Pro ($3\\text{ horas}$ y $25\\text{ €}$) y Ultra ($4\\text{ horas}$ y $30\\text{ €}$). La autonomía acumulada entre todos suma $46\\text{ horas}$ y la factura total asciende a $410\\text{ €}$.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "¿Se puede determinar de forma única cuántos equipos hay de cada gama? Plantea el sistema, escálonalo por Gauss, clasifícalo y expresa todas sus soluciones reales en función de un parámetro $\\lambda$."
            },
            {
              "letra": "b)",
              "texto": "Si por logística es obligatorio pedir al menos $1\\text{ equipo}$ de cada tipo, ¿qué configuraciones reales son posibles?"
            }
          ],
          "instruccion": "Escalonamiento de Gauss hasta $0 = 0$, parametrización con $\\lambda$ y filtrado de soluciones enteras:",
          "apartados": [
            {
              "letra": "a)",
              "texto": "<strong>Planteamiento, Gauss y clasificación (SCI):</strong> Sean $x$ Básico, $y$ Pro y $z$ Ultra ($x, y, z \\in \\mathbb{N}$). Dividiendo la 3.ª ecuación ($20x+25y+30z=410$) entre $5$:<br>$\\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 18 \\\\ 2 & 3 & 4 & 46 \\\\ 4 & 5 & 6 & 82 \\end{array}\\right) \\xrightarrow{\\substack{F_2 - 2F_1 \\\\ F_3 - 4F_1}} \\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 18 \\\\ 0 & 1 & 2 & 10 \\\\ 0 & 1 & 2 & 10 \\end{array}\\right) \\xrightarrow{F_3 - F_2} \\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 18 \\\\ 0 & 1 & 2 & 10 \\\\ 0 & 0 & 0 & 0 \\end{array}\\right)$.<br>La última fila $0 = 0$ es una identidad: <strong>Sistema Compatible Indeterminado (SCI)</strong> con infinitas soluciones reales (la tarifa oculta es $10\\text{ €}$ fijos por unidad más $5\\text{ €}$ por hora de batería, de modo que $E_3/5 = 2E_1 + E_2$). Tomando $z = \\lambda \\in \\mathbb{R}$: $y = 10 - 2\\lambda$ y $x = 18 - (10 - 2\\lambda) - \\lambda = 8 + \\lambda \\implies \\boldsymbol{(8 + \\lambda,\\; 10 - 2\\lambda,\\; \\lambda)}$."
            },
            {
              "letra": "b)",
              "texto": "<strong>Filtrado realista ($x, y, z \\ge 1$ enteros):</strong> $x = 8 + \\lambda \\ge 1 \\implies \\lambda \\ge -7$; $y = 10 - 2\\lambda \\ge 1 \\implies \\lambda \\le 4{,}5$; $z = \\lambda \\ge 1 \\implies \\lambda \\in \\{1, 2, 3, 4\\}$. Existen <strong>$4$ configuraciones posibles</strong>: $\\boldsymbol{(9, 8, 1)}$, $\\boldsymbol{(10, 6, 2)}$, $\\boldsymbol{(11, 4, 3)}$ y $\\boldsymbol{(12, 2, 4)}$."
            }
          ],
          "idea_clave": "Un Sistema Compatible Indeterminado ($0 = 0$) tiene infinitas soluciones matemáticas en $\\mathbb{R}$, pero cuando representa objetos reales (enteros positivos y restricciones mínimas) el parámetro $\\lambda$ queda acotado a un puñado finito de soluciones válidas."
        },
        {
          "numero": 3,
          "titulo": "Problema 3: El torneo de tiro con arco (SI, fallo de marcador y paso a SCI)",
          "referencia": "Bloque 5: Puntos 5.4, 5.5 y Cuadro Resumen (Págs. 33–35)",
          "enunciado": "En un torneo de tiro con arco por equipos, las dianas Roja, Azul y Verde otorgan distintas puntuaciones fijas por acierto. El Tirador 1 acierta $1\\text{ Roja}$, $2\\text{ Azules}$ y $1\\text{ Verde}$, y suma $30\\text{ puntos}$. El Tirador 2 acierta $2\\text{ Rojas}$, $1\\text{ Azul}$ y $3\\text{ Verdes}$, y suma $45\\text{ puntos}$. La aplicación del torneo registra que el Tirador 3 acertó $4\\text{ Rojas}$, $5\\text{ Azules}$ y $5\\text{ Verdes}$, con un total de $100\\text{ puntos}$.",
          "preguntas": [
            {
              "letra": "a)",
              "texto": "Plantea el sistema con las puntuaciones de cada diana, escálonalo por Gauss y clasifícalo."
            },
            {
              "letra": "b)",
              "texto": "La aplicación tiene un fallo en el marcador del Tirador 3: explica por qué es imposible ese resultado y qué puntuación debería haber mostrado."
            },
            {
              "letra": "c)",
              "texto": "Una vez corregido el marcador, ¿sabremos ya cuánto vale cada diana? Si el juez añade que «acertar una diana de cada color suma $23\\text{ puntos}$», calcula el valor exacto de cada diana."
            }
          ],
          "instruccion": "Escalonamiento de Gauss hasta $0 = -5$, detección de la combinación lineal y cierre del sistema:",
          "apartados": [
            {
              "letra": "a)",
              "texto": "<strong>Planteamiento, Gauss y clasificación (SI):</strong> Sean $x$ Roja, $y$ Azul y $z$ Verde:<br>$\\left(\\begin{array}{ccc|c} 1 & 2 & 1 & 30 \\\\ 2 & 1 & 3 & 45 \\\\ 4 & 5 & 5 & 100 \\end{array}\\right) \\xrightarrow{\\substack{F_2 - 2F_1 \\\\ F_3 - 4F_1}} \\left(\\begin{array}{ccc|c} 1 & 2 & 1 & 30 \\\\ 0 & -3 & 1 & -15 \\\\ 0 & -3 & 1 & -20 \\end{array}\\right) \\xrightarrow{F_3 - F_2} \\left(\\begin{array}{ccc|c} 1 & 2 & 1 & 30 \\\\ 0 & -3 & 1 & -15 \\\\ 0 & 0 & 0 & -5 \\end{array}\\right)$.<br>La última fila $0 = -5$ es una contradicción imposible: <strong>Sistema Incompatible (SI)</strong>, sin solución."
            },
            {
              "letra": "b)",
              "texto": "<strong>Detección del fallo del marcador:</strong> El Tirador 3 acertó exactamente $2\\cdot T_1 + T_2$ dianas de cada color ($2(1,2,1)+(2,1,3)=(4,5,5)$), luego su puntuación obligatoria es $2(30) + 45 = \\boldsymbol{105\\text{ puntos}}$ (faltan $5\\text{ puntos}$ en el marcador)."
            },
            {
              "letra": "c)",
              "texto": "<strong>De SI a SCI y cierre con el dato nuevo:</strong> Si cambiamos $100$ por $105$, la última fila pasa a $0 = 0$: el sistema pasa a <strong>SCI</strong> (sigue faltando información independiente). Al añadir $x + y + z = 23$: restando $(x+2y+z)-(x+y+z) \\implies \\boldsymbol{y = 7}$; luego $x + z = 16$ y $2x + 3z = 38 \\implies \\boldsymbol{z = 6}$ y $\\boldsymbol{x = 10}$. Valores: <strong>Roja $10$, Azul $7$ y Verde $6$ puntos</strong>."
            }
          ],
          "idea_clave": "Cuando al corregir una contradicción ($0 = -5$) ajustas solo el término independiente para hacer cuadrar la combinación lineal, no consigues un SCD sino un SCI ($0 = 0$): para hallar una solución única hace falta sustituir la fila dependiente por una ecuación realmente independiente."
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
      "texto": "Comprendo la unidad imaginaria $i = \\sqrt{-1}$ ($i^2 = -1$), sé representar números complejos en forma binómica $z = a + bi$ en el plano complejo y calcular su conjugado $\\bar{z}$ y módulo $|z|$."
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
