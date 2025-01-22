const inputItem = document.getElementById("input-item")

const shoppingList = document.getElementById("lista-de-compras")

const addButton = document.getElementById("adicionar-item")
let counter = 0

addButton.addEventListener("click", (e) => {
    e.preventDefault()
    if (inputItem.value === ""){
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

    inputCheckbox.addEventListener("click", () => {
        if (inputCheckbox.checked) {
            itemName.style.textDecoration = "line-through"
        } else {
            itemName.style.textDecoration = "none"
        }
    })

    const weekday = new Date().toLocaleDateString("pt-BR", {
        weekday: "long"
    })
    const date = new Date().toLocaleDateString("pt-BR")
    const hour = new Date().toLocaleString("pt-BR", { hour: "2-digit", minute: "2-digit" })
    const completeDate = `${weekday} (${date}) às ${hour}`
    
    const dataText = document.createElement("p")
    dataText.innerText = completeDate
    dataText.classList.add("texto-data")

    listItemContainer.appendChild(inputCheckbox)
    listItemContainer.appendChild(itemName)

    listItem.appendChild(listItemContainer)
    listItem.appendChild(dataText)
    shoppingList.appendChild(listItem)
})
