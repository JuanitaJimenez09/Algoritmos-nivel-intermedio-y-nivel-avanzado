function promedioDeEstudiantes() {
    alert("Este algoritmo permite calcular el promedio de 10 notas ingresadas (entre 0 y 5) para determinar si el estudiante aprueba o reprueba. Además, mostrará una calificación literal basada en el promedio obtenido. ¡Vamos a calcular!")
    let notas = [];
    let suma = 0;
    let promedio;
    let calificacion;

    for (let i = 0; i < 10; i++) {
        let nota = parseFloat(prompt(`Ingrese la nota ${i + 1} (entre 0 y 5):`));
        while (isNaN(nota) || nota < 0 || nota > 5) {
            alert("Nota inválida. Debe estar entre 0 y 5.");
            nota = parseFloat(prompt(`Ingrese nuevamente la nota ${i + 1} (entre 0 y 5):`));
        }
        notas.push(nota);
        suma += nota;
    }

    promedio = suma / 10;

    let estado = promedio >= 3.0 ? "Aprobado" : "Reprobado";

    if (promedio >= 0.0 && promedio <= 2.9) {
        calificacion = "Reprobado";
    } else if (promedio >= 3.0 && promedio <= 3.9) {
        calificacion = "Aceptable";
    } else if (promedio >= 4.0 && promedio <= 4.4) {
        calificacion = "Sobresaliente";
    } else if (promedio >= 4.5 && promedio <= 5.0) {
        calificacion = "Excelente";
    }

    alert(`Promedio: ${promedio.toFixed(2)}\nEstado: ${estado}\nCalificación: ${calificacion}`);
}


function clasificacionDeEtapas() {
   
    alert("Este programa está diseñado para clasificar a los estudiantes según su edad. Al ingresar la edad, el sistema determinará en qué etapa de la vida se encuentra el estudiante (niño, adolescente, joven adulto, adulto o adulto mayor). ")
   
    let edad = parseInt(prompt("Ingrese la edad del estudiante:"));


    let categoria;
    let descripcion;

    if (edad >= 0 && edad <= 12) {
        categoria = "Niño(a)";
        descripcion = "Enfocado en aprendizaje lúdico y exploración.";
    } else if (edad >= 13 && edad <= 17) {
        categoria = "Adolescente";
        descripcion = "Desarrollo del pensamiento crítico y la identidad.";
    } else if (edad >= 18 && edad <= 25) {
        categoria = "Joven Adulto";
        descripcion = "Transición a la educación superior o al mundo laboral.";
    } else if (edad >= 26 && edad <= 59) {
        categoria = "Adulto";
        descripcion = "Posiblemente cursando estudios de posgrado o formación continua.";
    } else {
        categoria = "Adulto Mayor";
        descripcion = "Participación en programas de aprendizaje permanente o por interés personal.";
    }

    alert(`Categoría: ${categoria}\nDescripción: ${descripcion}`);
}

function conversorTiempo() {

    alert("Este programa te permite convertir un número en un día de la semana o en un mes del año. Primero, deberás elegir si deseas trabajar con 'días' o 'meses'. Luego, ingresarás un número, y el sistema te mostrará el día o el mes correspondiente según tu elección. ")

   // Solicitar al usuario que elija entre convertir a 'días' o 'meses'
    let opcion = prompt("¿Desea convertir a 'días' o 'meses'? (Ingrese 'días' o 'meses'):").toLowerCase();

    // Validar que la opción sea correcta, y repetir la solicitud si no lo es
    while (opcion !== "días" && opcion !== "meses") {
        alert("Opción inválida. Debe ser 'días' o 'meses'.");
        opcion = prompt("Ingrese nuevamente su elección ('días' o 'meses'):").toLowerCase();
    }

    // Solicitar al usuario que ingrese el número que desea convertir
    let numero = parseInt(prompt("Ingrese el número correspondiente:"));
    let resultado;

    // Según la opción elegida, utilizar una estructura switch para asignar el resultado
    switch (opcion) {
        case "días":
            // Asignar el día de la semana correspondiente al número ingresado
            // Validar que el número esté entre 1 y 7, si no, mostrar mensaje de error
            switch (numero) {
                case 1: resultado = "Lunes"; break;
                case 2: resultado = "Martes"; break;
                case 3: resultado = "Miércoles"; break;
                case 4: resultado = "Jueves"; break;
                case 5: resultado = "Viernes"; break;
                case 6: resultado = "Sábado"; break;
                case 7: resultado = "Domingo"; break;
                default: resultado = "Error: número fuera de rango (1-7).";
            }
            break;
        case "meses":
            // Asignar el mes del año correspondiente al número ingresado
            // Validar que el número esté entre 1 y 12, si no, mostrar mensaje de error
            switch (numero) {
                case 1: resultado = "Enero"; break;
                case 2: resultado = "Febrero"; break;
                case 3: resultado = "Marzo"; break;
                case 4: resultado = "Abril"; break;
                case 5: resultado = "Mayo"; break;
                case 6: resultado = "Junio"; break;
                case 7: resultado = "Julio"; break;
                case 8: resultado = "Agosto"; break;
                case 9: resultado = "Septiembre"; break;
                case 10: resultado = "Octubre"; break;
                case 11: resultado = "Noviembre"; break;
                case 12: resultado = "Diciembre"; break;
                default: resultado = "Error: número fuera de rango (1-12).";
            }
            break;
    }

    // Mostrar el resultado final al usuario mediante un alert
    alert(resultado);
}

