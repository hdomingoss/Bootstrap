function exibir(){
   let paragrafo = document.getElementById('nome');
   console.log(paragrafo);
   paragrafo.innerHTML= "SEXTOUUU!!🔥"
}

// Escreva a função ocultar que apaga o texto do paragrafo "nome"

function ocultar(){
  document.getElementById("nome").innerHTML= '';
}

function ligar(){
  document.getElementById("lamp").src = "img/lampadaon.gif";
}

function desligar(){
  document.getElementById("lamp").src = "img/lampadaof.gif";
}

function estilizar(){
  let texto = document.getElementById("texto2");
  texto.style = "color: blue";
  texto.style.fontSize = '50px';
}

function esconder(){
  document.getElementById('teste').style.display = 'none';
}

function exibirParagrafo(){
  document.getElementById('oculto').style.display= 'block';
}
function exibirMensagem(){
  window.alert("SEXTOUUUUU");
}