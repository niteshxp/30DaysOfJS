document.addEventListener("DOMContentLoaded", () => {
    let boxes = document.querySelector(".container")
    // console.log(box);
    let chance = false;
    boxes.addEventListener("click", (e) => {
        let box = (e.target)
        if (box.getAttribute("data-clicked")) {
            return
        }
        box.setAttribute("data-clicked", "true")

        if (chance === false) {
            box.textContent = "X"
        } else {
            box.textContent = "O"
        }
        chance = !chance
    })
})