function menuOperaciones() {

    alert("Este programa te mostrará un menú interactivo con opciones para realizar operaciones matemáticas básicas. Podrás elegir entre sumar, restar, multiplicar o dividir dos números. Solo necesitas seleccionar la operación deseada e ingresar los números, y el sistema te mostrará el resultado.")

    let opcion = parseInt(prompt("Menú de Operaciones:\n1. Sumar dos números\n2. Restar dos números\n3. Multiplicar dos números\n4. Dividir dos números\nIngrese el número de la opción deseada:"));

    let resultado;
    let num1, num2;

    if (opcion < 1 || opcion > 4 || isNaN(opcion)) {
        alert("Opción inválida. Debe ser un número entre 1 y 4.");
        return;
    }

    num1 = parseFloat(prompt("Ingrese el primer número:"));
    num2 = parseFloat(prompt("Ingrese el segundo número:"));


    switch (opcion) {
        case 1:
            resultado = num1 + num2;
            alert(`Resultado de la suma: ${resultado}`);
            break;
        case 2:
            resultado = num1 - num2;
            alert(`Resultado de la resta: ${resultado}`);
            break;
        case 3:
            resultado = num1 * num2;
            alert(`Resultado de la multiplicación: ${resultado}`);
            break;
        case 4:
            if (num2 === 0) {
                alert("Error: División por cero no permitida.");
            } else {
                resultado = num1 / num2;
                alert(`Resultado de la división: ${resultado}`);
            }
            break;
    }
}

function calcularTarifa() {

    alert("Este programa permite calcular la tarifa de servicios públicos según el estrato socioeconómico de la vivienda en un municipio colombiano. Solo necesitas ingresar el estrato (del 1 al 6), y el sistema te mostrará el valor correspondiente, ajustado para garantizar una distribución equitativa de los costos.")

    let estrato = parseInt(prompt("Ingrese el estrato de la vivienda (1 a 6):"));
    let tarifa;

    if (isNaN(estrato) || estrato < 1 || estrato > 6) {
        alert("Error: Estrato inválido. Debe ser un número entre 1 y 6.");
        return;
    }

    switch (estrato) {
        case 1:
            tarifa = 10000;
            break;
        case 2:
            tarifa = 15000;
            break;
        case 3:
            tarifa = 20000;
            break;
        case 4:
        case 5:
        case 6:
            tarifa = 25000;
            break;
        default:
            alert("Error: Estrato no válido.");
            return;
    }

    alert(`La tarifa para el estrato ${estrato} es: $${tarifa}`);
}

function calcularIMC() {

    alert("Este programa te permite calcular tu Índice de Masa Corporal (IMC) ingresando tu peso en kilogramos y tu estatura en metros. Además, el sistema te indicará en qué categoría te encuentras (bajo peso, normal, sobrepeso u obesidad) y te dará recomendaciones generales de salud según el resultado obtenido.")

    let peso = parseFloat(prompt("Ingrese su peso en kilogramos (kg):"));
    while (isNaN(peso) || peso <= 0) {
        peso = parseFloat(prompt("Peso inválido. Por favor, ingrese un peso válido en kg:"));
    }

    let estatura = parseFloat(prompt("Ingrese su estatura en metros (m):"));
    while (isNaN(estatura) || estatura <= 0) {
        estatura = parseFloat(prompt("Estatura inválida. Por favor, ingrese una estatura válida en metros:"));
    }

    let imc = peso / (estatura * estatura);
    let categoria = "";
    let recomendacion = "";

    if (imc < 18.5) {
        categoria = "Bajo peso";
        recomendacion = "Se recomienda consultar a un nutricionista.";
    } else if (imc >= 18.5 && imc < 25) {
        categoria = "Normal";
        recomendacion = "¡Mantén un estilo de vida saludable!";
    } else if (imc >= 25 && imc < 30) {
        categoria = "Sobrepeso";
        recomendacion = "Considera realizar más actividad física y mejorar tu dieta.";
    } else {
        categoria = "Obesidad";
        recomendacion = "Es importante buscar asesoramiento médico para un plan de salud integral.";
    }

    alert(`Tu IMC es: ${imc.toFixed(2)}\nCategoría: ${categoria}\nRecomendación: ${recomendacion}`);
}

function calcularSueldo() {
  // Mostrar mensaje inicial explicando para qué sirve el programa
  alert("Este programa calcula el sueldo total con base en un sueldo fijo más una bonificación por hijos.");

  // Pedimos al usuario el sueldo base
  let sueldoBase = prompt("Ingrese su sueldo base:");
  // Convertimos a número
  sueldoBase = parseFloat(sueldoBase);

  // Pedimos el número de hijos
  let numHijos = prompt("¿Cuántos hijos tiene?");
  // Convertimos a número
  numHijos = parseInt(numHijos);

  // Creamos una variable para el bono
  let bono = 0;

  // Calculamos el bono según el número de hijos
  if (numHijos == 0) {
    bono = 0;
  } else if (numHijos == 1 || numHijos == 2) {
    bono = sueldoBase * 0.05;
  } else if (numHijos >= 3) {
    bono = sueldoBase * 0.10;
  }

  // Calculamos el sueldo total sumando el bono al sueldo base
  let sueldoTotal = sueldoBase + bono;

  // Mostramos los resultados
  alert("Sueldo base: $" + sueldoBase + "\nBono: $" + bono + "\nSueldo total: $" + sueldoTotal);
}

