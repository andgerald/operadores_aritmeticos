// Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que
// la transforme a grados Kelvin y Fahrenheit.

// ENTRADA DE DATOS
// Se crean una variable donde el usuario le da el valor
const gradosCelsius = Number(
  prompt("Ingrese la temperatura en grados Celsius")
);

// PROCESOS
// Se suma el valor de la variable ingresada por el usuario con la base de grados kelvin (273.15  = 0°C)
const gradosKelvin = gradosCelsius + 273.15;

// Se  aplica formula de conversion  (0 °C × 9/5) + 32
const gradosFahrenheit = (gradosCelsius * 9) / 5 + 32;

// SALIDA DE DATOS
// Se muestra el resultado en la consola
console.log("La temperatura en grados Kelvin es: " + gradosKelvin);
console.log("La temperatura en grados Fahrenheit es: " + gradosFahrenheit);
