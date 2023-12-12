const increase = document.querySelector(".increase");
const resetCount = document.querySelector(".reset");
const decrease = document.querySelector(".decrease");
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("increase")) {
        count.innerHTML++;
        setColor();
    }
    if (e.target.classList.contains("decrease")) {
        count.innerHTML--;
        setColor();
    }
    if (e.target.classList.contains("reset")) {
        count.innerHTML = 0;
        setColor();
    }
});

function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = "yellow";
    } else if (count.innerHTML < 0) {
        count.style.color = "orangered";
    } else {
        count.style.color = "#fff";
    }
}