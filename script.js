const botaoMenu = document.getElementById("botaoMenu");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");
});

document.querySelectorAll(".menu a").forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("aberto");
  });
});
