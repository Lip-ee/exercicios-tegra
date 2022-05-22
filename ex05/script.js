function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let raio = parseFloat(document.getElementById("raio").value).toFixed(1);
    let pi = 3.14159;
    let area = (pi * (raio ** 2)).toFixed(3);
    
    // output
    document.getElementById("output").innerHTML = `
    Digite o valor do raio do círculo: <span><b>${raio}</b></span> <br><br>
    Área = <b>${area}</b>
    `;
}
