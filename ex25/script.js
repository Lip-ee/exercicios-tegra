function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let dataNasc = parseInt((document.getElementById("dataNasc").value).replace("/", ""));
    console.log(dataNasc)
    let signo;

    if(121 < dataNasc && dataNasc < 218){
        signo = "Aquário";
    }else if(219 < dataNasc && dataNasc < 320){
        signo = "Peixes";
    }else if(321 < dataNasc && dataNasc < 420){
        signo = "Áries";
    }else if(421 < dataNasc && dataNasc < 520){
        signo = "Touro";
    }else if(521 < dataNasc && dataNasc < 620){
        signo = "Gêmeos";
    }else if(621 < dataNasc && dataNasc < 722){
        signo = "Câncer";
    }else if(723 < dataNasc && dataNasc < 822){
        signo = "Leão";
    }else if(823 < dataNasc && dataNasc < 922){
        signo = "Virgem";
    }else if(923 < dataNasc && dataNasc < 1022){
        signo = "Libra";
    }else if(1023 < dataNasc && dataNasc < 1121){
        signo = "Escorpião";
    }else if(1122 < dataNasc && dataNasc < 1221){
        signo = "Sagitário";
    }else{ //if(1222 < dataNasc < 120)
        signo = "Capricórnio";
    }
    
    // output
    document.getElementById("output").innerHTML = `
    Data de Nascimento: <span><b>${dataNasc}</b></span> <br><br>
    Signo: ${signo}
    `;
}

