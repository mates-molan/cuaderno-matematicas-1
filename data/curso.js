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
    "fecha": "Viernes 6 y Lunes 9 de Noviembre de 2026",
    "tema_id": 2,
    "tema_titulo": "Tema 2: Ecuaciones, Números Complejos y Sistemas",
    "titulo_sesion": "Sesiones 7 y 8: Introducción a los Números Complejos (Ecuaciones con Discriminante Negativo, Representación en el Plano, Operaciones y Parámetros)",
    "referencia_apuntes": "Bloque 3: Puntos 3.1 a 3.4 (Págs. 11-13)",
    "mision_semanal": "Repasar los ejercicios de Números Complejos vistos en pizarra y avanzar con la Hoja del Tema 2.",
    "trabajo_semanal_pendiente": "Pasar a limpio los 5 ejercicios de Números Complejos de la pizarra en tu libreta y practicar las operaciones en forma binómica.",
    "ejercicios_vistos": [
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
      "sesiones_impartidas": 8,
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