function clasificarSangre() {

    alert("Este programa ayuda a los donantes y receptores a conocer las compatibilidades sanguíneas según su tipo de sangre. Al ingresar su tipo, el sistema muestra a quién pueden donar y de quién pueden recibir, facilitando así la gestión de donaciones de manera segura y eficiente.")

    let tipoSangre = prompt("Ingrese su tipo de sangre (A, B, AB, O):").toUpperCase();
    let puedeDonar = "";
    let puedeRecibir = "";


    if (!["A", "B", "AB", "O"].includes(tipoSangre)) {
        alert("Error: Tipo de sangre no válido. Debe ser A, B, AB o O.");
        return;
    }

    switch (tipoSangre) {
        case "A":
            puedeDonar = "A, AB";
            puedeRecibir = "A, O";
            break;
        case "B":
            puedeDonar = "B, AB";
            puedeRecibir = "B, O";
            break;
        case "AB":
            puedeDonar = "AB";
            puedeRecibir = "A, B, AB, O";
            break;
        case "O":
            puedeDonar = "A, B, AB, O";
            puedeRecibir = "O";
            break;
    }

    alert(`Tipo de Sangre: ${tipoSangre}\nPuede donar a: ${puedeDonar}\nPuede recibir de: ${puedeRecibir}`);
}

function calcularDesempeño() {
  alert("Este programa calcula el promedio de tres notas (0 a 5) y te dice tu nivel de desempeño.");

  // Pedimos la primera nota y validamos que esté entre 0 y 5 y que sea un número
  let nota1 = parseFloat(prompt("Ingresa la primera nota (0 a 5):"));
  while (nota1 < 0 || nota1 > 5 || nota1 != nota1) {
    nota1 = parseFloat(prompt("Valor inválido. Ingresa la primera nota (0 a 5):"));
  }

  // Pedimos la segunda nota con la misma validación
  let nota2 = parseFloat(prompt("Ingresa la segunda nota (0 a 5):"));
  while (nota2 < 0 || nota2 > 5 || nota2 != nota2) {
    nota2 = parseFloat(prompt("Valor inválido. Ingresa la segunda nota (0 a 5):"));
  }

  // Pedimos la tercera nota con la misma validación
  let nota3 = parseFloat(prompt("Ingresa la tercera nota (0 a 5):"));
  while (nota3 < 0 || nota3 > 5 || nota3 != nota3) {
    nota3 = parseFloat(prompt("Valor inválido. Ingresa la tercera nota (0 a 5):"));
  }

  // Calculamos el promedio de las tres notas
  let promedio = (nota1 + nota2 + nota3) / 3;

  // Inicializamos variables para el nivel y el mensaje
  let nivel = "";
  let mensaje = "";

  // Determinamos el nivel según el promedio
  if (promedio < 3) {
    nivel = "Nivel Bajo";
    mensaje = "Necesitas estudiar más para mejorar.";
  } else if (promedio < 4) {
    nivel = "Nivel Básico";
    mensaje = "Vas bien, sigue esforzándote.";
  } else if (promedio <= 4.5) {
    nivel = "Nivel Alto";
    mensaje = "Buen trabajo, mantén ese nivel.";
  } else {
    nivel = "Nivel Superior";
    mensaje = "¡Excelente desempeño!";
  }

  // Mostramos el resultado final con el promedio, nivel y mensaje
  alert("Tu promedio es: " + promedio.toFixed(2) + "\n" + nivel + "\n" + mensaje);
}

function calcularDescuento() {
  alert("Este programa calcula el descuento según tu tipo de cliente: nuevo, frecuente o VIP.");

  // Pedimos el tipo de cliente
  let tipoCliente = prompt("Ingrese el tipo de cliente (nuevo, frecuente, vip):");
  if (tipoCliente) {
    tipoCliente = tipoCliente.toLowerCase();
  } else {
    alert("Error: Debes ingresar un tipo de cliente.");
    return;
  }

  // Pedimos el valor de la compra
  let valorCompra = parseFloat(prompt("Ingrese el valor total de la compra:"));
  
  // Validamos que valorCompra sea positivo y válido
  if (valorCompra <= 0 || valorCompra != valorCompra) {
    alert("Error: El valor de la compra debe ser un número positivo.");
    return;
  }

  let porcentaje = 0;
  let descuento = 0;

  // Según tipoCliente, asignamos porcentaje de descuento
  switch (tipoCliente) {
    case "nuevo":
      porcentaje = 5;
      break;
    case "frecuente":
      porcentaje = 10;
      break;
    case "vip":
      porcentaje = 20;
      break;
    default:
      alert("Error: Tipo de cliente no reconocido.");
      return;
  }

  // Calculamos el descuento y total a pagar
  descuento = valorCompra * (porcentaje / 100);
  let totalPagar = valorCompra - descuento;

  // Mostramos el resumen al usuario
  alert(
    "Cliente: " + tipoCliente.charAt(0).toUpperCase() + tipoCliente.slice(1) +
    "\nValor de compra: $" + valorCompra.toFixed(2) +
    "\nDescuento (" + porcentaje + "%): $" + descuento.toFixed(2) +
    "\nTotal a pagar: $" + totalPagar.toFixed(2)
  );
}
//ESTRUCTURA BUCLES
function tablaMultiplicar() {
  alert("A continuación, vas a trabajar con 9 situaciones diferentes que plantean problemas reales o comunes.");

  // Pedimos el número para la tabla
  let entrada = prompt("Ingrese el número para generar su tabla de multiplicar:");

  // Validamos que la entrada no esté vacía y sea un número simple
  if (entrada === "" || entrada * 1 != entrada * 1) {
    alert("Error: Debe ingresar un número válido.");
    return;
  }

  // Convertimos la entrada a número
  let numero = entrada * 1;

  // Creamos el texto para mostrar la tabla
  let resultado = "Tabla de multiplicar del " + numero + ":\n";

  // Hacemos la tabla del 1 al 20
  for (let i = 1; i <= 20; i++) {
    resultado = resultado + numero + " x " + i + " = " + (numero * i) + "\n";
  }

  // Mostramos la tabla al usuario
  alert(resultado);
}
//BUCLES WHILE
function contarPositivosNegativos() {
  alert("Este programa te permitirá ingresar números uno por uno hasta que ingreses el número 0. El sistema contará cuántos son positivos y cuántos negativos.");

  let positivos = 0;
  let negativos = 0;
  let numero = 1;

  while (numero != 0) {
    numero = prompt("Ingrese un número (0 para terminar):");
    numero = Number(numero);

    if (numero > 0) {
      positivos = positivos + 1;
    } else if (numero < 0) {
      negativos = negativos + 1;
    }
  }

  alert("Total de números positivos: " + positivos + 
        "\nTotal de números negativos: " + negativos);
}

