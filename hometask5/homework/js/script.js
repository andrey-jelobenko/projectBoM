"use strict";

const menu = document.querySelector(".menu");

const menuItem = document.getElementsByClassName("menu-item");
menu.insertBefore(menuItem[2], menuItem[1]); // Поменяли местами два элемента

const adv = document.querySelector(".adv");
adv.remove(); // Удалить рекламу со страницы

document.body.style.backgroundImage = "url(../img/apple_true.jpg)"; // Меняем фон

document.querySelector(".title").textContent =
  "Мы продаем только подлинную технику Apple"; // Заменить текст

const fiveElement = document.createElement("li");
fiveElement.classList.add("menu-item");
fiveElement.textContent = "Пятый пункт";
menu.appendChild(fiveElement);

document.getElementById("prompt").textContent = prompt(
  "ваше отношение к технике apple"
); // Отношение к технике Apple
