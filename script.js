function verificaAprovacao(){
    let nota = document.getElementById("nota").value;
    
    if(nota >= 7){
        //document.getElementById("nota").value;
        document.getElementById("resultado").innerHTML = "Aluno(a) aprovado!"
        alert("Aluno(a) aprovado!")

    }
        else{
           document.getElementById("resultado").innerHTML = "Aluno(a) reprovado!"
           alert("Aluno(a) reprovado...")
        }
    

    console.log(nota);
}
// Dar preferência para o uso de let e cont.
// Evite o uso do var.

