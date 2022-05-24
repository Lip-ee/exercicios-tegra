function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let qtdMin = parseFloat(document.getElementById("qtdMin").value);
    
    let valor = 50.00;
    let extra = qtdMin - 100.00;
    
    // if(qtdMin <= 100){
    //     valor = 50.00;
    // }else{
    //     valor += (extra * 2.00)
    // }

    valor = qtdMin <= 100.00 ? valor = (valor).toFixed(2) : (valor += extra * 2).toFixed(2);

    // output
    document.getElementById("output").innerHTML = `
    Digite a quantidade de minutos: <span><b>${qtdMin}</b></span> <br><br>
    Valor a pagar: <b>R$${valor}</b>
    `;
}