function validadorDeContraseña() {

  alert("Validador de Contraseña:\nDebe ingresar la contraseña correcta ('s3cret0'). Tiene un máximo de 3 intentos.");

    const contraseñaCorrecta = "s3cret0";
    let intentos = 3;

    while (intentos > 0) {
        let contraseña = prompt(`Ingrese su contraseña (Intentos restantes: ${intentos}):`);

        if (contraseña === contraseñaCorrecta) {
            alert("Bienvenido");
            return;
        } else {
            intentos--;
            alert("Contraseña incorrecta");
        }
    }

    alert("Cuenta bloqueada por intentos fallidos.");
}

function acumuladorDeCompras() {
  alert("Este programa te permite ingresar el valor de los productos que vas comprando uno por uno. El sistema sumará los valores hasta llegar o superar los $100.000 y luego te mostrará el total y la cantidad de productos ingresados.");

  let total = 0;
  let cantidad = 0;

  while (total < 100000) {
    let valorProducto = prompt("Ingresa el valor del producto #" + (cantidad + 1) + ":");
    valorProducto = Number(valorProducto);

    if (valorProducto > 0) {
      total = total + valorProducto;
      cantidad = cantidad + 1;
    } else {
      alert("Ingresa un valor válido (mayor que 0).");
    }
  }

  alert("Has ingresado " + cantidad + " productos.\nEl total acumulado es: $" + total.toFixed(2));
}

function ingresoEstudiantes() {
    alert("Este programa te permite ingresar los nombres de los estudiantes. Puedes ingresar hasta 30 estudiantes o escribir 'fin' para detener el ingreso.");

    let estudiantes = [];
    let limite = 30;

    while (estudiantes.length < limite) {
        let nombre = prompt(`Ingrese el nombre del estudiante #${estudiantes.length + 1} (o escriba 'fin' para terminar):`);
        
        if (nombre === null) {
            break;
        }

        nombre = nombre.trim();

        if (nombre.toLowerCase() === "fin") {
            break;
        }

        if (nombre === "") {
            alert("El nombre no puede estar vacío. Intente nuevamente.");
            continue;
        }

        estudiantes.push(nombre);
    }

    alert(`Se registraron ${estudiantes.length} estudiantes:\n- ${estudiantes.join("\n- ")}`);
}

function generarTablaPersonalizada() {
    alert("Este programa genera la tabla de multiplicar de un número que elijas, desde 1 hasta 20.");

    let numero = parseInt(prompt("Ingresa el número base para la tabla de multiplicar:"));

    if (numero > 0) {
        let resultado = ""; 
        
        for (let i = 1; i <= 20; i++) {
            resultado += numero + " x " + i + " = " + (numero * i) + "\n";
        }

        alert("Tabla de multiplicar del " + numero + ":\n" + resultado);
    } else {
        alert("Por favor, ingresa un número válido y mayor a cero.");
    }
}

function calcularSumaNaturales() {
    alert("Este programa calcula la suma de los primeros números naturales.");

    let N = parseInt(prompt("Ingresa la cantidad de números que deseas sumar:"));

    if (N > 0) {
        let suma = 0;

        for (let i = 1; i <= N; i++) {
            suma += i;
        }

        alert("La suma de los primeros " + N + " números naturales es: " + suma);
    } else {
        alert("Por favor, ingresa un número válido y mayor a cero.");
    }
}

function contarCaracteresPalabra() {
    // Mensaje inicial explicando el propósito del sistema
    alert(' Este sistema permite al usuario ingresar varias palabras y, por cada una, cuenta cuántos caracteres tiene. Muestra la longitud de cada palabra ingresada de forma individual.')
    let Cpalabras = parseInt(prompt('¿Cuantas palabras desea ingresar?'))

    for( let i = 1; i <= Cpalabras ; i = i +1){
        let palabra = prompt('Ingrese la palabra #' + i + ':')
        let Ccaracteres = palabra.length

        alert('la palabra' + palabra + 'tiene un total de ' + Ccaracteres + ' caracteres')
    }

    alert('Ha finalizado segun la cantidad de palabras')
}

function generadorNumerospares() {
    // Mensaje inicial explicando el propósito del sistema
    alert('Este sistema genera y muestra los primeros números pares, comenzando desde el número 2. El usuario indica cuántos desea ver, y el sistema construye la secuencia correspondiente.')
    let pares = parseFloat(prompt('¿Cuantos numeros pares desea generar?'))
    let resultado = []
    for(let i = 0; i <= pares ; i = i + 1){
        resultado.push(i * 2)
    }

    alert('los pares generados son:\n ' + resultado)
}

