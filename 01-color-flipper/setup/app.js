
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

window.onload = changeColor;

btn.addEventListener("click", changeColor);

    function changeColor() {
    // const randomNumber = Math.floor(Math.random() * colors.length);


    const randomNumber = generateRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}

function generateRandomNumber() {
return Math.floor(Math.random() * colors.length)
}