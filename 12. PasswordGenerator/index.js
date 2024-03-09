const btn = document.getElementsByTagName("button")
const number = document.getElementById("number")
const special = document.getElementById("special")
const length = document.getElementById("length")

btn[0].addEventListener("click", () => {
    let ans = generatePass(length.value, number, special)
    displayPass(ans);
})

function generatePass(length, number, special) {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let newPass = ''
    if (number.checked) str += "0123456789";
    if (special.checked) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < parseInt(length); i++) {
        let j = Math.floor(Math.random() * str.length + 1)
        newPass += str.charAt(j)
    }
    return newPass
}

function displayPass(ans) {
    const span = document.getElementsByTagName("span")
    span[0].textContent = ans
}