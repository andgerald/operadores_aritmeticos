// Crear un programa que solicite al usuario 5 números y realice los cálculos que se piden
// a continuación.
// ● La suma de todos los números.
// ● El promedio de los 5 números ingresados

// ENTRADA DE DATOS
// Se crean cinco variables donde el usuario le da el valor
const num1 = Number(prompt("ingrese el primer valor"));
const num2 = Number(prompt("ingrese el segundo valor"));
const num3 = Number(prompt("ingrese el tercer valor"));
const num4 = Number(prompt("ingrese el cuarto valor"));
const num5 = Number(prompt("ingrese el quinto valor"));

// PROCESOS
//suma de todos los valores ingresados
const suma = num1 + num2 + num3 + num4 + num5;

//la suma de los valores dividido en 5
const promedio = suma / 5;

// SALIDA DE DATOS
// Se muestra el resultado en la consola
console.log(`La suma de todos los valores ingresados es: ${suma}`);
console.log(`El promedio de los valores ingresados es: ${promedio}`);
