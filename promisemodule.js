export function getWeather() {
    
    
    fetch("https://api.open-meteo.com/v1/forecast?latitude=56.05&longitude=12.70&current_weather=true")
    .then(response => {
        if (!response.ok) {
            throw new Error("Serverfel - försök senare.");
        } return response.json();
    })
    .then(data => {
        console.log(data);
        const temp = data.current_weather.temperature;
        const resultHtml = document.querySelector("#displayResult");
        resultHtml.textContent = `${temp}°`
        return temp
    })
    .catch(error => {
        console.error("Något har gått fel.", error)
        resultHtml.textContent = "Något har gått fel. Försök senare."
    })
}