function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let distancia = parseFloat(document.getElementById("distancia").value);
    let combustivel = parseFloat(document.getElementById("combustivel").value).toFixed(1);
    let consumoMedio = (distancia / combustivel).toFixed(3)

    // output
    document.getElementById("output").innerHTML = `
    Distância percorrida: <span><b>${distancia}</b></span> <br><br>
    Combustível gasto: <span><b>${combustivel}</b></span> <br><br>
    Consumo médio = <b>${consumoMedio}</b>
    `;
}
