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
    "fecha": "Martes 10 de Noviembre de 2026",
    "tema_id": 2,
    "tema_titulo": "Tema 2: Ecuaciones, Números Complejos y Sistemas",
    "titulo_sesion": "Sesión 9: Problemas con Sistemas de Ecuaciones Lineales ($2 \\times 2$): Solución Única (SCD), Infinitas Soluciones (SCI) y Sin Solución (SI)",
    "referencia_apuntes": "Bloque 4: Puntos 4.1 a 4.4 y 4.8 (Págs. 22-24 y 29)",
    "mision_semanal": "Repasar los 5 problemas de Sistemas Lineales $2 \\times 2$ vistos en pizarra y completar la Tarea 3 de Classroom (Problemas 1 al 12).",
    "trabajo_semanal_pendiente": "Pasar a limpio los 5 problemas de Sistemas Lineales $2 \\times 2$ en tu libreta y entregar la Tarea 3 en un único archivo PDF antes del jueves 12 a las 20:00 h.",
    "ejercicios_vistos": [
      {
        "numero": 1,
        "titulo": "Problema 1: Alquiler de tablas de paddle surf y punto de equilibrio (SCD por igualación)",
        "referencia": "Bloque 4: Puntos 4.1, 4.3 y 4.4 (Págs. 22-24, análogo a Ejemplo 4.1 y Problema 17)",
        "enunciado": "Una escuela náutica del Mar Menor alquila tablas de paddle surf cobrando una tarifa fija inicial por el seguro y el chaleco más un precio fijo por cada hora de navegación. Ayer un grupo alquiló una tabla durante $2\\text{ horas}$ y pagó $19\\text{ €}$; hoy otro grupo ha navegado durante $5\\text{ horas}$ y ha pagado $37\\text{ €}$.",
        "preguntas": [
          {
            "letra": "a)",
            "texto": "Llamando $x$ a la tarifa fija inicial (en €) e $y$ al precio por hora (en €/h), plantea y resuelve un sistema lineal $2 \\times 2$ para hallar ambos importes."
          },
          {
            "letra": "b)",
            "texto": "Una segunda escuela ofrece las tablas sin tarifa fija inicial, cobrando directamente a $9{,}50\\text{ €/h}$. ¿Con cuántas horas de alquiler cuestan lo mismo ambas escuelas y a partir de cuántas horas compensa elegir la primera?"
          }
        ],
        "instruccion": "Plantea el sistema lineal, halla la tarifa fija y por hora, y compara ambas escuelas por igualación:",
        "apartados": [
          {
            "letra": "a)",
            "texto": "<strong>Sistema y resolución (SCD):</strong> $\\begin{cases} x + 2y = 19 \\\\ x + 5y = 37 \\end{cases} \\implies 3y = 18 \\implies \\boldsymbol{y = 6\\text{ €/h}}$ (precio por hora) y $\\boldsymbol{x = 7\\text{ €}}$ (tarifa fija)."
          },
          {
            "letra": "b)",
            "texto": "<strong>Punto de corte (igualación de costes para $t$ horas):</strong> $7 + 6t = 9{,}5t \\implies 3{,}5t = 7 \\implies \\boldsymbol{t = 2\\text{ horas}}$ (ambas cuestan $19\\text{ €}$, punto $P(2, 19)$). Para <strong>más de 2 horas</strong> sale más barata la primera escuela."
          }
        ],
        "idea_clave": "Cada tarifa lineal con coste fijo $x$ y coste por hora $y$ es una recta en el plano. Cuando dos rectas tienen distinta pendiente (distinto precio por hora), forman un Sistema Compatible Determinado (SCD) y se cortan en un único punto $(t_0, C_0)$ que marca la frontera exacta donde una tarifa pasa a superar a la otra."
      },
      {
        "numero": 2,
        "titulo": "Problema 2: Mezcla de cafés de especialidad (SCD por sustitución)",
        "referencia": "Bloque 4: Puntos 4.3 y 4.4 (Págs. 23-24, sistemas lineales y problemas de mezclas)",
        "enunciado": "Una cafetería quiere preparar un lote de $10\\text{ kg}$ de café mezclando grano natural de Colombia (que cuesta a $14\\text{ €/kg}$) y grano de Brasil (a $9\\text{ €/kg}$), de manera que el precio medio de la mezcla resultante sea exactamente de $11\\text{ €/kg}$.",
        "preguntas": [
          {
            "letra": "a)",
            "texto": "Llamando $x$ a los kilos de café de Colombia e $y$ a los kilos de café de Brasil, plantea las dos ecuaciones del sistema (peso total y valor total de la mezcla) y resuélvelo por sustitución."
          },
          {
            "letra": "b)",
            "texto": "Interpreta geométricamente las dos ecuaciones en el plano indicando las coordenadas del punto de corte."
          }
        ],
        "instruccion": "Plantea el sistema de peso total y coste total, y resuélvelo despejando en la ecuación de coeficiente 1:",
        "apartados": [
          {
            "letra": "a)",
            "texto": "<strong>Planteamiento y sustitución ($y = 10 - x$):</strong> $\\begin{cases} x + y = 10 \\\\ 14x + 9y = 110 \\end{cases} \\implies 14x + 9(10 - x) = 110 \\iff 5x = 20$."
          },
          {
            "letra": "b)",
            "texto": "<strong>Solución única (SCD):</strong> $\\boldsymbol{x = 4\\text{ kg de Colombia}}$ e $\\boldsymbol{y = 6\\text{ kg de Brasil}}$. Geométricamente son dos <strong>rectas secantes</strong> que se cortan en el único punto $\\boldsymbol{P(4, 6)}$."
          }
        ],
        "idea_clave": "En los problemas de mezclas, la segunda ecuación nunca suma los precios por kilo sueltos ($14 + 9 \\neq 11$), sino el coste total en euros de cada ingrediente: $(\\text{kg de A}\\cdot\\text{precio de A}) + (\\text{kg de B}\\cdot\\text{precio de B}) = (\\text{kg totales}\\cdot\\text{precio medio})$. Como en la primera ecuación las incógnitas tienen coeficiente 1, el método de sustitución evita cualquier fracción."
      },
      {
        "numero": 3,
        "titulo": "Problema 3: Navegación a favor y en contra de la corriente (SCD por reducción)",
        "referencia": "Bloque 4: Puntos 4.3 y 4.4 (Págs. 23-24, análogo a Ejemplo 4.2 por reducción)",
        "enunciado": "Una embarcación turística recorre un tramo recto de $24\\text{ km}$ por un río. A la ida navega a favor de la corriente y completa el recorrido en $2\\text{ horas}$; a la vuelta navega en contra de la misma corriente y tarda $3\\text{ horas}$ en regresar al punto de partida.",
        "preguntas": [
          {
            "letra": "a)",
            "texto": "Llamando $x$ a la velocidad propia del barco en agua tranquila e $y$ a la velocidad de la corriente del río (en $\\text{km/h}$), calcula la velocidad real a la ida y a la vuelta y plantea el sistema lineal."
          },
          {
            "letra": "b)",
            "texto": "Resuelve el sistema por el método de reducción y explica por qué es la vía más directa en este problema."
          }
        ],
        "instruccion": "Plantea el sistema de velocidades a la ida y a la vuelta y resuélvelo sumando ambas ecuaciones:",
        "apartados": [
          {
            "letra": "a)",
            "texto": "<strong>Velocidades ($v = e/t$):</strong> A la ida $x + y = \\dfrac{24}{2} = 12\\text{ km/h}$; a la vuelta $x - y = \\dfrac{24}{3} = 8\\text{ km/h} \\implies \\begin{cases} x + y = 12 \\\\ x - y = 8 \\end{cases}$."
          },
          {
            "letra": "b)",
            "texto": "<strong>Reducción directa (sumando filas):</strong> $2x = 20 \\implies \\boldsymbol{x = 10\\text{ km/h}}$ (velocidad del barco) y $\\boldsymbol{y = 2\\text{ km/h}}$ (velocidad de la corriente)."
          }
        ],
        "idea_clave": "Cuando una corriente o el viento actúa a favor ($x + y$) y en contra ($x - y$), la incógnita $y$ aparece automáticamente con coeficientes opuestos ($+1$ y $-1$). Sumando ambas ecuaciones por reducción desaparece la $y$ en un solo paso sin necesidad de despejar ni multiplicar filas."
      },
      {
        "numero": 4,
        "titulo": "Problema 4: Las cajas de envío de la tienda online (SCI — Infinitas soluciones)",
        "referencia": "Bloque 4: Puntos 4.1 y 4.4 (Págs. 22 y 24, rectas coincidentes e infinitas soluciones)",
        "enunciado": "Una tienda de informática prepara un envío de $18\\text{ tarjetas gráficas}$ repartidas en cajas pequeñas (con capacidad para $2\\text{ tarjetas}$ cada una) y cajas grandes (con capacidad para $3\\text{ tarjetas}$ cada una), llenando todas las cajas al máximo. En la nota del almacén figura además que el cuádruple de cajas pequeñas más el séxtuple de cajas grandes es igual a $36$.",
        "preguntas": [
          {
            "letra": "a)",
            "texto": "Llamando $x$ al número de cajas pequeñas e $y$ al de cajas grandes, plantea el sistema lineal, resuélvelo y clasifícalo. ¿Qué posición tienen las dos rectas en el plano?"
          },
          {
            "letra": "b)",
            "texto": "Expresa la solución general con un parámetro y escribe todas las combinaciones reales posibles sabiendo que el número de cajas debe ser entero y no negativo ($x, y \\ge 0$)."
          }
        ],
        "instruccion": "Plantea el sistema, comprueba qué ocurre al reducir las ecuaciones y halla las soluciones enteras no negativas:",
        "apartados": [
          {
            "letra": "a)",
            "texto": "<strong>Planteamiento y clasificación:</strong> $\\begin{cases} 2x + 3y = 18 \\\\ 4x + 6y = 36 \\end{cases} \\xrightarrow{F_2 - 2F_1} \\boldsymbol{0 = 0}$. Es un <strong>Sistema Compatible Indeterminado (SCI)</strong>: la 2.ª ecuación es el doble de la 1.ª ($\\frac{2}{4} = \\frac{3}{6} = \\frac{18}{36}$) y representan <strong>la misma recta (rectas coincidentes)</strong> con infinitos puntos."
          },
          {
            "letra": "b)",
            "texto": "<strong>Parámetro ($y = \\lambda$) y soluciones reales enteras:</strong> $x = 9 - \\dfrac{3}{2}\\lambda$. Para que $x, y \\ge 0$ sean números enteros de cajas, $\\lambda$ debe ser par entre $0$ y $6$: $\\boldsymbol{(x, y) \\in \\{(9, 0), \\; (6, 2), \\; (3, 4), \\; (0, 6)\\}}$ (4 formas posibles)."
          }
        ],
        "idea_clave": "Cuando al resolver un sistema desaparecen las dos incógnitas y queda una igualdad cierta ($0 = 0$), no significa que no haya solución, sino todo lo contrario: la segunda condición no aportaba información nueva (rectas coincidentes, SCI). En el plano real hay infinitos puntos sobre la recta, pero al exigir que las incógnitas sean cajas enteras y positivas solo sobreviven 4 parejas exactas."
      },
      {
        "numero": 5,
        "titulo": "Problema 5: El presupuesto imposible del viaje de estudios (SI — Sin solución)",
        "referencia": "Bloque 4: Puntos 4.1 y 4.4 (Págs. 22 y 24, rectas paralelas y sistema incompatible)",
        "enunciado": "Para recaudar fondos para el viaje de estudios, dos comisiones de alumnos encargan lotes de camisetas y lotes de sudaderas al mismo proveedor (a precio fijo sin descuentos). La comisión A encarga $2\\text{ lotes de camisetas}$ y $3\\text{ de sudaderas}$ y paga $130\\text{ €}$. La comisión B encarga $4\\text{ lotes de camisetas}$ y $6\\text{ de sudaderas}$, y apunta en la pizarra que su factura ha sido de $250\\text{ €}$.",
        "preguntas": [
          {
            "letra": "a)",
            "texto": "Llamando $x$ al precio de un lote de camisetas e $y$ al de un lote de sudaderas, plantea el sistema, intenta resolverlo y clasifícalo. ¿Cómo son geométricamente las dos rectas?"
          },
          {
            "letra": "b)",
            "texto": "Explica de forma razonada por qué la comisión B ha apuntado mal el importe y calcula cuánto debería haber pagado exactamente para que las cuentas cuadren."
          }
        ],
        "instruccion": "Plantea el sistema, analiza la contradicción algebraica y geométrica, y corrige el dato erróneo:",
        "apartados": [
          {
            "letra": "a)",
            "texto": "<strong>Planteamiento y clasificación:</strong> $\\begin{cases} 2x + 3y = 130 \\\\ 4x + 6y = 250 \\end{cases} \\xrightarrow{F_2 - 2F_1} \\boldsymbol{0 = -10\\text{ (imposible)}}$. Es un <strong>Sistema Incompatible (SI, sin solución)</strong>: $\\frac{2}{4} = \\frac{3}{6} \\neq \\frac{130}{250}$, por lo que en el plano son <strong>dos rectas paralelas</strong> que jamás se cortan."
          },
          {
            "letra": "b)",
            "texto": "<strong>Corrección del error:</strong> Como la comisión B encarga exactamente el doble de camisetas y el doble de sudaderas que la A, su factura tiene que ser obligatoriamente el doble: $2 \\cdot 130 = \\boldsymbol{260\\text{ €}}$ (en lugar de $250\\text{ €}$)."
          }
        ],
        "idea_clave": "Si al despejar o hacer reducción desaparecen las incógnitas y queda una igualdad falsa como $0 = -10$, el sistema es Incompatible (SI) y no tiene ninguna solución. Geométricamente las dos ecuaciones tienen la misma inclinación (pendiente $m = -2/3$) pero distinta altura, formando dos rectas paralelas separadas."
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
      "sesiones_impartidas": 9,
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
