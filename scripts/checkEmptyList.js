const emptyMessage = document.querySelector(".mensagem-lista-vazia")

function checkEmptyList (shoppingList) {
    const listItem = shoppingList.querySelectorAll(".lista-item-container")

    if(listItem.length != 0){
        emptyMessage.style.display = "none"
    } else {
        emptyMessage.style.display = "block"
    }

}

export default checkEmptyList