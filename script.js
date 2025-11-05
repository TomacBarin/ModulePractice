// Get
const resultHtml = document.querySelector("#displayResult");
const btnHtml = document.querySelector("#btn");

import { getWeather } from "./promisemodule.js";

// function getWeather() {

// }

btnHtml.addEventListener("click", () => {
    resultHtml.textContent = "Sidan laddar..."

    console.log("Knapp har klickats på!")
    getWeather()
    
    
})