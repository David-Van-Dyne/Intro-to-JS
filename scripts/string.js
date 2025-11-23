const finishBtn = document.querySelector(".welcome-btn");
finishBtn.addEventListener("click", welcomeMessage);

function welcomeMessage() {
    const para = document.querySelector(".welcome-message");
    const nameInput = document.querySelector(".name");
    para.textContent = `Welcome to the site, ${nameInput.value}!`;
}