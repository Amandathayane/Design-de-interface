window.addEventListener("input", () => {

    let letraA = parseInt(document.getElementById("letraA").value);
    let letraB = parseInt(document.getElementById("letraB").value);
    let letraC = parseInt(document.getElementById("letraC").value);

    let soma = document.getElementById("soma");
    soma.innerText = letraA + letraB + letraC;
 
    let media = document.getElementById("media");
    media.innerText = (letraA + letraB + letraC)/3;
 
 })
 

