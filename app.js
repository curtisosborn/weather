const city = [
  {
    name: "kearney",
    proper: "Kearney",
    gridpoints: "GID/41,73",
    station: "KEAR"
  },
  {
    name: "scottsbluff",
    proper: "Scottsbluff",
    gridpoints: "CYS/150,43",
    station: "KBFF"
  },
  {
    name: "chadron",
    proper: "Chadron",
    gridpoints: "CYS/176,86",
    station: "KCDR"
  },
  {
    name: "norfolk",
    proper: "Norfolk",
    gridpoints: "OAX/32,95",
    station: "KOFK"
  },
  {
    name: "mccook",
    proper: "McCook",
    gridpoints: "GLD/94,88",
    station: "KMCK"
  },
  {
    name: "ogallala",
    proper: "Ogallala",
    gridpoints: "LBF/34,40",
    station: "KOGA"
  },
  {
    name: "northplatte",
    proper: "North Platte",
    gridpoints: "LBF/67,39",
    station: "KLBF"
  },
  {
    name: "lexington",
    proper: "Lexington",
    gridpoints: "GID/18,78",
    station: "KLXN"
  },
  {
    name: "ainsworth",
    proper: "Ainsworth",
    gridpoints: "LBF/100,102",
    station: "KANW"
  },
  {
    name: "oneill",
    proper: "O'Neill",
    gridpoints: "LBF/141,96",
    station: "KONL"
  },
  {
    name: "hartington",
    proper: "Hartington",
    gridpoints: "OAX/37,122",
    station: "KYKN"
  },
  {
    name: "ssc",
    proper: "S. Sioux City",
    gridpoints: "FSD/106,14",
    station: "KSUX"
  },
  {
    name: "brokenbow",
    proper: "Broken Bow",
    gridpoints: "LBF/106,49",
    station: "KBBW"
  },
  {
    name: "columbus",
    proper: "Columbus",
    gridpoints: "OAX/33,67",
    station: "KOLU"
  },
  {
    name: "york",
    proper: "York",
    gridpoints: "GID/93,80",
    station: "KJYR"
  },
  {
    name: "plattsmouth",
    proper: "Plattsmouth",
    gridpoints: "OAX/84,48",
    station: "KOFF"
  }
];

function loop() {
  for (let i = 0; i < city.length; i++) {
    runRequests(city[i]);
  }
}

function getDetail(city) {
  var forecast = new XMLHttpRequest();
  var fore;
  var now = "";
  forecast.open(
    "GET",
    "https://api.weather.gov/gridpoints/" + city.gridpoints + "/forecast",
    true
  );
  forecast.responseType = "text";
  forecast.send();
  forecast.onload = function() {
    if (forecast.status === 200) {
      fore = JSON.parse(forecast.responseText);
      for (let i = 0; i < fore.properties.periods.length; i++) {
        now +=
          "<div class='detailed-forecast'><h2>" +
          fore.properties.periods[i].name +
          "</h2>" +
          "<p>" +
          fore.properties.periods[i].detailedForecast +
          "</p></div>";
      }
      document.getElementById("forecast-div").innerHTML = now;
      document.querySelector(".forecast-heading").innerHTML =
        "Detailed Forecast: " + city.proper;
    }
  };
}

function runRequests(city) {
  var currentConditions = new XMLHttpRequest();
  var current;

  currentConditions.open(
    "GET",
    "https://api.weather.gov/stations/" +
      city.station +
      "/observations/current",
    true
  );
  currentConditions.responseType = "text";
  currentConditions.send();
  currentConditions.onload = function() {
    if (currentConditions.status === 200) {
      current = JSON.parse(currentConditions.responseText);

      // ! Display Current Temp in DOM
      document.getElementById("" + city.name + "-temp").innerHTML = fahrenheit(
        current.properties.temperature.value,
        false
      );

      // ! Display Wind Chill in DOM
      document.getElementById("" + city.name + "-chill").innerHTML =
        "Windchill: " + fahrenheit(current.properties.windChill.value, true);

      // ! Display Short Forecast in DOM
      document.getElementById("" + city.name + "-forecast").innerHTML =
        current.properties.textDescription;

      // ! Display Humidity in DOM
      document.getElementById("" + city.name + "-humidity").innerHTML =
        "Humidity: " + humidity(current.properties.relativeHumidity.value);

      // ! Display Wind in DOM
      document.getElementById("" + city.name + "-wind").innerHTML =
        "Wind: " +
        convertWind(current.properties.windDirection.value) +
        " " +
        speedCheck(current.properties.windSpeed.value);

      // ! Display Visibility in DOM
      document.getElementById("" + city.name + "-vis").innerHTML =
        "Visibility: " +
        meters2miles(current.properties.visibility.value) +
        " miles";
    }
  };
}

// ! The alerts() function pulls all active alerts and displays them in the DOM
function alerts() {
  var alerts = new XMLHttpRequest();
  var alertObj;

  alerts.open("GET", "https://api.weather.gov/alerts/active/area/NE", true);
  alerts.responseType = "text";
  alerts.send();
  var event = "";

  alerts.onload = function() {
    if (alerts.status === 200) {
      alertObj = JSON.parse(alerts.responseText);
      // console.log(alertObj);
      for (i = 0; i < alertObj.features.length; i++) {
        // console.log(alertObj.features[i].properties.event);
        event +=
          "<div class='every-other'><h2>" +
          alertObj.features[i].properties.event +
          "</h2>";
        event += "<h3>" + alertObj.features[i].properties.areaDesc + "</h3>";
        event += "<h4>" + alertObj.features[i].properties.headline + "</h4>";
        event +=
          "<p>" + alertObj.features[i].properties.description + "</p></div>";
        document.getElementById("alerts-div").innerHTML = event;
      }
    }
  };
}

function speedCheck(num) {
  if (num === null) {
    return " -";
  } else {
    return num + " mph";
  }
}

function humidity(num) {
  if (num === null) {
    return " -";
  } else {
    return Math.round(num) + "%";
  }
}

function fahrenheit(celsius, bool) {
  if (celsius === null) {
    return "-";
  } else {
    if (bool === true) {
      return Math.round(celsius * (9 / 5) + 32) + "&deg";
    } else {
      return Math.round(celsius * (9 / 5) + 32);
    }
  }
}

function meters2miles(num) {
  return Math.round(num / 1609.344);
}

function convertWind(num) {
  let direction = "";
  switch (true) {
    case num === null:
      direction = "";
      break;
    case num <= 11.25:
      direction = "N";
      break;
    case num <= 33.75:
      direction = "NNE";
      break;
    case num <= 56.27:
      direction = "NE";
      break;
    case num <= 78.25:
      direction = "ENE";
      break;
    case num <= 101.25:
      direction = "E";
      break;
    case num <= 123.75:
      direction = "ESE";
      break;
    case num <= 146.25:
      direction = "SE";
      break;
    case num <= 168.75:
      direction = "SSE";
      break;
    case num <= 191.25:
      direction = "S";
      break;
    case num <= 213.75:
      direction = "SSW";
      break;
    case num <= 236.25:
      direction = "SW";
      break;
    case num <= 258.75:
      direction = "WSW";
      break;
    case num <= 281.25:
      direction = "W";
      break;
    case num <= 303.75:
      direction = "WNW";
      break;
    case num <= 326.25:
      direction = "NW";
      break;
    case num <= 348.75:
      direction = "NNW";
      break;
    case num <= 360:
      direction = "N";
      break;
  }
  return direction;
}

function autorefresh(time) {
  setTimeout("location.reload(true);", time);
}

loop();
alerts();
