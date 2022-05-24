function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);

    let notaFinal = (nota1 + nota2).toFixed(1)

    let situacao = notaFinal >= 60.00 ? "APROVADO" : "REPROVADO"

    // output
    document.getElementById("output").innerHTML = `
    Digite a primeira nota: <span><b>${nota1}</b></span> <br><br>
    Digite a segunda nota: <span><b>${nota2}</b></span> <br><br>
    Nota final = <b>${notaFinal}</b> <br><br>
    ${situacao}
    `;
}
