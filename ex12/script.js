function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    
    let x1, x2, delta, resposta;

    delta = (b * b) - 4 * a * c

    if(delta < 0){
        resposta = "<b>Esta equação não possui raízes reais<b>"
    }else{
        x1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(4);
        x2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(4);
        resposta = `
            X1 = <b>${x1}</b> <br><br>
            X2 = <b>${x2}</b>
        `;
    }

    // output
    document.getElementById("output").innerHTML = `
    Coeficiente a: <span><b>${a}</b></span> <br><br>
    Coeficiente b: <span><b>${b}</b></span> <br><br>
    Coeficiente c: <span><b>${c}</b></span> <br><br>
    ${resposta}
    `;
}
