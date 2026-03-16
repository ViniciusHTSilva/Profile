const botoes = ['sobre-btn','aws-btn','py-btn','azure-btn','sql-btn','gcp-btn','projetos-btn','outros-btn'];

botoes.forEach(id => {

const botao = document.getElementById(id);

if(botao){

botao.addEventListener('click', e => {

e.preventDefault();

const modalId = botao.dataset.modal;

const modal = document.getElementById(modalId);

modal.classList.add('open');

});

}

});


document.querySelectorAll('.modal-close').forEach(btn => {

btn.addEventListener('click', () => {

btn.closest('.modal-overlay').classList.remove('open');

});

});


document.querySelectorAll('.modal-overlay').forEach(overlay => {

overlay.addEventListener('click', e => {

if(e.target === overlay){

overlay.classList.remove('open');

}

});

});


function abrirImagem(img){
  const modal = document.getElementById("modalImg")
  const imgGrande = document.getElementById("imgGrande")

  imgGrande.src = img.src
  modal.style.display = "flex"
}

function fecharImagem(){
  document.getElementById("modalImg").style.display = "none"
}