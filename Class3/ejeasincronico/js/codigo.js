//fizz buzz
let i = 1;
while (i <= 100){
    if(i % 3 == 0 && i % 5 == 0){
        console.log('fizzbuzz');
    }
    else if (i % 3 == 0){
        console.log('fizz');
    }
    else if (i % 5 == 5){
        console.log('buzz');
    }
    else {
        console.log(i);
    }
    i++;
}

let x = 100;

while (x >= 100 && x <= 300){
    if (x % 7 == 0){
        console.log('Gatito')
    }
    else{
        console.log(x + 'cuye')
    }
    x++;
}