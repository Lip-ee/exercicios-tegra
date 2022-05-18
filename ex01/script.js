function calcular(){
    // atribuindo variáveis
    let larguraTerreno = document.getElementById("largura").value;
    let comprimentoTerreno = document.getElementById("comprimento").value;
    let valorMetroQuad = document.getElementById("valor").value;
    let area, valor;

    // convertendo em float com 2 casas decimais
    larguraTerreno = parseFloat(larguraTerreno).toFixed(2);
    comprimentoTerreno = parseFloat(comprimentoTerreno).toFixed(2);
    valorMetroQuad = parseFloat(valorMetroQuad).toFixed(2);
    
    area = parseFloat(larguraTerreno * comprimentoTerreno).toFixed(2);
    valor = parseFloat(area * valorMetroQuad).toFixed(2);

    // verificar logs
    // console.log(`${larguraTerreno}`);
    // console.log(`${comprimentoTerreno}`);
    // console.log(`${valorMetroQuad}`);

    document.getElementById("areaTerreno").innerHTML = `Área do terreno = ${area}`;
    document.getElementById("valorTerreno").innerHTML = `Preço do terreno = ${valor}`;
}
