// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputValidation = document.querySelector('#validation-input');

const inputLength = Number(inputValidation.dataset.length);
inputValidation.addEventListener('blur', validation)

console.log(typeof inputLength)
function validation (){

if (inputLength > inputValidation.value.length){
    inputValidation.classList.toggle("invalid")
} else {
    inputValidation.classList.toggle("valid");
    }
}







