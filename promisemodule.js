// promisemodule.js
export function getWeather() {
    return fetch("https://api.open-meteo.com/v1/forecast?latitude=56.05&longitude=12.70&current_weather=true")
        .then(response => {
            if (!response.ok) {
                throw new Error("Serverfel – försök senare.");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            return data.current_weather.temperature; 
        })
        .catch(error => {
            console.error("Fel vid hämtning:", error);
            throw error; 
        });
}