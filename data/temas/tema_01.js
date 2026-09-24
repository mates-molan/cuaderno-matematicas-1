// =========================================================================
// DATOS DEL TEMA 1: HERRAMIENTAS DEL ÁLGEBRA
// =========================================================================
window.TEMAS_DATA = window.TEMAS_DATA || {};
window.TEMAS_DATA[1] = {
  "id": 1,
  "titulo": "Tema 1: Herramientas del Álgebra",
  "evaluacion": "1.ª Evaluación",
  "sesiones_impartidas": 6,
  "apuntes_pdf": "pdf/Apuntes_Tema1_Herramientas_del_Algebra_1Bach.pdf",
  "ejercicios_pdf": "pdf/Ficha_Tema1_Herramientas_del_Algebra_1Bach.pdf",
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
      "numero": 6,
      "fecha": "Viernes 25 de Septiembre de 2026",
      "titulo": "Valor Absoluto: Funciones a Trozos e Inecuaciones Racionales",
      "ejercicios": [
        {
          "numero": 9,
          "titulo": "Valor Absoluto: Funciones a Trozos e Inecuaciones Racionales",
          "referencia": "Puntos 1.4 y 1.5 (Págs. 5-8)",
          "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Dos claves para no dudar con el valor absoluto:</strong><br>• <strong>Para escribir a trozos:</strong> Las barras solo hacen una cosa: si lo de dentro es positivo o cero, lo dejan tal cual; si es negativo, le dan la vuelta al signo. Para saber dónde cambia, halla su raíz (dónde se hace cero) y prueba el signo a cada lado. Si hay varios valores absolutos, coloca sus raíces en la recta real y analiza cada tramo por separado (¡ojo a los paréntesis si hay un signo menos delante!).<br>• <strong>Para inecuaciones:</strong> Piensa siempre en distancias sobre la recta. Si la distancia debe ser grande ($\\ge$), te alejas hacia los dos extremos exteriores (unión de semirrectas hacia el infinito). Y si aparecen fracciones, recuerda la regla de oro: ningún denominador puede anularse jamás (descarta antes de nada los valores prohibidos).</div></div>Expresa como función a trozos o resuelve en $\\mathbb{R}$ según corresponda:",
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
              "expresion": "\\left|\\dfrac{3x + 2}{-x - 4}\\right| \\le 2 \\quad (x \\ne -4) \\iff |3x + 2| \\le 2|x + 4| \\iff x \\in [-2, 6]"
            }
          ],
          "idea_clave": "El valor absoluto cambia de signo en sus raíces: ubícalas en la recta para estudiar cada intervalo. En inecuaciones, 'menor o igual' confina en el centro y 'mayor o igual' abre hacia los extremos; en fracciones, vigila siempre que el denominador no se anule."
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
      "estado": "actual",
      "meta_semanal": "Dominar el valor absoluto (definición analítica a trozos e inecuaciones de distancias) y la simplificación de potencias con exponentes enteros y fraccionarios.",
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
        },
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
        }
      ]
    }
  ],
  "ejercicios_semana": [
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
    },
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
      "texto": "Aplico con rigor las propiedades operativas: logaritmo de un producto (suma), de un cociente (resta), de una potencia (producto por exponente) y de una raíz (división por el índice)."
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
