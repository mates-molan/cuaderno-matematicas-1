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
  "ultima_clase": {
    "fecha": "Martes 6 de Octubre de 2026",
    "tema_id": 1,
    "tema_titulo": "Tema 1: Herramientas del Álgebra",
    "titulo_sesion": "Sesión 12: Identidades Notables (Cierre) y Cálculo de Logaritmos por Definición",
    "referencia_apuntes": "Puntos 2 y 3.1 (Págs. 10 y 17-19)",
    "mision_semanal": "Terminar en tu libreta el Ejercicio 15 de identidades al revés y practicar el Ejercicio 16 de logaritmos por definición.",
    "trabajo_semanal_pendiente": "Repasar en libreta los Ejercicios 15 y 16 de modelado de pizarra.",
    "ejercicios_vistos": [
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
        "referencia": "Punto 3.1 (Págs. 17-19)",
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
      "sesiones_impartidas": 12,
      "descripcion": "Conjuntos numéricos ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{I}, \\mathbb{R}$), operaciones con intervalos en la recta real, valor absoluto, potencias, radicales, logaritmos, polinomios, factorización con Ruffini y fracciones algebraicas.",
      "apuntes_pdf": "pdf/Apuntes_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "ejercicios_pdf": "pdf/Ficha_Tema1_Herramientas_del_Algebra_1Bach.pdf",
      "apuntes_listos": true,
      "ejercicios_listos": true,
      "total_ejercicios_libreta": 11,
      "total_tareas_classroom": 1
    }
  ]
};
