function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let precoUnit = parseFloat(document.getElementById("precoUnit").value).toFixed(2);
    let qtdComprada = parseFloat(document.getElementById("qtdComprada").value);
    let dinheiroRecebido = parseFloat(document.getElementById("dinheiroRecebido").value).toFixed(2);
    
    let valorTotal = precoUnit * qtdComprada;
    let troco = (dinheiroRecebido - valorTotal).toFixed(2);
    let falta = (valorTotal - dinheiroRecebido).toFixed(2);

    let resposta = dinheiroRecebido >= valorTotal ? `TROCO = ${troco}` : `DINHEIRO INSUFICIENTE. FALTAM R$${falta}`;

    // output
    document.getElementById("output").innerHTML = `
    Preço unitário do produto: <span><b>${precoUnit}</b></span> <br><br>
    Quantidade comprada: <span><b>${qtdComprada}</b></span> <br><br>
    Dinheiro recebido: <span><b>${dinheiroRecebido}</b></span> <br><br>
    <b>${resposta}</b>
    `;
}
