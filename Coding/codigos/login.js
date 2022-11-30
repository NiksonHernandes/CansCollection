//fechar alert
function closeAlert() {
    var a1 = document.getElementById("alert1").hidden = true;
    var a2 = document.getElementById("alert2").hidden = true;
}

a1 = document.getElementById("alert1").hidden = true;
a2 = document.getElementById("alert2").hidden = true;

const emailLogin = document.getElementById("emailLogin");
const senhaLogin = document.getElementById("myPass");
const btnEntrar = document.getElementById("btn_entrar");
const btnEsqueceuSenha = document.getElementById("esqueceu_senha");

//array
let armazena = [
    {
        nome: "Administrador",
        email: "admin",
        password: "admin"
    },

    {
        nome: "Nikson",
        email: "Nikson Hernandes",
        password: "123",
    }
];

function verifica(lista, camp1, camp2) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].email == camp1 && lista[i].password == camp2) {
            return true;
        } else {
            return false;
        }

    }
}

btnEntrar.addEventListener("click", function () {

    if (emailLogin.value == '' || senhaLogin == '') {
        a1 = document.getElementById("alert1").hidden = false;
        setTimeout(function () {
            a1 = document.getElementById("alert1").hidden = true;

        }, 2000);

    } else {
        if (verifica(armazena, emailLogin.value, senhaLogin.value)) {
            window.location.href = "http://127.0.0.1:5500/TelaPrincipal/TelaPrincipal.html"

        } else {
            a2 = document.getElementById("alert2").hidden = false;
            setTimeout(function () {
                a2 = document.getElementById("alert2").hidden = true;

            }, 2000);
        }
    }
})

btnEsqueceuSenha.addEventListener("click", function(){
    alert(`Opss! \nEste botão esta em fase de desenvolvimento! '~' \n\nEquipe Cans Callection `)

})



