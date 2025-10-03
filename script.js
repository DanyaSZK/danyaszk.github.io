// Простая обработка формы
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Спасибо! Мы скоро с вами свяжемся.");
  this.reset();
});
