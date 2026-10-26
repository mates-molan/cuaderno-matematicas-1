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
    "existe": true,
    "tema_id": 1,
    "test_id": "Examen-01",
    "titulo": "Examen Tema 1: Herramientas del Álgebra",
    "fecha": "Lunes 26 de Octubre de 2026",
    "estado": "solucionario_disponible",
    "pdf_examen": "pdf/Examen_Tema1_Herramientas_del_Algebra_1Bach.pdf",
    "pdf_solucionario": "pdf/Examen_Tema1_Herramientas_del_Algebra_1Bach_Solucionario.pdf",
    "aviso": "¡Examen Oficial del Tema 1 y su Solucionario resuelto paso a paso disponibles!"
  },
  "ultima_clase": {
    "fecha": "Lunes 26 de Octubre de 2026",
    "tema_id": 1,
    "tema_titulo": "Tema 1: Herramientas del Álgebra",
    "titulo_sesion": "Sesión 20: Examen Oficial del Tema 1 (Enunciado y Solucionario Resuelto)",
    "referencia_apuntes": "Todo el Tema 1 (Págs. 1-33) • Inicio del Tema 2 en la próxima sesión",
    "mision_semanal": "Revisar y contrastar tu Examen del Tema 1 con el solucionario oficial y traer descargados los Apuntes del Tema 2 (Ecuaciones, Complejos y Sistemas).",
    "trabajo_semanal_pendiente": "Revisar el solucionario del Examen del Tema 1 y preparar los Apuntes del Tema 2.",
    "ejercicios_vistos": [
      {
        "numero": 1,
        "titulo": "Ejercicio 1 del Examen (1,5 ptos): Valor Absoluto e Intervalos en la Recta Real",
        "referencia": "Puntos 1.2, 1.3 y 1.4 (Págs. 3-8)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">🎯</span><div class=\"nota-aula-content\"><strong>Claves de resolución del Ejercicio 1:</strong><br>• <strong>Apartado a):</strong> En $|2x - 1| \\le x + 4$, imponemos $x + 4 \\ge 0 \\implies x \\ge -4$ y desdoblamos en $-(x+4) \\le 2x - 1 \\le x + 4$. De $-x - 4 \\le 2x - 1$ obtenemos $x \\ge -1$, y de $2x - 1 \\le x + 4$ obtenemos $x \\le 5$. Intersecando: $S = [-1, 5]$.<br>• <strong>Apartado b):</strong> Dados $A = (-5, 2]$, $B = [-1, 6)$ y $C = (-\\infty, 0]$, al restar $B$ a $A$ retiramos desde $-1$ incluido en adelante, por lo que $A \\setminus B = (-5, -1)$ (abierto en $-1$ porque $-1 \\in B$). Como $C^c = (0, +\\infty)$, la unión queda en dos tramos disjuntos.</div></div>Resuelve razonadamente los dos apartados de intervalos y valor absoluto del examen:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "|2x - 1| \\le x + 4 \\iff -(x+4) \\le 2x - 1 \\le x + 4 \\implies \\begin{cases} 3x \\ge -3 \\implies x \\ge -1 \\\\ x \\le 5 \\end{cases} \\implies S = [-1, 5]"
          },
          {
            "letra": "b)",
            "expresion": "A = (-5, 2],\\; B = [-1, 6),\\; C = (-\\infty, 0] \\implies A \\setminus B = (-5, -1) \\text{ y } C^c = (0, +\\infty) \\implies (A \\setminus B) \\cup C^c = (-5, -1) \\cup (0, +\\infty)"
          }
        ],
        "idea_clave": "En la diferencia $A \\setminus B$, si el extremo frontera $-1$ pertenece al conjunto $B$ que sustraemos, desaparece del resultado y queda abierto: $(-5, -1)$."
      },
      {
        "numero": 2,
        "titulo": "Ejercicio 2 del Examen (2,5 ptos): Radicales, Conjugados y Racionalización Cúbica",
        "referencia": "Puntos 2.1 y 2.2 (Págs. 11-15)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">🎯</span><div class=\"nota-aula-content\"><strong>Claves de resolución del Ejercicio 2:</strong><br>• <strong>Apartado a):</strong> Factoriza radicandos en primos ($20=2^2\\cdot 5,\\; 45=3^2\\cdot 5,\\; 125=5^3,\\; 80=2^4\\cdot 5$) para extraer factores y cancelar $\\sqrt{5}$.<br>• <strong>Apartado b):</strong> El denominador común de los conjugados es $(2\\sqrt{5})^2 - (\\sqrt{2})^2 = 20 - 2 = 18$, y en el numerador $(a+b)^2 - (a-b)^2 = 4ab = 8\\sqrt{10}$.<br>• <strong>Apartado c):</strong> Aplica la suma de cubos $(\\sqrt[3]{a} + \\sqrt[3]{b})(\\sqrt[3]{a^2} - \\sqrt[3]{ab} + \\sqrt[3]{b^2}) = a + b = 7 + 3 = 10$.</div></div>Opera, simplifica al máximo y clasifica en los conjuntos numéricos cuando se indique:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "A = \\dfrac{3\\sqrt{20} - \\sqrt{45} + 2\\sqrt{125}}{\\sqrt{80}} = \\dfrac{6\\sqrt{5} - 3\\sqrt{5} + 10\\sqrt{5}}{4\\sqrt{5}} = \\dfrac{13\\sqrt{5}}{4\\sqrt{5}} = \\dfrac{13}{4} \\in \\mathbb{Q} \\subset \\mathbb{R} \\subset \\mathbb{C} \\quad (\\text{mcd}(13,4)=1)"
          },
          {
            "letra": "b)",
            "expresion": "B = \\left( \\dfrac{2\\sqrt{5} + \\sqrt{2}}{2\\sqrt{5} - \\sqrt{2}} - \\dfrac{2\\sqrt{5} - \\sqrt{2}}{2\\sqrt{5} + \\sqrt{2}} \\right) \\cdot \\dfrac{9\\sqrt{10}}{8} = \\dfrac{(22+4\\sqrt{10}) - (22-4\\sqrt{10})}{20 - 2} \\cdot \\dfrac{9\\sqrt{10}}{8} = \\dfrac{8\\sqrt{10}}{18} \\cdot \\dfrac{9\\sqrt{10}}{8} = 5 \\in \\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R} \\subset \\mathbb{C}"
          },
          {
            "letra": "c)",
            "expresion": "C = \\dfrac{10}{\\sqrt[3]{7} + \\sqrt[3]{3}} = \\dfrac{10(\\sqrt[3]{49} - \\sqrt[3]{21} + \\sqrt[3]{9})}{(\\sqrt[3]{7})^3 + (\\sqrt[3]{3})^3} = \\dfrac{10(\\sqrt[3]{49} - \\sqrt[3]{21} + \\sqrt[3]{9})}{7 + 3} = \\sqrt[3]{49} - \\sqrt[3]{21} + \\sqrt[3]{9}"
          }
        ],
        "idea_clave": "Para racionalizar una suma de raíces cúbicas $\\sqrt[3]{a} + \\sqrt[3]{b}$, multiplica numerador y denominador por $\\sqrt[3]{a^2} - \\sqrt[3]{ab} + \\sqrt[3]{b^2}$ para obtener $a + b$ en el denominador."
      },
      {
        "numero": 3,
        "titulo": "Ejercicio 3 del Examen (2 ptos): Cálculo Analítico de Logaritmos sin Calculadora",
        "referencia": "Puntos 3.1 y 3.2 (Págs. 17-20)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">🎯</span><div class=\"nota-aula-content\"><strong>Claves de resolución del Ejercicio 3:</strong><br>• <strong>Apartado a):</strong> Expresa todo en base $3$: $81\\cdot\\sqrt[3]{9} = 3^4 \\cdot 3^{2/3} = 3^{14/3}$ y $\\dfrac{\\sqrt{3}}{27} = \\dfrac{3^{1/2}}{3^3} = 3^{-5/2}$. Como la segunda base es $9 = 3^2$, $\\log_9(3^{-5/2}) = -\\dfrac{5}{4}$.<br>• <strong>Apartado b):</strong> Factoriza $90 = 9 \\cdot 10 = 3^2 \\cdot 10$ y usa que $\\log(10) = 1$.</div></div>Calcula el valor exacto sin utilizar calculadora:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "L = \\log_3\\left(81\\cdot\\sqrt[3]{9}\\right) - 2\\log_9\\left(\\dfrac{\\sqrt{3}}{27}\\right) = \\log_3\\left(3^{14/3}\\right) - 2\\log_{3^2}\\left(3^{-5/2}\\right) = \\dfrac{14}{3} - 2\\left(-\\dfrac{5}{4}\\right) = \\dfrac{14}{3} + \\dfrac{5}{2} = \\dfrac{43}{6}"
          },
          {
            "letra": "b)",
            "expresion": "\\text{Si } \\log(2)=a \\text{ y } \\log(3)=b: \\quad \\log(90) = \\log(3^2 \\cdot 10) = 2\\log(3) + \\log(10) = 2b + 1"
          }
        ],
        "idea_clave": "En $\\log(90)$, descomponer como $9 \\cdot 10 = 3^2 \\cdot 10$ evita pasos extra porque en base decimal $\\log(10) = 1$ directamente."
      },
      {
        "numero": 4,
        "titulo": "Ejercicio 4 del Examen (2 ptos): Operaciones con Fracciones Algebraicas y Dominio",
        "referencia": "Puntos 4.2 y 5.2 (Págs. 24-28)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">🎯</span><div class=\"nota-aula-content\"><strong>Claves de resolución del Ejercicio 4:</strong><br>• <strong>1.º Dominio:</strong> Se anulan denominadores cuando $x - 3 = 0$, $x + 3 = 0$ o $2x^2 + 12x = 2x(x+6) = 0 \\implies x \\notin \\{-6, -3, 0, 3\\}$.<br>• <strong>2.º Paréntesis:</strong> $(2x+1)(x+3) - (2x-1)(x-3) = (2x^2+7x+3) - (2x^2-7x+3) = 14x$.<br>• <strong>3.º Producto y simplificación:</strong> Se cancela $(x-3)(x+3) = x^2-9$ y se simplifica $\\dfrac{14x}{2x(x+6)} = \\dfrac{7}{x+6}$.</div></div>Efectúa, simplifica al máximo y explicita los valores excluidos del dominio:",
        "apartados": [
          {
            "letra": "Único",
            "expresion": "\\left( \\dfrac{2x + 1}{x - 3} - \\dfrac{2x - 1}{x + 3} \\right) \\cdot \\dfrac{x^2 - 9}{2x^2 + 12x} = \\dfrac{14x}{(x-3)(x+3)} \\cdot \\dfrac{(x-3)(x+3)}{2x(x+6)} = \\dfrac{7}{x + 6} \\quad \\forall x \\in \\mathbb{R} \\setminus \\{-6, -3, 0, 3\\}"
          }
        ],
        "idea_clave": "Antes de multiplicar polinomios, factoriza $x^2 - 9 = (x-3)(x+3)$ y $2x^2 + 12x = 2x(x+6)$: los factores comunes se cancelan limpios."
      },
      {
        "numero": 5,
        "titulo": "Ejercicio 5 del Examen (2 ptos): Binomio de Newton y Análisis del Término Independiente",
        "referencia": "Puntos 6.1, 6.2 y 6.3 (Págs. 30-33)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">🎯</span><div class=\"nota-aula-content\"><strong>Claves de resolución del Ejercicio 5:</strong><br>• <strong>Apartado a):</strong> Fila $n=5$ de Tartaglia ($1, 5, 10, 10, 5, 1$) alternando signos ($+ - + - + -$).<br>• <strong>Apartado b):</strong> En $T_{k+1} = (-1)^k\\binom{6}{k}2^{6-k}x^{12-3k}$, igualamos el exponente de $x$ a cero: $12 - 3k = 0 \\implies k = 4$ (quinto término $T_5$). Sustituyendo $k=4$, resulta $T_5 = 60 \\ne 40$.</div></div>Desarrolla el binomio y verifica analíticamente la afirmación sobre el término independiente:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "(2x - y^2)^5 = 32x^5 - 80x^4y^2 + 80x^3y^4 - 40x^2y^6 + 10xy^8 - y^{10}"
          },
          {
            "letra": "b)",
            "expresion": "\\text{En } \\left(2x^2 - \\dfrac{1}{x}\\right)^6: \\; T_{k+1} = (-1)^k\\binom{6}{k}2^{6-k}x^{12-3k} \\xrightarrow{12-3k=0} k=4 \\implies T_5 = (-1)^4\\binom{6}{4}2^2 = 15 \\cdot 4 = 60 \\ne 40 \\text{ (Perico se equivoca)}"
          }
        ],
        "idea_clave": "Al igualar a cero el exponente $12 - 3k = 0$, obtenemos $k = 4$, que corresponde al quinto término $T_5 = \\binom{6}{4}\\cdot 2^2 = 15 \\cdot 4 = 60$."
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
      "sesiones_impartidas": 0,
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
