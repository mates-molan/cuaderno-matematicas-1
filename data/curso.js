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
    "fecha": "Jueves 29 de Octubre de 2026",
    "tema_id": 2,
    "tema_titulo": "Tema 2: Ecuaciones, Números Complejos y Sistemas",
    "titulo_sesion": "Sesión 2: Modelado Práctico con Parábolas, Racionales, Radicales y Exponenciales",
    "referencia_apuntes": "Bloques 1 y 2: Puntos 1.1, 1.3, 1.5 y 2.3 (Págs. 6-14)",
    "mision_semanal": "Empezar a trabajar en la libreta los problemas de la Hoja del Tema 2 (ecuaciones polinómicas, bicuadradas y racionales), comprobando siempre el sentido real de las soluciones y los valores prohibidos.",
    "trabajo_semanal_pendiente": "Pasar a limpio los 4 problemas de modelado de la pizarra en tu libreta y resolver los problemas 1 al 8 de la Hoja del Tema 2.",
    "ejercicios_vistos": [
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
        "titulo": "Problema 3: Calibración de un sensor perimetral (Ecuación con radical y solución espuria)",
        "referencia": "Punto 2.3 (Pág. 13, análogo a Ejemplo 2.1 y 2.2)",
        "enunciado": "Un equipo de telecomunicaciones calibra un sensor láser y un cable tensor fijado a una distancia horizontal $x$ (en metros) de un mástil. La longitud del cable es $L(x) = \\sqrt{x + 5}\\text{ m}$ y debe coincidir con la lectura del brazo telescópico de seguridad $d(x) = 7 - x\\text{ m}$. Halla la posición $x$ donde ambas lecturas coinciden.",
        "instruccion": "Resuelve la ecuación con radical aplicando el Paso 0 y comprueba obligatoriamente las soluciones:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "\\textbf{Paso 0 (Condiciones de existencia y signo):} \\; \\text{Radicando: } x + 5 \\ge 0 \\implies x \\ge -5. \\text{ Como } \\sqrt{x+5} \\ge 0, \\text{ exigimos } 7 - x \\ge 0 \\implies x \\le 7. \\text{ Intervalo admisible: } \\boldsymbol{x \\in [-5, 7]}."
          },
          {
            "letra": "b)",
            "expresion": "\\textbf{Elevar al cuadrado ambos miembros:} \\; (\\sqrt{x + 5})^2 = (7 - x)^2 \\iff x + 5 = 49 - 14x + x^2 \\iff x^2 - 15x + 44 = 0."
          },
          {
            "letra": "c)",
            "expresion": "\\textbf{Resolver en } x: \\; (x - 4)(x - 11) = 0 \\implies x_1 = 4, \\quad x_2 = 11."
          },
          {
            "letra": "d)",
            "expresion": "\\textbf{Comprobación estricta:} \\; \\text{Para } x = 4: \\sqrt{9} = 3 \\text{ y } 7-4=3 \\text{ (\\textbf{VÁLIDA})}. \\text{ Para } x = 11: \\sqrt{16} = 4 \\text{ pero } 7-11=-4 \\; (4 \\ne -4, \\text{ \\textbf{FALSA}}). \\text{ La única posición válida es } \\boldsymbol{x = 4\\text{ m}}."
          }
        ],
        "idea_clave": "Al elevar ambos miembros al cuadrado se pierde la información del signo (porque $(-4)^2 = 4^2 = 16$), por lo que pueden colarse soluciones falsas. La comprobación en la ecuación original es un paso algebraico obligatorio e innegociable."
      },
      {
        "numero": 4,
        "titulo": "Problema 4: Detección y aislamiento de un ciberataque (Ecuación exponencial cuadrática)",
        "referencia": "Punto 2.3 (Pág. 14, análogo a Ejemplo 2.3 situación 2)",
        "enunciado": "Un virus informático infecta servidores en un centro de datos en la nube. El número de servidores infectados en miles tras $t$ horas es $N(t) = 4^t - 3 \\cdot 2^t$. El protocolo de emergencia activa el aislamiento total de la red cuando se alcanzan exactamente 4000 servidores infectados ($N(t) = 4$). ¿A cuántas horas del inicio del ataque se cortará la red?",
        "instruccion": "Reconoce la misma base de potencias, realiza un cambio de variable y resuelve con rigor:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "\\textbf{Ecuación y potencias de base 2:} \\; 4^t - 3 \\cdot 2^t = 4. \\text{ Como } 4^t = (2^2)^t = (2^t)^2, \\text{ la ecuación se escribe: } (2^t)^2 - 3 \\cdot (2^t) - 4 = 0."
          },
          {
            "letra": "b)",
            "expresion": "\\textbf{Cambio de variable:} \\; \\text{Hacemos } y = 2^t \\; (\\text{con la condición estricta } y > 0). \\text{ Queda: } y^2 - 3y - 4 = 0."
          },
          {
            "letra": "c)",
            "expresion": "\\textbf{Resolver en } y: \\; (y - 4)(y + 1) = 0 \\implies y_1 = 4, \\quad y_2 = -1."
          },
          {
            "letra": "d)",
            "expresion": "\\textbf{Deshacer el cambio:} \\; \\text{Para } y_1 = 4: 2^t = 4 = 2^2 \\implies \\boldsymbol{t = 2\\text{ horas}}. \\text{ Para } y_2 = -1: 2^t = -1 \\text{ es \\textbf{imposible en }} \\mathbb{R} \\text{ (una potencia de base positiva nunca da negativo)}."
          }
        ],
        "idea_clave": "No intentes aplicar logaritmos término a término en una resta (el logaritmo de una resta NO es la resta de logaritmos). Al observar bases relacionadas como $4^t$ y $2^t$, el método maestro es el cambio de variable $y = 2^t$ y vigilar que $y > 0$."
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
      "sesiones_impartidas": 2,
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
