function openNav() {
  document.getElementById("mySidebar").style.width = "400px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

const js = document.getElementById("JS");

js.addEventListener("click", function () {
  openNav();
  // window.open("/sub-paginas/javascript.html");
});

js.addEventListener("dblclick", function () {
  closeNav();
  // window.open("/sub-paginas/javascript.html");
});

const html = document.getElementById("HTML");

html.addEventListener("click", function () {
  window.open("/sub-paginas/html.html");
});

const css = document.getElementById("CSS");

css.addEventListener("click", function () {
  window.open("/sub-paginas/css.html");
});

const computacao = document.getElementById("COMP");

computacao.addEventListener("click", function () {
  window.open("/sub-paginas/comp.html");
});

const python = document.getElementById("PYTHON");

python.addEventListener("click", function () {
  window.open("/sub-paginas/python.html");
});

const c = document.getElementById("C");



c.addEventListener("click", function () {
  // window.open("/sub-paginas/c.html");
  sidebar.classList.add("sidebar-visivel")

});

const bot = document.getElementById('butola')

bot.addEventListener("dblclick", function(){
  closeNav();
})

