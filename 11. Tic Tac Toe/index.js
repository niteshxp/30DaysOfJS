document.addEventListener("DOMContentLoaded", () => {
    let boxes = document.querySelector(".container")
    let result = document.getElementsByClassName("result")

    let chance = false;
    let arr = Array(9).fill('undefined')

    boxes.addEventListener("click", (e) => {
        let box = (e.target)
        let cellnumber = box.getAttribute("data-cell")

        if (box.getAttribute("data-clicked")) {
            return
        }
        box.setAttribute("data-clicked", "true")

        if (chance === false && !result[0].textContent.includes("wins")) {
            box.textContent = "X"
            box.style.color = "Brown"
            arr[cellnumber] = "X"
            getMatch('X')
        } else {
            if (result[0].textContent.includes("wins")) { return }
            box.textContent = "O"
            box.style.color = "Orange"
            arr[cellnumber] = "O"
            getMatch('O')

        }
        chance = !chance
        // console.log(arr);
    })

    function getMatch(char) {
        if (arr[0] === char && arr[1] === char && arr[2] === char) {
            result[0].textContent = `${char} wins!`
        } else if (arr[3] === char && arr[4] === char && arr[5] === char) {
            result[0].textContent = `${char} wins!`
        } else if (arr[6] === char && arr[7] === char && arr[8] === char) {
            result[0].textContent = `${char} wins!`
        } else if (arr[0] === char && arr[3] === char && arr[6] === char) {
            result[0].textContent = `${char} wins!`
        } else if (arr[1] === char && arr[4] === char && arr[7] === char) {
            result[0].textContent = `${char} wins!`
        } else if (arr[2] === char && arr[5] === char && arr[8] === char) {
            result[0].textContent = `${char} wins!`
        } else if (arr[0] === char && arr[4] === char && arr[8] === char) {
            result[0].textContent = `${char} wins!`
        } else if (arr[2] === char && arr[4] === char && arr[6] === char) {
            result[0].textContent = `${char} wins!`
        }
    }
})
