function calcular(){
    //atribuindo variáveis e convertendo em float com n casas decimais
    let nome1, idade1, nome2, idade2, media;
    nome1 = document.getElementById("nome1").value;
    idade1 = parseFloat(document.getElementById("idade1").value);
    nome2 = document.getElementById("nome2").value;
    idade2 = parseFloat(document.getElementById("idade2").value);

    media = ((idade1 + idade2) / 2).toFixed(1)

    document.getElementById("idadeMedia").innerHTML = `
        Nome1: ${nome1} <br>
        Idade1: ${idade1} <br>
        Nome2: ${nome2} <br>
        Idade2: ${idade2} <br>
        A idade média de ${nome1} e ${nome2} é de ${media} anos
    `
}