function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let somaImpares = 0;
    
    for(let i=num1; i<num2; i++){
        if(i % 2 != 0){
            somaImpares += i;
        }
    }
    
    // output
    document.getElementById("output").innerHTML = `
    Digite dois números: <br><br>
    <span><b>${num1}</b></span> <br><br>
    <span><b>${num2}</b></span> <br><br>
    <b>SOMA DOS ÍMPARES = ${somaImpares}</b>
    `;
}
