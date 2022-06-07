function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let xValue = parseFloat(document.getElementById("xValue").value);
    let tabuada = [];

    for(let i = 1; i <= 10; i++){
        tabuada.push(`${xValue} x ${i} = ${xValue * i} <br><br>`);
    }
    
    // output
    document.getElementById("output").innerHTML = `
    Deseja a tabuada para qual valor? <span><b>${xValue}</b></span> <br><br>
    <b>${tabuada.join("")}</b>
    `;
}
