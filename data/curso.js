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
    "tema_id": 2,
    "tarea_id": "Tarea-04",
    "titulo": "Tarea 4: Números Complejos (Problemas 13 al 16 de la Hoja)",
    "fecha_limite": "Lunes 23 de Noviembre de 2026 (20:00 h)",
    "estado": "activa",
    "pdf_tarea": "pdf/Ficha_Problemas_Tema2_Ecuaciones_Complejos_Sistemas_1Bach.pdf",
    "pdf_solucionario": null,
    "aviso": "¡Nueva tarea en Classroom! Resuelve los problemas 13 al 16 de la hoja (Números Complejos) en tu libreta y súbelos antes del Lunes 23 de Noviembre a las 20:00 h."
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
    "fecha": "Martes 17 de Noviembre de 2026",
    "tema_id": 2,
    "tema_titulo": "Tema 2: Ecuaciones, Números Complejos y Sistemas",
    "titulo_sesion": "Sesión 13: Más Problemas Geométricos con Sistemas No Lineales (Circunferencias, Elipse, Parábola y Tangencias)",
    "referencia_apuntes": "Bloque 4: Puntos 4.2, 4.5 y 4.7 (Págs. 22, 25 y 28)",
    "mision_semanal": "Repasar los nuevos problemas geométricos de Sistemas No Lineales (circunferencias, elipse y tangencias) y practicar los problemas de sistemas de la hoja.",
    "trabajo_semanal_pendiente": "Pasar a limpio los 5 problemas geométricos de Sistemas No Lineales en tu libreta y repasar los problemas 19 al 23 de la hoja.",
    "ejercicios_vistos": [
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
      "sesiones_impartidas": 13,
      "descripcion": "Ecuaciones polinómicas y racionales, ecuaciones con radicales, exponenciales y logarítmicas, números complejos (forma binómica, operaciones y plano complejo), sistemas de ecuaciones algebraicos y geométricos, y Método de Gauss con matrices.",
      "apuntes_pdf": "pdf/Apuntes_Tema2_Ecuaciones_Complejos_Sistemas_1Bach.pdf",
      "ejercicios_pdf": "pdf/Ficha_Problemas_Tema2_Ecuaciones_Complejos_Sistemas_1Bach.pdf",
      "repaso_pdf": "pdf/Ficha_Repaso_Examen_Tema2_Ecuaciones_Sistemas_Gauss_1Bach.pdf",
      "repaso_solucionario_pdf": null,
      "apuntes_listos": true,
      "ejercicios_listos": true,
      "total_ejercicios_libreta": 0,
      "total_tareas_classroom": 2,
      "total_controles_test": 0
    }
  ]
};