//Algoritmos de arreglos
function registrarNotas() {
    alert("Este algoritmo solicita el nombre de un estudiante y registra las notas de 5 materias. Luego calcula el promedio general y verifica si alguna nota es menor a 3.0. Si es así, el estudiante queda en riesgo académico.");

    let nombre = prompt("Ingrese el nombre del estudiante:");
    let notas = []; // Arreglo para almacenar las 5 notas
    let suma = 0;   // Para calcular el promedio
    let materias = ["Matemáticas", "Español", "Inglés", "Ciencias", "Sociales"];
    let materiasBajas = [];

    for (let i = 0; i < 5; i++) {
        let nota = parseFloat(prompt("Ingrese la nota para " + materias[i] + " (1.0 a 5.0):"));
        notas[i] = nota; // Guardamos la nota
        suma += nota;

        if (nota < 3.0) {
            materiasBajas.push(materias[i]); // Materia con nota baja
        }
    }

    let promedio = suma / 5;
    alert("Estudiante: " + nombre);
    
    for (let i = 0; i < 5; i++) {
        alert("Nota de " + materias[i] + ": " + notas[i]);
    }

    alert("Promedio general: " + promedio.toFixed(2));

    if (materiasBajas.length > 0) {
        alert(" El estudiante está en riesgo académico. Tiene notas bajas en: " + materiasBajas.join(", "));
    }

    if (promedio >= 4.0) {
        alert("Excelente trabajo, " + nombre + "! Sigue así.");
    } else if (promedio >= 3.0) {
        alert("Buen trabajo, " + nombre + ". Puedes mejorar aún más.");
    } else {
        alert(" El promedio es bajo. Es necesario reforzar las materias, " + nombre + ".");
    }
}


function explicacionesArrays(){

    /*Un arreglo es una coleccion de datos almacenados de una variable*/
     let frutas = ["Manzana", "Melon", "Pera", "Fresas", "Sandia" ]
    /*Podemos acceder a los elementos del arreglo uno a la vez*/
    alert(frutas[1])
    /*podemos imprimir o acceder a todos los elementos del arreglo con join*/
    alert(frutas.join(" -"))
    /* para recorrer todos los datos de un arreglo necesitamos usar un for*/ 
    alert(frutas.length)

    for(let i = 0; i < frutas.length; i++){
         alert(" La fruta en la posición " + i + " es " + frutas[i])
    }
       
    /*Insetar datos a un arreglo al final*/ 
    let nuevaFruta = prompt("Ingrese una fruta diferente")

    frutas.push(nuevaFruta);
    alert(frutas.join(" - "))
    /*Insertar datos a un arreglo al principio*/ 
    let nuevaFruta2 = prompt("Ingrese una fruta diferente")
    frutas.unshift(nuevaFruta2);
    alert(frutas.length);
    alert(frutas.join(" / "))

    /* Eliminar segin su posicion o index*/ 
    frutas.splice(1,1)
    alert(frutas.join(" - "))

    /*Eliminar el ultimo dato de un arreglo*/
    frutas.pop()
    alert(frutas.join(" - "))

    /*Eliminar el primer dqato de un arreglo*/ 
    frutas.shift()
    alert(frutas.join(" - "))

    /*Como editar o remplazar el valor */ 
    frutas[2]= "Banana"
    alert(frutas.join(" - "))

}

function encuestaSatisfaccionUsuarios() {
    // Explicación inicial del programa
    alert("Vamos a realizar una encuesta a 10 personas sobre su satisfacción con un servicio.\nCalificación del 1 al 5.");

    // Arreglo para guardar las respuestas
    let respuestas = [];

    // Recolectamos las 10 respuestas
    for (let i = 0; i < 10; i++) {
        let respuesta = parseInt(prompt("Usuario " + (i + 1) + ": ¿Qué calificación das al servicio? (1 a 5)"));
        respuestas[respuestas.length] = respuesta;
    }

    // Contadores para cada calificación
    let cant1 = 0, cant2 = 0, cant3 = 0, cant4 = 0, cant5 = 0;

    // Recorremos el arreglo para contar las respuestas
    for (let i = 0; i < respuestas.length; i++) {
        if (respuestas[i] === 1) {
            cant1++;
        } else if (respuestas[i] === 2) {
            cant2++;
        } else if (respuestas[i] === 3) {
            cant3++;
        } else if (respuestas[i] === 4) {
            cant4++;
        } else if (respuestas[i] === 5) {
            cant5++;
        }
    }

    // Mostramos cuántos votaron por cada número
    alert("Resultados de la encuesta:\n" +
          "Calificación 1: " + cant1 + " personas\n" +
          "Calificación 2: " + cant2 + " personas\n" +
          "Calificación 3: " + cant3 + " personas\n" +
          "Calificación 4: " + cant4 + " personas\n" +
          "Calificación 5: " + cant5 + " personas");

    // Calculamos el promedio
    let suma = 0;
    for (let i = 0; i < respuestas.length; i++) {
        suma = suma + respuestas[i];
    }

    let promedio = suma / respuestas.length;
    alert("El promedio general de satisfacción es: " + promedio);

    // Evaluamos si la mayoría está satisfecha (4 o 5)
    let satisfechos = cant4 + cant5;

    if (satisfechos > 5) {
        alert("La mayoría de los usuarios están satisfechos con el servicio.");
    } else {
        alert("La mayoría de los usuarios NO están satisfechos con el servicio.");
    }
}

