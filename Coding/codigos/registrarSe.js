//função ver senha
function myFunction() {
    var x = document.getElementById("passwordRegister");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

//fechar alert
function closeAlert() {
    var a1 = document.getElementById("alert1").hidden = true;
    var a2 = document.getElementById("alert2").hidden = true;
}
a1 = document.getElementById("alert1").hidden = true;
a2 = document.getElementById("alert2").hidden = true;

const nomeRegister = document.getElementById("nomeRegister");
const emailRegister = document.getElementById("emailRegister");
const passwordRegister = document.getElementById("passwordRegister");
const btnCriarConta = document.getElementById("btnCriarConta");

//factory function
function geraObjCadastro(nomeRegister, emailRegister, passwordRegister) {
    return {
        nomeRegister,
        emailRegister,
        passwordRegister
    }
}

//array
let armazena = [
    {
        nomeRegister: "Administrador",
        emailRegister: "adm",
        passwordRegister: "adm"
    },

    {
        nomeRegister: "Nikson",
        emailRegister: "Nikson Hernandes",
        passwordRegister: "123",
    }
];

//função adiciona registro
function adicionarObjNoArray(valor, lista) {
    lista.push(valor);
}

btnCriarConta.addEventListener("click", function () {

    if ((nomeRegister.value != '') && (emailRegister.value != '') && (passwordRegister.value != '')) {

        let adicionarConta = geraObjCadastro(nomeRegister.value, emailRegister.value, passwordRegister.value);

        adicionarObjNoArray(adicionarConta, armazena);
        console.log(armazena);

        a2 = document.getElementById("alert2").hidden = false;

        setTimeout(function() {
            //troca de tela
            window.location.href= "http://127.0.0.1:5500/TelaPrincipal/TelaPrincipal.html"
        }, 1500);
        
        nomeRegister.value = '';
        emailRegister.value = '';
        passwordRegister.value = '';

    } else {
        a1 = document.getElementById("alert1").hidden = false;
    }


})


