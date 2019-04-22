let alerts_div = document.getElementById("alerts");
const apiKey = "02f45fec465c766816c5e073e1f1fc15";
const api =
  "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?appid=02f45fec465c766816c5e073e1f1fc15&units=imperial";

// The code below will pull api weather data for Kearney

function kearneyWeather() {
  const lat = 40.7004;
  const long = -99.0834;
  const cityApi = `${api}&lat=${lat}&lon=${long}`;
  fetch(cityApi)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const name = data.name;
      const temp = Math.round(data.main.temp);
      const high = data.main.temp_max;
      const low = data.main.temp_min;
      const humidity = data.main.humidity;
      const pressure = data.main.pressure;
      const wind = Math.round(data.wind.speed);
      const windDirection = data.wind.deg;
      const weather = data.weather[0].description;
      document.getElementById("kearney-forecast").innerHTML = weather;
      document.getElementById("kearney-temp").innerHTML = `${temp}`;
      document.getElementById("kearney-wind").innerHTML = `Wind: ${wind} mph`;
      console.log(data);
      console.log(name, temp, high, low, humidity, pressure, wind);
    })
    .catch(error => {
      console.log(error);
    });
}
function scottsbluffWeather() {
  const lat = 41.8666;
  const long = -103.6672;
  const cityApi = `${api}&lat=${lat}&lon=${long}`;
  fetch(cityApi)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const name = data.name;
      const temp = Math.round(data.main.temp);
      const high = data.main.temp_max;
      const low = data.main.temp_min;
      const humidity = data.main.humidity;
      const pressure = data.main.pressure;
      const wind = Math.round(data.wind.speed);
      const windDirection = data.wind.deg;
      const weather = data.weather[0].description;
      document.getElementById("scottsbluff-forecast").innerHTML = weather;
      document.getElementById("scottsbluff-temp").innerHTML = `${temp}`;
      document.getElementById(
        "scottsbluff-wind"
      ).innerHTML = `Wind: ${wind} mph`;
    })
    .catch(error => {
      console.log(error);
    });
}

