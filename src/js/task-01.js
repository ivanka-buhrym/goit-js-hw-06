// 1.Порахує і виведе в консоль кількість категорій в ul#categories,  тобто елементів li.item.
// 2.Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

// 1
const numberCategoriesEl = document.querySelectorAll(".item")
console.log(`Number of categories: ${numberCategoriesEl.length}`)
// 2
const categories = document.querySelectorAll(".item>ul")
// console.log(categories)
categories.forEach(category => 
    (console.log (`Category: ${category.previousElementSibling.textContent}
Elements: ${category.children.length}`)
    )
)
