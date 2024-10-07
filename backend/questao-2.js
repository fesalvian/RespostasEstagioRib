const text ="Teste de string aaaaaa";
let letra = "a";
var numeroDeVezes = [];

function checaString (){
    const textoMinusculo = text.toLowerCase()

    for (i = 0; i<textoMinusculo.length; i++){ //aqui testa passando por cada indice da frase, se ele achar um "a" ele aumenta um count na variavel
        if (textoMinusculo[i] === letra){
            numeroDeVezes++;
        } 
    }
}

checaString()

if (text.includes(letra)) {
    console.log(`O texto contem a letra ${letra}, ${numeroDeVezes} vezes.`);
    
}else {
    console.log(`O texto não contem a letra ${letra}.`);
    
}


