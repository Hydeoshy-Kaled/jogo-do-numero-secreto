OiieMundo();
retornaNome('Hydeoshy');
numeroDobro(3);
calculaMedia(3,3,3);
maiorNumero(10,9);
multiplicar(20);


function OiieMundo() {
    console.log('Olá mundo')
}

function retornaNome(nome){
    console.log(`Olá ${nome}`)
}

function numeroDobro(numero){
    return console.log(numero * 2);
}

function calculaMedia(num1, num2, num3){
    return console.log((num1 + num2 + num3) / 3);
}

function maiorNumero(num1,num2){
    if(num1 == num2){
        return console.log('Os numeros são iguais');
    }else if (num1 > num2){
        return console.log(num1);
    }else{
        return console.log(num2);
    }
}

function multiplicar(num1){
    return console.log(num1 * num1);
}