function norfolkWeather() {
  const lat = 42.0327;
  const long = -97.4111;
  const cityApi = `${api}&lat=${lat}&lon=${long}`;
  fetch(cityApi)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const name = data.name;
      const temp = Math.round(data.main.temp);
      const high = data.main.temp_max;
      const low = data.main.temp_min;
      const humidity = data.main.humidity;
      const pressure = data.main.pressure;
      const wind = Math.round(data.wind.speed);
      const windDirection = data.wind.deg;
      const weather = data.weather[0].description;
      document.getElementById("norfolk-forecast").innerHTML = weather;
      document.getElementById("norfolk-temp").innerHTML = `${temp}`;
      document.getElementById("norfolk-wind").innerHTML = `Wind: ${wind} mph`;
    })
    .catch(error => {
      console.log(error);
    });
}
function chadronWeather() {
  const lat = 42.8294;
  const long = -102.9999;
  const cityApi = `${api}&lat=${lat}&lon=${long}`;
  fetch(cityApi)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const name = data.name;
      const temp = Math.round(data.main.temp);
      const high = data.main.temp_max;
      const low = data.main.temp_min;
      const humidity = data.main.humidity;
      const pressure = data.main.pressure;
      const wind = Math.round(data.wind.speed);
      const windDirection = data.wind.deg;
      const weather = data.weather[0].description;
      document.getElementById("chadron-forecast").innerHTML = weather;
      document.getElementById("chadron-temp").innerHTML = `${temp}`;
      document.getElementById("chadron-wind").innerHTML = `Wind: ${wind} mph`;
    })
    .catch(error => {
      console.log(error);
    });
}
function mccookWeather() {
  const lat = 40.1967;
  const long = -100.6249;
  const cityApi = `${api}&lat=${lat}&lon=${long}`;
  fetch(cityApi)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const name = data.name;
      const temp = Math.round(data.main.temp);
      const high = data.main.temp_max;
      const low = data.main.temp_min;
      const humidity = data.main.humidity;
      const pressure = data.main.pressure;
      const wind = Math.round(data.wind.speed);
      const windDirection = data.wind.deg;
      const weather = data.weather[0].description;
      document.getElementById("mccook-forecast").innerHTML = weather;
      document.getElementById("mccook-temp").innerHTML = `${temp}`;
      document.getElementById("mccook-wind").innerHTML = `Wind: ${wind} mph`;
    })
    .catch(error => {
      console.log(error);
    });
}
function sscWeather() {
  const lat = 42.4649;
  const long = -96.4131;
  const cityApi = `${api}&lat=${lat}&lon=${long}`;
  fetch(cityApi)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const name = data.name;
      const temp = Math.round(data.main.temp);
      const high = data.main.temp_max;
      const low = data.main.temp_min;
      const humidity = data.main.humidity;
      const pressure = data.main.pressure;
      const wind = Math.round(data.wind.speed);
      const windDirection = data.wind.deg;
      const weather = data.weather[0].description;
      document.getElementById("ssc-forecast").innerHTML = weather;
      document.getElementById("ssc-temp").innerHTML = `${temp}`;
      document.getElementById("ssc-wind").innerHTML = `Wind: ${wind} mph`;
    })
    .catch(error => {
      console.log(error);
    });
}
function yorkWeather() {
  const lat = 40.8674;
  const long = -97.5921;
  const cityApi = `${api}&lat=${lat}&lon=${long}`;
  fetch(cityApi)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const name = data.name;
      const temp = Math.round(data.main.temp);
      const high = data.main.temp_max;
      const low = data.main.temp_min;
      const humidity = data.main.humidity;
      const pressure = data.main.pressure;
      const wind = Math.round(data.wind.speed);
      const windDirection = data.wind.deg;
      const weather = data.weather[0].description;
      document.getElementById("york-forecast").innerHTML = weather;
      document.getElementById("york-temp").innerHTML = `${temp}`;
      document.getElementById("york-wind").innerHTML = `Wind: ${wind} mph`;
    })
    .catch(error => {
      console.log(error);
    });
}
function plattsmouthWeather() {
  const lat = 41.0111;
  const long = -95.8808;
  const cityApi = `${api}&lat=${lat}&lon=${long}`;
  fetch(cityApi)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const name = data.name;
      const temp = Math.round(data.main.temp);
      const high = data.main.temp_max;
      const low = data.main.temp_min;
      const humidity = data.main.humidity;
      const pressure = data.main.pressure;
      const wind = Math.round(data.wind.speed);
      const windDirection = data.wind.deg;
      const weather = data.weather[0].description;
      document.getElementById("plattsmouth-forecast").innerHTML = weather;
      document.getElementById("plattsmouth-temp").innerHTML = `${temp}`;
      document.getElementById(
        "plattsmouth-wind"
      ).innerHTML = `Wind: ${wind} mph`;
    })
    .catch(error => {
      console.log(error);
    });
}
function ainsworthWeather() {
  const lat = 42.545;
  const long = -99.8615;
  const cityApi = `${api}&lat=${lat}&lon=${long}`;
  fetch(cityApi)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const name = data.name;
      const temp = Math.round(data.main.temp);
      const high = data.main.temp_max;
      const low = data.main.temp_min;
      const humidity = data.main.humidity;
      const pressure = data.main.pressure;
      const wind = Math.round(data.wind.speed);
      const windDirection = data.wind.deg;
      const weather = data.weather[0].description;
      document.getElementById("ainsworth-forecast").innerHTML = weather;
      document.getElementById("ainsworth-temp").innerHTML = `${temp}`;
      document.getElementById("ainsworth-wind").innerHTML = `Wind: ${wind} mph`;
    })
    .catch(error => {
      console.log(error);
    });
}
function ogallalaWeather() {
  const lat = 41.1282;
  const long = -101.7204;
  const cityApi = `${api}&lat=${lat}&lon=${long}`;
  fetch(cityApi)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const name = data.name;
      const temp = Math.round(data.main.temp);
      const high = data.main.temp_max;
      const low = data.main.temp_min;
      const humidity = data.main.humidity;
      const pressure = data.main.pressure;
      const wind = Math.round(data.wind.speed);
      const windDirection = data.wind.deg;
      const weather = data.weather[0].description;
      document.getElementById("ogallala-forecast").innerHTML = weather;
      document.getElementById("ogallala-temp").innerHTML = `${temp}`;
      document.getElementById("ogallala-wind").innerHTML = `Wind: ${wind} mph`;
    })
    .catch(error => {
      console.log(error);
    });
}
function oneillWeather() {
  const lat = 42.4577;
  const long = -98.6479;
  const cityApi = `${api}&lat=${lat}&lon=${long}`;
  fetch(cityApi)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const name = data.name;
      const temp = Math.round(data.main.temp);
      const high = data.main.temp_max;
      const low = data.main.temp_min;
      const humidity = data.main.humidity;
      const pressure = data.main.pressure;
      const wind = Math.round(data.wind.speed);
      const windDirection = data.wind.deg;
      const weather = data.weather[0].description;
      document.getElementById("oneill-forecast").innerHTML = weather;
      document.getElementById("oneill-temp").innerHTML = `${temp}`;
      document.getElementById("oneill-wind").innerHTML = `Wind: ${wind} mph`;
    })
    .catch(error => {
      console.log(error);
    });
}
function milfordWeather() {
  const lat = 40.7745;
  const long = -97.0506;
  const cityApi = `${api}&lat=${lat}&lon=${long}`;
  fetch(cityApi)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const name = data.name;
      const temp = Math.round(data.main.temp);
      const high = data.main.temp_max;
      const low = data.main.temp_min;
      const humidity = data.main.humidity;
      const pressure = data.main.pressure;
      const wind = Math.round(data.wind.speed);
      const windDirection = data.wind.deg;
      const weather = data.weather[0].description;
      document.getElementById("milford-forecast").innerHTML = weather;
      document.getElementById("milford-temp").innerHTML = `${temp}`;
      document.getElementById("milford-wind").innerHTML = `Wind: ${wind} mph`;
    })
    .catch(error => {
      console.log(error);
    });
}
function almaWeather() {
  const lat = 40.0975;
  const long = -99.362;
  const cityApi = `${api}&lat=${lat}&lon=${long}`;
  fetch(cityApi)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const name = data.name;
      const temp = Math.round(data.main.temp);
      const high = data.main.temp_max;
      const low = data.main.temp_min;
      const humidity = data.main.humidity;
      const pressure = data.main.pressure;
      const wind = Math.round(data.wind.speed);
      const windDirection = data.wind.deg;
      const weather = data.weather[0].description;
      document.getElementById("alma-forecast").innerHTML = weather;
      document.getElementById("alma-temp").innerHTML = `${temp}`;
      document.getElementById("alma-wind").innerHTML = `Wind: ${wind} mph`;
    })
    .catch(error => {
      console.log(error);
    });
}
function oshkoshWeather() {
  const lat = 41.405;
  const long = -102.3444;
  const cityApi = `${api}&lat=${lat}&lon=${long}`;
  fetch(cityApi)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const name = data.name;
      const temp = Math.round(data.main.temp);
      const high = data.main.temp_max;
      const low = data.main.temp_min;
      const humidity = data.main.humidity;
      const pressure = data.main.pressure;
      const wind = Math.round(data.wind.speed);
      const windDirection = data.wind.deg;
      const weather = data.weather[0].description;
      document.getElementById("oshkosh-forecast").innerHTML = weather;
      document.getElementById("oshkosh-temp").innerHTML = `${temp}`;
      document.getElementById("oshkosh-wind").innerHTML = `Wind: ${wind} mph`;
    })
    .catch(error => {
      console.log(error);
    });
}
function gordonWeather() {
  const lat = 42.8028;
  const long = -102.2038;
  const cityApi = `${api}&lat=${lat}&lon=${long}`;
  fetch(cityApi)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const name = data.name;
      const temp = Math.round(data.main.temp);
      const high = data.main.temp_max;
      const low = data.main.temp_min;
      const humidity = data.main.humidity;
      const pressure = data.main.pressure;
      const wind = Math.round(data.wind.speed);
      const windDirection = data.wind.deg;
      const weather = data.weather[0].description;
      document.getElementById("gordon-forecast").innerHTML = weather;
      document.getElementById("gordon-temp").innerHTML = `${temp}`;
      document.getElementById("gordon-wind").innerHTML = `Wind: ${wind} mph`;
    })
    .catch(error => {
      console.log(error);
    });
}
function lexingtonWeather() {
  const lat = 40.7808;
  const long = -99.7415;
  const cityApi = `${api}&lat=${lat}&lon=${long}`;
  fetch(cityApi)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const name = data.name;
      const temp = Math.round(data.main.temp);
      const high = data.main.temp_max;
      const low = data.main.temp_min;
      const humidity = data.main.humidity;
      const pressure = data.main.pressure;
      const wind = Math.round(data.wind.speed);
      const windDirection = data.wind.deg;
      const weather = data.weather[0].description;
      document.getElementById("lexington-forecast").innerHTML = weather;
      document.getElementById("lexington-temp").innerHTML = `${temp}`;
      document.getElementById("lexington-wind").innerHTML = `Wind: ${wind} mph`;
    })
    .catch(error => {
      console.log(error);
    });
}
function getAlerts() {
  const alertApi = "https://api.weather.gov/alerts/active/area/NE";
  fetch(alertApi)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data.features);
      data.features.forEach(alert => {
        const event = alert.properties.event;
        const description = alert.properties.description;
        const area = alert.properties.areaDesc;
        const headline = alert.properties.headline;
        const div = document.createElement("div");
        div.className = "every-other";

        const h2 = document.createElement("h2");
        h2.textContent = event;

        const h3 = document.createElement("h3");
        h3.textContent = area;

        const h4 = document.createElement("h4");
        h4.textContent = headline;

        const p = document.createElement("p");
        p.textContent = `${description}`;

        // container.appendChild(card);
        alerts_div.appendChild(div);
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(p);
      });
    })
    .catch(error => {
      console.log(error);
    });
}

