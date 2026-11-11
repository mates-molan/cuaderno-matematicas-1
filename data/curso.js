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
    "tarea_id": "Tarea-03",
    "titulo": "Tarea 3: Ecuaciones y Modelado (Problemas 1 al 12 de la Hoja)",
    "fecha_limite": "Jueves 12 de Noviembre de 2026 (20:00 h)",
    "estado": "activa",
    "pdf_tarea": "pdf/Ficha_Problemas_Tema2_Ecuaciones_Complejos_Sistemas_1Bach.pdf",
    "pdf_solucionario": "pdf/Ficha_Problemas_Tema2_Ecuaciones_Complejos_Sistemas_1Bach_Solucionario.pdf",
    "aviso": "¡Nueva tarea en Classroom! Resuelve los 12 primeros problemas de la hoja (Ecuaciones) en tu libreta antes del Jueves 12 de Noviembre a las 20:00 h."
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
    "fecha": "Jueves 12 de Noviembre de 2026",
    "tema_id": 2,
    "tema_titulo": "Tema 2: Ecuaciones, Números Complejos y Sistemas",
    "titulo_sesion": "Sesión 10: Problemas con Sistemas de Ecuaciones No Lineales, Exponenciales y Logarítmicos",
    "referencia_apuntes": "Bloque 4: Puntos 4.2, 4.3 y 4.5 a 4.8 (Págs. 22, 23 y 25-29)",
    "mision_semanal": "Repasar los 5 problemas de Sistemas No Lineales, Exponenciales y Logarítmicos vistos en pizarra y practicar los problemas 19 al 23 de la hoja.",
    "trabajo_semanal_pendiente": "Pasar a limpio los 5 problemas de Sistemas No Lineales en tu libreta y entregar la Tarea 3 en un único archivo PDF antes de hoy jueves 12 a las 20:00 h.",
    "ejercicios_vistos": [
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
      "sesiones_impartidas": 10,
      "descripcion": "Ecuaciones polinómicas y racionales, ecuaciones con radicales, exponenciales y logarítmicas, números complejos (forma binómica, operaciones y plano complejo), sistemas de ecuaciones algebraicos y geométricos, y Método de Gauss con matrices.",
      "apuntes_pdf": "pdf/Apuntes_Tema2_Ecuaciones_Complejos_Sistemas_1Bach.pdf",
      "ejercicios_pdf": "pdf/Ficha_Problemas_Tema2_Ecuaciones_Complejos_Sistemas_1Bach.pdf",
      "repaso_pdf": "",
      "repaso_solucionario_pdf": "",
      "apuntes_listos": true,
      "ejercicios_listos": true,
      "total_ejercicios_libreta": 0,
      "total_tareas_classroom": 1,
      "total_controles_test": 0
    }
  ]
};
