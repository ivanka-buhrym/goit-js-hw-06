// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');
const inputValue = document.querySelector("#value");
let counterValue = 0;
incrementButton.addEventListener("click", onIncrementButton);
decrementButton.addEventListener("click", onDecrementButton);
function onIncrementButton(){
    counterValue += 1;
    inputValue.textContent = counterValue;
}

function onDecrementButton(){
    counterValue -= 1;
    inputValue.textContent = counterValue;
}



