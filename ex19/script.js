function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let salario = parseFloat(document.getElementById("salario").value).toFixed(2);
    let novoSal, aumento, porcentagem;

    salario = parseFloat(salario).toFixed(2);

    if(salario <= 999.99){
        porcentagem = 0.20;
        aumento = salario * porcentagem;
        novoSal = salario + aumento;
    }else if(salario <= 2999.99){
        porcentagem = 0.15;
        aumento = salario * porcentagem;
        novoSal = salario + aumento;
    }else if(salario <= 7999.99){
        porcentagem = 0.10;
        aumento = salario * porcentagem;
        novoSal = salario + aumento;
    }else{
        porcentagem = 0.05;
        aumento = salario * porcentagem;
        novoSal = salario + aumento;
    }

    novoSal = parseFloat(novoSal).toFixed(2);
    aumento = parseFloat(aumento).toFixed(2);
    
    // output
    document.getElementById("output").innerHTML = `
    Digite o salário da pessoa: <span><b>${salario}</b></span> <br><br>
    Novo salário = <b>R$${novoSal}</b> <br><br>
    Aumento = <b>R$${aumento}</b> <br><br>
    Porcentagem = <b>${porcentagem * 100}%</b>
    `;
}
