var accordions = document.querySelectorAll("button.accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  };
}

function closeAll() {
  for (var i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove("active");
    accordions[i].nextElementSibling.classList.remove("show");
  }
}






var accordions2 = document.querySelectorAll("button.accordion2");

for (var i = 0; i < accordions2.length; i++) {
  accordions2[i].onclick = function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  };
}

function closeAll() {
  for (var i = 0; i < accordions2.length; i++) {
    accordions2[i].classList.remove("active");
    accordions2[i].nextElementSibling.classList.remove("show");
  }
}







var accordions3 = document.querySelectorAll("button.accordion3");

for (var i = 0; i < accordions3.length; i++) {
  accordions3[i].onclick = function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  };
}

function closeAll() {
  for (var i = 0; i < accordions3.length; i++) {
    accordions3[i].classList.remove("active");
    accordions3[i].nextElementSibling.classList.remove("show");
  }
}
