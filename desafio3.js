// 1 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

// function calculaImc (peso, altura){
//      let Imc = peso / (altura * altura);
//      return console.log(Imc)
// }

// calculaImc(78,1.92);


// 2 - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

// function calcularFatorial(numero){
//      if(numero === 0 || numero ===1){
//           return 1;
//      }else{
//           return numero * calcularFatorial(numero - 1);
//      }
// }
// let numero = 5
// let fatorial = calcularFatorial(numero)
// console.log("O fatorial de", numero, "é", fatorial)


// 3 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

// function converteDolar(valor){
//      let valorDolar = 4.80;
//      let converteEmReais = valor * valorDolar;
//      converteEmReais.toFixed(2);
//      return console.log('O seu valor convertido em real e de:', converteEmReais);
// }
// converteDolar(10);

// 4 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

     // function retanguloAreaPerimetro (comprimento, largura){
     //      let area = comprimento * largura;
     //      let perimetro = (2 * comprimento) + (2 * largura);
     //      return console.log (`A área do seu retangulo é: ${area}m e o perimetro do seu rentagulo e de ${perimetro}`);
     // }
     // retanguloAreaPerimetro(10,20);


// 5 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

     // function calculaRaioDaSalaCircular(raio){
     //      const PI = 3.14;
     //      let area = PI * raio * raio;
     //      let perimetro = 2 * PI * raio;
     //      area.toFixed(2);
     //      perimetro.toFixed(2);
     //      return console.log('A area da sala circular e de:' + area.toFixed(2) + 'm e o seu perimetro e de', perimetro.toFixed(2));
     // }

     // calculaRaioDaSalaCircular(10);

// 6 - Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

     // function calculaTabuada(numero){
     //      for(let i= 1; i <= 10; i++){
     //           let resultado = numero * i;
     //                console.log(`${numero} X ${i} = ${resultado}`);
     //      }
     // }

     // calculaTabuada(10)