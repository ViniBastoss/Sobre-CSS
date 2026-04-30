const name = document.getElementById("name").value;
const email = document.getElementById("email.").value;
const message = document.getElementById("message").value;

if(name === '' || email === '' || message === ''){
    alert("Todos os campos são obrigatórios");
    return false;
}

if(name.length < 3 || name.length > 50){
    alert("O texto deve ter entre 3 e 50 caracteres.");
    return false;
}

if(email.length < 3 || email.length > 50){
    alert("O email deve ter entre 5 e 50 caracteres.");
    return false;
}

const emailPartern = ;