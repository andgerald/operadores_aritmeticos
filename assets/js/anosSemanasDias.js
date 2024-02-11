// Crear un programa que pida al usuario una cantidad de días y que muestre su
// equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
// resultado debe ser 1 año, 1 semana y 1 día. (3 Puntos)
// Se debe considerar lo siguiente:
// ● 1 año tiene 365 días
// ● 1 semana tiene 7 días

// ENTRADA DE DATOS
// Se crean una variable donde el usuario le da el valor  el cual equivale a los dias
const diasIngresados = Number(prompt("Ingrese la cantidad de días"));

// PROCESOS

//dias ingreasados divididos en dias del año
const anos = Math.floor(diasIngresados / 365);

// residuo de dias ingresados versus dias del año luego se divide en 7 (dias de la semana)
const semanas = Math.floor((diasIngresados % 365) / 7);

// redisuo de dias ingresados versus dias del año,  luego a ese resultado se le saca el residuo versus dias de la semana
const dias = (diasIngresados % 365) % 7;

// SALIDA DE DATOS
// Se muestra el resultado en la consola
console.log(
  `los dias ingresados equivalen a  ${anos} años,  ${semanas} semanas y  ${dias} días `
);