function autorefresh(time) {
  setTimeout("location.reload(true);", time);
}

kearneyWeather();
norfolkWeather();
scottsbluffWeather();
chadronWeather();
mccookWeather();
sscWeather();
yorkWeather();
plattsmouthWeather();
ogallalaWeather();
ainsworthWeather();
oneillWeather();
milfordWeather();
almaWeather();
oshkoshWeather();
gordonWeather();
lexingtonWeather();
getAlerts();

// function forecast(forecast) {
//     const forecastApi = forecast;
//     fetch(forecastApi)
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//         })
// }

// getCityApi(city["kearney"]);
// getCityApi(city["scottsbluff"]);
// getCityApi(city["norfolk"]);

// function getWeather(city) {
//     const api = `https://api.weather.gov/gridpoints/GID/${city[0]},${city[1]}/forecast`
//     fetch(api)
//             .then(response => {
//                 return response.json();
//             })
//             .then(data => {
//                 console.log(data);
//                 // const {temp, humidity} = data.main;
//                 const name = data.properties.periods[0].name;
//                 const shortForecast = data.properties.periods[0].shortForecast;
//                 const temp = data.properties.periods[0].temperature;
//                 const forecast = data.properties.periods[0].detailedForecast;

//                 console.log(name, shortForecast, temp, forecast);
//             });
// }

// console.log(getWeather(kearney));

// "https://api.weather.gov/gridpoints/CYS/150,43/forecast

// window.addEventListener('load', ()=> {
//     let long;
//     let lat;

//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(position => {
//             long = position.coords.longitude;
//             lat = position.coords.latitude;

//             const api = `http://api.openweathermap.org/data/2.5/weather?appid=02f45fec465c766816c5e073e1f1fc15&units=imperial&lat=${lat}&lon=${long}`
//             const apiTest = `https://api.weather.gov/gridpoints/GID/41,73/forecast`

//             // fetch(api)
//             //     .then(response => {
//             //         return response.json();
//             //     })
//             //     .then(data => {
//             //         // console.log(data);
//             //         const {temp, humidity} = data.main;
//             //         console.log(temp);
//             //     });
//             fetch(apiTest)
//             .then(response => {
//                 return response.json();
//             })
//             .then(data => {
//                 console.log(data);
//                 // const {temp, humidity} = data.main;
//                 const temp = data.properties.periods[0].temperature;
//                 const forecast = data.properties.periods[0].detailedForecast;
//                 console.log(temp, forecast);
//             });
//         });
