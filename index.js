import { createItemList } from "./scripts/createItemList.js"

const shoppingList = document.getElementById("lista-de-compras")

const addButton = document.getElementById("adicionar-item")


addButton.addEventListener("click", (e) => {
    const listItem = createItemList(e)
    shoppingList.appendChild(listItem)
    checkEmptyList()
})

const emptyMessage = document.querySelector(".mensagem-lista-vazia")

function checkEmptyList () {
    const listItem = shoppingList.querySelectorAll(".lista-item-container")

    if(listItem.length != 0){
        emptyMessage.style.display = "none"
    } else {
        emptyMessage.style.display = "block"
    }

}

checkEmptyList()
