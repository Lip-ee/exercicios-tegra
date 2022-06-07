function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let xValue = parseFloat(document.getElementById("xValue").value);
    let pares = [];

    for(let i = 1; i <= xValue; i++){
        if(i % 2 == 0){
            pares.push(`${i}<br><br>`);
        }
    }

    // output
    document.getElementById("output").innerHTML = `
    Digite o valor de X: <span><b>${xValue}</b></span> <br><br>
    <b>${pares.join("")}</b>
    `;
}
