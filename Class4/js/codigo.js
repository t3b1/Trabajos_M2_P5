//triplicar un numero
function triplicador(num){
    let resul = num * 3;
    return resul;
}
// multiplicar 2 numeros
function multiplicador(num1, num2){
    let resul = num1 * num2;
    return resul;
}
// dividir dos numeros
function division(num1, num2){
    let resul = num1 / num2;
    return resul;
}
// resto entre 2 numeros
function resto(num1, num2){
    let resul = num1 % num2;
    return resul;
}
//funcion que usa todas las otras funciones
function ocupa(){
    let resul = triplicador(5)
        resul = multiplicador(resul, 12)
        resul = division(resul, 12)
        resul = resto(resul, 3)
    return resul;
}

console.log(ocupa())

