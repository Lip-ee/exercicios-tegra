function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let palavra = (document.getElementById("palavra").value).toLowerCase();
    
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

    let qtdConsoantes = 0;
    let qtdVogais = 0;

    for(let i = 0; i < palavra.length; i++){
        if(vogais.includes(palavra.charAt(i))){
            qtdVogais += 1;
        }else if(consoantes.includes(palavra.charAt(i))){
            qtdConsoantes += 1;
        }else{
            //pass
        }
    }
    

    // output
    document.getElementById("output").innerHTML = `
    Palavra: <span><b>${palavra}</b></span> <br><br>
    <b>Vogais: ${qtdVogais}</b> <br><br>
    <b>Consoantes: ${qtdConsoantes}</b>
    `;
}
