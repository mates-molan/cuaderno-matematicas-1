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
      "titulo": "Modelado Competencial: Ecuaciones Polinómicas, Bicuadradas y Racionales",
      "ejercicios": [
        {
          "numero": 1,
          "titulo": "Problema 1: Autonomía de Drones y Factorización Eficiente (Ecuación Polinómica)",
          "referencia": "Bloque 1: Punto 1.3 (Pág. 6, análogo a Ejemplo 1.1)",
          "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">🚁</span><div class=\"nota-aula-content\"><strong>Contexto de Ingeniería Aeroespacial:</strong> Dos prototipos de drones para entrega de material médico en zonas rurales, <em>Zephyr</em> y <em>AeroPulse</em>, tienen autonomías de vuelo (en kilómetros) en función de un parámetro dimensional de perfil alar $x$ (en decímetros):<br>• Prototipo Zephyr: $A_1(x) = (x^2 - 9)(3x - 2)$<br>• Prototipo AeroPulse: $A_2(x) = (x - 3)(x^2 + 4x + 3)$<br>Para coordinar una misión conjunta, los ingenieros necesitan hallar qué cotas $x$ proporcionan idéntica autonomía ($A_1(x) = A_2(x)$).</div></div>Plantea la ecuación $(x^2 - 9)(3x - 2) = (x - 3)(x^2 + 4x + 3)$ y resuélvela sin multiplicar paréntesis a lo loco:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\textbf{Factorización previa:} \\; x^2 - 9 = (x - 3)(x + 3) \\quad \\text{y} \\quad x^2 + 4x + 3 = (x + 1)(x + 3)"
            },
            {
              "letra": "b)",
              "expresion": "\\textbf{Pasar a la izquierda y extraer factores comunes:} \\; (x - 3)(x + 3)(3x - 2) - (x - 3)(x + 3)(x + 1) = 0 \\iff (x - 3)(x + 3)\\big[(3x - 2) - (x + 1)\\big] = 0"
            },
            {
              "letra": "c)",
              "expresion": "\\textbf{Regla del producto nulo y soluciones reales:} \\; (x - 3)(x + 3)(2x - 3) = 0 \\implies x_1 = 3, \\quad x_2 = -3, \\quad x_3 = \\dfrac{3}{2} = 1{,}5"
            },
            {
              "letra": "d)",
              "expresion": "\\textbf{Interpretación física de las soluciones:} \\; \\text{La cota es una medida dimensional real } (x > 0), \\text{ por lo que descartamos } x_2 = -3. \\text{ Con } x = 3\\text{ la autonomía colapsa a } 0\\text{ km (ala degenerada), por lo que el diseño operativo óptimo es } x = 1{,}5\\text{ dm} \\; (A = 34{,}375\\text{ km})."
            }
          ],
          "idea_clave": "Si multiplicas los paréntesis a ambos lados generas un polinomio cúbico y te obligas a hacer Ruffini. Mirando identidades notables antes de operar, sacas factor común $(x - 3)(x + 3)$ y el problema se resuelve en 3 líneas."
        },
        {
          "numero": 2,
          "titulo": "Problema 2: Nodos de Vibración en una Pasarela Peatonal (Ecuación Bicuadrada)",
          "referencia": "Bloque 1: Punto 1.3 (Pág. 6, análogo a Ejemplo 1.2 a)",
          "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">🌉</span><div class=\"nota-aula-content\"><strong>Contexto de Mecánica Estructural:</strong> Al estudiar la resonancia provocada por el paso de peatones sobre una pasarela suspendida, la curva de flexión vertical $y$ (en mm) respecto al centro simétrico ($x = 0$, con $x$ en metros) responde a la función:<br>$$y(x) = x^4 - 10x^2 + 9$$Para anclar los amortiguadores de masa sintonizados (TMD) que eliminen el balanceo sin sufrir fatiga, los técnicos deben ubicarlos exactamente en los <strong>nodos de deformación nula</strong> ($y(x) = 0$).</div></div>Resuelve la ecuación bicuadrada $x^4 - 10x^2 + 9 = 0$ mediante cambio de variable:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\textbf{Cambio de variable:} \\; \\text{Definimos } t = x^2 \\implies t^2 = x^4, \\text{ transformando la ecuación en } t^2 - 10t + 9 = 0"
            },
            {
              "letra": "b)",
              "expresion": "\\textbf{Resolución en } t: \\; (t - 9)(t - 1) = 0 \\implies t_1 = 9, \\quad t_2 = 1 \\quad (\\text{ambos } > 0, \\text{ luego ambos generan soluciones reales})"
            },
            {
              "letra": "c)",
              "expresion": "\\textbf{Deshacer el cambio con doble signo } \\pm: \\; \\begin{cases} x^2 = 9 \\implies x = \\pm\\sqrt{9} = \\pm 3 \\\\ x^2 = 1 \\implies x = \\pm\\sqrt{1} = \\pm 1 \\end{cases} \\implies S = \\{-3, -1, 1, 3\\}"
            },
            {
              "letra": "d)",
              "expresion": "\\textbf{Conclusión estructural:} \\; \\text{La pasarela presenta 4 nodos de anclaje simétricos a } 1\\text{ m y } 3\\text{ m a ambos lados del centro } (x = \\pm 1\\text{ m},\\; x = \\pm 3\\text{ m})."
            }
          ],
          "idea_clave": "Al terminar la ecuación cuadrática en $t$ no has resuelto el problema: la incógnita era la distancia $x$. Recuerda siempre deshacer el cambio ($x = \\pm\\sqrt{t}$) y tener en cuenta que cada $t > 0$ genera dos soluciones simétricas opuestas."
        },
        {
          "numero": 3,
          "titulo": "Problema 3: Transición de Fase Térmica en Sensores Satelitales (Cambio de Variable Impar)",
          "referencia": "Bloque 1: Punto 1.3 (Pág. 6, análogo a Ejemplo 1.2 b)",
          "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">🛰️</span><div class=\"nota-aula-content\"><strong>Contexto de Ciencia de Materiales Aeroespaciales:</strong> La conductividad de un nanocompuesto semiconductor para satélites meteorológicos experimenta una transición cuántica de fase cuando la variación térmica relativa $x$ (respecto al punto criogénico base) cumple la ley física no lineal:<br>$$x^6 - 26x^3 = 27 \\iff x^6 - 26x^3 - 27 = 0$$Los ingenieros de instrumentación deben predecir todas las temperaturas reales donde ocurre dicha transición.</div></div>Resuelve la ecuación $x^6 - 26x^3 - 27 = 0$ analizando la particularidad del exponente impar:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\textbf{Cambio de variable:} \\; \\text{Definimos } t = x^3 \\implies t^2 = x^6, \\text{ obteniendo la ecuación } t^2 - 26t - 27 = 0"
            },
            {
              "letra": "b)",
              "expresion": "\\textbf{Resolución en } t: \\; (t - 27)(t + 1) = 0 \\implies t_1 = 27, \\quad t_2 = -1"
            },
            {
              "letra": "c)",
              "expresion": "\\textbf{Deshacer el cambio (raíz cúbica real):} \\; \\begin{cases} x^3 = 27 \\implies x_1 = \\sqrt[3]{27} = 3 \\\\ x^3 = -1 \\implies x_2 = \\sqrt[3]{-1} = -1 \\end{cases} \\implies S = \\{-1, 3\\}"
            },
            {
              "letra": "d)",
              "expresion": "\\textbf{Contraste didáctico:} \\; \\text{A diferencia de las bicuadradas pares } (x^2), \\text{ las raíces de índice impar SÍ están definidas para números negativos en } \\mathbb{R}. \\text{ Existen dos temperaturas críticas reales: frío } (x = -1) \\text{ y calor } (x = 3)."
            }
          ],
          "idea_clave": "En $x^6 + \\dots + x^3$, el cambio natural es $t = x^3$. Al deshacerlo, cada valor de $t$ (sea positivo o negativo) da una única solución real mediante la raíz cúbica: $\\sqrt[3]{-1} = -1$ es un número real perfectamente válido."
        },
        {
          "numero": 4,
          "titulo": "Problema 4: Control de Presión y Válvulas en Biorreactor (Ecuación Racional y Valores Prohibidos)",
          "referencia": "Bloque 1: Punto 1.3 (Pág. 7, análogo a Ejemplo 1.3)",
          "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">🧪</span><div class=\"nota-aula-content\"><strong>Contexto de Ingeniería de Procesos Químicos:</strong> El caudal neto de recirculación en un biorreactor automatizado combina dos líneas de alimentación dependientes de la presión manométrica $x$ (en bares): $T_1(x) = \\dfrac{2x}{x - 1}$ y $T_2(x) = \\dfrac{x + 3}{x + 4}$. Para equilibrar la pérdida de carga en la válvula central, el sistema debe calibrarse según la ecuación:<br>$$\\frac{2x}{x - 1} - \\frac{x + 3}{x + 4} = \\frac{10}{x^2 + 3x - 4}$$</div></div>Aplica el protocolo en 4 pasos para resolver la ecuación racional y evitar soluciones falsas:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\textbf{Paso 0 (Valores prohibidos):} \\; x^2 + 3x - 4 = (x - 1)(x + 4) \\implies \\text{Valores prohibidos: } x = 1 \\text{ y } x = -4 \\quad (\\text{provocan división entre cero / bloqueo hidráulico})"
            },
            {
              "letra": "b)",
              "expresion": "\\textbf{Eliminar denominadores con m.c.m. } (x - 1)(x + 4): \\; 2x(x + 4) - (x + 3)(x - 1) = 10"
            },
            {
              "letra": "c)",
              "expresion": "\\textbf{Operar protegiendo con paréntesis:} \\; (2x^2 + 8x) - (x^2 + 2x - 3) = 10 \\iff x^2 + 6x - 7 = 0 \\iff (x - 1)(x + 7) = 0 \\implies x_1 = 1, \\quad x_2 = -7"
            },
            {
              "letra": "d)",
              "expresion": "\\textbf{Auditoría de soluciones frente al Paso 0:} \\; \\begin{cases} x_1 = 1: \\text{ ¡SOLUCIÓN FALSA! Se descarta porque anula el denominador } (x - 1) \\\\ x_2 = -7: \\text{ VÁLIDA. Comprobación: } \\frac{-14}{-8} - \\frac{-4}{-3} = \\frac{7}{4} - \\frac{4}{3} = \\frac{5}{12} = \\frac{10}{24} \\end{cases} \\implies \\text{Solución única: } x = -7\\text{ bares}"
            }
          ],
          "idea_clave": "Hacer siempre el Paso 0 anotando los valores prohibidos antes de multiplicar por el m.c.m. El álgebra de 2.º grado arroja $x = 1$, pero es un falso positivo producido por la multiplicación que destruiría la instalación por división entre cero."
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
