function generateWeekday () {
    const weekday = new Date().toLocaleDateString("pt-BR", {
        weekday: "long"
    })
    const date = new Date().toLocaleDateString("pt-BR")
    const hour = new Date().toLocaleString("pt-BR", { hour: "2-digit", minute: "2-digit" })
    const completeDate = `${weekday} (${date}) às ${hour}`

    return completeDate
}

export default generateWeekday

