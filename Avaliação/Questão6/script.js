function calcular() {
    let letraA = parseInt(document.getElementById("letraA").value);
    let letraB = parseInt(document.getElementById("letraB").value);
    let sinal = parseInt(document.getElementById("sinal").value); 

    if (sinal == 1) {
        let C = letraA+letraB
        document.getElementById("C").innerHTML =  letraA + " + " + letraB + " é igual a " + C;
    }else if (sinal == 2) {
        let C = letraA*letraB
        document.getElementById("C").innerHTML =  letraA + " * " + letraB + " é igual a "  + C;
    }else{
        let C = letraA/letraB
        document.getElementById("C").innerHTML =  letraA + " / " + letraB  + " é igual a " + C;
    }
 }