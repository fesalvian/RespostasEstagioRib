const numero = 5;

function fibonacci (max){
    let sequencia = [0, 1] //inicio da sequencia aqui
    console.log(sequencia); // ta realizando certo (eu acredito)
    
    let i = 2

while (true){

    const proximo = sequencia [i -1] + sequencia [i -2] //aqui ele realiza a operação de fibo
    if (proximo >max) {
        break;
    }
    sequencia.push(proximo);
    i++;
} return sequencia
}

    const sequenciaFib = fibonacci(numero)

if (sequenciaFib.includes(numero)) { //log só pra mostrar em text 
    console.log(`O valor ${numero} contem na sequencia de fibonacci`);    
} else {
    console.log(`O valor ${numero} não contem na sequencia de fibonacci`);
}
