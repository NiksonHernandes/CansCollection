
const emailLogin = document.getElementById("emailLogin");
const senhaLogin = document.getElementById("myPass");
const btnEntrar = document.getElementById("btn_entrar");

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

function verifica(lista, camp1, camp2){
    for(let i = 0; i<lista.length; i++){
        if(lista[i].email == camp1 && lista[i].password == camp2) {
            return true;
        } else {
            return false;
        }
        
    }
}

btnEntrar.addEventListener("click", function(){
    if (verifica(armazena, emailLogin.value, senhaLogin.value)) {
        // setTimeout(function() {
        //     //troca de tela
        //     window.location.href= "http://127.0.0.1:5500/TelaPrincipal/TelaPrincipal.html"
        // }, 1500);
        window.location.href= "http://127.0.0.1:5500/TelaPrincipal/TelaPrincipal.html"
    }else{
        alert("Usuario ou senha inválidos")
    }
    
})



