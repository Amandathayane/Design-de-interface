function calcular() {

    let letraA = parseInt(document.getElementById("letraA").value);
    let letraB = parseInt(document.getElementById("letraB").value);


    if (letraA == letraB){
        let C = letraA + letraB
        document.getElementById("C").innerHTML = "Os valores " + letraA + " e " + letraB + " são iguais, a soma dos dois é "+ C;
    } else{
        let C = letraA * letraB
        document.getElementById("C").innerHTML = "Os valores " + letraA + " e " + letraB + " são diferentes, a multiplicação dos dois é "+ C;
        
    }
 
 }
 
