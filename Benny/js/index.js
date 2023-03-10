


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