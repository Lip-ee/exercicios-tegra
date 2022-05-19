function calcular(){
    //atribuindo variáveis e convertendo em float com n casas decimais
    let precoUnit, qtdComprada, dinheiroRecebido, troco;
    precoUnit = parseFloat(document.getElementById("precoUnit").value);
    qtdComprada = parseFloat(document.getElementById("qtdComprada").value);
    dinheiroRecebido = parseFloat(document.getElementById("dinheiroRecebido").value);

    troco = (dinheiroRecebido - (qtdComprada * precoUnit)).toFixed(2)

    // output
    document.getElementById("troco").innerHTML = `
        Preço unitário do produto: ${precoUnit} <br>
        Quantidade comprada: ${qtdComprada} <br>
        Dinheiro recebido: ${dinheiroRecebido} <br>
        TROCO = ${troco}
    `
}