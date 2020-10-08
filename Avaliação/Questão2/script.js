window.addEventListener("input", () => {

    let nome = (document.getElementById("nome").value);
    let salario = parseInt(document.getElementById("salario").value);

    let valor = document.getElementById("valor");
    valor.innerText = "O salário de " + nome + ", teve um reajuste de R$" + salario * 0.1 + " , o valor que " + nome + 
    " receberá esse mês é de: RS" + salario * 1.1;
 
 })
 

