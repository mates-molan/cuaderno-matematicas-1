// =========================================================================
// CONFIGURACIÓN Y ESTADO GLOBAL DEL CURSO: MATEMÁTICAS I
// =========================================================================
window.CURSO_CONFIG = {
  "nombre": "Matemáticas I",
  "nivel": "1.º de Bachillerato de Ciencias y Tecnología",
  "centro": "IES Ricardo Ortega",
  "ano_academico": "2026-2027",
  "tema_actual_id": 1,
  "tarea_classroom_activa": {
    "existe": true,
    "tema_id": 1,
    "tarea_id": "Tarea-01",
    "titulo": "Tarea 1: Números Reales, Intervalos y Valor Absoluto",
    "fecha_limite": "Sábado 3 de Octubre de 2026 (23:59 h) - Plazo Finalizado",
    "estado": "solucionario_disponible",
    "pdf_tarea": "pdf/Tarea1_Herramientas_del_Algebra_1Bach.pdf",
    "pdf_solucionario": "pdf/Tarea1_Herramientas_del_Algebra_1Bach_Solucionario.pdf",
    "aviso": "¡Solucionario de la Tarea 1 disponible! Consulta las soluciones resueltas paso a paso para auto-corregir tu libreta."
  },
  "control_test_activo": {
    "existe": true,
    "tema_id": 1,
    "test_id": "Test-01",
    "titulo": "Control Test 1: Radicales, Racionalización y Logaritmos",
    "fecha": "Martes 13 de Octubre de 2026",
    "estado": "solucionario_disponible",
    "pdf_examen": "pdf/Examen_Test_Radicales_Logaritmos_1Bach_Master.pdf",
    "pdf_solucionario": "pdf/Examen_Test_Radicales_Logaritmos_1Bach_Solucionario.pdf",
    "aviso": "¡Control Test 1 y Solucionario disponibles! Consulta el enunciado oficial y las soluciones resueltas paso a paso para auto-corregir."
  },
  "ultima_clase": {
    "fecha": "Lunes 19 de Octubre de 2026",
    "tema_id": 1,
    "tema_titulo": "Tema 1: Herramientas del Álgebra",
    "titulo_sesion": "Sesión 17: Cierre de Herramientas del Álgebra (Operaciones con Ruffini y Binomio de Newton)",
    "referencia_apuntes": "Puntos 4.2, 5.2 y 6 (Págs. 24-28 y 30-33)",
    "mision_semanal": "Hacer el Ejercicio 13 de la hoja de ejercicios en tu libreta (Polinomios: Teorema del Resto, Ruffini y Factorización Completa).",
    "trabajo_semanal_pendiente": "Hacer el Ejercicio 13 de la hoja de ejercicios en la libreta.",
    "ejercicios_vistos": [
      {
        "numero": 25,
        "titulo": "Operaciones con Polinomios y Fracciones: Factor Común, Ruffini e Identidades Notables",
        "referencia": "Puntos 4.2 y 5.2 (Págs. 24-28)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Orden mental para factorizar cualquier polinomio antes de operar:</strong><br>• <strong>1.º Saca factor común (clave en grados grandes):</strong> Si todos los términos tienen $x$ o son múltiplos de un mismo número, extrae el factor común numérico y literal ($2x^2, 3x\\dots$) antes de hacer nada. ¡Nunca empieces Ruffini con un $0$ al final!<br>• <strong>2.º ¡Ojo al coeficiente principal distinto de 1!:</strong> Si el polinomio empieza por $2x^3, 3x^2\\dots$ y no tiene factor común, recuerda no perder ese número al factorizar: $2\\left(x - \\frac{1}{2}\\right) = (2x - 1)$.<br>• <strong>3.º Combina Ruffini e identidades notables:</strong> Usa Ruffini para bajar de grado $\\ge 3$ a grado 2, y remata con identidades notables ($a^2 - b^2$, $(a \\pm b)^2$) o la ecuación de segundo grado.</div></div>Factoriza combinando factor común, identidades notables y Ruffini (vigilando los coeficientes principales distintos de 1), y realiza las siguientes operaciones simplificando al máximo:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "\\dfrac{2x^3 + x^2 - 5x + 2}{x^3 + x^2 - 4x - 4} = \\dfrac{(2x-1)(x-1)(x+2)}{(x+1)(x-2)(x+2)} = \\dfrac{(2x-1)(x-1)}{(x+1)(x-2)} \\quad (x \\ne -1, \\pm 2)"
          },
          {
            "letra": "b)",
            "expresion": "\\dfrac{2x^5 - 4x^4 - 10x^3 + 12x^2}{3x^4 - 9x^3 - 3x^2 + 9x} = \\dfrac{2x^2(x-1)(x+2)(x-3)}{3x(x-1)(x+1)(x-3)} = \\dfrac{2x(x+2)}{3(x+1)} \\quad (x \\ne 0, \\pm 1, 3)"
          },
          {
            "letra": "c)",
            "expresion": "\\dfrac{x - 5}{x^3 - 2x^2 - x + 2} - \\dfrac{2}{x^2 - 1} + \\dfrac{1}{x - 2} = \\dfrac{(x-5) - 2(x-2) + (x^2-1)}{(x-1)(x+1)(x-2)} = \\dfrac{x^2 - x - 2}{(x-1)(x+1)(x-2)} = \\dfrac{1}{x-1}"
          },
          {
            "letra": "d)",
            "expresion": "\\dfrac{2x^3 - 3x^2 - 8x + 12}{x^3 - 4x^2 + 4x} : \\dfrac{4x^2 - 9}{2x^3 - 4x^2} = \\dfrac{(x-2)(x+2)(2x-3)}{x(x-2)^2} \\cdot \\dfrac{2x^2(x-2)}{(2x-3)(2x+3)} = \\dfrac{2x(x+2)}{2x+3}"
          }
        ],
        "idea_clave": "Cuando se mezclan polinomios de grado grande, sigue siempre el orden: 1.º saca factor común numérico y de $x$ ($2x^2, 3x\\dots$), 2.º aplica Ruffini para bajar el grado sin olvidar nunca el coeficiente principal si es distinto de 1, y 3.º remata los de grado 2 con identidades notables o la fórmula cuadrática."
      },
      {
        "numero": 26,
        "titulo": "Desarrollo de Binomios con el Binomio de Newton y el Triángulo de Tartaglia (n = 3, 4, 5 y 6)",
        "referencia": "Puntos 6.1, 6.2 y 6.3 (Págs. 30-32)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">💡</span><div class=\"nota-aula-content\"><strong>Cómo desarrollar $(a \\pm b)^n$ rápido y sin fallos:</strong><br>• <strong>1. Coeficientes con el Triángulo de Tartaglia:</strong><br>&nbsp;&nbsp;– Para $n=3$: $1, 3, 3, 1$<br>&nbsp;&nbsp;– Para $n=4$: $1, 4, 6, 4, 1$<br>&nbsp;&nbsp;– Para $n=5$: $1, 5, 10, 10, 5, 1$<br>&nbsp;&nbsp;– Para $n=6$: $1, 6, 15, 20, 15, 6, 1$<br>• <strong>2. Escalera de exponentes:</strong> Las potencias del primer término ($a$) bajan de $n$ a $0$, mientras las del segundo ($b$) suben de $0$ a $n$. En cada sumando, los dos exponentes suman siempre $n$.<br>• <strong>3. Signos y paréntesis:</strong> Si es una resta $(a - b)^n$, alterna los signos empezando con más ($+ - + - \\dots$). Y rodea siempre con paréntesis cada bloque al elevarlo: $(3x)^4 = 81x^4$.</div></div>Desarrolla completamente las siguientes potencias de grado 3, 4, 5 y 6 aplicando el Teorema del Binomio de Newton:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "(2x + 3)^3 = 1(2x)^3 + 3(2x)^2(3) + 3(2x)(3^2) + 1(3^3) = 8x^3 + 36x^2 + 54x + 27"
          },
          {
            "letra": "b)",
            "expresion": "(3x - 2)^4 = 1(3x)^4 - 4(3x)^3(2) + 6(3x)^2(2^2) - 4(3x)(2^3) + 1(2^4) = 81x^4 - 216x^3 + 216x^2 - 96x + 16"
          },
          {
            "letra": "c)",
            "expresion": "(2x - y^2)^5 = 32x^5 - 80x^4y^2 + 80x^3y^4 - 40x^2y^6 + 10xy^8 - y^{10}"
          },
          {
            "letra": "d)",
            "expresion": "\\left(x^2 - \\dfrac{1}{x}\\right)^6 = x^{12} - 6x^9 + 15x^6 - 20x^3 + 15 - \\dfrac{6}{x^3} + \\dfrac{1}{x^6}"
          }
        ],
        "idea_clave": "Con el Binomio de Newton no necesitas multiplicar paréntesis tras paréntesis: coloca los coeficientes del Triángulo de Tartaglia (según el exponente 3, 4, 5 o 6), baja un exponente mientras subes el otro, alterna los signos si hay un menos y eleva cada término entre paréntesis."
      },
      {
        "numero": 27,
        "titulo": "Cálculo del Término que Ocupa un Lugar Concreto (Tₖ₊₁) y Término Independiente",
        "referencia": "Punto 6.2 y Término Independiente (Págs. 31 y 33)",
        "instruccion": "<div class=\"nota-aula-box\"><span class=\"nota-aula-icon\">🎯</span><div class=\"nota-aula-content\"><strong>La fórmula del término general para ir directo al grano:</strong><br>• <strong>Fórmula maestra:</strong> $T_{k+1} = \\binom{n}{k} a^{n-k} b^k$.<br>• <strong>¡Cuidado con la posición ($k$ empieza en $0$)!:</strong> El primer término tiene $k = 0$ y el segundo $k = 1$. Por tanto, si te piden el término que ocupa el <strong>lugar $p$</strong>, debes sustituir siempre <strong>$k = p - 1$</strong> (por ejemplo, para el <strong>5.º término $T_5$</strong> se usa $k = 4$, y para el <strong>4.º término $T_4$</strong> se usa $k = 3$).<br>• <strong>¿Y si te piden el término independiente (sin $x$)?</strong> Escribe la fórmula general dejando la $k$ como incógnita, junta todas las $x$ en una sola potencia e iguala su exponente a $0$ para despejar $k$.</div></div>Calcula directamente el término pedido en cada caso sin desarrollar la potencia completa del binomio:",
        "apartados": [
          {
            "letra": "a)",
            "expresion": "\\text{Quinto término } (T_5 \\implies k=4) \\text{ de } (2x - y^3)^7: \\quad T_5 = \\binom{7}{4}(2x)^{7-4}(-y^3)^4 = 35 \\cdot 8x^3 \\cdot y^{12} = 280x^3y^{12}"
          },
          {
            "letra": "b)",
            "expresion": "\\text{Cuarto término } (T_4 \\implies k=3) \\text{ de } \\left(x^2 - \\dfrac{2}{x}\\right)^8: \\quad T_4 = \\binom{8}{3}(x^2)^5\\left(-\\dfrac{2}{x}\\right)^3 = 56 \\cdot x^{10} \\cdot \\left(-\\dfrac{8}{x^3}\\right) = -448x^7"
          },
          {
            "letra": "c)",
            "expresion": "\\text{Sexto término } (T_6 \\implies k=5) \\text{ de } \\left(2x - \\dfrac{1}{2x^2}\\right)^9: \\quad T_6 = \\binom{9}{5}(2x)^4\\left(-\\dfrac{1}{2x^2}\\right)^5 = 126 \\cdot 16x^4 \\cdot \\left(-\\dfrac{1}{32x^{10}}\\right) = -\\dfrac{63}{x^6}"
          },
          {
            "letra": "d)",
            "expresion": "\\text{Término independiente de } x \\text{ en } \\left(2x^2 - \\dfrac{1}{x}\\right)^6: \\quad T_{k+1} = (-1)^k\\binom{6}{k}2^{6-k}x^{12-3k} \\implies 12-3k=0 \\implies k=4 \\implies T_5 = 60"
          }
        ],
        "idea_clave": "No desarrolles el binomio entero si solo te piden una pieza: para hallar el término que ocupa el lugar $p$, aplica $T_{k+1} = \\binom{n}{k} a^{n-k} b^k$ restando uno a la posición ($k = p - 1$) y respetando el signo del segundo sumando."
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
      "estado": "en_curso",
      "sesiones_impartidas": 17,
      "descripcion": "Conjuntos numéricos ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}$), operaciones con intervalos en la recta real, valor absoluto, potencias, radicales, logaritmos, polinomios, factorización con Ruffini, fracciones algebraicas y Binomio de Newton.",
      "apuntes_pdf": "pdf/Apuntes_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "ejercicios_pdf": "pdf/Ficha_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "apuntes_listos": true,
      "ejercicios_listos": true,
      "total_ejercicios_libreta": 13,
      "total_tareas_classroom": 1,
      "total_controles_test": 1
    }
  ]
};
