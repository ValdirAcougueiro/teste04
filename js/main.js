// Transformar uma interface previamente estruturada e estática em uma Single
// Page Application (SPA) dinâmica. Será necessário implementar navegação
// fluida, criar um sistema de templatesJavaScript, estruturar rotinas de
// validação de formulários com feedback adequado ao utilizador, além de
// assegurar o armazenamento de dados através do localStorage. Adicionalmente,
// você deverá garantir que o código JavaScript seja modularizado e organizado
// por áreas de funcionalidade.


//preventDefault()
const formDefault = document.querySelector(".formtres");
const respDefault = document.getElementById("inftres");

formDefault.addEventListener('submit', executaDefault);

function executaDefault(e) {
  console.log('${e.type}');
  console.log(respDefault.value);

  e.preventDefault();
};

//template
const butCad = document.querySelector('#button-cad');
const cad = document.querySelector('#tpl-cad');
const divcad = document.querySelector('.cadp');

butCad.addEventListener('click', function(){
  divcad.append(cad.content.cloneNode(true));
});


const tel = document.querySelector("#form-one");
const wel = document.querySelector("#welcome");
const alert = document.querySelector("#userset");

tel.addEventListener("submit", (e) => {
  e.preventDefault();

  const telnum = document.querySelector("#tel")

  localStorage.setItem("tel", telnum.value)
});

//localStorage.setItem("tel","numero");
//const tel = localStorage.getItem("tel");
//console.log(tel);

//var test = document.getElementById('teste');
//console.log(test);
//
//document.getElementById('meuBotao').addEventListener('click', function() {
//    alert('Botão clicado!');
//  });

//document.write(test.innerHTML);
