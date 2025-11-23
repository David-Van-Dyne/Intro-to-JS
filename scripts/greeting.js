// const welcomeBtn = document.querySelector(".welcome-btn");
// welcomeBtn.addEventListener("click", welcomeMessage);

// function welcomeMessage() {
//     const para = document.querySelector(".welcome-message");
//     const nameInput = document.querySelector(".name");
//     para.textContent = `Welcome to the site, ${nameInput.value}!`;
// }

const button = document.querySelector(".welcome-btn");

function greet() {
    const name = document.querySelector(".name").value;
    const greeting = document.querySelector(".welcome-message");
    greeting.textContent = `Welcome to the site, ${name}!`;
}

button.addEventListener("click", greet);