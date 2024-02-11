// Realizar operaciones con dos números. Pedir al usuario que ingrese dos números
// diferentes y mayores a cero. Para ambos números, calcular lo siguiente:

// DATOS DE ENTRADA
// Se crean dos variables donde el usuario le da el valor
const num1 = Number(prompt("ingrese el primer valor"));
const num2 = Number(prompt("ingrese el segundo valor"));

// PROCESOS
// Se suman ambas variables y el resultado se guarda en una nueva variable
const suma = num1 + num2;

// Se restan ambas variables y el resultado se guarda en una nueva variable
const resta = num1 - num2;

// Se dividen ambas variables y el resultado se guarda en una nueva variable
const division = num1 / num2;

// Se multiplican ambas variables y el resultado se guarda en una nueva variable
const multi = num1 * num2;

// Se obtiene el modulo y el  resultado se guarda en una nueva variable
const modulo = num1 % num2;

// SALIDA DE DATOS
// Se muestra el resultado en la consola
console.log("el valor de la suma es " + suma);
console.log("el valor de la resta es " + resta);
console.log("el valor de la división es " + division);
console.log("el valor de la multiplicación es " + multi);
console.log("el valor del residuo es " + modulo);
