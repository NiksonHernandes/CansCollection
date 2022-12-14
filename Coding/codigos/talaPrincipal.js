//configurações do navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

//fechar o modal
var modal = document.getElementById('id01');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//fechar alert
function closeAlert() {
  var a1 = document.getElementById("alert1").hidden = true;
  var a3 = document.getElementById("alert3").hidden = true;
}

//fecha alert de bem-vindo dps de 4 seg
setTimeout(function () {
  var a3 = document.getElementById("alert3").hidden = true;
}, 4000);

a1 = document.getElementById("alert1").hidden = true;

//##############################################################

//factory function
class Lata {
  constructor(nomeLata, lote, pais, volume, tipo) {
    this._nomeLata = nomeLata,
    this._lote = lote,
    this._pais = pais, 
    this._volume = volume,
    this._tipo = tipo
  }
}

//array
var armazena = [
  {
    _nomeLata: "Bush",
    _lote: "SFGI4435",
    _pais: "EUA",
    _volume: 450,
    _tipo: "Cerveja"
  },  

  {
    _nomeLata: "Sacramento",
    _lote: "OLKP0933",
    _pais: "Holanda",
    _volume: 500,
    _tipo: "Cerveja"
  },  

  {
    _nomeLata: "Coca-Cola - Special Edition",
    _lote: "SADF3455",
    _pais: "Hong-Kong",
    _volume: 750,
    _tipo: "Refrigerante"
  },  

]
var auxPosicao = '';

function cadastrar(obj, lista) {
  lista.push(obj);
}

function altera(obj, lista, posicao) {
  lista[posicao] = obj;
}

function excluir(lista, posicao) {
  lista.splice(posicao, 1);
}

function listarTabela(lista) {
  let auxHtml = ' ';
  for (let i=0; i < lista.length; i++) {
    auxHtml += '<tr>' + '<td>' + lista[i]._nomeLata + '</td>' 
        + '<td>' + lista[i]._lote + '</td>' 
        + '<td>' + lista[i]._pais + '</td>' 
        + '<td>' + lista[i]._volume + '</td>' 
        + '<td>' + lista[i]._tipo + '</td>' 
        + '<td>' + 
        '<button class="btn btn-info" rel="'+ i +'" > INFO </button>' + 
        '</td>' + '<td>' + 
        '<button class="btn btn-warning" rel="'+ i +'" >A</button>' + 
        '</td>' + '<td>' + 
        '<button class="btn btn-danger" rel="'+ i +'">D</button> ' + '</td>' + 
        '</tr>'; 
  }
  return auxHtml;
}

document.getElementById("corpoTabela").innerHTML = listarTabela(armazena);

let btn_cadastrar = document.getElementById("btn_modal");
let btn_addLata = document.getElementById("btn_addLata");
let btn_pesquisar = document.getElementById("btn_pesquisar");

btn_pesquisar.addEventListener("click", function() { 
  alert(`Opss! \nEste botão esta em fase de desenvolvimento! '~' \n\nEquipe Cans Callection `)
})

btn_addLata.addEventListener("click", function() {

  btn_cadastrar.style.display = 'block';
  auxPosicao = ''

  document.getElementById("nomedaLata").value = '';
  document.getElementById("lote").value = '';
  document.getElementById("pais").value = '';
  document.getElementById("volume").value = '';
  document.getElementById("tipo").value = '';

  $("#nomedaLata").removeAttr('disabled');
  $("#lote").removeAttr('disabled');
  $("#pais").removeAttr('disabled');
  $("#volume").removeAttr('disabled');
  $("#tipo").removeAttr('disabled');
})

btn_cadastrar.addEventListener("click", function() {

  let nomeLata = document.getElementById("nomedaLata").value;
  let lote = document.getElementById("lote").value;
  let pais = document.getElementById("pais").value;
  let volume = document.getElementById("volume").value;
  let tipo = document.getElementById("tipo").value;

  if(nomeLata == '' || lote == '' || pais == '' || volume == '' || tipo == '') {
    a1 = document.getElementById("alert1").hidden = false;
    setTimeout(function() {
      a1 = document.getElementById("alert1").hidden = true;
            
    }, 2000);
  

  } else {
    let geraObjLata = new Lata(nomeLata, lote, pais, volume, tipo)

    if(auxPosicao == '') {
      cadastrar(geraObjLata, armazena);
    } else {
      altera(geraObjLata, armazena, auxPosicao);
      auxPosicao = '';
    }
  
    document.getElementById("corpoTabela").innerHTML = listarTabela(armazena);
    document.getElementById('id01').style.display='none'

    document.getElementById("nomedaLata").value = '';
    document.getElementById("lote").value = '';
    document.getElementById("pais").value = '';
    document.getElementById("volume").value = '';
    document.getElementById("tipo").value = '';
     
  }
})


$("#corpoTabela").on("click", '.btn-warning', function () {

  let posicaoAtual = $(this).attr('rel');  
  auxPosicao = posicaoAtual

  document.getElementById('id01').style.display='block';
  btn_cadastrar.style.display = 'block';

  $("#nomedaLata").removeAttr('disabled');
  $("#lote").removeAttr('disabled');
  $("#pais").removeAttr('disabled');
  $("#volume").removeAttr('disabled');
  $("#tipo").removeAttr('disabled');

  $("#nomedaLata").val(armazena[auxPosicao ]._nomeLata);
  $("#lote").val(armazena[auxPosicao ]._lote);
  $("#pais").val(armazena[auxPosicao ]._pais);
  $("#volume").val(armazena[auxPosicao ]._volume);
  $("#tipo").val(armazena[auxPosicao ]._tipo);
  
})

$("#corpoTabela").on("click", '.btn-info', function () {

  let posicaoAtual = $(this).attr('rel');  
  auxPosicao = posicaoAtual

  document.getElementById('id01').style.display='block';
  btn_cadastrar.style.display = 'none';

  $("#nomedaLata").val(armazena[auxPosicao ]._nomeLata);
  $("#lote").val(armazena[auxPosicao ]._lote);
  $("#pais").val(armazena[auxPosicao ]._pais);
  $("#volume").val(armazena[auxPosicao ]._volume);
  $("#tipo").val(armazena[auxPosicao ]._tipo);

  $("#nomedaLata").attr('disabled','disabled');
  $("#lote").attr('disabled','disabled');
  $("#pais").attr('disabled','disabled');
  $("#volume").attr('disabled','disabled');
  $("#tipo").attr('disabled','disabled');

})

$("#corpoTabela").on("click", '.btn-danger', function(){

  let posicaoExcluir = $(this).attr('rel');
  if(confirm('Deseja excluir permanentemente?')) {
      excluir(armazena, posicaoExcluir);
      $("#corpoTabela").html(listarTabela(armazena));
  }
})
  

