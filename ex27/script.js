function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let palavra = (document.getElementById("palavra").value).toLowerCase();
    let palavraTratada = palavra.split("").reverse().join("");

    if(palavra == palavraTratada){
        // output
        document.getElementById("output").innerHTML = `
        Palavra = <span><b>${palavra}</b></span> <br><br>
        <b>Saída: É palíndroma.</b>
        `;
    }else{
        // output
        document.getElementById("output").innerHTML = `
        Palavra = <span><b>${palavra}</b></span> <br><br>
        <b>Saída: Não é palíndroma.</b>
        `;
    }
}
