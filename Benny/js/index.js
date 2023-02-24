

var acc = document.getElementsByClassName("accordion-header");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


const accordions = document.querySelectorAll('.accordion-item');

accordions.forEach((accordion) => {
  const header = accordion.querySelector('.accordion-header');
  const icon = accordion.querySelector('.accordion-icon');
  const content = accordion.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    content.classList.toggle('show');
    icon.classList.toggle('rotate');
  });
});
