// 1.Порахує і виведе в консоль кількість категорій в ul#categories,  тобто елементів li.item.
// 2.Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const numberCategoriesEl = document.querySelectorAll(".item")
console.log(`Number of categories: ${numberCategoriesEl.length}`)
const categories = document.querySelectorAll(".item>ul")
categories.forEach(category => 
    (console.log (`Category: ${category.previousElementSibling.textContent}
Elements: ${category.children.length}`)
    )
)