function analisisTemperaturasSemanales() {
    // Explicación del programa
    alert("Vamos a analizar las temperaturas de una semana.Veremos el promedio, la más alta, la más baja y cuántos días superaron los 23 grados.");

    // Arreglo con temperaturas fijas
    let temperaturas = [22, 24, 21, 23, 25, 26, 22];

    // Variables para cálculos
    let suma = 0;
    let mayor = temperaturas[0];
    let menor = temperaturas[0];
    let diasCalurosos = 0;

    // Recorrer el arreglo
    for (let i = 0; i < temperaturas.length; i++) {
        let temp = temperaturas[i];
        suma = suma + temp;

        // Buscar mayor
        if (temp > mayor) {
            mayor = temp;
        }

        // Buscar menor
        if (temp < menor) {
            menor = temp;
        }

        // Contar días con temperatura mayor a 23
        if (temp > 23) {
            diasCalurosos++;
        }
    }

    // Calcular promedio
    let promedio = suma / temperaturas.length;

    // Mostrar resultados
    alert("Análisis de Temperaturas:\n" +
          "Promedio: " + promedio + "°C\n" +
          "Temperatura más alta: " + mayor + "°C\n" +
          "Temperatura más baja: " + menor + "°C\n" +
          "Días con más de 23 grados: " + diasCalurosos);
}

function filtroEstudiantesAprobados() {
    // Explicación inicial del ejercicio
    alert("Vamos a trabajar con un listado de calificaciones.\nFiltraremos las notas aprobadas (mayores o iguales a 3.0), contaremos cuántos aprobaron, cuántos no y sacaremos el promedio de los aprobados.");

    // Arreglo de notas fijas
    let notas = [4.5, 2.9, 3.7, 1.8, 4.2, 3.0, 2.5, 5.0];

    // Variables para el cálculo
    let aprobados = 0;
    let reprobados = 0;
    let sumaAprobados = 0;

    // Recorrer el arreglo
    for (let i = 0; i < notas.length; i++) {
        let nota = notas[i];

        if (nota >= 3.0) {
            alert("Nota aprobada: " + nota);
            aprobados++;
            sumaAprobados += nota;
        } else {
            alert("Nota reprobada: " + nota);
            reprobados++;
        }
    }

    // Calcular el promedio solo si hubo aprobados
    let promedioAprobados = 0;
    if (aprobados > 0) {
        promedioAprobados = sumaAprobados / aprobados;
    }

    // Mostrar resumen final
    alert("Resumen del análisis:\n" +
          "Estudiantes aprobados: " + aprobados + "\n" +
          "Estudiantes reprobados: " + reprobados + "\n" +
          "Promedio de los aprobados: " + promedioAprobados);
}

function registroUsuarios() {
    alert("Este algoritmo permite registrar un usuario con nombre, correo y contraseña. Luego simula el inicio de sesión validando los datos. Si los datos no coinciden, se permite reintentar hasta 3 veces.");

    // Paso 1: Registrar usuario
    let usuario = {
        nombre: prompt("Registre su nombre:"),
        correo: prompt("Registre su correo electrónico:"),
        contrasena: prompt("Cree una contraseña:")
    };

    alert("Registro exitoso. Ahora inicie sesión.");

    // Paso 2: Intentos de acceso
    let intentos = 0;
    let accesoConcedido = false;

    while (intentos < 3 && !accesoConcedido) {
        let correoIngresado = prompt("Ingrese su correo:");
        let contrasenaIngresada = prompt("Ingrese su contraseña:");

        if (correoIngresado === usuario.correo && contrasenaIngresada === usuario.contrasena) {
            alert(" Acceso concedido. Bienvenido, " + usuario.nombre + "!");
            accesoConcedido = true;
        } else {
            intentos++;
            if (intentos < 3) {
                alert("Datos incorrectos. Intente de nuevo. Intento " + intentos + " de 3.");
            }
        }
    }

    if (!accesoConcedido) {
        alert("Acceso bloqueado. Ha superado el número máximo de intentos.");
    }
}

function agendaDeContactos() {
    alert("Este algoritmo permite registrar hasta 5 contactos con nombre, número y correo. Luego podrás buscar un contacto por su nombre y editar su información si lo deseas.");

    let contactos = []; // Arreglo para guardar los contactos

    // Paso 1: Registrar hasta 5 contactos
    for (let i = 0; i < 5; i++) {
        alert("Registro del contacto #" + (i + 1));
        let contacto = {
            nombre: prompt("Ingrese el nombre del contacto:"),
            numero: prompt("Ingrese el número telefónico:"),
            correo: prompt("Ingrese el correo electrónico:")
        };
        contactos.push(contacto);
    }

    alert("Se han registrado 5 contactos correctamente.");

    // Paso 2: Buscar un contacto por nombre
    let nombreBuscado = prompt("Ingrese el nombre del contacto que desea buscar:");

    let encontrado = false;

    for (let i = 0; i < contactos.length; i++) {
        if (contactos[i].nombre.toLowerCase() === nombreBuscado.toLowerCase()) {
            alert("Contacto encontrado:\Nombre: " + contactos[i].nombre + "\Número: " + contactos[i].numero + "\Correo: " + contactos[i].correo);
            encontrado = true;

            // Paso 3: Preguntar si desea editar
            let deseaEditar = prompt("¿Deseas editar este contacto? (si / no)");

            if (deseaEditar.toLowerCase() === "si") {
                contactos[i].nombre = prompt("Nuevo nombre:");
                contactos[i].numero = prompt("Nuevo número:");
                contactos[i].correo = prompt("Nuevo correo:");
                alert("Contacto actualizado correctamente.");
            } else {
                alert("No se realizaron cambios.");
            }
            break; // Ya encontramos el contacto, no seguimos buscando
        }
    }

    if (!encontrado) {
        alert("Contacto no encontrado.");
    }
}

