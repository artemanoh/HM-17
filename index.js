// Task 1
const inputElement = document.querySelector("#input");
const buttonElement = document.querySelector("#changeButton");

inputElement.value = "I want holidays!!!!!";
buttonElement.textContent = inputElement.value;
// Task 2
const imgElement = document.querySelector("#image");
const textElement = document.querySelector("#h2");

imgElement.src = `https://www.astronomy.com/uploads/2023/10/the-earth.jpg`;
imgElement.style.width = "500px";
// Task 3
const imageElement = document.querySelector("#img");
const linkElement = document.querySelector("#link");

imageElement.alt = "Це Java Script";
linkElement.href = `https://www.instagram.com/`;
// Task 4
const listElement = document.querySelector("#list");
const firstChild = listElement.firstElementChild;
firstChild.textContent = "Капуста";
