// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на 
// button.change-color і виводить значення кольору в span.color.

const colorChange = document.querySelector('.change-color');
colorChange.addEventListener('click', changeColor)
const colorValue = document.querySelector('.color')
function changeColor() {
  const color = getRandomHexColor();
  document.body.style.background = color;
  colorValue.textContent = color;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