function sistemaDeCompras() {
    alert("Bienvenido al sistema de compras. Podrás agregar productos con su nombre, precio y cantidad. Al finalizar, verás el resumen del carrito y el total a pagar.");

    let carrito = []; // Arreglo de objetos para almacenar los productos
    let seguir = "si";

    // Paso 1: Agregar productos al carrito
    while (seguir.toLowerCase() === "si") {
        let producto = {
            nombre: prompt("Ingrese el nombre del producto:"),
            precio: parseFloat(prompt("Ingrese el precio unitario del producto:")),
            cantidad: parseInt(prompt("Ingrese la cantidad que desea comprar:"))
        };
        carrito.push(producto); // Se agrega el producto al carrito
        seguir = prompt("¿Deseas agregar otro producto? (si / no)");
    }

    // Paso 2: Calcular total y mostrar resumen
    let total = 0;
    let resumen = "Resumen del carrito:\n";

    for (let i = 0; i < carrito.length; i++) {
        let subtotal = carrito[i].precio * carrito[i].cantidad;
        total += subtotal;

        resumen += "- " + carrito[i].nombre +
            " | Precio: $" + carrito[i].precio.toFixed(2) +
            " | Cantidad: " + carrito[i].cantidad +
            " | Subtotal: $" + subtotal.toFixed(2) + "\n";
    }

    resumen += "\Total a pagar: $" + total.toFixed(2);
    alert(resumen);
}

function catalogoPeliculas() {
    alert("Bienvenido al Catálogo de Películas. Podrás buscar películas por género y ver las estrenadas después del año 2000.");

    const peliculas = [
        { titulo: "Inception", genero: "Ciencia ficción", año: 2010 },
        { titulo: "Titanic", genero: "Romance", año: 1997 },
        { titulo: "Interstellar", genero: "Ciencia ficción", año: 2014 },
        { titulo: "Coco", genero: "Animación", año: 2017 }
    ];

    // Paso 1: Buscar por género
    let generoBuscado = prompt("Ingresa el género de películas que deseas buscar (ejemplo: Ciencia ficción, Romance, Animación):");
    let resultadoGenero = "Películas del género '" + generoBuscado + "':\n";

    let encontrado = false;

    for (let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].genero.toLowerCase() === generoBuscado.toLowerCase()) {
            resultadoGenero += "- " + peliculas[i].titulo + " (" + peliculas[i].año + ")\n";
            encontrado = true;
        }
    }

    if (!encontrado) {
        resultadoGenero += "No se encontraron películas con ese género.\n";
    }

    alert(resultadoGenero);

    // Paso 2: Mostrar películas estrenadas después del año 2000
    let resultadoRecientes = "Películas estrenadas después del año 2000:\n";

    for (let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].año > 2000) {
            resultadoRecientes += "- " + peliculas[i].titulo + " | Año: " + peliculas[i].año + "\n";
        }
    }

    alert(resultadoRecientes);
}

function buscarVehiculo() {
    alert("Bienvenido al sistema de búsqueda de vehículos.\nEste sistema permite consultar los datos de un vehículo ingresando su placa.");

    const vehiculos = [
        { placa: "ABC123", marca: "Toyota", modelo: 2020 },
        { placa: "XYZ789", marca: "Chevrolet", modelo: 2018 },
        { placa: "LMN456", marca: "Ford", modelo: 2022 }
    ];

    // Paso 1: Solicitar la placa al usuario
    let placaIngresada = prompt("Ingresa la placa del vehículo que deseas buscar:");

    let encontrado = false;

    // Paso 2: Buscar en el arreglo
    for (let i = 0; i < vehiculos.length; i++) {
        if (vehiculos[i].placa.toUpperCase() === placaIngresada.toUpperCase()) {
            alert("Vehículo encontrado:\n" +
                  "Placa: " + vehiculos[i].placa + "\n" +
                  "Marca: " + vehiculos[i].marca + "\n" +
                  "Modelo: " + vehiculos[i].modelo);
            encontrado = true;
            break; // Salimos del ciclo si lo encuentra
        }
    }

    // Paso 3: Si no se encuentra
    if (!encontrado) {
        alert("Vehículo no encontrado.\Verifica que la placa esté escrita correctamente.");
    }
}

function practicaObjetos(){
    let aprendiz = {
        Nombre : "Juanita ",
        Apellidos : "Jimenez tolosa",
        Programa : "ADSO",
        Ficha : 3065273,
        Contrato : false,
        FechaFin : "01/20/2027"
    }

    /*+¿Cómo acceder a un dato del objeto? */

    // alert(aprendiz.apellidos);
    // alert(aprendiz["nombre"]);

    let apellido = aprendiz.apellidos

    /*¿Cómo acceder o mostrar todos los datos del objeto?*/
    for(let clave in aprendiz){
        alert(clave + " : " + aprendiz[clave])
    }

    /¿Cómo insertar valores a un objeto?/
    aprendiz.Edad = parseInt(prompt('Ingrese la edad'))

    /*Cómo modificar un valor de alguna clave/Caracteristica/Propiedad/Atributo */
    aprendiz.Apellidos = prompt("Ingrese su apellido")

    /*¿Cómo eliminar directamente una clave y su valor? */
    delete aprendiz.Contrato

    for(let clave in aprendiz){
        alert(clave + " : " + aprendiz[clave])
    }


}

