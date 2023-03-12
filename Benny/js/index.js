


// Aqui criamos uma constaante card. E veja só... Agora faz sentido a parada do javascript de tansformar tudo em variavel. Porque quando você vai manipular a DOM, fica mais simples de entedner que elemento é cada elemento

// const card = document.querySelector('.card');

// card.addEventListener('click', function() {
//   alert('Você clicou no card!');
// });


// // Aqui estou transformando o container em um objeto para ser manipulado pelo JS.


// const container = document.getElementById('aqui');

// container.addEventListener('click', function () {
//   console.log('você blaoskoks'); 
// }); 


// const skill = document.getElementsById('habilidade')

// skill.addEventListener('click', function() {
//   alert('funcits')
// });


// const skills = document.querySelectorAll('.skill');

// skills.forEach(skill => {
//   skill.addEventListener('click', () => {
//     skill.classList.toggle('active');
//   });
// });


const botaoSidebar = document.getElementById('botao-sidebar');
const sidebar = document.getElementById('sidebar');

botaoSidebar.addEventListener('click', function() {
	sidebar.classList.toggle('mostrar');
});

var btn = document.querySelector('.toggle');
var btnst = true;

btn.onclick = function() {
  if(btnst == true) {
    document.querySelector('.toggle span').classList.add('toggle');
    document.getElementById('sidebar').classList.add('sidebarshow');
    btnst = false;

  }else if(btnst == false) {
    document.querySelector('.toggle span').classList.remove('toggle');
    document.getElementById('sidebar').classList.remove('sidebarshow');
    btnst = true;
  }
}


