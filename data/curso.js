// =========================================================================
// CONFIGURACIÓN Y ESTADO GLOBAL DEL CURSO: MATEMÁTICAS I
// =========================================================================
window.CURSO_CONFIG = {
  "nombre": "Matemáticas I",
  "nivel": "1.º de Bachillerato de Ciencias y Tecnología",
  "centro": "IES Ricardo Ortega",
  "ano_academico": "2026-2027",
  "tema_actual_id": 2,
  "tarea_classroom_activa": {
    "existe": true,
    "tema_id": 1,
    "tarea_id": "Tarea-02",
    "titulo": "Tarea 2: Radicales, Logaritmos, Fracciones Algebraicas y Binomio de Newton",
    "fecha_limite": "Domingo 25 de Octubre de 2026 (20:00 h) - Plazo Finalizado",
    "estado": "solucionario_disponible",
    "pdf_tarea": "pdf/Tarea2_Herramientas_del_Algebra_1Bach.pdf",
    "pdf_solucionario": "pdf/Tarea2_Herramientas_del_Algebra_1Bach_Solucionario.pdf",
    "aviso": "¡Solucionario de la Tarea 2 disponible! Consulta las soluciones resueltas paso a paso para auto-corregir tu libreta."
  },
  "control_test_activo": {
    "existe": false,
    "tema_id": 1,
    "test_id": "Examen-01",
    "titulo": "Examen Tema 1: Herramientas del Álgebra",
    "fecha": "Lunes 26 de Octubre de 2026",
    "estado": "solucionario_disponible",
    "pdf_examen": "pdf/Examen_Tema1_Herramientas_del_Algebra_1Bach.pdf",
    "pdf_solucionario": "pdf/Examen_Tema1_Herramientas_del_Algebra_1Bach_Solucionario.pdf",
    "aviso": "Examen del Tema 1 finalizado. Consulta el enunciado y el solucionario resuelto en la pestaña del Tema 1."
  },
  "ultima_clase": {
    "fecha": "Martes 27 de Octubre de 2026",
    "tema_id": 2,
    "tema_titulo": "Tema 2: Ecuaciones, Números Complejos y Sistemas",
    "titulo_sesion": "Sesión 1: Problemas Prácticos con Ecuaciones (Polinómicas, Bicuadradas y Racionales)",
    "referencia_apuntes": "Bloque 1: Punto 1.3 (Págs. 6-7)",
    "mision_semanal": "Dominar la resolución de ecuaciones en situaciones prácticas: factorizando identidades notables y vigilando siempre los valores prohibidos en denominadores.",
    "trabajo_semanal_pendiente": "Copiar en tu libreta los 4 problemas de pizarra y repasar los Ejemplos 1.1, 1.2 y 1.3 de las páginas 6 y 7 de los apuntes.",
    "ejercicios_vistos": [
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
  "temas": [
    {
      "id": 1,
      "codigo": "T01",
      "numero": 1,
      "titulo": "Herramientas del Álgebra",
      "evaluacion": "1.ª Evaluación",
      "estado": "completado",
      "sesiones_impartidas": 20,
      "descripcion": "Conjuntos numéricos ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}$), operaciones con intervalos en la recta real, valor absoluto, potencias, radicales, logaritmos, polinomios, factorización con Ruffini, fracciones algebraicas y Binomio de Newton.",
      "apuntes_pdf": "pdf/Apuntes_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "ejercicios_pdf": "pdf/Ficha_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "repaso_pdf": "pdf/Ficha_Repaso_Examen_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "repaso_solucionario_pdf": "pdf/Ficha_Repaso_Examen_Tema1_Herramientas_del_Algebra_1Bach_Solucionario.pdf",
      "apuntes_listos": true,
      "ejercicios_listos": true,
      "total_ejercicios_libreta": 15,
      "total_tareas_classroom": 2,
      "total_controles_test": 2
    },
    {
      "id": 2,
      "codigo": "T02",
      "numero": 2,
      "titulo": "Ecuaciones, Números Complejos y Sistemas",
      "evaluacion": "1.ª Evaluación",
      "estado": "en_curso",
      "sesiones_impartidas": 1,
      "descripcion": "Ecuaciones polinómicas y racionales, ecuaciones con radicales, exponenciales y logarítmicas, números complejos (forma binómica, operaciones y plano complejo), sistemas de ecuaciones algebraicos y geométricos, y Método de Gauss con matrices.",
      "apuntes_pdf": "pdf/Apuntes_Tema2_Ecuaciones_Complejos_Sistemas_1Bach.pdf",
      "ejercicios_pdf": "",
      "repaso_pdf": "",
      "repaso_solucionario_pdf": "",
      "apuntes_listos": true,
      "ejercicios_listos": false,
      "total_ejercicios_libreta": 0,
      "total_tareas_classroom": 0,
      "total_controles_test": 0
    }
  ]
};
