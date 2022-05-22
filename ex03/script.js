function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let n1 = document.getElementById("nome1").value;
    let i1 = parseFloat(document.getElementById("idade1").value);
    let n2 = document.getElementById("nome2").value;
    let i2 = parseFloat(document.getElementById("idade2").value);
    let media = ((i1 + i2) / 2).toFixed(1);

    // output
    document.getElementById("output").innerHTML = `
    Nome1: <span><b>${n1}</b></span> <br><br>
    Idade 1: <span><b>${i1}</b></span> <br><br>
    Nome2: <span><b>${n2}</b></span> <br><br>
    Idade2: <span><b>${i2}</b></span> <br><br>
    A idade média de ${n1} e ${n2} é de ${media} anos
    `;
}
