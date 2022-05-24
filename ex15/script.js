function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let glicose = parseFloat(document.getElementById("glicose").value).toFixed(1);

    let classificacao;

    if (glicose <= 100){
        classificacao = "Normal"
    }else if (glicose <= 140){
        classificacao = "Elevado"
    }else{
        classificacao = "Diabetes"
    }
    
    // output
    document.getElementById("output").innerHTML = `
    Digite a medida da glicose: <span><b>${glicose}</b></span> <br><br>
    Classificação: ${classificacao}
    `;
}
