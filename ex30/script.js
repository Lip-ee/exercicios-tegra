function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let numero = parseInt(document.getElementById('numero').value);
    
    let auxiliar1 = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
    let auxiliar2 = ['vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
    let extenso;
    
    if(numero > 99 || numero < 0){
        extenso = `${numero} não está entre 0 e 99. Por favor, tente novamente.`
    }else if(numero < 20){
        extenso = auxiliar1[numero];
    }else{
        let dec = Math.floor(numero / 10);
        let unit = numero % 10;
        
        extenso = auxiliar2[dec - 2] + (unit > 0 ? ` e ${auxiliar1[unit]}` : '');
    }
    
    // output
    document.getElementById("output").innerHTML = `
    Número: <span><b>${numero}</b></span> <br><br>
    <b>Saída: ${extenso}</b>
    `;
}
