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
    "tema_id": 2,
    "tarea_id": "Tarea-04",
    "titulo": "Tarea 4: Números Complejos (Problemas 13 al 16 de la Hoja)",
    "fecha_limite": "Lunes 16 de Noviembre de 2026 (20:00 h)",
    "estado": "cerrada",
    "pdf_tarea": "pdf/Ficha_Problemas_Tema2_Ecuaciones_Complejos_Sistemas_1Bach.pdf",
    "pdf_solucionario": null,
    "aviso": "Plazo de entrega finalizado el Lunes 16 de Noviembre a las 20:00 h."
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
    "fecha": "Jueves 19, Lunes 23 y Martes 24 de Noviembre de 2026",
    "tema_id": 2,
    "tema_titulo": "Tema 2: Ecuaciones, Números Complejos y Sistemas",
    "titulo_sesion": "Sesiones 14, 15 y 16: Sistemas de 3 Ecuaciones con 3 Incógnitas — El Método de Gauss (SCD, SCI y SI)",
    "referencia_apuntes": "Bloque 5: Método de Gauss (Págs. 30–35)",
    "mision_semanal": "Repasar los tres casos del Método de Gauss (SCD, SCI con parámetro $\\lambda$ y SI) y trabajar la Ficha de Repaso de Examen del Tema 2.",
    "trabajo_semanal_pendiente": "Pasar a limpio los 6 problemas del Método de Gauss en tu libreta y trabajar los ejercicios de la Ficha de Repaso de Examen.",
    "ejercicios_vistos": [
      {
        "numero": 1,
        "titulo": "Problema 1: La excursión de Biología en vehículos de alquiler (SCD y simplificación de filas)",
        "referencia": "Bloque 5: Puntos 5.2 y 5.3 (Págs. 30–32)",
        "enunciado": "El departamento de Biología contrata $22\\text{ vehículos}$ para transportar exactamente a $138\\text{ personas}$ en una salida de campo. Alquila coches de $4\\text{ plazas}$ ($50\\text{ €}$ cada uno), furgonetas de $7\\text{ plazas}$ ($90\\text{ €}$ cada una) y microbuses de $12\\text{ plazas}$ ($150\\text{ €}$ cada uno). Todos los vehículos van completos y la factura total asciende a $1740\\text{ €}$.",
        "preguntas": [
          {
            "letra": "a)",
            "texto": "Plantea el sistema de tres ecuaciones con tres incógnitas (definiendo antes qué representa cada incógnita y su significado real) y simplifica alguna ecuación si es posible."
          },
          {
            "letra": "b)",
            "texto": "Escálonalo por el Método de Gauss en forma de matriz ampliada, clasifica el sistema según la última fila y calcula cuántos vehículos de cada tipo se alquilan."
          }
        ],
        "instruccion": "Planteamiento, simplificación de filas, escalonamiento de Gauss, clasificación y comprobación:",
        "apartados": [
          {
            "letra": "a)",
            "texto": "<strong>Incógnitas y planteamiento ($x, y, z \\in \\mathbb{N}$):</strong> Llamamos $x$ al número de coches, $y$ al de furgonetas y $z$ al de microbuses: $\\begin{cases} x + y + z = 22 \\\\ 4x + 7y + 12z = 138 \\\\ 50x + 90y + 150z = 1740 \\xrightarrow{:10} 5x + 9y + 15z = 174 \\end{cases}$."
          },
          {
            "letra": "b)",
            "texto": "<strong>Escalonamiento de Gauss, clasificación (SCD) y sustitución regresiva:</strong><br>$\\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 22 \\\\ 4 & 7 & 12 & 138 \\\\ 5 & 9 & 15 & 174 \\end{array}\\right) \\xrightarrow{\\substack{F_2 - 4F_1 \\\\ F_3 - 5F_1}} \\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 22 \\\\ 0 & 3 & 8 & 50 \\\\ 0 & 4 & 10 & 64 \\end{array}\\right) \\xrightarrow{F_3 \\div 2} \\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 22 \\\\ 0 & 3 & 8 & 50 \\\\ 0 & 2 & 5 & 32 \\end{array}\\right) \\xrightarrow{3F_3 - 2F_2} \\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 22 \\\\ 0 & 3 & 8 & 50 \\\\ 0 & 0 & -1 & -4 \\end{array}\\right)$.<br>Última fila $-z = -4 \\implies z = 4$ (<strong>Sistema Compatible Determinado, SCD</strong>: solución única). Sustituyendo hacia atrás: $2y + 5(4) = 32 \\implies y = 6$ y $x = 22 - 6 - 4 = 12$. Solución: <strong>$12$ coches, $6$ furgonetas y $4$ microbuses</strong> (comprobación: $48+42+48=138$; $600+540+600=1740\\text{ €}$)."
          }
        ],
        "idea_clave": "En Gauss no estás obligado a multiplicar números gigantes: dividir toda una fila por un número distinto de cero (como $\\div 10$ al inicio o $\\div 2$ en medio del proceso) reduce los errores de cálculo a la mitad y deja intactas las soluciones."
      },
      {
        "numero": 2,
        "titulo": "Problema 2: Las gafas de Realidad Virtual para la Feria de Ciencias (SCI con parámetro $\\lambda$ y filtro entero)",
        "referencia": "Bloque 5: Punto 5.4 y Ejemplo 5.3 (Pág. 33)",
        "enunciado": "Para los talleres de la Feria de Ciencias se alquilan $18\\text{ equipos}$ de Realidad Virtual entre tres gamas: Básico ($2\\text{ horas}$ de batería y $20\\text{ €}$), Pro ($3\\text{ horas}$ y $25\\text{ €}$) y Ultra ($4\\text{ horas}$ y $30\\text{ €}$). La autonomía acumulada entre todos suma $46\\text{ horas}$ y la factura total asciende a $410\\text{ €}$.",
        "preguntas": [
          {
            "letra": "a)",
            "texto": "¿Se puede determinar de forma única cuántos equipos hay de cada gama? Plantea el sistema, escálonalo por Gauss, clasifícalo y expresa todas sus soluciones reales en función de un parámetro $\\lambda$."
          },
          {
            "letra": "b)",
            "texto": "Si por logística es obligatorio pedir al menos $1\\text{ equipo}$ de cada tipo, ¿qué configuraciones reales son posibles?"
          }
        ],
        "instruccion": "Escalonamiento de Gauss hasta $0 = 0$, parametrización con $\\lambda$ y filtrado de soluciones enteras:",
        "apartados": [
          {
            "letra": "a)",
            "texto": "<strong>Planteamiento, Gauss y clasificación (SCI):</strong> Sean $x$ Básico, $y$ Pro y $z$ Ultra ($x, y, z \\in \\mathbb{N}$). Dividiendo la 3.ª ecuación ($20x+25y+30z=410$) entre $5$:<br>$\\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 18 \\\\ 2 & 3 & 4 & 46 \\\\ 4 & 5 & 6 & 82 \\end{array}\\right) \\xrightarrow{\\substack{F_2 - 2F_1 \\\\ F_3 - 4F_1}} \\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 18 \\\\ 0 & 1 & 2 & 10 \\\\ 0 & 1 & 2 & 10 \\end{array}\\right) \\xrightarrow{F_3 - F_2} \\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 18 \\\\ 0 & 1 & 2 & 10 \\\\ 0 & 0 & 0 & 0 \\end{array}\\right)$.<br>La última fila $0 = 0$ es una identidad: <strong>Sistema Compatible Indeterminado (SCI)</strong> con infinitas soluciones reales (la tarifa oculta es $10\\text{ €}$ fijos por unidad más $5\\text{ €}$ por hora de batería, de modo que $E_3/5 = 2E_1 + E_2$). Tomando $z = \\lambda \\in \\mathbb{R}$: $y = 10 - 2\\lambda$ y $x = 18 - (10 - 2\\lambda) - \\lambda = 8 + \\lambda \\implies \\boldsymbol{(8 + \\lambda,\\; 10 - 2\\lambda,\\; \\lambda)}$."
          },
          {
            "letra": "b)",
            "texto": "<strong>Filtrado realista ($x, y, z \\ge 1$ enteros):</strong> $x = 8 + \\lambda \\ge 1 \\implies \\lambda \\ge -7$; $y = 10 - 2\\lambda \\ge 1 \\implies \\lambda \\le 4{,}5$; $z = \\lambda \\ge 1 \\implies \\lambda \\in \\{1, 2, 3, 4\\}$. Existen <strong>$4$ configuraciones posibles</strong>: $\\boldsymbol{(9, 8, 1)}$, $\\boldsymbol{(10, 6, 2)}$, $\\boldsymbol{(11, 4, 3)}$ y $\\boldsymbol{(12, 2, 4)}$."
          }
        ],
        "idea_clave": "Un Sistema Compatible Indeterminado ($0 = 0$) tiene infinitas soluciones matemáticas en $\\mathbb{R}$, pero cuando representa objetos reales (enteros positivos y restricciones mínimas) el parámetro $\\lambda$ queda acotado a un puñado finito de soluciones válidas."
      },
      {
        "numero": 3,
        "titulo": "Problema 3: El torneo de tiro con arco (SI, fallo de marcador y paso a SCI)",
        "referencia": "Bloque 5: Puntos 5.4, 5.5 y Cuadro Resumen (Págs. 33–35)",
        "enunciado": "En un torneo de tiro con arco por equipos, las dianas Roja, Azul y Verde otorgan distintas puntuaciones fijas por acierto. El Tirador 1 acierta $1\\text{ Roja}$, $2\\text{ Azules}$ y $1\\text{ Verde}$, y suma $30\\text{ puntos}$. El Tirador 2 acierta $2\\text{ Rojas}$, $1\\text{ Azul}$ y $3\\text{ Verdes}$, y suma $45\\text{ puntos}$. La aplicación del torneo registra que el Tirador 3 acertó $4\\text{ Rojas}$, $5\\text{ Azules}$ y $5\\text{ Verdes}$, con un total de $100\\text{ puntos}$.",
        "preguntas": [
          {
            "letra": "a)",
            "texto": "Plantea el sistema con las puntuaciones de cada diana, escálonalo por Gauss y clasifícalo."
          },
          {
            "letra": "b)",
            "texto": "La aplicación tiene un fallo en el marcador del Tirador 3: explica por qué es imposible ese resultado y qué puntuación debería haber mostrado."
          },
          {
            "letra": "c)",
            "texto": "Una vez corregido el marcador, ¿sabremos ya cuánto vale cada diana? Si el juez añade que «acertar una diana de cada color suma $23\\text{ puntos}$», calcula el valor exacto de cada diana."
          }
        ],
        "instruccion": "Escalonamiento de Gauss hasta $0 = -5$, detección de la combinación lineal y cierre del sistema:",
        "apartados": [
          {
            "letra": "a)",
            "texto": "<strong>Planteamiento, Gauss y clasificación (SI):</strong> Sean $x$ Roja, $y$ Azul y $z$ Verde:<br>$\\left(\\begin{array}{ccc|c} 1 & 2 & 1 & 30 \\\\ 2 & 1 & 3 & 45 \\\\ 4 & 5 & 5 & 100 \\end{array}\\right) \\xrightarrow{\\substack{F_2 - 2F_1 \\\\ F_3 - 4F_1}} \\left(\\begin{array}{ccc|c} 1 & 2 & 1 & 30 \\\\ 0 & -3 & 1 & -15 \\\\ 0 & -3 & 1 & -20 \\end{array}\\right) \\xrightarrow{F_3 - F_2} \\left(\\begin{array}{ccc|c} 1 & 2 & 1 & 30 \\\\ 0 & -3 & 1 & -15 \\\\ 0 & 0 & 0 & -5 \\end{array}\\right)$.<br>La última fila $0 = -5$ es una contradicción imposible: <strong>Sistema Incompatible (SI)</strong>, sin solución."
          },
          {
            "letra": "b)",
            "texto": "<strong>Detección del fallo del marcador:</strong> El Tirador 3 acertó exactamente $2\\cdot T_1 + T_2$ dianas de cada color ($2(1,2,1)+(2,1,3)=(4,5,5)$), luego su puntuación obligatoria es $2(30) + 45 = \\boldsymbol{105\\text{ puntos}}$ (faltan $5\\text{ puntos}$ en el marcador)."
          },
          {
            "letra": "c)",
            "texto": "<strong>De SI a SCI y cierre con el dato nuevo:</strong> Si cambiamos $100$ por $105$, la última fila pasa a $0 = 0$: el sistema pasa a <strong>SCI</strong> (sigue faltando información independiente). Al añadir $x + y + z = 23$: restando $(x+2y+z)-(x+y+z) \\implies \\boldsymbol{y = 7}$; luego $x + z = 16$ y $2x + 3z = 38 \\implies \\boldsymbol{z = 6}$ y $\\boldsymbol{x = 10}$. Valores: <strong>Roja $10$, Azul $7$ y Verde $6$ puntos</strong>."
          }
        ],
        "idea_clave": "Cuando al corregir una contradicción ($0 = -5$) ajustas solo el término independiente para hacer cuadrar la combinación lineal, no consigues un SCD sino un SCI ($0 = 0$): para hallar una solución única hace falta sustituir la fila dependiente por una ecuación realmente independiente."
      },
      {
        "numero": 4,
        "titulo": "Problema 4: Los recuerdos astronómicos del Planetario",
        "referencia": "Bloque 5: Puntos 5.2 y 5.3 (Págs. 30–32)",
        "enunciado": "En la tienda del Planetario se vendieron ayer $25\\text{ recuerdos}$ en total entre imanes de planetas, llaveros de cohete y planisferios celestes. Cada imán se vende a $1{,}25\\text{ €}$, cada llavero a $1{,}75\\text{ €}$ y cada planisferio a $3{,}50\\text{ €}$, logrando una recaudación total en caja de $46{,}50\\text{ €}$. Por otro lado, el precio de coste que paga la tienda al proveedor es de $0{,}40\\text{ €}$ por cada imán, $0{,}60\\text{ €}$ por cada llavero y $1{,}20\\text{ €}$ por cada planisferio, sumando un gasto total de $15{,}60\\text{ €}$.",
        "preguntas": [
          {
            "letra": "a)",
            "texto": "Plantea el sistema de ecuaciones correspondiente."
          },
          {
            "letra": "b)",
            "texto": "Resuelve y clasifica el sistema para averiguar cuántas unidades de cada recuerdo se vendieron."
          }
        ],
        "instruccion": "Planteamiento, resolución y clasificación del sistema:",
        "apartados": [
          {
            "letra": "a)",
            "texto": "<strong>Planteamiento y limpieza de decimales ($x, y, z \\in \\mathbb{N}$):</strong> Llamamos $x$ al número de imanes, $y$ al de llaveros y $z$ al de planisferios:<br>$\\begin{cases} x + y + z = 25 \\\\ 1{,}25x + 1{,}75y + 3{,}50z = 46{,}50 & \\xrightarrow{\\cdot 4} 5x + 7y + 14z = 186 \\\\ 0{,}40x + 0{,}60y + 1{,}20z = 15{,}60 & \\xrightarrow{\\cdot 10,\\; \\div 2} 2x + 3y + 6z = 78 \\end{cases}$."
          },
          {
            "letra": "b)",
            "texto": "<strong>Escalonamiento de Gauss y clasificación (SCD):</strong><br>$\\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 25 \\\\ 5 & 7 & 14 & 186 \\\\ 2 & 3 & 6 & 78 \\end{array}\\right) \\xrightarrow{\\substack{F_2 - 5F_1 \\\\ F_3 - 2F_1}} \\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 25 \\\\ 0 & 2 & 9 & 61 \\\\ 0 & 1 & 4 & 28 \\end{array}\\right) \\xrightarrow{F_2 \\leftrightarrow F_3} \\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 25 \\\\ 0 & 1 & 4 & 28 \\\\ 0 & 2 & 9 & 61 \\end{array}\\right) \\xrightarrow{F_3 - 2F_2} \\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 25 \\\\ 0 & 1 & 4 & 28 \\\\ 0 & 0 & 1 & 5 \\end{array}\\right)$.<br>Última fila $z = 5$ (<strong>Sistema Compatible Determinado, SCD</strong>: solución única). Sustituyendo hacia atrás: $y + 4(5) = 28 \\implies y = 8$, y $x = 25 - 8 - 5 = 12$. Solución: <strong>$12$ imanes, $8$ llaveros y $5$ planisferios</strong> (comprobación: $15 + 14 + 17{,}50 = 46{,}50\\text{ €}$; $4{,}80 + 4{,}80 + 6 = 15{,}60\\text{ €}$)."
          }
        ],
        "idea_clave": "Ante precios en euros con decimales como $,25$ o $,75$, multiplica toda la ecuación por $4$ (o por $10$ / $100$ según los decimales) antes de escribir la matriz; y si después todos los coeficientes comparten un divisor común (como $\\div 2$), simplifica para trabajar con números pequeños y sin errores."
      },
      {
        "numero": 5,
        "titulo": "Problema 5: Los tres depósitos de riego del Campo de Cartagena",
        "referencia": "Bloque 5: Puntos 5.2 y 5.3 (Págs. 30–32)",
        "enunciado": "Una finca agrícola del Campo de Cartagena almacena agua para riego por goteo en tres depósitos (principal, auxiliar y de reserva). Sabemos que en el depósito de reserva hay $100\\text{ litros}$ más que la mitad del agua que contiene el depósito auxiliar. Además, si trasvasamos $200\\text{ litros}$ del depósito principal al auxiliar, en el auxiliar pasará a haber el doble de litros de los que queden en el principal. Por último, entre el depósito principal y el auxiliar suman $1200\\text{ litros}$ más que el de reserva.",
        "preguntas": [
          {
            "letra": "a)",
            "texto": "Plantea el sistema de ecuaciones que representa la situación."
          },
          {
            "letra": "b)",
            "texto": "Resuelve y clasifica el sistema para determinar cuántos litros de agua contiene actualmente cada depósito."
          }
        ],
        "instruccion": "Planteamiento, resolución y clasificación del sistema:",
        "apartados": [
          {
            "letra": "a)",
            "texto": "<strong>Traducción, limpieza y ordenación ($x, y, z \\ge 0$):</strong> Llamamos $x$ a los litros del depósito principal, $y$ al auxiliar y $z$ al de reserva.<br>1.ª condición: $z = \\dfrac{y}{2} + 100 \\xrightarrow{\\cdot 2} 2z = y + 200 \\implies \\mathbf{0x - y + 2z = 200}$.<br>2.ª condición: $y + 200 = 2(x - 200) \\implies y + 200 = 2x - 400 \\implies \\mathbf{2x - y + 0z = 600}$.<br>3.ª condición: $x + y = z + 1200 \\implies \\mathbf{x + y - z = 1200}$.<br>Como la 3.ª ecuación tiene pivote $1$ en la $x$, la subimos a la primera fila ($F_1 \\leftrightarrow F_3$)."
          },
          {
            "letra": "b)",
            "texto": "<strong>Escalonamiento de Gauss y clasificación (SCD):</strong><br>$\\left(\\begin{array}{ccc|c} 1 & 1 & -1 & 1200 \\\\ 2 & -1 & 0 & 600 \\\\ 0 & -1 & 2 & 200 \\end{array}\\right) \\xrightarrow{F_2 - 2F_1} \\left(\\begin{array}{ccc|c} 1 & 1 & -1 & 1200 \\\\ 0 & -3 & 2 & -1800 \\\\ 0 & -1 & 2 & 200 \\end{array}\\right) \\xrightarrow{F_2 \\leftrightarrow -F_3} \\left(\\begin{array}{ccc|c} 1 & 1 & -1 & 1200 \\\\ 0 & 1 & -2 & -200 \\\\ 0 & -3 & 2 & -1800 \\end{array}\\right) \\xrightarrow{F_3 + 3F_2} \\left(\\begin{array}{ccc|c} 1 & 1 & -1 & 1200 \\\\ 0 & 1 & -2 & -200 \\\\ 0 & 0 & -4 & -2400 \\end{array}\\right)$.<br>Última fila $-4z = -2400 \\implies z = 600$ (<strong>Sistema Compatible Determinado, SCD</strong>). Sustituyendo hacia atrás: $y - 2(600) = -200 \\implies y = 1000$, y $x + 1000 - 600 = 1200 \\implies x = 800$. Solución: <strong>$800\\text{ L}$ en el principal, $1000\\text{ L}$ en el auxiliar y $600\\text{ L}$ en el de reserva</strong> (comprobación: $600 = 500 + 100$; $1200 = 2\\cdot 600$; $1800 = 600 + 1200$)."
          }
        ],
        "idea_clave": "Nunca metas un sistema desordenado directamente en la matriz: primero quita denominadores y paréntesis, alinea todas las columnas en el mismo orden ($x, y, z$) poniendo un $0$ cuando falte una incógnita, y sube arriba la fila que tenga un $1$ o un $-1$ como primer coeficiente."
      },
      {
        "numero": 6,
        "titulo": "Problema 6: Los módulos de energía de la base en la Antártida",
        "referencia": "Bloque 5: Punto 5.4 y Ejemplo 5.3 (Pág. 33)",
        "enunciado": "Una expedición científica instala $20\\text{ módulos}$ de energía renovable en su base de la Antártida combinando tres modelos: Compacto ($2\\text{ kW}$ de potencia y $10\\text{ kg}$ de peso), Estándar ($5\\text{ kW}$ y $40\\text{ kg}$) y Térmico ($3\\text{ kW}$ y $20\\text{ kg}$). El sistema completo debe aportar exactamente $64\\text{ kW}$ de potencia y el peso total del equipamiento es de $440\\text{ kg}$.",
        "preguntas": [
          {
            "letra": "a)",
            "texto": "Plantea el sistema de ecuaciones, resuélvelo y clasifica el sistema."
          },
          {
            "letra": "b)",
            "texto": "Por seguridad, se debe instalar al menos $1\\text{ módulo}$ de cada modelo y tiene que haber más módulos Compactos que Térmicos. ¿Qué configuraciones reales cumplen todas las condiciones?"
          }
        ],
        "instruccion": "Planteamiento, resolución, clasificación y análisis de las condiciones:",
        "apartados": [
          {
            "letra": "a)",
            "texto": "<strong>Planteamiento, Gauss y clasificación (SCI):</strong> Sean $x$ Compactos, $y$ Estándar y $z$ Térmicos ($x, y, z \\in \\mathbb{N}$). Dividiendo la ecuación del peso ($10x + 40y + 20z = 440$) entre $10$:<br>$\\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 20 \\\\ 2 & 5 & 3 & 64 \\\\ 1 & 4 & 2 & 44 \\end{array}\\right) \\xrightarrow{\\substack{F_2 - 2F_1 \\\\ F_3 - F_1}} \\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 20 \\\\ 0 & 3 & 1 & 24 \\\\ 0 & 3 & 1 & 24 \\end{array}\\right) \\xrightarrow{F_3 - F_2} \\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 20 \\\\ 0 & 3 & 1 & 24 \\\\ 0 & 0 & 0 & 0 \\end{array}\\right)$.<br>Última fila $0 = 0$: <strong>Sistema Compatible Indeterminado (SCI)</strong> con infinitas soluciones reales (cada kW extra por encima de $1\\text{ kW/módulo}$ añade exactamente $10\\text{ kg}$, de modo que $E_3/10 = E_2 - E_1$). En la 2.ª fila ($3y + z = 24$), si hacemos $z = \\lambda$ aparece la fracción $y = 8 - \\frac{\\lambda}{3}$; en cambio, eligiendo <strong>$y = \\lambda \\in \\mathbb{R}$</strong> evitamos fracciones: $z = 24 - 3\\lambda$ y $x = 20 - \\lambda - (24 - 3\\lambda) = 2\\lambda - 4 \\implies \\boldsymbol{(2\\lambda - 4,\\; \\lambda,\\; 24 - 3\\lambda)}$."
          },
          {
            "letra": "b)",
            "texto": "<strong>Filtrado realista ($x, y, z \\ge 1$ enteros y $x > z$):</strong><br>1) Mínimos ($\\ge 1$): $x = 2\\lambda - 4 \\ge 1 \\implies \\lambda \\ge 2{,}5$; $y = \\lambda \\ge 1$; $z = 24 - 3\\lambda \\ge 1 \\implies \\lambda \\le 7{,}67$. Como $\\lambda$ es entero, $\\lambda \\in \\{3, 4, 5, 6, 7\\}$.<br>2) Condición $x > z$: $2\\lambda - 4 > 24 - 3\\lambda \\implies 5\\lambda > 28 \\implies \\lambda > 5{,}6 \\implies \\lambda \\in \\{6, 7\\}$.<br>Quedan <strong>$2$ configuraciones válidas</strong>: $\\boldsymbol{(8,\\; 6,\\; 6)}$ ($8$ Compactos, $6$ Estándar, $6$ Térmicos) y $\\boldsymbol{(10,\\; 7,\\; 3)}$ ($10$ Compactos, $7$ Estándar, $3$ Térmicos)."
          }
        ],
        "idea_clave": "En un SCI no estás obligado a llamar $\\lambda$ siempre a la $z$: en la ecuación que te quede arriba ($3y + z = 24$), elige como parámetro $\\lambda$ a la incógnita que lleva coeficiente distinto de $1$ ($y = \\lambda$) para despejar la otra ($z = 24 - 3\\lambda$) sin ninguna fracción."
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
      "sesiones_impartidas": 16,
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
