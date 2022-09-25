function displayTemperature(response){
    console.log(response.data);
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

}


let apiKey = "DHQX5SS2M9NKBSND8G9HELMWF";
let apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Toronto?unitGroup=metric&key=${apiKey}&contentType=json`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);

