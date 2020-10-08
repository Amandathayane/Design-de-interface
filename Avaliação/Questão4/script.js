function calcular() {
    let letraA = document.getElementById("letraA").value;
    let sinal = parseInt(document.getElementById("sinal").value); 


    if (sinal == 3) {
        let total = (letraA * 1.1)/3
        document.getElementById("total").innerHTML = "Valor parcelado em 3x (acrecimo de 10% = R$ " + letraA * 0.1 + "): R$" + letraA*1.1 + " parcelado em 3x: R$ " + total;
    }else if (sinal == 5) {
        let total = (letraA * 1.2) /5
        document.getElementById("total").innerHTML = "Valor parcelado em 5x (acrecimo de 20% = R$ "  + letraA * 0.2 + "): R$" + letraA*1.2 + " parcelado em 3x: R$ " +total;
    }else{
        document.getElementById("total").innerHTML = "Pagamento a vista, no valor de: R$" + letraA;
    }
 }
