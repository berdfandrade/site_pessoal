


const item = document.querySelectorAll('.sidebar li');

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('active');
  });
}

const close = document.querySelector('.close');

close.addEventListener('click', function() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('active');
});