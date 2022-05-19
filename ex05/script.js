function calcular(){
    // atribuindo variáveis e convertendo em float com n casas decimais
    let raio = parseFloat(document.getElementById("raio").value);
    let pi = 3.14159
    let area = (pi * (raio ** 2)).toFixed(3)

    // output
    document.getElementById("area").innerHTML = `
        Digite o valor do raio do circulo: ${raio.toFixed(1)} <br>
        ÁREA = ${area}
    `
}