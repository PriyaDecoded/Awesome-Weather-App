function formatDate(timestamp){
    let date = new Date;
    let hours = date.getHours();
    if (hours < 10){
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10){
        minutes = `0${minutes}`;
    }
    let days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}


function displayTemperature(response){
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.address;
    let tempElement = document.querySelector("#temp");
    tempElement.innerHTML = Math.round(response.data.currentConditions.feelslike);
    let conditionsElement = document.querySelector("#conditions");
    conditionsElement.innerHTML = response.data.currentConditions.conditions;
    let humidElement = document.querySelector("#humid");
    humidElement.innerHTML = response.data.currentConditions.humidity;
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = response.data.currentConditions.windspeed;
    let dateElement = document.querySelector("#date");
    dateElement.innerHTML = formatDate(response.data.currentConditions.datetimeEpoch*1000);

}


let apiKey = "DHQX5SS2M9NKBSND8G9HELMWF";
let apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Toronto?unitGroup=metric&key=${apiKey}&contentType=json`;

axios.get(apiUrl).then(displayTemperature);

