// script.js
const resultHtml = document.querySelector("#displayResult");
const btnHtml = document.querySelector("#btn");

import { getWeather } from "./promisemodule.js";

btnHtml.addEventListener("click", () => {
    // resultHtml.textContent = "Sidan laddar...";
    console.log("Knapp har klickats på!");

    getWeather()
        .then(temp => {
            resultHtml.textContent = `${temp}°`;
        })
        .catch(error => {
            resultHtml.textContent = "Kunde inte hämta väder. Försök senare.";
        });
});