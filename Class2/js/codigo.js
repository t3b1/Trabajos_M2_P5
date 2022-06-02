//bonus
alert("hola bienvenido al juego del cachipun");
eleccion = prompt("piedra, papel, o tijera!");

const azar = Math.random() * 3;

let pc;

if (azar < 1) {
    pc = 'piedra';
}
else if (azar < 2){
    pc = 'papel';
}
else{
    pc = 'tijera';
}

if (eleccion == 'piedra'){
    if(pc == 'piedra'){
        console.log('empate');
    }
    else if (pc == 'papel'){
        console.log('pc gana');
    }
    else{
        console.log('usted gana');
    }
}
else if (eleccion == 'papel'){
    if(pc == 'piedra'){
        console.log('usted gana');
    }
    else if (pc == 'papel'){
        console.log('empate');
    }
    else{
        console.log('pc gana');
    }   
}
else {
    if(pc == 'piedra'){
        console.log('pc gana');
    }
    else if (pc == 'papel'){
        console.log('usted gana');
    }
    else{
        console.log('empate');
    }
}

// asincronico 3 par o impar
function parImpar()
	{
		let valor=parseInt(document.getElementById("valor").value);
		let tipo=(valor%2)?"Impar":"Par";
		document.getElementById("resultado").innerHTML="El numero "+valor+" es "+tipo;
		return false;
	}

// asincronico 4 juvilacion mujeres

/*let edadMujer = parseInt( prompt('diga su edad: '));
const juvilacion = 60;

if (edadMujer >= 60){
    alert('debe juvilarse');
}
else {
    alert('aun no se puede juvilar');
}
*/
// asincronico 5 

let sexo = prompt('que sexo es f femenino m masculino');
const juviH = 65;
const juviM = 60;
if (sexo == 'f'){
    let edad = parseInt(prompt('ingrese edad'));
    if (edad >= juviM){
        alert('debe juvilarse');
    }
    else {
        alert('aun no se puede juvilar');
    }
}
else {
    let edad = parseInt(prompt('ingrese edad'));  
    if (edad >= juviH){
        alert('debe juvilarse');
    }
    else {
        alert('aun no se puede juvilar');
    }
}