function iniciarSesion(){
    let usuarios = [

        {
            nombre: "Antonia",
            mail: "Anto123@gmail.com",
            clave: "123abc",
            rol: "Administradora"
        },
        {
            nombre: "Marcos",
            mail: "marco345@gmail.com",
            clave: "456def",
            rol: "Administrador"
        },
        {
            nombre: "Valentina",
            mail: "Valjkl@gmail.com",
            clave: "123jkl",
            rol: "Administradora"
        }
    ];

    let correoIngresado = prompt("Ingrese su correo: ");
    let claveIngresada = prompt("Ingrese su clave: ")

    let usuarioEncontrado = null;

    for(let i = 0; i < usuarios.length; i++){
        if (
            usuarios[i].mail === correoIngresado &&
            usuarios[i].clave === claveIngresada
        ) {
            usuarioEncontrado = usuarios[i]
            break
            /*La función break sirve para finalizar o romper el bucle (for/While) */  
        }
    }

    if (usuarioEncontrado) {
        alert("Bienvenido! " + usuarioEncontrado.rol + " " + usuarioEncontrado.nombre)
    }
    else{
        alert("Datos incorrectos. Verifique o Regístrese")
    }

}

function iniciarSesionDinamico(){

    let usuarios= [];
    let cantidadUsuarios = parseInt(prompt("Ingrese la cantidad de usuarios que quiere que tenga en el sistema"));

    //paso 2: Solicitar los datos de los diferentes usuarios segun la cantidad definida 
    for(let i= 0; i < cantidadUsuarios; i++){

        let variableNombre = prompt("ingrese el nombre del usuario ")
        let variableEmail = prompt("ingrese el nombre del email")
        let variableClave = prompt("ingrese el nombre de la clave ")
        let variableRol = prompt("ingrese el nombre del rol ")
    

    // paso 3 : Creamos el objeto y lo arreglamos al arreglo
    usuarios.push(
        {
            nombre: variableNombre, 
            email: variableEmail,
            clave: variableClave,
            rol: variableRol,
        }

    )
  }

  //paso 4: Solicitamos las credenciales de acceso para el inicio de sesion, Email y clave
  let correoIngresado = prompt("Ingrese el correo con el que desea iniciar sesion");
  let claveIngresada = prompt("Ingrese la clave con el que desea iniciar sesion");

  let usuariosEncontrados = null;

  //paso 5: Validamos los datos de los difenetes objetos almacenados en el arreglo usuarios

  for(let i= 0; i < usuarios.length; i++){
    if(
        usuarios[i].email === correoIngresado &&
        usuarios[i].clave === claveIngresada
    ){
        usuariosEncontrado = usuarios[i];
        break;
    }
  }

  if(usuarioEncontrado){
    alert("BIENVENIDO " + usuariosEncontrado.rol + " " + usuariosEncontrado.nombre);
  }
  else{
    alert("usuario y contraseña invalidos")
  }

}
 
 
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("promedioDeEstudiantes").addEventListener("click", promedioDeEstudiantes);
    document.getElementById("clasificacionDeEtapas").addEventListener("click", clasificacionDeEtapas);
    document.getElementById("conversorTiempo").addEventListener("click", conversorTiempo);
    document.getElementById("menuOperaciones").addEventListener("click", menuOperaciones);
    document.getElementById("calcularTarifa").addEventListener("click", calcularTarifa);
    document.getElementById("calcularIMC").addEventListener("click", calcularIMC);
    document.getElementById("calcularSueldo").addEventListener("click", calcularSueldo);
    document.getElementById("clasificarSangre").addEventListener("click", clasificarSangre);
    document.getElementById("calcularDesempeño").addEventListener("click", calcularDesempeño);
    document.getElementById("calcularDescuento").addEventListener("click", calcularDescuento);
    document.getElementById("tablaMultiplicar").addEventListener("click", tablaMultiplicar);
    document.getElementById("contarPositivosNegativos").addEventListener("click", contarPositivosNegativos);
    document.getElementById("validadorDeContraseña").addEventListener("click", validadorDeContraseña);
    document.getElementById("acumuladorDeCompras").addEventListener("click", acumuladorDeCompras);
    document.getElementById("ingresoEstudiantes").addEventListener("click", ingresoEstudiantes);
    document.getElementById("generarTablaPersonalizada").addEventListener("click", generarTablaPersonalizada);
    document.getElementById("calcularSumaNaturales").addEventListener("click", calcularSumaNaturales);
    document.getElementById("contarCaracteresPalabra").addEventListener("click", contarCaracteresPalabra);
    document.getElementById("generadorNumerospares").addEventListener("click", generadorNumerospares);
    /*ARREGLOS*/
    document.getElementById("registrarNotas").addEventListener("click", registrarNotas);
    document.getElementById("encuestaSatisfaccionUsuarios").addEventListener("click", encuestaSatisfaccionUsuarios);
    document.getElementById("analisisTemperaturasSemanales").addEventListener("click", analisisTemperaturasSemanales);
    document.getElementById("filtroEstudiantesAprobados").addEventListener("click",filtroEstudiantesAprobados);
    document.getElementById("registroUsuarios").addEventListener("click", registroUsuarios);
    document.getElementById("agendaDeContactos").addEventListener("click", agendaDeContactos);
    document.getElementById("sistemaDeCompras").addEventListener("click", sistemaDeCompras);
    document.getElementById("catalogoPeliculas").addEventListener("click",catalogoPeliculas);
    document.getElementById("buscarVehiculo").addEventListener("click", buscarVehiculo);
    /*EJEMPLOS*/
    document.getElementById("explicacionesArrays").addEventListener("click", explicacionesArrays);
    document.getElementById("practicaObjetos").addEventListener("click",practicaObjetos);
    document.getElementById("iniciarSesion").addEventListener("click",iniciarSesion);
    document.getElementById("iniciarSesionDinamico").addEventListener("click",iniciarSesionDinamico);



});

    