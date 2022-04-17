// Напиши скрипт, який для кожного елемента масиву ingredients:
// 1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2. Додасть назву інгредієнта як його текстовий вміст.
// 3. Додасть елементу клас item.
// 4. Після чого, вставить усі <li> за одну операцію у список ul.ingredients.

const ingredients = [
 'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientItem = ingredients.map(ingredient => {
    const ingredientEl = document.createElement('li')
    ingredientEl.classList.add('item')
    ingredientEl.textContent = ingredient
    return ingredientEl
  }
)
const ingredientsList = document.querySelector('#ingredients')
ingredientsList.classList.add('ingredients')
ingredientsList.textContent = "List of ingredients"
ingredientsList.append(...ingredientItem)
console.log(ingredientsList)