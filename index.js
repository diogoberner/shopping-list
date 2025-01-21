const inputItem = document.getElementById("input-item")

const addButton = document.getElementById("adicionar-item")
let counter = 0

addButton.addEventListener("click", (e) => {
    e.preventDefault()
    if (inputItem.value === " "){
        alert("Por favor, insira um item!")
        return
    }

    const listItem = document.createElement("li")
    const listItemContainer = document.createElement("div")
    listItemContainer.classList.add("lista-item-container")
    const inputCheckbox = document.createElement("input")
    inputCheckbox.type = "checkbox"
    inputCheckbox.id = "checkbox-" + counter++
    const itemName = document.createElement("p")
    itemName.innerText = inputItem.value

    listItemContainer.appendChild(inputCheckbox)
    listItemContainer.appendChild(itemName)
})
