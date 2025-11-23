const resizeBtn = document.querySelector(".resize-btn");

resizeBtn.addEventListener("click", greenRect);

function greenRect() {
    const canvas = document.querySelector(".canvas");
    const widthInput = document.querySelector(".canvas-width");
    const heightInput = document.querySelector(".canvas-height");
    const para = document.querySelector(".canvas-p");
    const ctx = canvas.getContext("2d");

    // Edit the following two lines ONLY
    let x = Number(widthInput.value);
    let y = Number(heightInput.value);
    canvas.width = x + 20;
    canvas.height = y + 20;
    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, x, y);
    para.textContent = `The rectangle is ${x}px wide and ${y}px high.`;
}

greenRect();