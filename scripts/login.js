// Alert and Prompt version


// while (true) {

//     let username = prompt("Who's there?");

//     if (username === null || username === '') {
//         alert('Canceled');
//         continue;
//     } else if (username !== "admin") {
//         alert("I don't know you");
//         continue;
//     }

//     while (true) {
//         let password = prompt("Password?");
//         if (password === null || password === '') {
//             alert('Canceled');
//             break;
//         } else if (password === "TheMaster") {
//             alert("Welcome!");
//             break;
//         } else {
//             alert("Wrong password");
//         }
//     }

//     if (password === "TheMaster") break;

// }




// This is the updated version using DOM manipulation instead of alert and prompt
const user = document.querySelector(".user");
const pass = document.querySelector(".pass");
const loginBtn = document.querySelector(".login-btn");
const loginMessage = document.querySelector(".login-message");

loginBtn.addEventListener("click", login);

function login() {
    if (user.value === "admin") {
        if (pass.value === "TheMaster") {
            loginMessage.textContent = "Welcome!";
        } else if (pass.value === '') {
            loginMessage.textContent = 'Canceled';
        } else {
            loginMessage.textContent = 'Wrong password';
        }
    } else if (user.value === '') {
        loginMessage.textContent = 'Canceled';
    } else {
        loginMessage.textContent = "I don't know you";
    }
}

