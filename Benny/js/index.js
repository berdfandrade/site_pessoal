


// Aqui criamos uma constaante card. E veja só... Agora faz sentido a parada do javascript de tansformar tudo em variavel. Porque quando você vai manipular a DOM, fica mais simples de entedner que elemento é cada elemento

const card = document.querySelector('.card');

card.addEventListener('click', function() {
  alert('Você clicou no card!');
});

