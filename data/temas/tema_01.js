// =========================================================================
// DATOS DEL TEMA 1: HERRAMIENTAS DEL ÁLGEBRA
// =========================================================================
window.TEMAS_DATA = window.TEMAS_DATA || {};
window.TEMAS_DATA[1] = {
  "id": 1,
  "titulo": "Tema 1: Herramientas del Álgebra",
  "evaluacion": "1.ª Evaluación",
  "sesiones_impartidas": 14,
  "apuntes_pdf": "pdf/Apuntes_Tema1_Herramientas_del_Algebra_1Bach.pdf",
  "ejercicios_pdf": "pdf/Ficha_Tema1_Herramientas_del_Algebra_1Bach.pdf",
  "tareas_classroom": [
    {
      "id": "Tarea-01",
      "numero": 1,
      "titulo": "Tarea 1: Herramientas del Álgebra (Números Reales, Intervalos y Valor Absoluto)",
      "fecha_asignacion": "28 de Septiembre de 2026",
      "fecha_limite": "Sábado 3 de Octubre de 2026 a las 23:59 h (Plazo Finalizado)",
      "estado": "solucionario_disponible",
      "pdf_tarea": "pdf/Tarea1_Herramientas_del_Algebra_1Bach.pdf",
      "pdf_solucionario": "pdf/Tarea1_Herramientas_del_Algebra_1Bach_Solucionario.pdf",
      "criterios_entrega": "Plazo de entrega en Google Classroom finalizado y corregido. Ya tienes disponible el solucionario comentado paso a paso para contrastar tus desarrollos y auto-corregir cada ejercicio en tu libreta.",
      "ejercicios_incluidos": [
        "Ejercicio 1: Clasificación de números (reales y complejos) operando y simplificando antes.",
        "Ejercicio 2: Operaciones con intervalos y semirrectas (unión, intersección, resta y complementarios).",
        "Ejercicio 3: Ecuaciones e inecuaciones con valor absoluto pensando en distancias sobre la recta.",
        "Ejercicio 4: Inecuaciones con fracciones y valor absoluto (cuidado con los denominadores)."
      ]
    }
  ],
  "sesiones": [
    {
      "numero": 1,
      "fecha": "Martes 15 de Septiembre de 2026",
      "titulo": "Clasificación Numérica en ℝ y ℂ",
      "ejercicios": [
        {
          "numero": 1,
          "titulo": "Clasificación Numérica",
          "referencia": "Punto 1.1 (Págs. 1-2)",
          "instruccion": "Clasifica razonadamente cada número en el conjunto más restrictivo ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}$) e indica su cadena de pertenencia e inclusión:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "7"
            },
            {
              "letra": "b)",
              "expresion": "-12"
            },
            {
              "letra": "c)",
              "expresion": "\\dfrac{18}{3}"
            },
            {
              "letra": "d)",
              "expresion": "-\\dfrac{14}{5}"
            },
            {
              "letra": "e)",
              "expresion": "3.45"
            },
            {
              "letra": "f)",
              "expresion": "2.\\widehat{6}"
            },
            {
              "letra": "g)",
              "expresion": "\\sqrt{13}"
            },
            {
              "letra": "h)",
              "expresion": "-2\\pi"
            }
          ],
          "idea_clave": "Todo natural es entero, todo entero es racional y todo racional es real. No confundir $\\in$ con $\\subset$."
        },
        {
          "numero": 2,
          "titulo": "Clasificación Numérica",
          "referencia": "Punto 1.1 (Págs. 1-2)",
          "instruccion": "Clasifica razonadamente cada número en el conjunto más restrictivo ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}, \\mathbb{C}$) e indica su cadena de pertenencia e inclusión:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "A = 0.9999\\dots = 0.\\widehat{9}"
            },
            {
              "letra": "b)",
              "expresion": "B = \\sqrt[3]{-27} \\quad\\text{y}\\quad C = \\sqrt{-16}"
            },
            {
              "letra": "c)",
              "expresion": "D = \\dfrac{\\sqrt{72}}{\\sqrt{2}}"
            },
            {
              "letra": "d)",
              "expresion": "E = 1.01001000100001\\dots"
            },
            {
              "letra": "e)",
              "expresion": "F = (\\sqrt{3}-1)(\\sqrt{3}+1)"
            },
            {
              "letra": "f)",
              "expresion": "G = \\pi - 3.14159"
            }
          ],
          "idea_clave": "$0.\\widehat{9} = 1$. Raíces impares de negativos son reales; raíces pares de negativos son complejas en $\\mathbb{C}$. Operar antes de clasificar."
        }
      ]
    },
    {
      "numero": 2,
      "fecha": "Viernes 18 de Septiembre de 2026",
      "titulo": "Conjuntos Aislados, Intervalos y Semirrectas: Operaciones",
      "ejercicios": [
        {
          "numero": 3,
          "titulo": "Diferencia entre Puntos Aislados, Intervalos y Semirrectas",
          "referencia": "Punto 1.2 (Págs. 2-3)",
          "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">👀</span><div class=\"nota-aula-content\"><strong>Ojo a los ejemplos:</strong> En clase el viernes me inventé los números sobre la marcha en la pizarra para explicar la teoría. Los que tenéis aquí son <em>otros diferentes</em> a los que copiasteis, pero os sirven exactamente para lo mismo: repasar y comprobar que tenéis clara la diferencia en vuestra libreta.</div></div>Diferencia razonadamente sobre la recta real entre un conjunto de puntos sueltos (aislados), un intervalo y una semirrecta, indicando su dibujo y si tienen finitos o infinitos números reales:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "A = \\{-3, 2\\} \\quad\\text{(Puntos sueltos: solo dos números)}"
            },
            {
              "letra": "b)",
              "expresion": "B = (-3, 2) \\quad\\text{(Intervalo abierto: infinitos números, sin los extremos)}"
            },
            {
              "letra": "c)",
              "expresion": "C = [-3, 2] \\quad\\text{(Intervalo cerrado: infinitos números, con ambos extremos)}"
            },
            {
              "letra": "d)",
              "expresion": "D = [-3, 2) \\quad\\text{(Semiabierto: entra el } -3 \\text{ y no entra el } 2\\text{)}"
            },
            {
              "letra": "e)",
              "expresion": "E = [2, +\\infty) \\quad\\text{(Semirrecta cerrada hacia la derecha)}"
            },
            {
              "letra": "f)",
              "expresion": "F = (-\\infty, -3) \\quad\\text{(Semirrecta abierta hacia la izquierda)}"
            }
          ],
          "idea_clave": "Las llaves $\\{ \\}$ son solo para elementos sueltos. Los paréntesis y corchetes son para intervalos (infinitos números reales seguidos en la recta). El infinito nunca lleva corchete."
        },
        {
          "numero": 4,
          "titulo": "Operaciones con Intervalos, Semirrectas y Puntos Aislados",
          "referencia": "Punto 1.3 (Págs. 3-4)",
          "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Misma jugada que antes:</strong> En clase improvisamos números en la pizarra (esos ya los tienes en tu libreta). Aquí te dejamos una tanda limpia para entrenar cómo unir, cortar y restar intervalos, y cómo hallar el <strong>complementario</strong> (lo que llamamos «quedarte con el resto del mundo» 🌍). ¡Comprueba a tu ritmo!</div></div>Calcula de forma justificada aplicando el método de rectas reales alineadas las siguientes operaciones y complementarios ($A^c = \\mathbb{R} \\setminus A$):",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "[-2, 4) \\cap [1, 6] = [1, 4) \\quad\\text{frente a}\\quad [-2, 4) \\cup [1, 6] = [-2, 6]"
            },
            {
              "letra": "b)",
              "expresion": "(-5, -1) \\cap [2, 7) = \\emptyset \\quad\\text{frente a}\\quad (-5, -1) \\cup [2, 7)"
            },
            {
              "letra": "c)",
              "expresion": "(-\\infty, 3] \\cap [0, +\\infty) = [0, 3] \\quad\\text{frente a}\\quad (-\\infty, 3] \\cup [0, +\\infty) = \\mathbb{R}"
            },
            {
              "letra": "d)",
              "expresion": "(-\\infty, 5] \\cap (-\\infty, 2) = (-\\infty, 2) \\quad\\text{frente a}\\quad (-\\infty, 5] \\cup (-\\infty, 2) = (-\\infty, 5]"
            },
            {
              "letra": "e)",
              "expresion": "(-\\infty, -2) \\cap (3, +\\infty) = \\emptyset \\quad\\text{frente a}\\quad (-\\infty, -2) \\cup (3, +\\infty)"
            },
            {
              "letra": "f)",
              "expresion": "(-1, 4) \\cup \\{4\\} = (-1, 4] \\quad\\text{frente a}\\quad (-1, 4) \\cap \\{4\\} = \\emptyset"
            },
            {
              "letra": "g)",
              "expresion": "(-1, 4) \\cap \\{1, 4, 7\\} = \\{1\\}"
            },
            {
              "letra": "h)",
              "expresion": "[1, 5] \\setminus [3, 7) = [1, 3) \\quad\\text{frente a}\\quad [3, 7) \\setminus [1, 5] = (5, 7)"
            },
            {
              "letra": "i)",
              "expresion": "[-2, 6] \\setminus (1, 4) = [-2, 1] \\cup [4, 6] \\quad\\text{(quitar un abierto deja los bordes cerrados)}"
            },
            {
              "letra": "j)",
              "expresion": "[-2, 5] \\setminus \\{2\\} = [-2, 2) \\cup (2, 5] \\quad\\text{y}\\quad [1, 6) \\setminus (3, +\\infty) = [1, 3]"
            },
            {
              "letra": "k)",
              "expresion": "A^c \\quad\\text{siendo } A = [2, +\\infty) \\implies A^c = (-\\infty, 2)"
            },
            {
              "letra": "l)",
              "expresion": "B^c \\quad\\text{siendo } B = (-1, 5] \\implies B^c = (-\\infty, -1] \\cup (5, +\\infty)"
            },
            {
              "letra": "m)",
              "expresion": "C^c \\quad\\text{siendo } C = \\{3\\} \\implies C^c = \\mathbb{R} \\setminus \\{3\\} = (-\\infty, 3) \\cup (3, +\\infty)"
            }
          ],
          "idea_clave": "Unión ($\\cup$) es juntar todo; si hay solape se fusionan, si hay hueco quedan separados. Intersección ($\\cap$) es la zona común; si no se tocan es vacía ($\\emptyset$). Resta o diferencia ($A \\setminus B$) es quedarse con lo de $A$ quitándole lo que comparta con $B$: si el extremo pertenecía al conjunto restado se elimina y queda abierto; si no pertenecía, sobrevive cerrado. El complementario $A^c = \\mathbb{R} \\setminus A$ es «coger el resto del mundo»: toda la recta menos el conjunto, invirtiendo los extremos."
        }
      ]
    },
    {
      "numero": 3,
      "fecha": "Lunes 21 de Septiembre de 2026",
      "titulo": "Operaciones con Intervalos y Extremos Compartidos",
      "ejercicios": [
        {
          "numero": 5,
          "titulo": "Extremos Compartidos en Intervalos",
          "referencia": "Puntos 1.2 y 1.3 (Págs. 2-3)",
          "enunciado_base": "A = [-4, 2) \\qquad B = [2, 6] \\qquad C = (2, 8)",
          "instruccion": "Calcula de forma justificada aplicando el método gráfico de rectas reales alineadas:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "A \\cap B \\quad\\text{frente a}\\quad A \\cap C"
            },
            {
              "letra": "b)",
              "expresion": "A \\cup B \\quad\\text{frente a}\\quad A \\cup C"
            },
            {
              "letra": "c)",
              "expresion": "B \\setminus A \\quad\\text{y}\\quad A \\setminus B"
            },
            {
              "letra": "d)",
              "expresion": "A^c = \\mathbb{R} \\setminus A"
            }
          ],
          "idea_clave": "Regla del Extremo Compartido: en la intersección el punto frontera solo sobrevive si está cerrado en ambos. En la unión no puede fusionarse si ambos son abiertos porque queda un agujero."
        },
        {
          "numero": 6,
          "titulo": "Operaciones Combinadas con Intervalos y Semirrectas",
          "referencia": "Punto 1.3 (Págs. 3-4)",
          "enunciado_base": "I = (-\\infty, 3] \\qquad J = (-2, 5) \\qquad K = [0, +\\infty)",
          "instruccion": "Calcula de forma justificada expresando el resultado en forma de intervalo:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "I \\cap J \\cap K"
            },
            {
              "letra": "b)",
              "expresion": "(I \\cup K)^c"
            },
            {
              "letra": "c)",
              "expresion": "J \\setminus (I \\cap K)"
            },
            {
              "letra": "d)",
              "expresion": "(I \\cap J)^c \\cap K"
            }
          ],
          "idea_clave": "Prioridad de operaciones de conjuntos, complementarios con inversión de extremos (abierto ↔ cerrado) y extirpación de bloques cerrados dejando extremos abiertos."
        }
      ]
    },
    {
      "numero": "4 y 5",
      "fecha": "Martes 22 y Jueves 24 de Septiembre de 2026",
      "titulo": "El Valor Absoluto: Ecuaciones e Inecuaciones",
      "ejercicios": [
        {
          "numero": 7,
          "titulo": "El Valor Absoluto: Distancias en la Recta y Función a Trozos",
          "referencia": "Punto 1.4 (Págs. 5-6)",
          "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">📏</span><div class=\"nota-aula-content\"><strong>Longitud y distancia entre dos puntos:</strong> El valor absoluto mide el tamaño o <strong>longitud de lo de dentro</strong>. Si dentro solo está la $x$ ($|x|$), mide su longitud desde el origen: es la <strong>distancia entre $x$ y el $0$</strong> ($|x - 0|$). Cuando hay una resta ($|x - a|$), esa longitud representa la <strong>distancia entre dos puntos</strong>: cuánto se separa $x$ del punto $a$. Si esa distancia debe ser pequeña ($\\le$), estás cerca del punto y te quedas en el tramo central; si debe ser grande ($>$), te alejas hacia los lados.</div></div>Razona y resuelve pensando geométricamente sobre la recta real:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\text{¿Qué números distan menos de 4 unidades del origen? } |x| < 4 \\iff x \\in (-4, 4)"
            },
            {
              "letra": "b)",
              "expresion": "\\text{Puntos cuya distancia al } 3 \\text{ no supera 5: } |x - 3| \\le 5 \\iff x \\in [3-5, 3+5] = [-2, 8]"
            },
            {
              "letra": "c)",
              "expresion": "\\text{Puntos que se alejan más de 3 unidades del } -2: |x - (-2)| = |x + 2| > 3 \\iff x \\in (-\\infty, -5) \\cup (1, +\\infty)"
            },
            {
              "letra": "d)",
              "expresion": "\\text{¿Por qué si } x = -7 \\text{ se cambia el signo? } |-7| = -(-7) = 7 \\implies f(x) = |x| = \\begin{cases} -x & \\text{si } x < 0 \\\\ x & \\text{si } x \\ge 0 \\end{cases}"
            },
            {
              "letra": "e)",
              "expresion": "\\text{¿En qué punto cambia de signo } 2x - 6? \\quad 2x - 6 = 0 \\implies x = 3 \\implies g(x) = |2x - 6| = \\begin{cases} -2x + 6 & \\text{si } x < 3 \\\\ 2x - 6 & \\text{si } x \\ge 3 \\end{cases}"
            }
          ],
          "idea_clave": "Para expresar $|ax + b|$ a trozos se busca su raíz y se prueba el signo a ambos lados para cambiarlo únicamente donde lo de dentro sea negativo. En $|x|$, la raíz elemental es el 0."
        },
        {
          "numero": 8,
          "titulo": "Ecuaciones e Inecuaciones con Valor Absoluto (El Centro vs. Los Extremos)",
          "referencia": "Punto 1.5 (Págs. 6-8)",
          "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">🎯</span><div class=\"nota-aula-content\"><strong>De la longitud a las ecuaciones e inecuaciones:</strong> Igual que en el ejercicio anterior, las barras miden la <strong>longitud de lo de dentro</strong>.<br>• <strong>En una ecuación ($|A| = r$):</strong> la longitud es fija; lo de dentro vale exactamente $+r$ o $-r$ (dos puntos aislados en la recta).<br>• <strong>En una inecuación menor ($\\le r$):</strong> no puede alejarse; queda atrapado en el tramo central entre el negativo y el positivo ($-r \\le A \\le r$).<br>• <strong>En una inecuación mayor ($> r$):</strong> se desborda y se escapa hacia los extremos.<br>¡Y sentido común: una longitud o distancia jamás puede dar un número negativo!</div></div>Resuelve en $\\mathbb{R}$ distinguiendo entre puntos aislados (ecuaciones) e intervalos (inecuaciones):",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "|x| = 6 \\iff x = 6 \\;\\text{o}\\; x = -6 \\iff x \\in \\{-6, 6\\}"
            },
            {
              "letra": "b)",
              "expresion": "|2x - 5| = 7 \\iff 2x - 5 = 7 \\;\\text{o}\\; 2x - 5 = -7 \\iff x \\in \\{-1, 6\\}"
            },
            {
              "letra": "c)",
              "expresion": "|x - 1| \\le 4 \\iff -4 \\le x - 1 \\le 4 \\iff x \\in [-3, 5]"
            },
            {
              "letra": "d)",
              "expresion": "|2x - 5| \\le 7 \\iff -7 \\le 2x - 5 \\le 7 \\iff x \\in [-1, 6]"
            },
            {
              "letra": "e)",
              "expresion": "|x + 3| > 2 \\iff x + 3 > 2 \\;\\text{o}\\; x + 3 < -2 \\iff x \\in (-\\infty, -5) \\cup (-1, +\\infty)"
            },
            {
              "letra": "f)",
              "expresion": "|3x - 1| > 8 \\iff x \\in \\left(-\\infty, -\\dfrac{7}{3}\\right) \\cup (3, +\\infty)"
            },
            {
              "letra": "g)",
              "expresion": "|x - 4| \\le -2 \\implies \\emptyset \\quad\\text{frente a}\\quad |x + 1| \\ge -3 \\implies \\mathbb{R}"
            }
          ],
          "idea_clave": "En ecuaciones (|A| = r) hay exactamente dos puntos aislados: A = r o A = -r. En inecuaciones (≤ r), lo de dentro queda atrapado en el centro; si es mayor (> r), hacia los extremos. Una longitud jamás puede dar negativo."
        }
      ]
    },
    {
      "numero": "6 y 7",
      "fecha": "Viernes 25 y Lunes 28 de Septiembre de 2026",
      "titulo": "Valor Absoluto: A Trozos, Fracciones e Incógnita a Ambos Lados",
      "ejercicios": [
        {
          "numero": 9,
          "titulo": "Valor Absoluto: A Trozos, Fracciones e Incógnita a Ambos Lados",
          "referencia": "Puntos 1.4 y 1.5 (Págs. 5-8)",
          "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Claves didácticas para no dudar con el valor absoluto:</strong><br>• <strong>Para escribir a trozos:</strong> Las barras solo hacen una cosa: si lo de dentro es positivo o cero, lo dejan tal cual; si es negativo, le dan la vuelta al signo. Para saber dónde cambia, halla su raíz (dónde se hace cero) y prueba el signo a cada lado. Si hay varios valores absolutos, coloca sus raíces en la recta real y analiza cada tramo por separado (¡ojo a los paréntesis si hay un signo menos delante!).<br>• <strong>Para inecuaciones racionales:</strong> Si la incógnita está en el denominador, recuerda la regla de oro: ningún denominador puede anularse jamás (descarta antes de nada los valores prohibidos). Aplica la definición del valor absoluto (quedando acotado en el centro entre $-k$ y $k$, o separando en las dos ramas exteriores $\\le -k$ o $\\ge k$) y resuelve analizando los signos de la fracción, vigilando que los valores prohibidos queden fuera de la solución.<br>• <strong>Con la incógnita fuera de las barras ($|A| < B$):</strong> Recuerda que una longitud jamás puede ser negativa: exige primero la condición de existencia $B > 0$ y resuelve la doble inecuación $-B < A < B$.</div></div>Expresa como función a trozos o resuelve en $\\mathbb{R}$ según corresponda:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "f(x) = \\left|-\\dfrac{x}{2} + 5\\right| = \\begin{cases} -\\dfrac{x}{2} + 5 & \\text{si } x < 10 \\\\[4pt] \\dfrac{x}{2} - 5 & \\text{si } x \\ge 10 \\end{cases}"
            },
            {
              "letra": "b)",
              "expresion": "g(x) = |x + 2| - |2x + 8| = \\begin{cases} x + 6 & \\text{si } x < -4 \\\\[4pt] -3x - 10 & \\text{si } -4 \\le x < -2 \\\\[4pt] -x - 6 & \\text{si } x \\ge -2 \\end{cases}"
            },
            {
              "letra": "c)",
              "expresion": "\\left|\\dfrac{2x}{3} - 12\\right| \\ge 5 \\iff \\dfrac{2x}{3} - 12 \\le -5 \\;\\text{ o }\\; \\dfrac{2x}{3} - 12 \\ge 5 \\iff x \\in \\left(-\\infty, \\dfrac{21}{2}\\right] \\cup \\left[\\dfrac{51}{2}, +\\infty\\right)"
            },
            {
              "letra": "d)",
              "expresion": "\\left|\\dfrac{3x + 2}{-x - 4}\\right| \\le 2 \\quad (x \\ne -4) \\iff x \\in [-2, 6]"
            },
            {
              "letra": "e)",
              "expresion": "\\left|\\dfrac{x + 3}{x - 1}\\right| \\ge 2 \\quad (x \\ne 1) \\iff x \\in \\left[-\\dfrac{1}{3}, 1\\right) \\cup (1, 5]"
            },
            {
              "letra": "f)",
              "expresion": "|3x + 2| < x + 6 \\iff -(x + 6) < 3x + 2 < x + 6 \\iff x \\in (-2, 2)"
            }
          ],
          "idea_clave": "El valor absoluto siempre da un resultado positivo o cero; lo que cambia de signo al cruzar sus raíces es la expresión de su interior. Al abrir a trozos, cambia el signo de la expresión solo en los intervalos donde sea negativa (ubica las raíces en la recta para distinguirlos). En inecuaciones fraccionarias, descarta siempre los valores que anulan el denominador (pueden partir tu intervalo); y si la $x$ aparece fuera de las barras ($|A| < B$), exige que $B > 0$ y resuelve $-B < A < B$."
        }
      ]
    },
    {
      "numero": "8, 9 y 10",
      "fecha": "Martes 29 de Septiembre, Jueves 1 y Viernes 2 de Octubre de 2026",
      "titulo": "Potencias, Radicales, Radicales Anidados y Racionalización",
      "ejercicios": [
        {
          "numero": 10,
          "titulo": "Potencias y Signos: Cómo Simplificar Paso a Paso",
          "referencia": "Punto 2 (Pág. 9)",
          "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Pistas para no liarte con las potencias:</strong><br>• Pasa siempre los números a primos ($2, 3, 5\\dots$) antes de hacer nada.<br>• Cuidado con los signos: el menos solo entra en la potencia si está dentro del paréntesis, como en $(-2)^4$. Si ves $-2^4$, el menos no se eleva.<br>• Fracción con exponente negativo: dale la vuelta para poner el exponente positivo: $(\\frac{a}{b})^{-n} = (\\frac{b}{a})^n$.<br>• Al terminar, que no quede ningún exponente negativo: pásalos al otro lado con exponente positivo.</div></div>Simplifica al máximo aplicando las propiedades de las potencias y expresando el resultado final con exponentes positivos:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\dfrac{2^{-4} \\cdot 3^3 \\cdot 6^3}{4^{-2} \\cdot 9^2 \\cdot 12^{-1}} = 2^5 \\cdot 3^3 = 864"
            },
            {
              "letra": "b)",
              "expresion": "\\dfrac{(-2)^6 \\cdot (-5)^3 \\cdot (-3)^0}{-2^4 \\cdot 5^2 \\cdot 10^{-2}} = 2^4 \\cdot 5^3 = 2000"
            },
            {
              "letra": "c)",
              "expresion": "\\left(\\dfrac{x^{-3} y^2}{z^{-2}}\\right)^{-3} \\cdot \\left(\\dfrac{x^4 z^{-3}}{y^{-2}}\\right)^2 = \\dfrac{x^{17}}{y^2 z^{12}}"
            },
            {
              "letra": "d)",
              "expresion": "\\dfrac{(a^{3/5} b^{-1/2})^{10}}{(a^{-2} b^{2/3})^6} = \\dfrac{a^{18}}{b^9}"
            }
          ],
          "idea_clave": "Pasa los números a primos ($2, 3, 5\\dots$) antes de hacer nada. Cuidado con $(-a)^n$ y $-a^n$: el signo solo se eleva si está entre paréntesis. Si una fracción tiene exponente negativo, dale la vuelta para ponerlo positivo. Al terminar, no dejes exponentes negativos."
        },
        {
          "numero": 11,
          "titulo": "Raíces: Mismo Índice, Sacar Factores y Sumar Raíces Iguales",
          "referencia": "Punto 2.1 (Pág. 11)",
          "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Pistas para no liarte con las raíces:</strong><br>• Para multiplicar o dividir raíces con distinto índice, redúcelas primero a índice común calculando el mínimo común múltiplo ($\\text{mcm}$) de los índices.<br>• Para extraer factores fuera de la raíz: divide el exponente de cada factor entre el índice. El cociente sale fuera y el resto se queda dentro del radicando.<br>• Para sumar o restar raíces, deben ser radicales semejantes (mismo índice y mismo radicando). Si a simple vista no coinciden, ¡extrae primero factores!<br>• Al terminar, simplifica el radical si es posible: divide el índice y los exponentes del radicando entre su máximo común divisor ($\\text{mcd}$).</div></div>Haz las siguientes operaciones dejando una sola raíz y sacando fuera todo lo que puedas:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\sqrt[4]{x^3} \\cdot \\sqrt[6]{x^5} \\cdot \\sqrt[3]{x^2} = x^2 \\sqrt[4]{x}"
            },
            {
              "letra": "b)",
              "expresion": "\\dfrac{\\sqrt[4]{a^3 b^2}}{\\sqrt[6]{a^4 b^3}} = \\sqrt[12]{a}"
            },
            {
              "letra": "c)",
              "expresion": "2\\sqrt{27} - 4\\sqrt{75} + 3\\sqrt{48} - \\sqrt{12} = -4\\sqrt{3}"
            },
            {
              "letra": "d)",
              "expresion": "3\\sqrt[3]{24} - 2\\sqrt[3]{81} + 2\\sqrt[3]{375} - \\sqrt[3]{192} = 6\\sqrt[3]{3}"
            },
            {
              "letra": "e)",
              "expresion": "\\dfrac{\\sqrt[3]{9x^4 y} \\cdot \\sqrt[4]{27x^5 y^6}}{\\sqrt[6]{3x^5 y^2}} = 3xy \\sqrt[4]{3x^3 y^2}"
            },
            {
              "letra": "f)",
              "expresion": "4\\sqrt[3]{\\dfrac{16}{27}} - 5\\sqrt[3]{\\dfrac{2}{125}} + \\dfrac{1}{2}\\sqrt[3]{128} = \\dfrac{11}{3}\\sqrt[3]{2}"
            }
          ],
          "idea_clave": "Para multiplicar o dividir raíces con distinto índice, ponles primero el mismo índice con el mcm. Solo se pueden sumar o restar raíces si son radicales semejantes: deben coincidir en el índice y en el radicando tras extraer factores. Al final, extrae todos los factores posibles y simplifica el radical si el índice y los exponentes tienen divisores comunes."
        },
        {
          "numero": 12,
          "titulo": "Radicales Anidados y Factores Intermedios",
          "referencia": "Punto 2.1 (Pág. 11)",
          "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Pistas para no liarte con raíces dentro de raíces:</strong><br>• <strong>Mete los factores hacia dentro:</strong> Para introducir un factor en la siguiente raíz, multiplica su exponente por el índice de esa raíz ($a \\cdot \\sqrt[n]{b} = \\sqrt[n]{a^n b}$). Ve paso a paso, siempre de fuera hacia dentro.<br>• <strong>Raíz de una raíz:</strong> Cuando ya no queden factores intermedios entre las raíces, junta todas en una sola multiplicando sus índices ($\\sqrt[m]{\\sqrt[n]{A}} = \\sqrt[m \\cdot n]{A}$).<br>• <strong>Al terminar:</strong> Si el exponente de algún factor es mayor o igual que el índice, ¡extrae factores fuera! Y si el índice y los exponentes tienen divisores comunes, simplifica dividiendo entre su $\\text{mcd}$.</div></div>Haz las siguientes operaciones dejando una sola raíz y sacando fuera todo lo que puedas:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\sqrt[3]{\\dfrac{x^2}{y} \\cdot \\sqrt{\\dfrac{y^3}{x} \\cdot \\sqrt[4]{\\dfrac{x^3}{y^2}}}} = \\sqrt[24]{x^{15} y^2}"
            },
            {
              "letra": "b)",
              "expresion": "\\sqrt[3]{16 \\cdot \\sqrt{8 \\cdot \\sqrt[4]{32}}} = 4\\sqrt[24]{2}"
            },
            {
              "letra": "c)",
              "expresion": "\\dfrac{\\sqrt[3]{x^2 \\cdot \\sqrt{x^3 \\cdot \\sqrt[4]{x}}}}{\\sqrt{x \\cdot \\sqrt[3]{x}}} = \\sqrt[24]{x^{13}}"
            },
            {
              "letra": "d)",
              "expresion": "\\sqrt{\\dfrac{x}{y} \\sqrt[3]{\\dfrac{y^2}{x}}} \\cdot \\sqrt[3]{\\dfrac{y}{x^2} \\sqrt{\\dfrac{x^3}{y}}} = \\sqrt[6]{x}"
            },
            {
              "letra": "e)",
              "expresion": "\\sqrt{a \\cdot \\sqrt[3]{\\dfrac{b}{a} \\cdot \\sqrt[4]{\\dfrac{a^5}{b^2}}}} = \\sqrt[24]{a^{13} b^2}"
            }
          ],
          "idea_clave": "Para simplificar radicales anidados, introduce los factores intermedios de fuera hacia dentro multiplicando su exponente por el índice de la raíz en la que entran. Cuando las raíces queden juntas, multiplica sus índices y extrae todo lo que puedas al final."
        },
        {
          "numero": 13,
          "titulo": "Racionalización: Raíces en Numerador y Denominador",
          "referencia": "Punto 2.2 (Págs. 12-14)",
          "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Pistas para racionalizar con calma y sin agobios:</strong><br>• <strong>Raíz simple en el denominador ($\\frac{A}{\\sqrt[n]{b^k}}$):</strong> Si se pueden sacar factores, sácalos primero. Luego multiplica arriba y abajo por la raíz con lo que le falta al exponente para llegar al índice ($\\sqrt[n]{b^{n-k}}$).<br>• <strong>Suma o resta con raíces en el denominador:</strong> Multiplica numerador y denominador por el conjugado (cambia el signo del medio) para que quede suma por diferencia: $(u+v)(u-v) = u^2 - v^2$. Si también tienes raíces en el numerador, haz la multiplicación despacio con la propiedad distributiva.<br>• <strong>Fracciones que se restan:</strong> Fíjate bien antes de empezar; si los denominadores ya son conjugados el uno del otro, su producto es el común denominador directo.<br>• <strong>Tres raíces en el denominador:</strong> Agrupa dos de ellas entre paréntesis como si fueran un solo bloque y haz el conjugado en dos pasos sencillos.</div></div>Racionaliza los denominadores y simplifica al máximo las expresiones resultantes:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\dfrac{6}{\\sqrt[4]{8}} = 3\\sqrt[4]{2} \\quad\\text{y}\\quad \\dfrac{12x}{\\sqrt[5]{64x^3}} = 3\\sqrt[5]{16x^2}"
            },
            {
              "letra": "b)",
              "expresion": "\\dfrac{3\\sqrt{2} - 2\\sqrt{3}}{2\\sqrt{2} + 3\\sqrt{3}} = \\dfrac{13\\sqrt{6} - 30}{19}"
            },
            {
              "letra": "c)",
              "expresion": "\\dfrac{2\\sqrt{5} + 3\\sqrt{2}}{3\\sqrt{5} - 4\\sqrt{2}} = \\dfrac{54 + 17\\sqrt{10}}{13}"
            },
            {
              "letra": "d)",
              "expresion": "\\dfrac{\\sqrt{3} + 1}{\\sqrt{3} - 1} - \\dfrac{\\sqrt{3} - 1}{\\sqrt{3} + 1} = 2\\sqrt{3}"
            },
            {
              "letra": "e)",
              "expresion": "\\dfrac{1}{\\sqrt{2} + \\sqrt{3} - \\sqrt{5}} = \\dfrac{3\\sqrt{2} + 2\\sqrt{3} + \\sqrt{30}}{12}"
            },
            {
              "letra": "f)",
              "expresion": "\\dfrac{x - y}{\\sqrt{x} + \\sqrt{y}} = \\sqrt{x} - \\sqrt{y} \\quad\\text{y}\\quad \\dfrac{\\sqrt{x + 1} - \\sqrt{x}}{\\sqrt{x + 1} + \\sqrt{x}} = 2x + 1 - 2\\sqrt{x^2 + x}"
            }
          ],
          "idea_clave": "En raíces simples completa los exponentes que faltan para alcanzar el índice. Con binomios de raíces cuadradas, el conjugado elimina las raíces del denominador aplicando diferencia de cuadrados ($u^2 - v^2$). Si hay raíces arriba y abajo, multiplica con cuidado término a término. Y si hay tres raíces, agrupa en bloque y repite el proceso."
        }
      ]
    },
    {
      "numero": "11, 12 y 13",
      "fecha": "Lunes 5, Martes 6 y Jueves 8 de Octubre de 2026",
      "titulo": "Racionalización Cúbica, Identidades Notables y Logaritmos (Definición, Incógnitas, Cambio de Base y Valores Numéricos)",
      "ejercicios": [
        {
          "numero": 14,
          "titulo": "Racionalizar Denominadores: Raíces Cúbicas y el Truco de los Cubos",
          "referencia": "Punto 2.2 (Págs. 12 y 15)",
          "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Pistas para no liarte con las raíces cúbicas abajo:</strong><br>• <strong>¿Por qué no sirve cambiar solo el signo?</strong> Si abajo tienes $\\sqrt[3]{x} - 2$ y multiplicas por $\\sqrt[3]{x} + 2$, te queda $(\\sqrt[3]{x})^2 - 4 = \\sqrt[3]{x^2} - 4$. ¡La raíz sigue ahí! Con raíces cúbicas necesitas cubos, no cuadrados.<br>• <strong>La fórmula que te salva:</strong> Recuerda que $(u - v)(u^2 + uv + v^2) = u^3 - v^3$ y que $(u + v)(u^2 - uv + v^2) = u^3 + v^3$.<br>• <strong>El truco práctico:</strong> Multiplica arriba y abajo por: el primero al cuadrado, el producto de los dos (con signo cambiado) y el segundo al cuadrado. Así abajo se van las raíces y te queda una resta o suma limpia.</div></div>Racionaliza los denominadores y simplifica al máximo:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\dfrac{4}{\\sqrt[3]{x} - 2} = \\dfrac{4(\\sqrt[3]{x^2} + 2\\sqrt[3]{x} + 4)}{x - 8}"
            },
            {
              "letra": "b)",
              "expresion": "\\dfrac{6}{\\sqrt[3]{5} + \\sqrt[3]{2}} = \\dfrac{6(\\sqrt[3]{25} - \\sqrt[3]{10} + \\sqrt[3]{4})}{7}"
            },
            {
              "letra": "c)",
              "expresion": "\\dfrac{x - 1}{\\sqrt[3]{x} - 1} = \\sqrt[3]{x^2} + \\sqrt[3]{x} + 1"
            }
          ],
          "idea_clave": "Para quitar raíces cúbicas en sumas o restas, olvídate del conjugado de siempre. Usa el truco de los cubos: multiplica por el primero al cuadrado, el producto de los dos con signo opuesto y el segundo al cuadrado. Abajo desaparecen las raíces."
        },
        {
          "numero": 15,
          "titulo": "Identidades Notables al Revés: Cómo Reconocer Patrones sin Operar a lo Loco",
          "referencia": "Punto 2 (Pág. 10)",
          "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Pistas para pillar las identidades al revés de forma rápida y limpia:</strong><br>• <strong>Si ves 3 términos (no te fíes de la posición):</strong><br>&nbsp;&nbsp;1.º Localiza los <strong>dos términos positivos que sean cuadrados</strong> (da igual que estén en los extremos o uno en medio). Por ejemplo, en $9x^2 - 12x + 4$ o en $4 - 12x + 9x^2$, tus dos cuadrados son $9x^2$ (base $3x$) y $4$ (base $2$).<br>&nbsp;&nbsp;2.º Comprueba <strong>el término que queda suelto</strong>: tiene que ser obligatoriamente el doble producto de las dos bases ($2 \\cdot 3x \\cdot 2 = 12x$).<br>&nbsp;&nbsp;3.º Si coincide, ¡lo tienes! El signo del binomio lo manda ese tercer término: si lleva un menos ($-12x$), es $(3x - 2)^2$; si lleva un más, sería $(3x + 2)^2$.<br>• <strong>¡Cuidado con las trampas!:</strong> Para que sea un cuadrado de binomio, el término restante TIENE que coincidir exactamente con el doble producto. Si no coincide, ¡no inventes!: no se puede poner entre paréntesis al cuadrado.<br>• <strong>Si ves 2 términos restándose con cuadrados:</strong> Es suma por diferencia. Con exponentes pares grandes, pon la mitad en cada paréntesis ($x^6$ pasa a $x^3$). Si no tienen raíz exacta, usa raíces: $x - 3 = (\\sqrt{x} - \\sqrt{3})(\\sqrt{x} + \\sqrt{3})$.<br>• <strong>¿Dos términos con cubos sumándose o restándose ($A^3 \\pm B^3$)?</strong><br>&nbsp;&nbsp;1.º <strong>Sácale la raíz cúbica a cada uno</strong> para hallar sus bases (de $27x^3$ sale $3x$, de $8$ sale $2$, y de $125$ sale $5$).<br>&nbsp;&nbsp;2.º <strong>El paréntesis corto (binomio):</strong> pon las dos bases con el mismo signo que traían: $(3x - 2)$ o $(x + 5)$.<br>&nbsp;&nbsp;3.º <strong>El paréntesis largo (trinomio):</strong> pon el primero al cuadrado, el producto de los dos con signo cambiado y el segundo al cuadrado: $(9x^2 + 6x + 4)$ o $(x^2 - 5x + 25)$.<br>&nbsp;&nbsp;<em>Fórmula directa:</em> $(A \\pm B)(A^2 \\mp AB + B^2)$. ¡Te ahorras hacer Ruffini!</div></div>Reconoce la identidad notable de derecha a izquierda y escribe la expresión factorizada:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "9x^2 - 12x + 4 = (3x - 2)^2 \\quad\\text{y}\\quad \\dfrac{x^2}{4} + \\dfrac{x}{3} + \\dfrac{1}{9} = \\left(\\dfrac{x}{2} + \\dfrac{1}{3}\\right)^2"
            },
            {
              "letra": "b)",
              "expresion": "x^2 + 6x + 36 \\longrightarrow \\text{Los dos cuadrados son } x^2 \\text{ y } 6^2, \\text{ pero el doble producto sería } 2 \\cdot x \\cdot 6 = 12x \\ne 6x. \\text{ No es cuadrado de binomio (irreducible en } \\mathbb{R}\\text{)}"
            },
            {
              "letra": "c)",
              "expresion": "16x^4 - 81 = (4x^2 + 9)(2x - 3)(2x + 3) \\quad\\text{y}\\quad 25x^6 - 4y^4 = (5x^3 - 2y^2)(5x^3 + 2y^2)"
            },
            {
              "letra": "d)",
              "expresion": "x - 5 = (\\sqrt{x} - \\sqrt{5})(\\sqrt{x} + \\sqrt{5}) \\quad (x \\ge 0)"
            },
            {
              "letra": "e)",
              "expresion": "27x^3 - 8 = (3x - 2)(9x^2 + 6x + 4) \\quad\\text{y}\\quad x^3 + 125 = (x + 5)(x^2 - 5x + 25)"
            },
            {
              "letra": "f)",
              "expresion": "x^2 - 6x + 9 - y^2 = (x - 3)^2 - y^2 = (x - 3 - y)(x - 3 + y)"
            }
          ],
          "idea_clave": "No hagas fórmulas largas si no hace falta: localiza los dos términos que sean cuadrados positivos y confirma si el término restante es el doble producto. Si dos términos se restan, suma por diferencia partiendo exponentes a la mitad o con raíces. Y si son cubos ($A^3 \\pm B^3$), descompón al instante en $(A \\pm B)(A^2 \\mp AB + B^2)$ sin necesidad de usar Ruffini."
        },
        {
          "numero": 16,
          "titulo": "Cálculo de Logaritmos por Definición: Potencias, Raíces y Fracciones",
          "referencia": "Punto 3.1 (Págs. 17 y 19)",
          "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Pistas y protocolo infalible para calcular logaritmos por definición:</strong><br>• <strong>El método en 3 pasos:</strong><br>&nbsp;&nbsp;1.º <strong>Iguala a la incógnita:</strong> Escribe $\\log_b(a) = x$.<br>&nbsp;&nbsp;2.º <strong>Pasa a forma exponencial:</strong> Traduce de inmediato a potencia: $b^x = a$. ¡El logaritmo es el exponente!<br>&nbsp;&nbsp;3.º <strong>Base común e igualar exponentes:</strong> Descompón en factores primos base y argumento. Cuando tengas la misma base en ambos miembros ($b^{f(x)} = b^k$), iguala los exponentes y despeja $x$.<br>• <strong>¡Cuidado con las bases con raíz!:</strong> Al elevar la base a $x$, multiplica exponentes: $(\\sqrt[3]{3})^x = (3^{1/3})^x = 3^{x/3}$.<br>• <strong>Invertir fracciones con exponente negativo:</strong> Recuerda que $\\left(\\dfrac{3}{2}\\right)^k = \\left(\\dfrac{2}{3}\\right)^{-k}$. Una fracción invertida se arregla con signo menos en el exponente.<br>• <strong>Argumentos con raíces y cocientes:</strong> Expresa todo como potencias de exponente fraccionario y opera antes de igualar.</div></div>Calcula razonadamente por definición el valor exacto de los siguientes logaritmos sin utilizar calculadora:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\log_2\\left(\\dfrac{\\sqrt[3]{16}}{32}\\right) = -\\dfrac{11}{3}"
            },
            {
              "letra": "b)",
              "expresion": "\\log_{\\sqrt[3]{3}}\\left(\\dfrac{1}{27\\sqrt{3}}\\right) = -\\dfrac{21}{2}"
            },
            {
              "letra": "c)",
              "expresion": "\\log_{\\frac{2}{3}}\\left(\\dfrac{9\\sqrt{3}}{4\\sqrt{2}}\\right) = -\\dfrac{5}{2}"
            },
            {
              "letra": "d)",
              "expresion": "\\log_{\\frac{\\sqrt{5}}{5}}\\left(\\sqrt[3]{25\\sqrt{5}}\\right) = -\\dfrac{5}{3}"
            }
          ],
          "idea_clave": "Por definición, $\\log_b(a) = x \\iff b^x = a$. Todo logaritmo por definición es una ecuación exponencial: se iguala a $x$, se traduce a potencias de la misma base y se igualan los exponentes aprovechando las propiedades de las potencias y radicales."
        },
        {
          "numero": 17,
          "titulo": "Cálculo de la Incógnita por Definición: La x en la Base o en el Argumento",
          "referencia": "Punto 3.1 (Págs. 17 y 19)",
          "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Pistas para despejar la incógnita aplicando la definición:</strong><br>• <strong>Paso 0 obligado:</strong> Pasa siempre de la forma logarítmica a la exponencial: $\\log_b(a) = c \\iff b^c = a$.<br>• <strong>Si la incógnita está en la base ($x^c = a$):</strong> Expresa el argumento como potencia de exponente fraccionario para igualar exponentes o eleva ambos miembros al inverso del exponente. <strong>¡Condición de existencia!</strong> La base debe ser estrictamente positiva y distinta de 1 ($x > 0, x \\ne 1$).<br>• <strong>Si la incógnita está bajo una raíz en el argumento:</strong> Despeja primero la raíz aislando el miembro correspondiente y luego eleva al índice para obtener $x$. <strong>¡Condición de existencia!</strong> El argumento debe ser estrictamente positivo ($a(x) > 0$).<br>• <strong>Si la base tiene una raíz (como $\\sqrt{3}$ o $\\sqrt{2}$):</strong> Eleva la raíz al exponente simplificando antes de operar.</div></div>Calcula el valor exacto de la incógnita $x$ aplicando la definición formal de logaritmo y comprueba la validez de las soluciones:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\log_x(4\\sqrt{2}) = \\dfrac{5}{2} \\iff x^{5/2} = 2^{5/2} \\iff x = 2"
            },
            {
              "letra": "b)",
              "expresion": "\\log_x\\left(\\dfrac{4}{9}\\right) = -2 \\iff x^{-2} = \\left(\\dfrac{3}{2}\\right)^{-2} \\iff x = \\dfrac{3}{2}"
            },
            {
              "letra": "c)",
              "expresion": "\\log_2(\\sqrt{x}) = -3 \\iff \\sqrt{x} = 2^{-3} = \\dfrac{1}{8} \\iff x = \\dfrac{1}{64}"
            },
            {
              "letra": "d)",
              "expresion": "\\log_{\\sqrt{2}}(x) = 6 \\iff x = (\\sqrt{2})^6 = 8 \\quad\\text{y}\\quad \\log_5(\\sqrt{2x - 1}) = 1 \\iff 2x - 1 = 25 \\iff x = 13"
            }
          ],
          "idea_clave": "Para hallar $x$, traduce de inmediato a la forma exponencial $b^c = a$. Con raíces en la base o en el argumento, pásalas a potencias de exponente fraccionario. Exige siempre que la base sea positiva y distinta de 1 ($x > 0, x \\ne 1$) y que el argumento sea estrictamente positivo ($a > 0$)."
        },
        {
          "numero": 18,
          "titulo": "Fórmula del Cambio de Base",
          "referencia": "Punto 3.2 (Págs. 18 y 21)",
          "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Pistas para aplicar la fórmula de cambio de base:</strong><br>• <strong>La fórmula maestra:</strong> $\\log_b(a) = \\dfrac{\\log_c(a)}{\\log_c(b)}$. Tú eliges la nueva base $c$ que más te convenga.<br>• <strong>¿Qué base $c$ conviene elegir?:</strong> Si la base $b$ y el argumento $a$ son potencias de un mismo número primo ($2, 3, 5\\dots$), pásalos a esa base prima común. Por ejemplo, en $\\log_8(32)$ la base común es $2$: $\\dfrac{\\log_2(32)}{\\log_2(8)} = \\dfrac{5}{3}$. ¡Mucho más rápido y limpio que plantear una ecuación exponencial!<br>• <strong>Con fracciones y raíces:</strong> Expresa el argumento y la base en potencias fraccionarias antes o después del cambio de base: $\\log_{16}(1/32) = \\dfrac{\\log_2(2^{-5})}{\\log_2(2^4)} = -\\dfrac{5}{4}$.</div></div>Aplica la fórmula del cambio de base para calcular el valor exacto de los siguientes logaritmos sin utilizar calculadora:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\log_8(32) = \\dfrac{\\log_2(32)}{\\log_2(8)} = \\dfrac{5}{3} \\quad\\text{y}\\quad \\log_9(243) = \\dfrac{\\log_3(243)}{\\log_3(9)} = \\dfrac{5}{2}"
            },
            {
              "letra": "b)",
              "expresion": "\\log_{16}\\left(\\dfrac{1}{32}\\right) = \\dfrac{\\log_2(2^{-5})}{\\log_2(2^4)} = -\\dfrac{5}{4} \\quad\\text{y}\\quad \\log_{27}\\left(\\dfrac{1}{9\\sqrt{3}}\\right) = \\dfrac{\\log_3(3^{-5/2})}{\\log_3(3^3)} = -\\dfrac{5}{6}"
            },
            {
              "letra": "c)",
              "expresion": "\\log_{25}(125\\sqrt[3]{5}) = \\dfrac{\\log_5(5^{10/3})}{\\log_5(5^2)} = \\dfrac{10/3}{2} = \\dfrac{5}{3}"
            }
          ],
          "idea_clave": "La fórmula del cambio de base $\\log_b(a) = \\dfrac{\\log_c(a)}{\\log_c(b)}$ permite calcular cualquier logaritmo eligiendo una base prima común $c$ (como 2, 3 o 5) para simplificar inmediatamente potencias y raíces sin necesidad de calculadora."
        },
        {
          "numero": 19,
          "titulo": "Cálculo de Logaritmos a partir de Valores Conocidos: log(2) y log(3)",
          "referencia": "Punto 3.2 (Págs. 18 y 22)",
          "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Pistas para calcular logaritmos con datos conocidos:</strong><br>• <strong>Descomposición en factores primos:</strong> Expresa el argumento usando únicamente $2$, $3$ y potencias de $10$ para aplicar las propiedades del producto y cociente: $\\log(x \\cdot y) = \\log(x) + \\log(y)$ y $\\log(x / y) = \\log(x) - \\log(y)$.<br>• <strong>El truco indispensable del 5:</strong> Como $5 = \\dfrac{10}{2}$, su logaritmo decimal siempre vale: $\\log(5) = \\log\\left(\\dfrac{10}{2}\\right) = \\log(10) - \\log(2) = 1 - \\log(2)$.<br>• <strong>Cambio de base a base 10:</strong> Si el logaritmo está en otra base, aplica primero el cambio de base decimal: $\\log_b(a) = \\dfrac{\\log(a)}{\\log(b)}$. Sustituye después los valores decimales de $\\log(2)$ y $\\log(3)$ para hallar el valor exacto aproximado.</div></div>Sabiendo que $\\log(2) \\approx 0{,}3010$ y $\\log(3) \\approx 0{,}4771$, calcula razonadamente el valor numérico de los siguientes logaritmos:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\log(6) = \\log(2 \\cdot 3) = \\log(2) + \\log(3) = 0{,}3010 + 0{,}4771 = 0{,}7781"
            },
            {
              "letra": "b)",
              "expresion": "\\log(5) = \\log\\left(\\dfrac{10}{2}\\right) = 1 - \\log(2) = 1 - 0{,}3010 = 0{,}6990"
            },
            {
              "letra": "c)",
              "expresion": "\\log_2(6) = \\dfrac{\\log(6)}{\\log(2)} = \\dfrac{0{,}7781}{0{,}3010} \\approx 2{,}5850"
            },
            {
              "letra": "d)",
              "expresion": "\\log_3(5) = \\dfrac{\\log(5)}{\\log(3)} = \\dfrac{0{,}6990}{0{,}4771} \\approx 1{,}4651"
            }
          ],
          "idea_clave": "Para calcular logaritmos con datos conocidos, descompón en factores $2, 3$ y $10$. Recuerda siempre que $\\log(5) = 1 - \\log(2)$, y para logaritmos en otra base aplica el cambio a base 10: $\\log_b(a) = \\dfrac{\\log(a)}{\\log(b)}$ sustituyendo los valores numéricos correspondientes."
        }
      ]
    },
    {
      "numero": 14,
      "fecha": "Viernes 9 de Octubre de 2026",
      "titulo": "Propiedades de los Logaritmos: Desarrollar y Unir en un Único Logaritmo",
      "ejercicios": [
        {
          "numero": 20,
          "titulo": "Desarrollo de Expresiones: Aplicar las Propiedades Paso a Paso",
          "referencia": "Punto 3.2 (Págs. 17 y 20)",
          "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Pistas clave para desarrollar paso a paso:</strong><br>• <strong>Lo que multiplica, suma:</strong> los factores del numerador se separan sumando logaritmos.<br>• <strong>Lo que divide, resta:</strong> los factores del denominador se separan restando logaritmos.<br>• <strong>Los exponentes y raíces bajan delante:</strong> una potencia pasa multiplicando ($n \\cdot \\log(x)$) y una raíz pasa dividiendo.<br>• <strong>Cuidado con las sumas dentro del paréntesis:</strong> expresiones como $(A + B)$ o $(x^2 + y^2)$ no se pueden separar directamente. Solo separamos productos y cocientes.<br>• <strong>Calcula los números conocidos:</strong> si aparece un valor exacto como $\\log(100) = 2$, $\\log_2(16) = 4$ o $\\ln(e) = 1$, escríbelo directamente en su forma numérica.</div></div>Desarrolla las siguientes expresiones aplicando las propiedades de los logaritmos y simplificando los términos numéricos:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\log\\left(\\dfrac{100 \\cdot x^3 \\cdot \\sqrt{y}}{z^4 \\cdot \\sqrt[3]{w}}\\right) = 2 + 3\\log(x) + \\dfrac{1}{2}\\log(y) - 4\\log(z) - \\dfrac{1}{3}\\log(w)"
            },
            {
              "letra": "b)",
              "expresion": "\\log_2\\left(\\dfrac{(x^2 - 9) \\cdot \\sqrt[4]{x+3}}{16 \\cdot (x-3)^3}\\right) = \\dfrac{5}{4}\\log_2(x+3) - 2\\log_2(x-3) - 4"
            },
            {
              "letra": "c)",
              "expresion": "\\ln\\left(\\dfrac{e^3 \\cdot x^2}{\\sqrt{e \\cdot \\sqrt[3]{x \\cdot y^2}}}\\right) = \\dfrac{5}{2} + \\dfrac{11}{6}\\ln(x) - \\dfrac{1}{3}\\ln(y)"
            },
            {
              "letra": "d)",
              "expresion": "\\log\\left(\\dfrac{\\sqrt{x^2 + y^2}}{x^2 - y^2}\\right) = \\dfrac{1}{2}\\log(x^2 + y^2) - \\log(x+y) - \\log(x-y)"
            }
          ],
          "idea_clave": "Para desarrollar expresiones: lo que está arriba suma, lo que está abajo resta, y los exponentes bajan delante multiplicando. Las sumas dentro de un logaritmo no se pueden separar a menos que se puedan factorizar en productos."
        },
        {
          "numero": 21,
          "titulo": "Unir en un Único Logaritmo: El Camino Inverso",
          "referencia": "Punto 3.2 (Pág. 17)",
          "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Pistas clave para juntar todo en un solo logaritmo:</strong><br>• <strong>1. Sube los números de delante como exponentes:</strong> $k \\cdot \\log(x)$ pasa a ser $\\log(x^k)$. Si el exponente es una fracción, se expresa como raíz.<br>• <strong>2. Disfraza los números sueltos de logaritmo:</strong> escríbelos en la misma base. Por ejemplo, en base 10 el $2$ es $\\log(100)$; en base 2 el $3$ es $\\log_2(8)$; y en base $e$, el $1$ es $\\ln(e)$.<br>• <strong>3. Agrupa en una sola fracción:</strong> escribe un único logaritmo. Los términos que suman van al numerador y los que restan van al denominador.<br>• <strong>4. Simplifica al final:</strong> una vez dentro del mismo logaritmo, opera las potencias o simplifica la fracción si es posible.</div></div>Reduce a un único logaritmo y simplifica el resultado:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "3\\log(x) - \\dfrac{1}{2}\\log(y) + 2\\log(z) - 2 = \\log\\left(\\dfrac{x^3 \\cdot z^2}{100\\sqrt{y}}\\right)"
            },
            {
              "letra": "b)",
              "expresion": "2\\log_2(x+1) - \\log_2(x^2 - 1) + 3 - \\dfrac{1}{2}\\log_2(x-1) = \\log_2\\left(\\dfrac{8(x+1)}{\\sqrt{(x-1)^3}}\\right)"
            },
            {
              "letra": "c)",
              "expresion": "\\dfrac{1}{3}\\ln(x) - 2\\ln(y) + \\dfrac{1}{2}\\ln(z) + \\dfrac{3}{2} = \\ln\\left(\\dfrac{e\\sqrt{e} \\cdot \\sqrt[3]{x} \\cdot \\sqrt{z}}{y^2}\\right) = \\ln\\left(\\dfrac{\\sqrt{e^3 z} \\cdot \\sqrt[3]{x}}{y^2}\\right)"
            },
            {
              "letra": "d)",
              "expresion": "\\log(40) + 2\\log(5) - \\log(2) + \\log\\left(\\dfrac{1}{5}\\right) = \\log\\left(\\dfrac{40 \\cdot 25 \\cdot 1}{2 \\cdot 5}\\right) = \\log\\left(\\dfrac{1000}{10}\\right) = \\log(100) = 2"
            }
          ],
          "idea_clave": "Para unir en un único logaritmo: sube los coeficientes a los exponentes, convierte los números sueltos en logaritmos de la misma base y agrupa todo en una sola fracción (positivos arriba y negativos abajo). Al final, simplifica el interior."
        }
      ]
    }
  ],
  "semanas_ejercicios": [
    {
      "semana_numero": 1,
      "rango_fechas": "14 Sep - 18 Sep 2026",
      "estado": "anterior",
      "meta_semanal": "Dominar la clasificación rigurosa en la recta real, la distinción entre pertenencia (∈) e inclusión (⊂) y las operaciones con intervalos.",
      "ejercicios": [
        {
          "id": "P-01",
          "caso": "Clasificación Numérica Elemental (Ejercicio 1 de la Hoja)",
          "apartados_count": 12,
          "instruccion": "Clasifica razonadamente cada número en el conjunto más restrictivo al que pertenece ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}$) e indica su cadena completa de pertenencia e inclusión:",
          "apartados": [
            { "letra": "a)", "expresion": "15" },
            { "letra": "b)", "expresion": "-28" },
            { "letra": "c)", "expresion": "\\dfrac{54}{9}" },
            { "letra": "d)", "expresion": "-\\dfrac{7}{4}" },
            { "letra": "e)", "expresion": "0{,}625" },
            { "letra": "f)", "expresion": "3{,}\\widehat{7}" },
            { "letra": "g)", "expresion": "1{,}2\\widehat{45}" },
            { "letra": "h)", "expresion": "\\sqrt{41}" },
            { "letra": "i)", "expresion": "-\\dfrac{5\\pi}{3}" },
            { "letra": "j)", "expresion": "\\sqrt{225}" },
            { "letra": "k)", "expresion": "\\sqrt[3]{-64}" },
            { "letra": "l)", "expresion": "2{,}5050050005\\dots" }
          ],
          "enunciado": "Clasifica razonadamente cada número en el conjunto más restrictivo al que pertenece ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}$) e indica su cadena completa de pertenencia e inclusión: $$a)\\; 15 \\qquad b)\\; -28 \\qquad c)\\; \\dfrac{54}{9} \\qquad d)\\; -\\dfrac{7}{4} \\qquad e)\\; 0{,}625 \\qquad f)\\; 3{,}\\widehat{7}$$ $$g)\\; 1{,}2\\widehat{45} \\qquad h)\\; \\sqrt{41} \\qquad i)\\; -\\dfrac{5\\pi}{3} \\qquad j)\\; \\sqrt{225} \\qquad k)\\; \\sqrt[3]{-64} \\qquad l)\\; 2{,}5050050005\\dots$$",
          "solucion": "a)\\; 15 \\in \\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}; \\quad b)\\; -28 \\in \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}; \\quad c)\\; \\dfrac{54}{9}=6 \\in \\mathbb{N} \\subset \\dots; \\quad d)\\; -\\dfrac{7}{4} = -1{,}75 \\in \\mathbb{Q} \\subset \\mathbb{R}; \\quad e)\\; 0{,}625 = \\dfrac{5}{8} \\in \\mathbb{Q}; \\quad f)\\; 3{,}\\widehat{7} = \\dfrac{34}{9} \\in \\mathbb{Q}; \\quad g)\\; 1{,}2\\widehat{45} = \\dfrac{137}{110} \\in \\mathbb{Q}; \\quad h)\\; \\sqrt{41} \\in \\mathbb{I} \\subset \\mathbb{R}; \\quad i)\\; -\\dfrac{5\\pi}{3} \\in \\mathbb{I} \\subset \\mathbb{R}; \\quad j)\\; \\sqrt{225} = 15 \\in \\mathbb{N}; \\quad k)\\; \\sqrt[3]{-64} = -4 \\in \\mathbb{Z} \\subset \\mathbb{Q}; \\quad l)\\; 2{,}5050050005\\dots \\in \\mathbb{I} \\subset \\mathbb{R}"
        },
        {
          "id": "P-02",
          "caso": "Clasificación Numérica con Operaciones Previas (Ejercicio 2 de la Hoja)",
          "apartados_count": 8,
          "instruccion": "Opera y simplifica al máximo cada expresión antes de clasificar el resultado razonadamente en $\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}, \\mathbb{C}$:",
          "apartados": [
            { "letra": "a)", "expresion": "A = 0{,}\\widehat{3} + 0{,}\\widehat{6}" },
            { "letra": "b)", "expresion": "B = \\sqrt[3]{-216} \\quad\\text{y}\\quad C = \\sqrt{-81}" },
            { "letra": "c)", "expresion": "D = \\dfrac{\\sqrt{98} - \\sqrt{2}}{\\sqrt{8}}" },
            { "letra": "d)", "expresion": "E = (\\sqrt{7} - \\sqrt{2})(\\sqrt{7} + \\sqrt{2})" },
            { "letra": "e)", "expresion": "F = (3\\sqrt{2} - 1)^2" },
            { "letra": "f)", "expresion": "G = \\dfrac{6\\pi - 2\\pi}{2\\pi}" },
            { "letra": "g)", "expresion": "H = \\sqrt[4]{(-3)^4} \\quad\\text{y}\\quad K = (\\sqrt[4]{-3})^4" },
            { "letra": "h)", "expresion": "L = 3{,}400400400400400\\dots" }
          ],
          "enunciado": "Opera y simplifica al máximo cada expresión antes de clasificar el resultado razonadamente en $\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}, \\mathbb{C}$: $$a)\\; A = 0{,}\\widehat{3} + 0{,}\\widehat{6} \\qquad b)\\; B = \\sqrt[3]{-216} \\quad\\text{frente a}\\quad C = \\sqrt{-81} \\qquad c)\\; D = \\dfrac{\\sqrt{98} - \\sqrt{2}}{\\sqrt{8}}$$ $$d)\\; E = (\\sqrt{7} - \\sqrt{2})(\\sqrt{7} + \\sqrt{2}) \\qquad e)\\; F = (3\\sqrt{2} - 1)^2 \\qquad f)\\; G = \\dfrac{6\\pi - 2\\pi}{2\\pi}$$ $$g)\\; H = \\sqrt[4]{(-3)^4} \\quad\\text{frente a}\\quad K = (\\sqrt[4]{-3})^4 \\qquad h)\\; L = 3{,}400400400400400\\dots$$",
          "solucion": "a)\\; A = 1 \\in \\mathbb{N}; \\quad b)\\; B = -6 \\in \\mathbb{Z}, \\; C = 9i \\in \\mathbb{C} \\setminus \\mathbb{R}; \\quad c)\\; D = 3 \\in \\mathbb{N}; \\quad d)\\; E = 5 \\in \\mathbb{N}; \\quad e)\\; F = 19 - 6\\sqrt{2} \\in \\mathbb{I}; \\quad f)\\; G = 2 \\in \\mathbb{N}; \\quad g)\\; H = 3 \\in \\mathbb{N}; \\; K \\notin \\mathbb{R} \\text{ (en } \\mathbb{C}: K = -3\\text{)}; \\quad h)\\; L = 3{,}\\widehat{400} = \\dfrac{3397}{999} \\in \\mathbb{Q}"
        },
        {
          "id": "P-03",
          "caso": "Operaciones con Intervalos y Semirrectas (Ejercicio 3 de la Hoja)",
          "apartados_count": 6,
          "instruccion": "Representa sobre rectas reales alineadas y calcula las siguientes operaciones, justificando de forma rigurosa si los extremos de los intervalos son abiertos o cerrados:",
          "apartados": [
            { "letra": "a)", "expresion": "[-4, 3) \\cap [1, 7] \\quad\\text{frente a}\\quad [-4, 3) \\cup [1, 7]" },
            { "letra": "b)", "expresion": "[-4, 3) \\setminus [1, 7] \\quad\\text{y}\\quad [1, 7] \\setminus [-4, 3)" },
            { "letra": "c)", "expresion": "(-\\infty, 2] \\cap (-1, 6) \\cap [0, +\\infty)" },
            { "letra": "d)", "expresion": "(-\\infty, -2) \\cup [-2, 5]" },
            { "letra": "e)", "expresion": "[-3, 2) \\cup (2, 6]" },
            { "letra": "f)", "expresion": "([-5, 2] \\cap [0, 4]) \\cup (3, 7)" }
          ],
          "enunciado": "Representa sobre rectas reales alineadas y calcula las siguientes operaciones, justificando de forma rigurosa si los extremos de los intervalos son abiertos o cerrados: $$a)\\; [-4, 3) \\cap [1, 7] \\quad\\text{frente a}\\quad [-4, 3) \\cup [1, 7] \\qquad b)\\; [-4, 3) \\setminus [1, 7] \\quad\\text{y}\\quad [1, 7] \\setminus [-4, 3)$$ $$c)\\; (-\\infty, 2] \\cap (-1, 6) \\cap [0, +\\infty) \\qquad d)\\; (-\\infty, -2) \\cup [-2, 5]$$ $$e)\\; [-3, 2) \\cup (2, 6] \\qquad f)\\; ([-5, 2] \\cap [0, 4]) \\cup (3, 7)$$",
          "solucion": "a)\\; [1, 3) \\quad\\text{y}\\quad [-4, 7]; \\quad b)\\; [-4, 1) \\quad\\text{y}\\quad [3, 7]; \\quad c)\\; [0, 2]; \\quad d)\\; (-\\infty, 5]; \\quad e)\\; [-3, 6] \\setminus \\{2\\}; \\quad f)\\; [0, 2] \\cup (3, 7)"
        },
        {
          "id": "P-04",
          "caso": "Complementarios y Operaciones Combinadas (Ejercicio 4 de la Hoja)",
          "apartados_count": 5,
          "enunciado_base": "I = (-\\infty, 4] \\qquad J = (-3, 6) \\qquad K = [1, +\\infty)",
          "instruccion": "Dados los conjuntos anteriores, calcula y expresa el resultado en forma de intervalo o unión disjunta de intervalos:",
          "apartados": [
            { "letra": "a)", "expresion": "I^c = \\mathbb{R} \\setminus I \\quad\\text{y}\\quad J^c = \\mathbb{R} \\setminus J" },
            { "letra": "b)", "expresion": "(I \\cup K)^c = \\mathbb{R} \\setminus (I \\cup K)" },
            { "letra": "c)", "expresion": "J \\setminus (I \\cap K)" },
            { "letra": "d)", "expresion": "(I \\cap J)^c \\cap K" },
            { "letra": "e)", "expresion": "(U \\cup V)^c \\quad\\text{siendo } U = (-\\infty, -2] \\quad\\text{y}\\quad V = [5, +\\infty)" }
          ],
          "enunciado": "Dados los conjuntos $I = (-\\infty, 4]$, $J = (-3, 6)$ y $K = [1, +\\infty)$, calcula y expresa el resultado en forma de intervalo o unión disjunta de intervalos: $$a)\\; I^c = \\mathbb{R} \\setminus I \\quad\\text{y}\\quad J^c = \\mathbb{R} \\setminus J \\qquad b)\\; (I \\cup K)^c = \\mathbb{R} \\setminus (I \\cup K)$$ $$c)\\; J \\setminus (I \\cap K) \\qquad d)\\; (I \\cap J)^c \\cap K \\qquad e)\\; (U \\cup V)^c \\quad\\text{siendo } U = (-\\infty, -2] \\quad\\text{y}\\quad V = [5, +\\infty)$$",
          "solucion": "a)\\; I^c = (4, +\\infty), \\quad J^c = (-\\infty, -3] \\cup [6, +\\infty); \\quad b)\\; (I \\cup K)^c = \\emptyset; \\quad c)\\; J \\setminus (I \\cap K) = (-3, 1) \\cup (4, 6); \\quad d)\\; (I \\cap J)^c \\cap K = (4, +\\infty); \\quad e)\\; (U \\cup V)^c = (-2, 5)"
        }
      ]
    },
    {
      "semana_numero": 2,
      "rango_fechas": "21 Sep - 25 Sep 2026",
      "estado": "anterior",
      "meta_semanal": "Dominar el valor absoluto (definición analítica a trozos e inecuaciones de distancias).",
      "ejercicios": [
        {
          "id": "P-05",
          "caso": "Valor Absoluto y Distancias (Ejercicio 5 de la Hoja)",
          "apartados_count": 4,
          "instruccion": "Resuelve las siguientes cuestiones sobre la función valor absoluto:",
          "apartados": [
            { "letra": "a)", "expresion": "\\text{Expresa a trozos: } f(x) = |2x - 8|" },
            { "letra": "b)", "expresion": "\\text{Expresa a trozos: } g(x) = |x + 3| - |x - 2|" },
            { "letra": "c)", "expresion": "\\text{Distancia de } x \\text{ al punto } -3 \\text{ menor que 5 unidades (en forma de inecuación con valor absoluto)}" },
            { "letra": "d)", "expresion": "\\text{La distancia de } x \\text{ al punto 4 es de al menos 6 unidades (en forma de inecuación con valor absoluto)}" }
          ],
          "enunciado": "Resuelve las siguientes cuestiones sobre la función valor absoluto: $$a)\\; \\text{Expresa a trozos: } f(x) = |2x - 8| \\qquad b)\\; \\text{Expresa a trozos: } g(x) = |x + 3| - |x - 2|$$ $$c)\\; \\text{Distancia de } x \\text{ al punto } -3 \\text{ menor que 5 unidades} \\qquad d)\\; \\text{La distancia de } x \\text{ al punto 4 es de al menos 6 unidades}$$",
          "solucion": "a)\\; f(x) = \\begin{cases} -2x + 8 & \\text{si } x < 4 \\\\ 2x - 8 & \\text{si } x \\ge 4 \\end{cases}; \\quad b)\\; g(x) = \\begin{cases} -5 & \\text{si } x < -3 \\\\ 2x + 1 & \\text{si } -3 \\le x < 2 \\\\ 5 & \\text{si } x \\ge 2 \\end{cases}; \\quad c)\\; |x + 3| < 5 \\iff x \\in (-8, 2); \\quad d)\\; |x - 4| \\ge 6 \\iff x \\in (-\\infty, -2] \\cup [10, +\\infty)"
        },
        {
          "id": "P-06",
          "caso": "Ecuaciones e Inecuaciones con Valor Absoluto (Ejercicio 6 de la Hoja)",
          "apartados_count": 10,
          "instruccion": "Resuelve las siguientes ecuaciones e inecuaciones en $\\mathbb{R}$, expresando las soluciones en forma de conjunto o intervalo:",
          "apartados": [
            { "letra": "a)", "expresion": "|3x - 5| = 7" },
            { "letra": "b)", "expresion": "|2x + 1| \\le 9" },
            { "letra": "c)", "expresion": "|4 - 3x| > 5" },
            { "letra": "d)", "expresion": "|2x - 3| < x + 6" },
            { "letra": "e)", "expresion": "\\left|\\dfrac{x}{2} - 3\\right| < 4" },
            { "letra": "f)", "expresion": "\\left|\\dfrac{2x - 1}{3}\\right| \\le 5" },
            { "letra": "g)", "expresion": "\\left|\\dfrac{2x - 1}{x + 3}\\right| \\le 1 \\quad (x \\ne -3)" },
            { "letra": "h)", "expresion": "\\left|\\dfrac{x + 1}{x - 2}\\right| \\ge 2 \\quad (x \\ne 2)" },
            { "letra": "i)", "expresion": "|5x + 7| \\le -4" },
            { "letra": "j)", "expresion": "|2x - 9| > -3" }
          ],
          "enunciado": "Resuelve las siguientes ecuaciones e inecuaciones en $\\mathbb{R}$, expresando las soluciones en forma de conjunto o intervalo: $$a)\\; |3x - 5| = 7 \\qquad b)\\; |2x + 1| \\le 9 \\qquad c)\\; |4 - 3x| > 5 \\qquad d)\\; |2x - 3| < x + 6$$ $$e)\\; \\left|\\dfrac{x}{2} - 3\\right| < 4 \\qquad f)\\; \\left|\\dfrac{2x - 1}{3}\\right| \\le 5 \\qquad g)\\; \\left|\\dfrac{2x - 1}{x + 3}\\right| \\le 1 \\; (x \\ne -3)$$ $$h)\\; \\left|\\dfrac{x + 1}{x - 2}\\right| \\ge 2 \\; (x \\ne 2) \\qquad i)\\; |5x + 7| \\le -4 \\qquad j)\\; |2x - 9| > -3$$",
          "solucion": "a)\\; S = \\left\\{-\\dfrac{2}{3}, 4\\right\\}; \\quad b)\\; S = [-5, 4]; \\quad c)\\; S = \\left(-\\infty, -\\dfrac{1}{3}\\right) \\cup (3, +\\infty); \\quad d)\\; S = (-1, 9); \\quad e)\\; S = (-2, 14); \\quad f)\\; S = [-7, 8]; \\quad g)\\; S = \\left[-\\dfrac{2}{3}, 4\\right]; \\quad h)\\; S = [1, 2) \\cup (2, 5] = [1, 5] \\setminus \\{2\\}; \\quad i)\\; S = \\emptyset \\;\\text{(imposible)}; \\quad j)\\; S = \\mathbb{R}"
        }
      ]
    },
    {
      "semana_numero": 3,
      "rango_fechas": "28 Sep - 02 Oct 2026",
      "estado": "anterior",
      "meta_semanal": "Dominar la simplificación de potencias con exponentes enteros y fraccionarios, operaciones con radicales (mcm de índices y extracción) y radicales anidados (Ejercicios 7, 8 y 9 de la hoja).",
      "ejercicios": [
        {
          "id": "P-07",
          "caso": "Potencias y Signos: Exponentes Enteros y Fraccionarios (Ejercicio 7 de la Hoja)",
          "apartados_count": 4,
          "instruccion": "Simplifica al máximo aplicando las propiedades de las potencias y expresando el resultado final con exponentes positivos:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\dfrac{2^{-3} \\cdot 3^4 \\cdot 6^{-2}}{8^{-1} \\cdot 9^2 \\cdot 12^{-3}}"
            },
            {
              "letra": "b)",
              "expresion": "\\dfrac{(-2)^4 \\cdot (-3)^3 \\cdot (-5)^0}{-2^4 \\cdot 3^2 \\cdot 10^{-2}}"
            },
            {
              "letra": "c)",
              "expresion": "\\left(\\dfrac{a^{-2} b^3}{c^{-1}}\\right)^{-2} \\cdot \\left(\\dfrac{a^3 c^{-2}}{b^{-1}}\\right)^3"
            },
            {
              "letra": "d)",
              "expresion": "\\dfrac{(x^{2/3} y^{-1/2})^6}{(x^{-1} y^{3/4})^4}"
            }
          ],
          "enunciado": "Simplifica al máximo aplicando las propiedades de las potencias y expresando el resultado final con exponentes positivos: $$a)\\; \\dfrac{2^{-3} \\cdot 3^4 \\cdot 6^{-2}}{8^{-1} \\cdot 9^2 \\cdot 12^{-3}} \\qquad b)\\; \\dfrac{(-2)^4 \\cdot (-3)^3 \\cdot (-5)^0}{-2^4 \\cdot 3^2 \\cdot 10^{-2}} \\qquad c)\\; \\left(\\dfrac{a^{-2} b^3}{c^{-1}}\\right)^{-2} \\cdot \\left(\\dfrac{a^3 c^{-2}}{b^{-1}}\\right)^3 \\qquad d)\\; \\dfrac{(x^{2/3} y^{-1/2})^6}{(x^{-1} y^{3/4})^4}$$",
          "solucion": "a)\\; 48; \\quad b)\\; 300; \\quad c)\\; \\dfrac{a^{13}}{b^3 c^8}; \\quad d)\\; \\dfrac{x^8}{y^6}"
        },
        {
          "id": "P-08",
          "caso": "Radicales: Mínimo Común Índice y Extracción de Factores (Ejercicio 8 de la Hoja)",
          "apartados_count": 6,
          "instruccion": "Realiza las siguientes operaciones expresando el resultado en un único radical irreducible con factores simplificados (extrae todos los factores que puedas):",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\sqrt[3]{a^2} \\cdot \\sqrt[4]{a^3} \\cdot \\sqrt[6]{a^5}"
            },
            {
              "letra": "b)",
              "expresion": "\\dfrac{\\sqrt[3]{x^2 \\cdot y}}{\\sqrt[5]{x^3 \\cdot y^2}}"
            },
            {
              "letra": "c)",
              "expresion": "\\sqrt{18} - 3\\sqrt{50} + 2\\sqrt{72} - \\sqrt{8}"
            },
            {
              "letra": "d)",
              "expresion": "2\\sqrt[3]{54} - \\sqrt[3]{16} + 3\\sqrt[3]{250}"
            },
            {
              "letra": "e)",
              "expresion": "\\dfrac{\\sqrt[3]{16a^4 b} \\cdot \\sqrt[4]{8a^3 b^5}}{\\sqrt[6]{32a^5 b^2}}"
            },
            {
              "letra": "f)",
              "expresion": "3\\sqrt[3]{\\dfrac{16}{27}} - \\dfrac{1}{2}\\sqrt[3]{128} + 5\\sqrt[3]{\\dfrac{2}{125}}"
            }
          ],
          "enunciado": "Realiza las siguientes operaciones expresando el resultado en un único radical irreducible con factores simplificados (extrae todos los factores que puedas): $$a)\\; \\sqrt[3]{a^2} \\cdot \\sqrt[4]{a^3} \\cdot \\sqrt[6]{a^5} \\qquad b)\\; \\dfrac{\\sqrt[3]{x^2 \\cdot y}}{\\sqrt[5]{x^3 \\cdot y^2}} \\qquad c)\\; \\sqrt{18} - 3\\sqrt{50} + 2\\sqrt{72} - \\sqrt{8}$$ $$d)\\; 2\\sqrt[3]{54} - \\sqrt[3]{16} + 3\\sqrt[3]{250} \\qquad e)\\; \\dfrac{\\sqrt[3]{16a^4 b} \\cdot \\sqrt[4]{8a^3 b^5}}{\\sqrt[6]{32a^5 b^2}} \\qquad f)\\; 3\\sqrt[3]{\\dfrac{16}{27}} - \\dfrac{1}{2}\\sqrt[3]{128} + 5\\sqrt[3]{\\dfrac{2}{125}}$$",
          "solucion": "a)\\; a^2 \\sqrt[4]{a}; \\quad b)\\; \\sqrt[15]{\\dfrac{x}{y}}; \\quad c)\\; -2\\sqrt{2}; \\quad d)\\; 19\\sqrt[3]{2}; \\quad e)\\; 2ab\\sqrt[4]{2ab}; \\quad f)\\; \\sqrt[3]{2}"
        },
        {
          "id": "P-09",
          "caso": "Radicales Anidados con Factores Intermedios (Ejercicio 9 de la Hoja)",
          "apartados_count": 4,
          "instruccion": "Reduce a una única raíz o a una potencia de exponente fraccionario irreducible:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\sqrt{x \\cdot \\sqrt[3]{x^2 \\cdot \\sqrt{x}}}"
            },
            {
              "letra": "b)",
              "expresion": "\\sqrt{\\dfrac{\\sqrt[4]{a^3}}{\\sqrt[3]{b}}} \\cdot \\sqrt[3]{\\dfrac{\\sqrt{b^2}}{\\sqrt{a}}}"
            },
            {
              "letra": "c)",
              "expresion": "\\sqrt{2 \\cdot \\sqrt[3]{4 \\cdot \\sqrt{8}}}"
            },
            {
              "letra": "d)",
              "expresion": "\\sqrt[3]{x^2 \\cdot \\sqrt[4]{x \\cdot \\sqrt{x^3}}}"
            }
          ],
          "enunciado": "Reduce a una única raíz o a una potencia de exponente fraccionario irreducible: $$a)\\; \\sqrt{x \\cdot \\sqrt[3]{x^2 \\cdot \\sqrt{x}}} \\qquad b)\\; \\sqrt{\\dfrac{\\sqrt[4]{a^3}}{\\sqrt[3]{b}}} \\cdot \\sqrt[3]{\\dfrac{\\sqrt{b^2}}{\\sqrt{a}}} \\qquad c)\\; \\sqrt{2 \\cdot \\sqrt[3]{4 \\cdot \\sqrt{8}}} \\qquad d)\\; \\sqrt[3]{x^2 \\cdot \\sqrt[4]{x \\cdot \\sqrt{x^3}}}$$",
          "solucion": "a)\\; \\sqrt[12]{x^{11}}; \\quad b)\\; \\sqrt[24]{a^{14} b^{13}}; \\quad c)\\; \\sqrt[12]{2^{11}}; \\quad d)\\; \\sqrt[24]{x^{23}}"
        }
      ]
    },
    {
      "semana_numero": 4,
      "rango_fechas": "05 Oct - 09 Oct 2026",
      "estado": "actual",
      "meta_semanal": "Dominar las técnicas completas de racionalización de denominadores, la factorización inversa con identidades notables, el cálculo de logaritmos e incógnitas en la base o argumento, y su reducción y separación aplicando propiedades (Ejercicios 10, 11 y 12 de la hoja).",
      "ejercicios": [
        {
          "id": "P-10",
          "caso": "Técnicas de Racionalización (Ejercicio 10 de la Hoja)",
          "apartados_count": 9,
          "instruccion": "Racionaliza los denominadores y simplifica al máximo las expresiones resultantes:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\dfrac{6}{\\sqrt{3}} \\quad\\text{y}\\quad \\dfrac{10}{\\sqrt[5]{4^2}}"
            },
            {
              "letra": "b)",
              "expresion": "\\dfrac{6}{\\sqrt[3]{9}}"
            },
            {
              "letra": "c)",
              "expresion": "\\dfrac{10}{\\sqrt[9]{8^5}}"
            },
            {
              "letra": "d)",
              "expresion": "\\dfrac{4}{\\sqrt{7} - \\sqrt{3}}"
            },
            {
              "letra": "e)",
              "expresion": "\\dfrac{6}{3\\sqrt{2} - 2\\sqrt{3}}"
            },
            {
              "letra": "f)",
              "expresion": "\\dfrac{\\sqrt{5} + \\sqrt{2}}{\\sqrt{5} - \\sqrt{2}}"
            },
            {
              "letra": "g)",
              "expresion": "\\dfrac{2\\sqrt{3} - \\sqrt{2}}{\\sqrt{3} + 2\\sqrt{2}}"
            },
            {
              "letra": "h)",
              "expresion": "\\dfrac{4}{\\sqrt[3]{5} - \\sqrt[3]{3}}"
            },
            {
              "letra": "i)",
              "expresion": "\\dfrac{10}{\\sqrt[3]{3} + \\sqrt[3]{2}}"
            }
          ],
          "enunciado": "Racionaliza los denominadores y simplifica al máximo las expresiones resultantes: $$a)\\; \\dfrac{6}{\\sqrt{3}} \\;\\text{y}\\; \\dfrac{10}{\\sqrt[5]{4^2}} \\qquad b)\\; \\dfrac{6}{\\sqrt[3]{9}} \\qquad c)\\; \\dfrac{10}{\\sqrt[9]{8^5}}$$ $$d)\\; \\dfrac{4}{\\sqrt{7} - \\sqrt{3}} \\qquad e)\\; \\dfrac{6}{3\\sqrt{2} - 2\\sqrt{3}} \\qquad f)\\; \\dfrac{\\sqrt{5} + \\sqrt{2}}{\\sqrt{5} - \\sqrt{2}}$$ $$g)\\; \\dfrac{2\\sqrt{3} - \\sqrt{2}}{\\sqrt{3} + 2\\sqrt{2}} \\qquad h)\\; \\dfrac{4}{\\sqrt[3]{5} - \\sqrt[3]{3}} \\qquad i)\\; \\dfrac{10}{\\sqrt[3]{3} + \\sqrt[3]{2}}$$",
          "solucion": "a)\\; 2\\sqrt{3} \\;\\text{y}\\; 5\\sqrt[5]{2}; \\quad b)\\; 2\\sqrt[3]{3}; \\quad c)\\; 5\\sqrt[3]{2}; \\quad d)\\; \\sqrt{7} + \\sqrt{3}; \\quad e)\\; 3\\sqrt{2} + 2\\sqrt{3}; \\quad f)\\; \\dfrac{7 + 2\\sqrt{10}}{3}; \\quad g)\\; \\sqrt{6} - 2; \\quad h)\\; 2(\\sqrt[3]{25} + \\sqrt[3]{15} + \\sqrt[3]{9}); \\quad i)\\; 2(\\sqrt[3]{9} - \\sqrt[3]{6} + \\sqrt[3]{4})"
        },
        {
          "id": "P-11",
          "caso": "Identidades Notables y Factorización Inversa (Ejercicio 11 de la Hoja)",
          "apartados_count": 5,
          "instruccion": "Desarrolla, simplifica o factoriza aplicando las identidades notables fundamentales:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "(2x - 3y)^2 - (2x + 3y)(2x - 3y)"
            },
            {
              "letra": "b)",
              "expresion": "(2x - 3)^3 \\quad\\text{y}\\quad (x^2 + 2)^3"
            },
            {
              "letra": "c)",
              "expresion": "4x^2 - 12x + 9"
            },
            {
              "letra": "d)",
              "expresion": "25x^4 - 49y^2"
            },
            {
              "letra": "e)",
              "expresion": "8x^3 - 27 \\quad\\text{y}\\quad x^3 + 64"
            }
          ],
          "enunciado": "Desarrolla, simplifica o factoriza aplicando las identidades notables fundamentales: $$a)\\; (2x - 3y)^2 - (2x + 3y)(2x - 3y) \\qquad b)\\; (2x - 3)^3 \\;\\text{y}\\; (x^2 + 2)^3$$ $$c)\\; 4x^2 - 12x + 9 \\quad\\text{(factoriza)} \\qquad d)\\; 25x^4 - 49y^2 \\quad\\text{(factoriza)}$$ $$e)\\; 8x^3 - 27 \\;\\text{y}\\; x^3 + 64 \\quad\\text{(factoriza sumas/diferencias de cubos)}$$",
          "solucion": "a)\\; 6y(3y - 2x) = 18y^2 - 12xy; \\quad b)\\; 8x^3 - 36x^2 + 54x - 27 \\;\\text{y}\\; x^6 + 6x^4 + 12x^2 + 8; \\quad c)\\; (2x - 3)^2; \\quad d)\\; (5x^2 - 7y)(5x^2 + 7y); \\quad e)\\; (2x - 3)(4x^2 + 6x + 9) \\;\\text{y}\\; (x + 4)(x^2 - 4x + 16)"
        },
        {
          "id": "P-12",
          "caso": "Logaritmos: Definición, Operaciones y Cambio de Base (Ejercicio 12 de la Hoja)",
          "apartados_count": 5,
          "instruccion": "Resuelve las siguientes actividades de logaritmos sin utilizar calculadora:",
          "apartados": [
            {
              "letra": "a)",
              "expresion": "\\log_2(64), \\quad \\log_3\\left(\\dfrac{1}{81}\\right), \\quad \\log_{\\sqrt{5}}(125), \\quad \\ln(e^4\\sqrt{e})"
            },
            {
              "letra": "b)",
              "expresion": "\\log_x(32) = \\dfrac{5}{2}, \\quad \\log_3(x) = -3, \\quad \\log_4(x^2 - 5) = 2"
            },
            {
              "letra": "c)",
              "expresion": "2\\log(x) - \\dfrac{1}{3}\\log(y) + 3\\log(z) - 1"
            },
            {
              "letra": "d)",
              "expresion": "\\log_4(32) \\quad\\text{y}\\quad \\log_{27}(81)"
            },
            {
              "letra": "e)",
              "expresion": "\\log_8\\left(\\dfrac{1}{16}\\right) \\quad\\text{y}\\quad \\log_9(27\\sqrt{3})"
            }
          ],
          "enunciado": "Resuelve sin calculadora: $$a)\\; \\log_2(64), \\; \\log_3\\left(\\frac{1}{81}\\right), \\; \\log_{\\sqrt{5}}(125), \\; \\ln(e^4\\sqrt{e}) \\qquad b)\\; \\log_x(32)=\\frac{5}{2}, \\; \\log_3(x)=-3, \\; \\log_4(x^2-5)=2$$ $$c)\\; 2\\log(x)-\\frac{1}{3}\\log(y)+3\\log(z)-1 \\qquad d)\\; \\log_4(32) \\;\\text{y}\\; \\log_{27}(81) \\qquad e)\\; \\log_8\\left(\\frac{1}{16}\\right) \\;\\text{y}\\; \\log_9(27\\sqrt{3})$$",
          "solucion": "a)\\; 6, \\; -4, \\; 6, \\; \\dfrac{9}{2}; \\quad b)\\; x=4, \\; x=\\dfrac{1}{27}, \\; x=\\pm\\sqrt{21}; \\quad c)\\; \\log\\left(\\dfrac{x^2 \\cdot z^3}{10\\sqrt[3]{y}}\\right); \\quad d)\\; \\dfrac{5}{2}, \\; \\dfrac{4}{3}; \\quad e)\\; -\\dfrac{4}{3}, \\; \\dfrac{7}{4}"
        }
      ]
    }
  ],
  "ejercicios_semana": [
    {
      "id": "P-07",
      "caso": "Potencias y Signos: Exponentes Enteros y Fraccionarios (Ejercicio 7 de la Hoja)",
      "apartados_count": 4,
      "instruccion": "Simplifica al máximo aplicando las propiedades de las potencias y expresando el resultado final con exponentes positivos:",
      "apartados": [
        {
          "letra": "a)",
          "expresion": "\\dfrac{2^{-3} \\cdot 3^4 \\cdot 6^{-2}}{8^{-1} \\cdot 9^2 \\cdot 12^{-3}}"
        },
        {
          "letra": "b)",
          "expresion": "\\dfrac{(-2)^4 \\cdot (-3)^3 \\cdot (-5)^0}{-2^4 \\cdot 3^2 \\cdot 10^{-2}}"
        },
        {
          "letra": "c)",
          "expresion": "\\left(\\dfrac{a^{-2} b^3}{c^{-1}}\\right)^{-2} \\cdot \\left(\\dfrac{a^3 c^{-2}}{b^{-1}}\\right)^3"
        },
        {
          "letra": "d)",
          "expresion": "\\dfrac{(x^{2/3} y^{-1/2})^6}{(x^{-1} y^{3/4})^4}"
        }
      ],
      "enunciado": "Simplifica al máximo aplicando las propiedades de las potencias y expresando el resultado final con exponentes positivos: $$a)\\; \\dfrac{2^{-3} \\cdot 3^4 \\cdot 6^{-2}}{8^{-1} \\cdot 9^2 \\cdot 12^{-3}} \\qquad b)\\; \\dfrac{(-2)^4 \\cdot (-3)^3 \\cdot (-5)^0}{-2^4 \\cdot 3^2 \\cdot 10^{-2}} \\qquad c)\\; \\left(\\dfrac{a^{-2} b^3}{c^{-1}}\\right)^{-2} \\cdot \\left(\\dfrac{a^3 c^{-2}}{b^{-1}}\\right)^3 \\qquad d)\\; \\dfrac{(x^{2/3} y^{-1/2})^6}{(x^{-1} y^{3/4})^4}$$",
      "solucion": "a)\\; 48; \\quad b)\\; 300; \\quad c)\\; \\dfrac{a^{13}}{b^3 c^8}; \\quad d)\\; \\dfrac{x^8}{y^6}"
    },
    {
      "id": "P-08",
      "caso": "Radicales: Mínimo Común Índice y Extracción de Factores (Ejercicio 8 de la Hoja)",
      "apartados_count": 6,
      "instruccion": "Realiza las siguientes operaciones expresando el resultado en un único radical irreducible con factores simplificados (extrae todos los factores que puedas):",
      "apartados": [
        {
          "letra": "a)",
          "expresion": "\\sqrt[3]{a^2} \\cdot \\sqrt[4]{a^3} \\cdot \\sqrt[6]{a^5}"
        },
        {
          "letra": "b)",
          "expresion": "\\dfrac{\\sqrt[3]{x^2 \\cdot y}}{\\sqrt[5]{x^3 \\cdot y^2}}"
        },
        {
          "letra": "c)",
          "expresion": "\\sqrt{18} - 3\\sqrt{50} + 2\\sqrt{72} - \\sqrt{8}"
        },
        {
          "letra": "d)",
          "expresion": "2\\sqrt[3]{54} - \\sqrt[3]{16} + 3\\sqrt[3]{250}"
        },
        {
          "letra": "e)",
          "expresion": "\\dfrac{\\sqrt[3]{16a^4 b} \\cdot \\sqrt[4]{8a^3 b^5}}{\\sqrt[6]{32a^5 b^2}}"
        },
        {
          "letra": "f)",
          "expresion": "3\\sqrt[3]{\\dfrac{16}{27}} - \\dfrac{1}{2}\\sqrt[3]{128} + 5\\sqrt[3]{\\dfrac{2}{125}}"
        }
      ],
      "enunciado": "Realiza las siguientes operaciones expresando el resultado en un único radical irreducible con factores simplificados (extrae todos los factores que puedas): $$a)\\; \\sqrt[3]{a^2} \\cdot \\sqrt[4]{a^3} \\cdot \\sqrt[6]{a^5} \\qquad b)\\; \\dfrac{\\sqrt[3]{x^2 \\cdot y}}{\\sqrt[5]{x^3 \\cdot y^2}} \\qquad c)\\; \\sqrt{18} - 3\\sqrt{50} + 2\\sqrt{72} - \\sqrt{8}$$ $$d)\\; 2\\sqrt[3]{54} - \\sqrt[3]{16} + 3\\sqrt[3]{250} \\qquad e)\\; \\dfrac{\\sqrt[3]{16a^4 b} \\cdot \\sqrt[4]{8a^3 b^5}}{\\sqrt[6]{32a^5 b^2}} \\qquad f)\\; 3\\sqrt[3]{\\dfrac{16}{27}} - \\dfrac{1}{2}\\sqrt[3]{128} + 5\\sqrt[3]{\\dfrac{2}{125}}$$",
      "solucion": "a)\\; a^2 \\sqrt[4]{a}; \\quad b)\\; \\sqrt[15]{\\dfrac{x}{y}}; \\quad c)\\; -2\\sqrt{2}; \\quad d)\\; 19\\sqrt[3]{2}; \\quad e)\\; 2ab\\sqrt[4]{2ab}; \\quad f)\\; \\sqrt[3]{2}"
    },
    {
      "id": "P-09",
      "caso": "Radicales Anidados con Factores Intermedios (Ejercicio 9 de la Hoja)",
      "apartados_count": 4,
      "instruccion": "Reduce a una única raíz o a una potencia de exponente fraccionario irreducible:",
      "apartados": [
        {
          "letra": "a)",
          "expresion": "\\sqrt{x \\cdot \\sqrt[3]{x^2 \\cdot \\sqrt{x}}}"
        },
        {
          "letra": "b)",
          "expresion": "\\sqrt{\\dfrac{\\sqrt[4]{a^3}}{\\sqrt[3]{b}}} \\cdot \\sqrt[3]{\\dfrac{\\sqrt{b^2}}{\\sqrt{a}}}"
        },
        {
          "letra": "c)",
          "expresion": "\\sqrt{2 \\cdot \\sqrt[3]{4 \\cdot \\sqrt{8}}}"
        },
        {
          "letra": "d)",
          "expresion": "\\sqrt[3]{x^2 \\cdot \\sqrt[4]{x \\cdot \\sqrt{x^3}}}"
        }
      ],
      "enunciado": "Reduce a una única raíz o a una potencia de exponente fraccionario irreducible: $$a)\\; \\sqrt{x \\cdot \\sqrt[3]{x^2 \\cdot \\sqrt{x}}} \\qquad b)\\; \\sqrt{\\dfrac{\\sqrt[4]{a^3}}{\\sqrt[3]{b}}} \\cdot \\sqrt[3]{\\dfrac{\\sqrt{b^2}}{\\sqrt{a}}} \\qquad c)\\; \\sqrt{2 \\cdot \\sqrt[3]{4 \\cdot \\sqrt{8}}} \\qquad d)\\; \\sqrt[3]{x^2 \\cdot \\sqrt[4]{x \\cdot \\sqrt{x^3}}}$$",
      "solucion": "a)\\; \\sqrt[12]{x^{11}}; \\quad b)\\; \\sqrt[24]{a^{14} b^{13}}; \\quad c)\\; \\sqrt[12]{2^{11}}; \\quad d)\\; \\sqrt[24]{x^{23}}"
    },
    {
      "id": "P-10",
      "caso": "Técnicas de Racionalización (Ejercicio 10 de la Hoja)",
      "apartados_count": 9,
      "instruccion": "Racionaliza los denominadores y simplifica al máximo las expresiones resultantes:",
      "apartados": [
        {
          "letra": "a)",
          "expresion": "\\dfrac{6}{\\sqrt{3}} \\quad\\text{y}\\quad \\dfrac{10}{\\sqrt[5]{4^2}}"
        },
        {
          "letra": "b)",
          "expresion": "\\dfrac{6}{\\sqrt[3]{9}}"
        },
        {
          "letra": "c)",
          "expresion": "\\dfrac{10}{\\sqrt[9]{8^5}}"
        },
        {
          "letra": "d)",
          "expresion": "\\dfrac{4}{\\sqrt{7} - \\sqrt{3}}"
        },
        {
          "letra": "e)",
          "expresion": "\\dfrac{6}{3\\sqrt{2} - 2\\sqrt{3}}"
        },
        {
          "letra": "f)",
          "expresion": "\\dfrac{\\sqrt{5} + \\sqrt{2}}{\\sqrt{5} - \\sqrt{2}}"
        },
        {
          "letra": "g)",
          "expresion": "\\dfrac{2\\sqrt{3} - \\sqrt{2}}{\\sqrt{3} + 2\\sqrt{2}}"
        },
        {
          "letra": "h)",
          "expresion": "\\dfrac{4}{\\sqrt[3]{5} - \\sqrt[3]{3}}"
        },
        {
          "letra": "i)",
          "expresion": "\\dfrac{10}{\\sqrt[3]{3} + \\sqrt[3]{2}}"
        }
      ],
      "enunciado": "Racionaliza los denominadores y simplifica al máximo las expresiones resultantes: $$a)\\; \\dfrac{6}{\\sqrt{3}} \\;\\text{y}\\; \\dfrac{10}{\\sqrt[5]{4^2}} \\qquad b)\\; \\dfrac{6}{\\sqrt[3]{9}} \\qquad c)\\; \\dfrac{10}{\\sqrt[9]{8^5}}$$ $$d)\\; \\dfrac{4}{\\sqrt{7} - \\sqrt{3}} \\qquad e)\\; \\dfrac{6}{3\\sqrt{2} - 2\\sqrt{3}} \\qquad f)\\; \\dfrac{\\sqrt{5} + \\sqrt{2}}{\\sqrt{5} - \\sqrt{2}}$$ $$g)\\; \\dfrac{2\\sqrt{3} - \\sqrt{2}}{\\sqrt{3} + 2\\sqrt{2}} \\qquad h)\\; \\dfrac{4}{\\sqrt[3]{5} - \\sqrt[3]{3}} \\qquad i)\\; \\dfrac{10}{\\sqrt[3]{3} + \\sqrt[3]{2}}$$",
      "solucion": "a)\\; 2\\sqrt{3} \\;\\text{y}\\; 5\\sqrt[5]{2}; \\quad b)\\; 2\\sqrt[3]{3}; \\quad c)\\; 5\\sqrt[3]{2}; \\quad d)\\; \\sqrt{7} + \\sqrt{3}; \\quad e)\\; 3\\sqrt{2} + 2\\sqrt{3}; \\quad f)\\; \\dfrac{7 + 2\\sqrt{10}}{3}; \\quad g)\\; \\sqrt{6} - 2; \\quad h)\\; 2(\\sqrt[3]{25} + \\sqrt[3]{15} + \\sqrt[3]{9}); \\quad i)\\; 2(\\sqrt[3]{9} - \\sqrt[3]{6} + \\sqrt[3]{4})"
    },
    {
      "id": "P-11",
      "caso": "Identidades Notables y Factorización Inversa (Ejercicio 11 de la Hoja)",
      "apartados_count": 5,
      "instruccion": "Desarrolla, simplifica o factoriza aplicando las identidades notables fundamentales:",
      "apartados": [
        {
          "letra": "a)",
          "expresion": "(2x - 3y)^2 - (2x + 3y)(2x - 3y)"
        },
        {
          "letra": "b)",
          "expresion": "(2x - 3)^3 \\quad\\text{y}\\quad (x^2 + 2)^3"
        },
        {
          "letra": "c)",
          "expresion": "4x^2 - 12x + 9"
        },
        {
          "letra": "d)",
          "expresion": "25x^4 - 49y^2"
        },
        {
          "letra": "e)",
          "expresion": "8x^3 - 27 \\quad\\text{y}\\quad x^3 + 64"
        }
      ],
      "enunciado": "Desarrolla, simplifica o factoriza aplicando las identidades notables fundamentales: $$a)\\; (2x - 3y)^2 - (2x + 3y)(2x - 3y) \\qquad b)\\; (2x - 3)^3 \\;\\text{y}\\; (x^2 + 2)^3$$ $$c)\\; 4x^2 - 12x + 9 \\quad\\text{(factoriza)} \\qquad d)\\; 25x^4 - 49y^2 \\quad\\text{(factoriza)}$$ $$e)\\; 8x^3 - 27 \\;\\text{y}\\; x^3 + 64 \\quad\\text{(factoriza sumas/diferencias de cubos)}$$",
      "solucion": "a)\\; 6y(3y - 2x) = 18y^2 - 12xy; \\quad b)\\; 8x^3 - 36x^2 + 54x - 27 \\;\\text{y}\\; x^6 + 6x^4 + 12x^2 + 8; \\quad c)\\; (2x - 3)^2; \\quad d)\\; (5x^2 - 7y)(5x^2 + 7y); \\quad e)\\; (2x - 3)(4x^2 + 6x + 9) \\;\\text{y}\\; (x + 4)(x^2 - 4x + 16)"
    }
  ],
  "comprueba": [
    {
      "id": "c01",
      "bloque": "1. Números Reales, Intervalos y Valor Absoluto",
      "texto": "Sé clasificar cualquier número real en su conjunto más restrictivo ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}$) justificando su cadena de pertenencia e inclusión ($\\in, \\subset$), distinguiendo cuándo un número pertenece a $\\mathbb{C} \\setminus \\mathbb{R}$ (como $\\sqrt{-16}$)."
    },
    {
      "id": "c02",
      "bloque": "1. Números Reales, Intervalos y Valor Absoluto",
      "texto": "Sé representar intervalos y semirrectas en la recta real y calcular su unión, intersección y diferencia aplicando la Regla del Extremo Compartido para decidir con rigor si un extremo frontera es abierto o cerrado."
    },
    {
      "id": "c03",
      "bloque": "1. Números Reales, Intervalos y Valor Absoluto",
      "texto": "Sé calcular el complementario de cualquier intervalo o unión de semirrectas en $\\mathbb{R}$, determinando cuándo genera un intervalo acotado o el conjunto vacío ($\\emptyset$)."
    },
    {
      "id": "c04",
      "bloque": "1. Números Reales, Intervalos y Valor Absoluto",
      "texto": "Conozco la definición analítica de valor absoluto como función a trozos y su interpretación geométrica como distancia al origen ($|x| = d(x, 0)$) o entre dos puntos ($|x - c| = d(x, c)$)."
    },
    {
      "id": "c05",
      "bloque": "1. Números Reales, Intervalos y Valor Absoluto",
      "texto": "Sé resolver ecuaciones e inecuaciones con valor absoluto de forma general, tanto lineales (del tipo $|2x - 3| < 5$, $|ax + b| \\le r$ o $|ax + b| \\ge r$) como con expresiones algebraicas fraccionarias (del tipo $\\left|\\frac{ax+b}{cx+d}\\right| \\le k$ o con denominadores), aplicando la equivalencia por ramas o el estudio de signos, verificando las restricciones de dominio ($cx+d \\ne 0$) y detectando casos imposibles (como $|f(x)| \\le -k$)."
    },
    {
      "id": "c06",
      "bloque": "2. Potencias y Radicales",
      "texto": "Domino con soltura las propiedades de las potencias enteras y fraccionarias, evitando la trampa de signos entre $(-a)^n$ y $-a^n$ y aplicando correctamente exponentes negativos y nulos."
    },
    {
      "id": "c07",
      "bloque": "2. Potencias y Radicales",
      "texto": "Sé expresar cualquier radical como potencia de exponente fraccionario ($\\sqrt[n]{a^m} = a^{m/n}$) y operar raíces de índices distintos hallando el mínimo común índice ($k = \\text{mcm}(n, m)$)."
    },
    {
      "id": "c08",
      "bloque": "2. Potencias y Radicales",
      "texto": "Sé extraer e introducir factores en radicales sucesivos y operar productos, cocientes y potencias con raíces de distinto índice, reduciendo expresiones complejas de radicales anidados con factores intermedios (del tipo $\\sqrt{x \\sqrt[3]{x^2 \\sqrt{x}}}$ o $\\sqrt[4]{\\frac{a^3}{\\sqrt{b}}} \\cdot \\sqrt[3]{\\frac{b^2}{\\sqrt{a}}}$) a una única raíz o potencia de exponente fraccionario irreducible."
    },
    {
      "id": "c09",
      "bloque": "2. Potencias y Radicales",
      "texto": "Sé sumar y restar radicales transformándolos previamente en radicales semejantes mediante extracción de factores (ej. $\\sqrt{50} - 2\\sqrt{18} + \\sqrt{8}$)."
    },
    {
      "id": "c10",
      "bloque": "2. Potencias y Radicales",
      "texto": "Domino las tres técnicas esenciales de racionalización: 1) Tipo I: denominador con raíz simple cuadrada o enésima ($\\frac{A}{\\sqrt[n]{b^k}}$ multiplicando por $\\sqrt[n]{b^{n-k}}$ para completar el exponente $n$); 2) Tipo II: denominador con binomio de raíces cuadradas ($\\frac{A}{\\sqrt{a} \\pm \\sqrt{b}}$ o $\\frac{A}{a \\pm \\sqrt{b}}$ mediante binomio conjugado); 3) Tipo III: denominador con raíces cúbicas ($\\frac{A}{\\sqrt[3]{a} \\pm \\sqrt[3]{b}}$ mediante la identidad de suma o diferencia de cubos $(u \\mp v)(u^2 \\pm uv + v^2) = u^3 \\mp v^3$)."
    },
    {
      "id": "c11",
      "bloque": "3. Identidades Notables y Expresiones Algebraicas",
      "texto": "Domino instantáneamente las identidades notables fundamentales: cuadrado de una suma $(a+b)^2$, cuadrado de una diferencia $(a-b)^2$, suma por diferencia $(a+b)(a-b) = a^2 - b^2$ y el cubo de un binomio $(a \\pm b)^3$."
    },
    {
      "id": "c12",
      "bloque": "3. Identidades Notables y Expresiones Algebraicas",
      "texto": "Reconozco patrones de identidades notables hacia atrás (factorización directa), evitando el error grave de asumir que $(a+b)^2 = a^2 + b^2$ o que $\\sqrt{a^2+b^2} = a+b$."
    },
    {
      "id": "c13",
      "bloque": "4. Logaritmos y sus Propiedades",
      "texto": "Conozco la definición formal de logaritmo ($\\log_b(a) = c \\iff b^c = a$) y sus condiciones estrictas de existencia ($b > 0, b \\ne 1, a > 0$)."
    },
    {
      "id": "c14",
      "bloque": "4. Logaritmos y sus Propiedades",
      "texto": "Aplico con rigor las propiedades: logaritmo de un producto (suma), de un cociente (resta), de una potencia (producto por exponente) y de una raíz (división por el índice)."
    },
    {
      "id": "c15",
      "bloque": "4. Logaritmos y sus Propiedades",
      "texto": "Sé utilizar la fórmula del cambio de base ($\\log_b(a) = \\frac{\\log_c(a)}{\\log_c(b)}$) y calcular logaritmos desconocidos a partir de datos conocidos descomponiendo en factores primos (incluido el truco $\\log(5) = \\log(10/2) = 1 - \\log(2)$)."
    },
    {
      "id": "c16",
      "bloque": "4. Logaritmos y sus Propiedades",
      "texto": "Evito las trampas clásicas de logaritmos: no aplico falsas distributivas ($\\log(A+B) \\ne \\log A + \\log B$) ni confundo el logaritmo de un cociente con el cociente de logaritmos."
    },
    {
      "id": "c17",
      "bloque": "5. Polinomios, Ruffini y Factorización Completa",
      "texto": "Sé aplicar el Teorema del Resto y del Factor para calcular restos instantáneos sin dividir, certificar si un valor es raíz de $P(x)$, y hallar parámetros desconocidos $k$ para que una división sea exacta."
    },
    {
      "id": "c18",
      "bloque": "5. Polinomios, Ruffini y Factorización Completa",
      "texto": "Sé aplicar la Regla de Ruffini buscando posibles raíces enteras entre los divisores del término independiente."
    },
    {
      "id": "c19",
      "bloque": "5. Polinomios, Ruffini y Factorización Completa",
      "texto": "Sé realizar la factorización completa de un polinomio en $\\mathbb{R}$ combinando: 1) sacar factor común, 2) identidades notables, 3) Ruffini y 4) fórmula cuadrática, identificando factores de 2.º grado irreducibles ($\\Delta < 0$) y sin olvidar nunca el coeficiente principal $a_n$."
    },
    {
      "id": "c20",
      "bloque": "6. Fracciones Algebraicas",
      "texto": "Sé determinar el dominio de existencia de una fracción algebraica identificando e indicando siempre los valores reales que anulan el denominador."
    },
    {
      "id": "c21",
      "bloque": "6. Fracciones Algebraicas",
      "texto": "Sé simplificar fracciones algebraicas factorizando previamente numerador y denominador, cancelando únicamente factores completos y nunca sumandos sueltos."
    },
    {
      "id": "c22",
      "bloque": "6. Fracciones Algebraicas",
      "texto": "Sé sumar y restar fracciones algebraicas reduciendo a común denominador mediante el cálculo del mínimo común múltiplo ($\\text{mcm}$) de los denominadores factorizados."
    },
    {
      "id": "c23",
      "bloque": "6. Fracciones Algebraicas",
      "texto": "Sé multiplicar y dividir fracciones algebraicas factorizando todos los términos antes de operar, para simplificar al máximo el resultado final."
    },
    {
      "id": "c24",
      "bloque": "7. Números Combinatorios y Binomio de Newton",
      "texto": "Conozco la definición de número combinatorio $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$, sus propiedades de simetría ($\\binom{n}{k} = \\binom{n}{n-k}$) y su relación con el Triángulo de Tartaglia."
    },
    {
      "id": "c25",
      "bloque": "7. Números Combinatorios y Binomio de Newton",
      "texto": "Sé desarrollar cualquier potencia de un binomio $(a \\pm b)^n$ aplicando el Teorema del Binomio de Newton con sus signos alternados o positivos."
    },
    {
      "id": "c26",
      "bloque": "7. Números Combinatorios y Binomio de Newton",
      "texto": "Sé calcular un término específico o el término independiente de un desarrollo $(a \\pm b)^n$ aplicando directamente la fórmula del término general $T_{k+1} = \\binom{n}{k} a^{n-k} b^k$ sin necesidad de desarrollar todo el binomio."
    }
  ]
};
