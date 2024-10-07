/*SOMA tera o valor de 66, pois se indice = 12, k começa em 1, e o
looping diz que enquanto k for menos que indice, ele ira somar
um ao valor de K (11 vezes) e ira somar k com SOMA*/

let indice = 12
let soma = 0


function imprimirSoma(){
for (k=1; k<indice; k++){
    soma = soma + k
}
return soma;
}

console.log(imprimirSoma());
