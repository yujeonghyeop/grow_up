
const API_KEY = "4b3feeb15f2f1c1b7a571bcbe3403638"; 

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        
    });
}

function onGeoError(){
    alert("We can't get your location. Please check the Settings :)");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);