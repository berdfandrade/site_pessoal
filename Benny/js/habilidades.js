


function openNav() {
  document.getElementById("mySidebar").style.width = "450px";
  document.getElementById("main").style.marginLeft = "250px";

}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

const js = document.getElementById("JS");


// CARD JAVASCRIPT  -----------------------------------------------------

js.addEventListener("click", function () {
  openNav();
  // window.open("/sub-paginas/javascript.html");
});

js.addEventListener("dblclick", function () {
  closeNav();
  // window.open("/sub-paginas/javascript.html");
});

// CARD HTML -----------------------------------------------------

const html = document.getElementById("HTML");

html.addEventListener("click", function () {
  
  document.getElementById("sideBarHTML").style.width = "450px";
  document.getElementById("main").style.marginLeft = "250px";
  // window.open("/sub-paginas/html.html");
});

function closeNav_html() {
  document.getElementById("sideBarHTML").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

html.addEventListener("dblclick", function(){
  closeNav_html();
});


// CARD CSS  -----------------------------------------------------

const css = document.getElementById("CSS");
css.addEventListener("click", function () {
  document.getElementById("sideBarCSS").style.width = "450px";
  document.getElementById("main").style.marginLeft = "250px";
  // window.open("/sub-paginas/css.html");
});

function closeNav_css() {
  document.getElementById("sideBarCSS").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

css.addEventListener("dblclick", function(){
  closeNav_css()
})

// CARD COMPUTAÇÃO  -----------------------------------------------------

const computacao = document.getElementById("COMP");

computacao.addEventListener("click", function () {
  document.getElementById("sideBarCOMPUTACAO").style.width = "450px";
  document.getElementById("main").style.marginLeft = "250px";
});

function closeNav_comp() {
  document.getElementById("sideBarCOMPUTACAO").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

computacao.addEventListener("dblclick", function(){
  closeNav_comp()
})

// CARD PYTHON  -----------------------------------------------------

const python = document.getElementById("PYTHON");

python.addEventListener("click", function () {
  document.getElementById("sideBarPYTHON").style.width = "450px";
  document.getElementById("main").style.marginLeft = "250px";
  // window.open("/sub-paginas/python.html");
});

function closeNav_python() {
  document.getElementById("sideBarPYTHON").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

python.addEventListener("dblclick", function(){
  closeNav_python()
})

// CARD C ------------------------------------------------------------

const c = document.getElementById("C");

c.addEventListener("click", function () {
  document.getElementById("sideBarC").style.width = "450px";
  document.getElementById("main").style.marginLeft = "250px";
  // window.open("/sub-paginas/c.html");
});

function closeNav_C() {
  document.getElementById("sideBarC").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

c.addEventListener("dblclick", function(){
  closeNav_C()
});


// BOTÃO DE FECHAR ------------------------------------------------------------
const bot = document.getElementById('butola')

bot.addEventListener("dblclick", function(){
  closeNav();
})

