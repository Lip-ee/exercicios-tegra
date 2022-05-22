function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let larguraTerreno = document.getElementById("largura").value;
    let comprimentoTerreno = document.getElementById("comprimento").value;
    let valorMetroQuad = document.getElementById("valor").value;
    let area, valor;

    larguraTerreno = parseFloat(larguraTerreno).toFixed(1)
    comprimentoTerreno = parseFloat(comprimentoTerreno).toFixed(1)
    valorMetroQuad = parseFloat(valorMetroQuad).toFixed(2)

    area = (larguraTerreno * comprimentoTerreno).toFixed(2)
    valor = (area * valorMetroQuad).toFixed(2)

    // output
    document.getElementById("output").innerHTML = `
    Largura do terreno: <span><b>${larguraTerreno}</b></span> <br><br>
    Comprimento do terreno: <span><b>${comprimentoTerreno}</b></span> <br><br>
    Valor do metro quadrado: <span><b>${valorMetroQuad}</b></span> <br><br>
    Área do terreno = <b>${area}</b> <br><br>
    Valor do terreno = <b>${valor}</b>
    `;
}
