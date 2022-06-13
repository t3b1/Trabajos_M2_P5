// declaro un arrays para mis dos funciones
let arreglo = [1,2,3,4,5,6,7,8];
//funcion que cuenta un arrays de forma normal 
function printReverse(arr){
    for(let i = 0; i <= arr.letgh; i++){
       console.log(arr[i]);
    }
    return arr;
}
console.log(printReverse(arreglo));
//arrays clon
let arrays = arreglo.slice();
function  Reverse(ar){
    for (let i = ar.letgh; i = 0; i++){
        console.log(ar[i]);
    }
    return ar;
}
console.log(Reverse(arrays));
// funcion que pone el ultimo dato de la arrays en primera pocicion 
console.log(arreglo.reverse());

