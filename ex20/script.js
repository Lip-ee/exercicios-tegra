function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let numStart = parseFloat(document.getElementById("numStart").value);
    let numEnd = parseFloat(document.getElementById("numEnd").value);
    let somaTotal = 0;

    for(let i = numStart; i <= numEnd; i++){
        somaTotal += i;
    }

    // output
    document.getElementById("output").innerHTML = `
    Número inicial: <span><b>${numStart}</b></span> <br><br>
    Número final: <span><b>${numEnd}</b></span> <br><br>
    Resultado: <b>${somaTotal}</b>
    `;
}
