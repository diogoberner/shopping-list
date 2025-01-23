import { createItemList } from "./scripts/createItemList.js"
import checkEmptyList from "./scripts/checkEmptyList.js"

const shoppingList = document.getElementById("lista-de-compras")
const addButton = document.getElementById("adicionar-item")

addButton.addEventListener("click", (e) => {
    e.preventDefault()
    const listItem = createItemList()
    shoppingList.appendChild(listItem)
    checkEmptyList(shoppingList)
})

checkEmptyList(shoppingList)
