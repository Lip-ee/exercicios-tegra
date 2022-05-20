function calcular(){
    // atribuindo variáveis e convertendo em float com n casas decimais
    let nome = document.getElementById("nome").value;
    let valorH = parseFloat(document.getElementById("valorH").value);
    let horasTrab = parseInt(document.getElementById("horasTrab").value);

    let pag = valorH * horasTrab
    
    // output
    document.getElementById("pagamentoFinal").innerHTML = `
        Nome: ${nome} <br>
        Valor por hora: ${valorH.toFixed(2)} <br>
        Horas trabalhadas: ${horasTrab} <br>
        O pagamento para ${nome} deve ser ${pag.toFixed(2)}
    `
}
