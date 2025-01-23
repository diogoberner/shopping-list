import generateWeekday from "./generateWeekday.js"
const inputItem = document.getElementById("input-item")

export function createItemList () {
    if (inputItem.value === ""){
        alert("Por favor, insira um item!")
        return
    }

    let counter = 0
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

    const completeDate = generateWeekday()
    const dataText = document.createElement("p")
    dataText.innerText = completeDate
    dataText.classList.add("texto-data")

    listItemContainer.appendChild(inputCheckbox)
    listItemContainer.appendChild(itemName)

    listItem.appendChild(listItemContainer)
    listItem.appendChild(dataText)

    return listItem
}