console.log('Hello, World!');

// let firstName = 'John';
// let lastName = 'Doe';

// console.log(firstName);
// console.log(lastName);

// let age = 11;
// console.log(age);

// age = 54;
// console.log(age);

// const pi = 3.14;

// console.log(pi);

// console.log((4 + 6 + 9) / 77)

// let a = 10;

// console.log(a);

// a = 33;
// console.log(a);

// let b = 7 * a;

// console.log(b);

// const max = 57;
// actual = max - 13;
// percentage = actual / max;

// console.log(percentage);

// let admin, name;
// name = "John";
// admin = name;

// console.log(admin);

// let ourPlanetName = "Earth";
// let currentUserName = "Alice";



// function ageCalculator(birthDate) {
//     const today = new Date();
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
//     return age;
// }
// const birthday = '03-03-1982'
// const age = ageCalculator(new Date(birthday));
// console.log(age);

// let x = 5;
// let y = 2;
// let z = x % y;

// console.log(z);

// let xy = 0.2 + 0.1;
// console.log(xy);

// Fixing floating point precision issue

// xy = (0.2 * 10 + 0.1 * 10) / 10;
// console.log(xy);

// let num1 = 10;
// let num2 = 20;

// console.log(num1 + num2);

// let str1 = '10';
// let str2 = '20';

// console.log(str1 + '+' + str2 + '=' + (num1 + num2));

// console.log(num1 + str1);
// console.log(str2 + num2);
// console.log("The result is:" + (num1 + num2));
// console.log(num1 + num2 + str1);

// const myInt = 5;
// const myFloat = 5.99;

// console.log(typeof myInt);
// console.log(typeof myFloat);

// const lotsOfDecimal = 1.234567890123456789;
// lotsOfDecimal;
// const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
// twoDecimalPlaces;

// console.log(twoDecimalPlaces);



const startBtn = document.querySelector(".start-btn");
const txt = document.querySelector(".status-text");

startBtn.addEventListener("click", updateBtn);

function updateBtn() {
    if (startBtn.textContent === "Start machine") {
        startBtn.textContent = "Stop machine";
        txt.textContent = "The machine has started!";
    } else {
        startBtn.textContent = "Start machine";
        txt.textContent = "The machine has stopped.";
    }
}