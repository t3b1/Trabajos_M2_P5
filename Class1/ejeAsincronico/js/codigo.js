/* ejrcicio 3 clase1 asincronico*/
let edad;
const dias = 365;

edad = prompt('cual es su edad');
tusdias = dias * parseInt(edad);
alert('llevas ' + tusdias + ' dias de vida');
console.log('llevas ' + tusdias + ' dias de vida');

/* ejercicio 4 clase1 asincronico*/
const edadmaxima = 81;
const super8 = 500;
let snackdiario = prompt('cuanto snack comeras diario');
let restantes = edadmaxima - parseInt(edad);
resto = restantes * dias;

snack = resto * parseInt(snackdiario);
total = super8 * snack;
alert('necesitaras ' + snack + ' snack para que acances hasta los 81 años');
alert('y gastaras ' + total);