function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let nome = document.getElementById("nome").value;
    let valorHora = parseFloat(document.getElementById("valorHora").value).toFixed(2);
    let horasTrab = parseFloat(document.getElementById("horasTrab").value);
    let salario = (horasTrab * valorHora).toFixed(2);
    
    // output
    document.getElementById("output").innerHTML = `
    Nome: <span><b>${nome}</b></span> <br><br>
    Valor por hora: <span><b>${valorHora}</b></span> <br><br>
    Horas trabalhadas: <span><b>${horasTrab}</b></span> <br><br>
    O pagamento para ${nome} deve ser <b>${salario}</b>
    `;
}
