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
    "existe": false,
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
    "fecha": "Lunes 2 y Martes 3 de Noviembre de 2026",
    "tema_id": 2,
    "tema_titulo": "Tema 2: Ecuaciones, Números Complejos y Sistemas",
    "titulo_sesion": "Sesiones 4 y 5: Modelado Geométrico con Ecuaciones (Prismas, Círculos, Rectángulos y Áreas)",
    "referencia_apuntes": "Bloques 1 y 2: Puntos 1.3, 1.5, 2.2 y 2.3 (Págs. 6-16)",
    "mision_semanal": "Trabajar en la libreta los problemas de la Hoja del Tema 2.",
    "trabajo_semanal_pendiente": "Pasar a limpio los 7 problemas de modelado de la pizarra en tu libreta y continuar trabajando los problemas de la Hoja del Tema 2.",
    "ejercicios_vistos": [
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
            "expresion": "\\textbf{Paso 0 (Región factible estricta):} \\; \\text{Para que existan las raíces: } 2x + 7 \\ge 0 \\implies x \\ge -3{,}5; \\; x + 3 \\ge 0 \\implies x \\ge -3 \\text{ (al ser longitud, } x > 0\\text{)}. \\text{ Al aislar la primera raíz: } \\sqrt{2x+7} = 5 - \\sqrt{x+3} \\ge 0 \\implies \\sqrt{x+3} \\le 5 \\implies x + 3 \\le 25 \\implies x \\le 22. \\text{ Al aislar la segunda raíz en el siguiente paso: } 21 - x \\ge 0 \\implies x \\le 21. \\text{ Por tanto, la \\textbf{región factible estricta}} \\text{ es } \\boldsymbol{x \\in [0, 21]}."
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
            "expresion": "\\textbf{Filtro con la región factible y comprobación:} \\; \\text{El valor } x_2 = 141 \\text{ queda \\textbf{descartado de inmediato}} \\text{ porque cae fuera de la región factible } (141 > 21) \\text{ y genera una solución falsa: } \\sqrt{289} + \\sqrt{144} = 17 + 12 = 29 \\ne 5. \\text{ La \\textbf{única solución válida}} \\text{ es } \\boldsymbol{x = 1\\text{ metro}}."
          },
          {
            "letra": "g)",
            "expresion": "\\textbf{Longitud de los tirantes:} \\; L_1 = \\sqrt{2(1) + 7} = \\sqrt{9} = \\mathbf{3\\text{ m}}, \\; L_2 = \\sqrt{1 + 3} = \\sqrt{4} = \\mathbf{2\\text{ m}}. \\; \\text{Comprobación: } 3 + 2 = \\mathbf{5\\text{ m}}."
          }
        ],
        "idea_clave": "Al tener dos raíces, es imprescindible aislar una de ellas antes de elevar al cuadrado para que solo quede un radical en el siguiente paso. Al elevar dos veces al cuadrado se pueden introducir soluciones falsas; la región factible del Paso 0 ($x \\le 21$) permite detectar y eliminar la raíz espuria $x=141$ al instante sin dudas."
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
      "sesiones_impartidas": 5,
      "descripcion": "Ecuaciones polinómicas y racionales, ecuaciones con radicales, exponenciales y logarítmicas, números complejos (forma binómica, operaciones y plano complejo), sistemas de ecuaciones algebraicos y geométricos, y Método de Gauss con matrices.",
      "apuntes_pdf": "pdf/Apuntes_Tema2_Ecuaciones_Complejos_Sistemas_1Bach.pdf",
      "ejercicios_pdf": "pdf/Ficha_Problemas_Tema2_Ecuaciones_Complejos_Sistemas_1Bach.pdf",
      "repaso_pdf": "",
      "repaso_solucionario_pdf": "",
      "apuntes_listos": true,
      "ejercicios_listos": true,
      "total_ejercicios_libreta": 0,
      "total_tareas_classroom": 0,
      "total_controles_test": 0
    }
  ]
};
