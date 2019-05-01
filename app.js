let alerts_div = document.getElementById("alerts");
var now = "";
var later = "";

// ? ****** Below is code for Kearney *******
var kearneyForecast = new XMLHttpRequest();
var kearneyCurrent = new XMLHttpRequest();
var kFore;
var kCurr;
kearneyForecast.open(
  "GET",
  "https://api.weather.gov/gridpoints/GID/41,73/forecast",
  true
);
kearneyForecast.responseType = "text";
kearneyForecast.send();

kearneyForecast.onload = function() {
  if (kearneyForecast.status === 200) {
    kFore = JSON.parse(kearneyForecast.responseText);
  }
};

kearneyCurrent.open(
  "GET",
  "https://api.weather.gov/stations/KEAR/observations/current",
  true
);
kearneyCurrent.responseType = "text";
kearneyCurrent.send();

kearneyCurrent.onload = function() {
  kCurr = JSON.parse(kearneyCurrent.responseText);
  document.getElementById("kearney-temp").innerHTML = celsius2farenheit(
    kCurr.properties.temperature.value
  );
  document.getElementById("kearney-chill").innerHTML =
    "Windchill: " +
    celsius2farenheit(kCurr.properties.windChill.value) +
    "&deg;";
  document.getElementById("kearney-forecast").innerHTML =
    kCurr.properties.textDescription;
  document.getElementById("kearney-humidity").innerHTML =
    "Humidity: " + Math.round(kCurr.properties.relativeHumidity.value) + "%";
  document.getElementById("kearney-wind").innerHTML =
    "Wind: " +
    convertWind(kCurr.properties.windDirection.value) +
    " " +
    kCurr.properties.windSpeed.value +
    " mph";
  document.getElementById("kearney-vis").innerHTML =
    "Visibility: " + meters2miles(kCurr.properties.visibility.value) + " miles";
};

function displayKearneyDetail() {
  now =
    "<div class='detailed-forecast'><h2>" +
    kFore.properties.periods[0].name +
    "</h2>";
  now += "<p>" + kFore.properties.periods[0].detailedForecast + "</p>";
  now += "<h2>" + kFore.properties.periods[1].name + "</h2>";
  now += "<p>" + kFore.properties.periods[1].detailedForecast + "</p></div>";
  document.getElementById("forecast-div").innerHTML = now;
  document.querySelector(".forecast-heading").innerHTML =
    "Detailed Forecast: Kearney";
}
// ? ****** Above is code for Kearney *******
//! ////////////////////////////////////////////////////////////
// ? ****** Below is code for Scottsbluff *******
var scottsbluffForecast = new XMLHttpRequest();
var scottsbluffCurrent = new XMLHttpRequest();
var sbFore;
var sbCurr;

scottsbluffForecast.open(
  "GET",
  "https://api.weather.gov/gridpoints/CYS/150,43/forecast",
  true
);
scottsbluffForecast.responseType = "text";
scottsbluffForecast.send();

scottsbluffForecast.onload = function() {
  if (scottsbluffForecast.status === 200) {
    sbFore = JSON.parse(scottsbluffForecast.responseText);
  }
};

scottsbluffCurrent.open(
  "GET",
  "https://api.weather.gov/stations/KBFF/observations/current",
  true
);
scottsbluffCurrent.responseType = "text";
scottsbluffCurrent.send();

scottsbluffCurrent.onload = function() {
  sbCurr = JSON.parse(scottsbluffCurrent.responseText);
  document.getElementById("scottsbluff-temp").innerHTML = celsius2farenheit(
    sbCurr.properties.temperature.value
  );
  document.getElementById("scottsbluff-chill").innerHTML =
    "Windchill: " +
    celsius2farenheit(sbCurr.properties.windChill.value) +
    "&deg;";
  document.getElementById("scottsbluff-forecast").innerHTML =
    sbCurr.properties.textDescription;
  document.getElementById("scottsbluff-humidity").innerHTML =
    "Humidity: " + Math.round(sbCurr.properties.relativeHumidity.value) + "%";
  document.getElementById("scottsbluff-wind").innerHTML =
    "Wind: " +
    convertWind(sbCurr.properties.windDirection.value) +
    " " +
    sbCurr.properties.windSpeed.value +
    " mph";
  document.getElementById("scottsbluff-vis").innerHTML =
    "Visibility: " +
    meters2miles(sbCurr.properties.visibility.value) +
    " miles";
};

function displayScottsbluffDetail() {
  now =
    "<div class='detailed-forecast'><h2>" +
    sbFore.properties.periods[0].name +
    "</h2>";
  now += "<p>" + sbFore.properties.periods[0].detailedForecast + "</p>";
  now += "<h2>" + sbFore.properties.periods[1].name + "</h2>";
  now += "<p>" + sbFore.properties.periods[1].detailedForecast + "</p></div>";
  document.getElementById("forecast-div").innerHTML = now;
  document.querySelector(".forecast-heading").innerHTML =
    "Detailed Forecast: Scottsbluff";
}
// ? ****** Above is code for Scottsbluff *******
//! ////////////////////////////////////////////////////////////
// ? ****** Below is code for chadron *******
var chadronForecast = new XMLHttpRequest();
var chadronCurrent = new XMLHttpRequest();
var chadronFore;
var chadronCurr;

chadronForecast.open(
  "GET",
  "https://api.weather.gov/gridpoints/CYS/176,86/forecast",
  true
);
chadronForecast.responseType = "text";
chadronForecast.send();

chadronForecast.onload = function() {
  if (chadronForecast.status === 200) {
    chadronFore = JSON.parse(chadronForecast.responseText);
  }
};

chadronCurrent.open(
  "GET",
  "https://api.weather.gov/stations/KCDR/observations/current",
  true
);
chadronCurrent.responseType = "text";
chadronCurrent.send();

chadronCurrent.onload = function() {
  chadronCurr = JSON.parse(chadronCurrent.responseText);
  document.getElementById("chadron-temp").innerHTML = celsius2farenheit(
    chadronCurr.properties.temperature.value
  );
  document.getElementById("chadron-chill").innerHTML =
    "Windchill: " +
    celsius2farenheit(chadronCurr.properties.windChill.value) +
    "&deg;";
  document.getElementById("chadron-forecast").innerHTML =
    chadronCurr.properties.textDescription;
  document.getElementById("chadron-humidity").innerHTML =
    "Humidity: " +
    Math.round(chadronCurr.properties.relativeHumidity.value) +
    "%";
  document.getElementById("chadron-wind").innerHTML =
    "Wind: " +
    convertWind(chadronCurr.properties.windDirection.value) +
    " " +
    chadronCurr.properties.windSpeed.value +
    " mph";
  document.getElementById("chadron-vis").innerHTML =
    "Visibility: " +
    meters2miles(chadronCurr.properties.visibility.value) +
    " miles";
};

function displayChadronDetail() {
  now =
    "<div class='detailed-forecast'><h2>" +
    chadronFore.properties.periods[0].name +
    "</h2>";
  now += "<p>" + chadronFore.properties.periods[0].detailedForecast + "</p>";
  now += "<h2>" + chadronFore.properties.periods[1].name + "</h2>";
  now +=
    "<p>" + chadronFore.properties.periods[1].detailedForecast + "</p></div>";
  document.getElementById("forecast-div").innerHTML = now;
  document.querySelector(".forecast-heading").innerHTML =
    "Detailed Forecast: Chadron";
}
// ? ****** Above is code for chadron *******
//! ////////////////////////////////////////////////////////////
// ? ****** Below is code for norfolk *******
var norfolkForecast = new XMLHttpRequest();
var norfolkCurrent = new XMLHttpRequest();
var norfolkFore;
var norfolkCurr;

norfolkForecast.open(
  "GET",
  "https://api.weather.gov/gridpoints/OAX/32,95/forecast", //!! These apis will be wrong when i decide to use them
  true
);
norfolkForecast.responseType = "text";
norfolkForecast.send();

norfolkForecast.onload = function() {
  if (norfolkForecast.status === 200) {
    norfolkFore = JSON.parse(norfolkForecast.responseText);
  }
};

norfolkCurrent.open(
  "GET",
  "https://api.weather.gov/stations/KOFK/observations/current",
  true
);
norfolkCurrent.responseType = "text";
norfolkCurrent.send();

norfolkCurrent.onload = function() {
  norfolkCurr = JSON.parse(norfolkCurrent.responseText);
  document.getElementById("norfolk-temp").innerHTML = celsius2farenheit(
    norfolkCurr.properties.temperature.value
  );
  document.getElementById("norfolk-chill").innerHTML =
    "Windchill: " +
    celsius2farenheit(norfolkCurr.properties.windChill.value) +
    "&deg;";
  document.getElementById("norfolk-forecast").innerHTML =
    norfolkCurr.properties.textDescription;
  document.getElementById("norfolk-humidity").innerHTML =
    "Humidity: " +
    Math.round(norfolkCurr.properties.relativeHumidity.value) +
    "%";
  document.getElementById("norfolk-wind").innerHTML =
    "Wind: " +
    convertWind(norfolkCurr.properties.windDirection.value) +
    " " +
    norfolkCurr.properties.windSpeed.value +
    " mph";
  document.getElementById("norfolk-vis").innerHTML =
    "Visibility: " +
    meters2miles(norfolkCurr.properties.visibility.value) +
    " miles";
};

function displayNorfolkDetail() {
  now =
    "<div class='detailed-forecast'><h2>" +
    norfolkFore.properties.periods[0].name +
    "</h2>";
  now += "<p>" + norfolkFore.properties.periods[0].detailedForecast + "</p>";
  now += "<h2>" + norfolkFore.properties.periods[1].name + "</h2>";
  now +=
    "<p>" + norfolkFore.properties.periods[1].detailedForecast + "</p></div>";
  document.getElementById("forecast-div").innerHTML = now;
  document.querySelector(".forecast-heading").innerHTML =
    "Detailed Forecast: Norfolk";
}
// ? ****** Above is code for norfolk *******
//! ////////////////////////////////////////////////////////////
// ? ****** Below is code for mccook *******
var mccookForecast = new XMLHttpRequest();
var mccookCurrent = new XMLHttpRequest();
var mccookFore;
var mccookCurr;

mccookForecast.open(
  "GET",
  "https://api.weather.gov/gridpoints/GLD/94,88/forecast",
  true
);
mccookForecast.responseType = "text";
mccookForecast.send();

mccookForecast.onload = function() {
  if (mccookForecast.status === 200) {
    mccookFore = JSON.parse(mccookForecast.responseText);
  }
};

mccookCurrent.open(
  "GET",
  "https://api.weather.gov/stations/KMCK/observations/current",
  true
);
mccookCurrent.responseType = "text";
mccookCurrent.send();

mccookCurrent.onload = function() {
  mccookCurr = JSON.parse(mccookCurrent.responseText);
  document.getElementById("mccook-temp").innerHTML = celsius2farenheit(
    mccookCurr.properties.temperature.value
  );
  document.getElementById("mccook-chill").innerHTML =
    "Windchill: " +
    celsius2farenheit(mccookCurr.properties.windChill.value) +
    "&deg;";
  document.getElementById("mccook-forecast").innerHTML =
    mccookCurr.properties.textDescription;
  document.getElementById("mccook-humidity").innerHTML =
    "Humidity: " +
    Math.round(mccookCurr.properties.relativeHumidity.value) +
    "%";
  document.getElementById("mccook-wind").innerHTML =
    "Wind: " +
    convertWind(mccookCurr.properties.windDirection.value) +
    " " +
    mccookCurr.properties.windSpeed.value +
    " mph";
  document.getElementById("mccook-vis").innerHTML =
    "Visibility: " +
    meters2miles(mccookCurr.properties.visibility.value) +
    " miles";
};

function displayMccookDetail() {
  now =
    "<div class='detailed-forecast'><h2>" +
    mccookFore.properties.periods[0].name +
    "</h2>";
  now += "<p>" + mccookFore.properties.periods[0].detailedForecast + "</p>";
  now += "<h2>" + mccookFore.properties.periods[1].name + "</h2>";
  now +=
    "<p>" + mccookFore.properties.periods[1].detailedForecast + "</p></div>";
  document.getElementById("forecast-div").innerHTML = now;
  document.querySelector(".forecast-heading").innerHTML =
    "Detailed Forecast: McCook";
}
// ? ****** Above is code for mccook *******
//! ////////////////////////////////////////////////////////////
// ? ****** Below is code for ogallala *******
var ogallalaForecast = new XMLHttpRequest();
var ogallalaCurrent = new XMLHttpRequest();
var ogallalaFore;
var ogallalaCurr;

ogallalaForecast.open(
  "GET",
  "https://api.weather.gov/gridpoints/LBF/34,40/forecast",
  true
);
ogallalaForecast.responseType = "text";
ogallalaForecast.send();

ogallalaForecast.onload = function() {
  if (ogallalaForecast.status === 200) {
    ogallalaFore = JSON.parse(ogallalaForecast.responseText);
  }
};

ogallalaCurrent.open(
  "GET",
  "https://api.weather.gov/stations/KOGA/observations/current",
  true
);
ogallalaCurrent.responseType = "text";
ogallalaCurrent.send();

ogallalaCurrent.onload = function() {
  ogallalaCurr = JSON.parse(ogallalaCurrent.responseText);
  document.getElementById("ogallala-temp").innerHTML = celsius2farenheit(
    ogallalaCurr.properties.temperature.value
  );
  document.getElementById("ogallala-chill").innerHTML =
    "Windchill: " +
    celsius2farenheit(ogallalaCurr.properties.windChill.value) +
    "&deg;";
  document.getElementById("ogallala-forecast").innerHTML =
    ogallalaCurr.properties.textDescription;
  document.getElementById("ogallala-humidity").innerHTML =
    "Humidity: " +
    Math.round(ogallalaCurr.properties.relativeHumidity.value) +
    "%";
  document.getElementById("ogallala-wind").innerHTML =
    "Wind: " +
    convertWind(ogallalaCurr.properties.windDirection.value) +
    " " +
    ogallalaCurr.properties.windSpeed.value +
    " mph";
  document.getElementById("ogallala-vis").innerHTML =
    "Visibility: " +
    meters2miles(ogallalaCurr.properties.visibility.value) +
    " miles";
};

function displayOgallalaDetail() {
  now =
    "<div class='detailed-forecast'><h2>" +
    ogallalaFore.properties.periods[0].name +
    "</h2>";
  now += "<p>" + ogallalaFore.properties.periods[0].detailedForecast + "</p>";
  now += "<h2>" + ogallalaFore.properties.periods[1].name + "</h2>";
  now +=
    "<p>" + ogallalaFore.properties.periods[1].detailedForecast + "</p></div>";
  document.getElementById("forecast-div").innerHTML = now;
  document.querySelector(".forecast-heading").innerHTML =
    "Detailed Forecast: Ogallala";
}
// ? ****** Above is code for ogallala *******
//! ////////////////////////////////////////////////////////////
// ? ****** Below is code for northplatte *******
var northplatteForecast = new XMLHttpRequest();
var northplatteCurrent = new XMLHttpRequest();
var northplatteFore;
var northplatteCurr;

northplatteForecast.open(
  "GET",
  "https://api.weather.gov/gridpoints/LBF/67,39/forecast",
  true
);
northplatteForecast.responseType = "text";
northplatteForecast.send();

northplatteForecast.onload = function() {
  if (northplatteForecast.status === 200) {
    northplatteFore = JSON.parse(northplatteForecast.responseText);
  }
};

northplatteCurrent.open(
  "GET",
  "https://api.weather.gov/stations/KLBF/observations/current",
  true
);
northplatteCurrent.responseType = "text";
northplatteCurrent.send();

northplatteCurrent.onload = function() {
  northplatteCurr = JSON.parse(northplatteCurrent.responseText);
  document.getElementById("northplatte-temp").innerHTML = celsius2farenheit(
    northplatteCurr.properties.temperature.value
  );
  document.getElementById("northplatte-chill").innerHTML =
    "Windchill: " +
    celsius2farenheit(northplatteCurr.properties.windChill.value) +
    "&deg;";
  document.getElementById("northplatte-forecast").innerHTML =
    northplatteCurr.properties.textDescription;
  document.getElementById("northplatte-humidity").innerHTML =
    "Humidity: " +
    Math.round(northplatteCurr.properties.relativeHumidity.value) +
    "%";
  document.getElementById("northplatte-wind").innerHTML =
    "Wind: " +
    convertWind(northplatteCurr.properties.windDirection.value) +
    " " +
    northplatteCurr.properties.windSpeed.value +
    " mph";
  document.getElementById("northplatte-vis").innerHTML =
    "Visibility: " +
    meters2miles(northplatteCurr.properties.visibility.value) +
    " miles";
};

function displayNorthPlatteDetail() {
  now =
    "<div class='detailed-forecast'><h2>" +
    northplatteFore.properties.periods[0].name +
    "</h2>";
  now +=
    "<p>" + northplatteFore.properties.periods[0].detailedForecast + "</p>";
  now += "<h2>" + northplatteFore.properties.periods[1].name + "</h2>";
  now +=
    "<p>" +
    northplatteFore.properties.periods[1].detailedForecast +
    "</p></div>";
  document.getElementById("forecast-div").innerHTML = now;
  document.querySelector(".forecast-heading").innerHTML =
    "Detailed Forecast: North Platte";
}
// ? ****** Above is code for northplatte *******
//! ////////////////////////////////////////////////////////////
// ? ****** Below is code for lexington *******
var lexingtonForecast = new XMLHttpRequest();
var lexingtonCurrent = new XMLHttpRequest();
var lexingtonFore;
var lexingtonCurr;

lexingtonForecast.open(
  "GET",
  "https://api.weather.gov/gridpoints/GID/18,78/forecast",
  true
);
lexingtonForecast.responseType = "text";
lexingtonForecast.send();

lexingtonForecast.onload = function() {
  if (lexingtonForecast.status === 200) {
    lexingtonFore = JSON.parse(lexingtonForecast.responseText);
  }
};

lexingtonCurrent.open(
  "GET",
  "https://api.weather.gov/stations/KLXN/observations/current",
  true
);
lexingtonCurrent.responseType = "text";
lexingtonCurrent.send();

lexingtonCurrent.onload = function() {
  lexingtonCurr = JSON.parse(lexingtonCurrent.responseText);
  document.getElementById("lexington-temp").innerHTML = celsius2farenheit(
    lexingtonCurr.properties.temperature.value
  );
  document.getElementById("lexington-chill").innerHTML =
    "Windchill: " +
    celsius2farenheit(lexingtonCurr.properties.windChill.value) +
    "&deg;";
  document.getElementById("lexington-forecast").innerHTML =
    lexingtonCurr.properties.textDescription;
  document.getElementById("lexington-humidity").innerHTML =
    "Humidity: " +
    Math.round(lexingtonCurr.properties.relativeHumidity.value) +
    "%";
  document.getElementById("lexington-wind").innerHTML =
    "Wind: " +
    convertWind(lexingtonCurr.properties.windDirection.value) +
    " " +
    lexingtonCurr.properties.windSpeed.value +
    " mph";
  document.getElementById("lexington-vis").innerHTML =
    "Visibility: " +
    meters2miles(lexingtonCurr.properties.visibility.value) +
    " miles";
};

function displayLexingtonDetail() {
  now =
    "<div class='detailed-forecast'><h2>" +
    lexingtonFore.properties.periods[0].name +
    "</h2>";
  now += "<p>" + lexingtonFore.properties.periods[0].detailedForecast + "</p>";
  now += "<h2>" + lexingtonFore.properties.periods[1].name + "</h2>";
  now +=
    "<p>" + lexingtonFore.properties.periods[1].detailedForecast + "</p></div>";
  document.getElementById("forecast-div").innerHTML = now;
  document.querySelector(".forecast-heading").innerHTML =
    "Detailed Forecast: Lexington";
}
// ? ****** Above is code for lexington *******
//! ////////////////////////////////////////////////////////////
// ? ****** Below is code for ainsworth *******
var ainsworthForecast = new XMLHttpRequest();
var ainsworthCurrent = new XMLHttpRequest();
var ainsworthFore;
var ainsworthCurr;

ainsworthForecast.open(
  "GET",
  "https://api.weather.gov/gridpoints/LBF/100,102/forecast",
  true
);
ainsworthForecast.responseType = "text";
ainsworthForecast.send();

ainsworthForecast.onload = function() {
  if (ainsworthForecast.status === 200) {
    ainsworthFore = JSON.parse(ainsworthForecast.responseText);
  }
};

ainsworthCurrent.open(
  "GET",
  "https://api.weather.gov/stations/KANW/observations/current",
  true
);
ainsworthCurrent.responseType = "text";
ainsworthCurrent.send();

ainsworthCurrent.onload = function() {
  ainsworthCurr = JSON.parse(ainsworthCurrent.responseText);
  document.getElementById("ainsworth-temp").innerHTML = celsius2farenheit(
    ainsworthCurr.properties.temperature.value
  );
  document.getElementById("ainsworth-chill").innerHTML =
    "Windchill: " +
    celsius2farenheit(ainsworthCurr.properties.windChill.value) +
    "&deg;";
  document.getElementById("ainsworth-forecast").innerHTML =
    ainsworthCurr.properties.textDescription;
  document.getElementById("ainsworth-humidity").innerHTML =
    "Humidity: " +
    Math.round(ainsworthCurr.properties.relativeHumidity.value) +
    "%";
  document.getElementById("ainsworth-wind").innerHTML =
    "Wind: " +
    convertWind(ainsworthCurr.properties.windDirection.value) +
    " " +
    ainsworthCurr.properties.windSpeed.value +
    " mph";
  document.getElementById("ainsworth-vis").innerHTML =
    "Visibility: " +
    meters2miles(ainsworthCurr.properties.visibility.value) +
    " miles";
};

function displayAinsworthDetail() {
  now =
    "<div class='detailed-forecast'><h2>" +
    ainsworthFore.properties.periods[0].name +
    "</h2>";
  now += "<p>" + ainsworthFore.properties.periods[0].detailedForecast + "</p>";
  now += "<h2>" + ainsworthFore.properties.periods[1].name + "</h2>";
  now +=
    "<p>" + ainsworthFore.properties.periods[1].detailedForecast + "</p></div>";
  document.getElementById("forecast-div").innerHTML = now;
  document.querySelector(".forecast-heading").innerHTML =
    "Detailed Forecast: Ainsworth";
}
// ? ****** Above is code for ainsworth *******
//! ////////////////////////////////////////////////////////////
// ? ****** Below is code for oneill *******
var oneillForecast = new XMLHttpRequest();
var oneillCurrent = new XMLHttpRequest();
var oneillFore;
var oneillCurr;

oneillForecast.open(
  "GET",
  "https://api.weather.gov/gridpoints/LBF/141,96/forecast",
  true
);
oneillForecast.responseType = "text";
oneillForecast.send();

oneillForecast.onload = function() {
  if (oneillForecast.status === 200) {
    oneillFore = JSON.parse(oneillForecast.responseText);
  }
};

oneillCurrent.open(
  "GET",
  "https://api.weather.gov/stations/KONL/observations/current",
  true
);
oneillCurrent.responseType = "text";
oneillCurrent.send();

oneillCurrent.onload = function() {
  oneillCurr = JSON.parse(oneillCurrent.responseText);
  document.getElementById("oneill-temp").innerHTML = celsius2farenheit(
    oneillCurr.properties.temperature.value
  );
  document.getElementById("oneill-chill").innerHTML =
    "Windchill: " +
    celsius2farenheit(oneillCurr.properties.windChill.value) +
    "&deg;";
  document.getElementById("oneill-forecast").innerHTML =
    oneillCurr.properties.textDescription;
  document.getElementById("oneill-humidity").innerHTML =
    "Humidity: " +
    Math.round(oneillCurr.properties.relativeHumidity.value) +
    "%";
  document.getElementById("oneill-wind").innerHTML =
    "Wind: " +
    convertWind(oneillCurr.properties.windDirection.value) +
    " " +
    oneillCurr.properties.windSpeed.value +
    " mph";
  document.getElementById("oneill-vis").innerHTML =
    "Visibility: " +
    meters2miles(oneillCurr.properties.visibility.value) +
    " miles";
};

function displayOneillDetail() {
  now =
    "<div class='detailed-forecast'><h2>" +
    oneillFore.properties.periods[0].name +
    "</h2>";
  now += "<p>" + oneillFore.properties.periods[0].detailedForecast + "</p>";
  now += "<h2>" + oneillFore.properties.periods[1].name + "</h2>";
  now +=
    "<p>" + oneillFore.properties.periods[1].detailedForecast + "</p></div>";
  document.getElementById("forecast-div").innerHTML = now;
  document.querySelector(".forecast-heading").innerHTML =
    "Detailed Forecast: O'Neill";
}
// ? ****** Above is code for oneill *******
//! ////////////////////////////////////////////////////////////
// ? ****** Below is code for hartington *******
var hartingtonForecast = new XMLHttpRequest();
var hartingtonCurrent = new XMLHttpRequest();
var hartingtonFore;
var hartingtonCurr;

hartingtonForecast.open(
  "GET",
  "https://api.weather.gov/gridpoints/OAX/37,122/forecast",
  true
);
hartingtonForecast.responseType = "text";
hartingtonForecast.send();

hartingtonForecast.onload = function() {
  if (hartingtonForecast.status === 200) {
    hartingtonFore = JSON.parse(hartingtonForecast.responseText);
  }
};

hartingtonCurrent.open(
  "GET",
  "https://api.weather.gov/stations/KYKN/observations/current",
  true
);
hartingtonCurrent.responseType = "text";
hartingtonCurrent.send();

hartingtonCurrent.onload = function() {
  hartingtonCurr = JSON.parse(hartingtonCurrent.responseText);
  document.getElementById("hartington-temp").innerHTML = celsius2farenheit(
    hartingtonCurr.properties.temperature.value
  );
  document.getElementById("hartington-chill").innerHTML =
    "Windchill: " +
    celsius2farenheit(hartingtonCurr.properties.windChill.value) +
    "&deg;";
  document.getElementById("hartington-forecast").innerHTML =
    hartingtonCurr.properties.textDescription;
  document.getElementById("hartington-humidity").innerHTML =
    "Humidity: " +
    Math.round(hartingtonCurr.properties.relativeHumidity.value) +
    "%";
  document.getElementById("hartington-wind").innerHTML =
    "Wind: " +
    convertWind(hartingtonCurr.properties.windDirection.value) +
    " " +
    hartingtonCurr.properties.windSpeed.value +
    " mph";
  document.getElementById("hartington-vis").innerHTML =
    "Visibility: " +
    meters2miles(hartingtonCurr.properties.visibility.value) +
    " miles";
};

function displayHartingtonDetail() {
  now =
    "<div class='detailed-forecast'><h2>" +
    hartingtonFore.properties.periods[0].name +
    "</h2>";
  now += "<p>" + hartingtonFore.properties.periods[0].detailedForecast + "</p>";
  now += "<h2>" + hartingtonFore.properties.periods[1].name + "</h2>";
  now +=
    "<p>" +
    hartingtonFore.properties.periods[1].detailedForecast +
    "</p></div>";
  document.getElementById("forecast-div").innerHTML = now;
  document.querySelector(".forecast-heading").innerHTML =
    "Detailed Forecast: Hartington";
}
// ? ****** Above is code for hartington *******
//! ////////////////////////////////////////////////////////////
// ? ****** Below is code for ssc *******
var sscForecast = new XMLHttpRequest();
var sscCurrent = new XMLHttpRequest();
var sscFore;
var sscCurr;

sscForecast.open(
  "GET",
  "https://api.weather.gov/gridpoints/FSD/106,14/forecast",
  true
);
sscForecast.responseType = "text";
sscForecast.send();

sscForecast.onload = function() {
  if (sscForecast.status === 200) {
    sscFore = JSON.parse(sscForecast.responseText);
  }
};

sscCurrent.open(
  "GET",
  "https://api.weather.gov/stations/KSUX/observations/current",
  true
);
sscCurrent.responseType = "text";
sscCurrent.send();

sscCurrent.onload = function() {
  sscCurr = JSON.parse(sscCurrent.responseText);
  document.getElementById("ssc-temp").innerHTML = celsius2farenheit(
    sscCurr.properties.temperature.value
  );
  document.getElementById("ssc-chill").innerHTML =
    "Windchill: " +
    celsius2farenheit(sscCurr.properties.windChill.value) +
    "&deg;";
  document.getElementById("ssc-forecast").innerHTML =
    sscCurr.properties.textDescription;
  document.getElementById("ssc-humidity").innerHTML =
    "Humidity: " + Math.round(sscCurr.properties.relativeHumidity.value) + "%";
  document.getElementById("ssc-wind").innerHTML =
    "Wind: " +
    convertWind(sscCurr.properties.windDirection.value) +
    " " +
    sscCurr.properties.windSpeed.value +
    " mph";
  document.getElementById("ssc-vis").innerHTML =
    "Visibility: " +
    meters2miles(sscCurr.properties.visibility.value) +
    " miles";
};

function displaySscDetail() {
  now =
    "<div class='detailed-forecast'><h2>" +
    sscFore.properties.periods[0].name +
    "</h2>";
  now += "<p>" + sscFore.properties.periods[0].detailedForecast + "</p>";
  now += "<h2>" + sscFore.properties.periods[1].name + "</h2>";
  now += "<p>" + sscFore.properties.periods[1].detailedForecast + "</p></div>";
  document.getElementById("forecast-div").innerHTML = now;
  document.querySelector(".forecast-heading").innerHTML =
    "Detailed Forecast: S. Sioux City";
}
// ? ****** Above is code for ssc *******
//! ////////////////////////////////////////////////////////////
// ? ****** Below is code for brokenbow *******
var brokenbowForecast = new XMLHttpRequest();
var brokenbowCurrent = new XMLHttpRequest();
var brokenbowFore;
var brokenbowCurr;

brokenbowForecast.open(
  "GET",
  "https://api.weather.gov/gridpoints/LBF/106,49/forecast",
  true
);
brokenbowForecast.responseType = "text";
brokenbowForecast.send();

brokenbowForecast.onload = function() {
  if (brokenbowForecast.status === 200) {
    brokenbowFore = JSON.parse(brokenbowForecast.responseText);
  }
};

brokenbowCurrent.open(
  "GET",
  "https://api.weather.gov/stations/KBBW/observations/current",
  true
);
brokenbowCurrent.responseType = "text";
brokenbowCurrent.send();

brokenbowCurrent.onload = function() {
  brokenbowCurr = JSON.parse(brokenbowCurrent.responseText);
  document.getElementById("brokenbow-temp").innerHTML = celsius2farenheit(
    brokenbowCurr.properties.temperature.value
  );
  document.getElementById("brokenbow-chill").innerHTML =
    "Windchill: " +
    celsius2farenheit(brokenbowCurr.properties.windChill.value) +
    "&deg;";
  document.getElementById("brokenbow-forecast").innerHTML =
    brokenbowCurr.properties.textDescription;
  document.getElementById("brokenbow-humidity").innerHTML =
    "Humidity: " +
    Math.round(brokenbowCurr.properties.relativeHumidity.value) +
    "%";
  document.getElementById("brokenbow-wind").innerHTML =
    "Wind: " +
    convertWind(brokenbowCurr.properties.windDirection.value) +
    " " +
    brokenbowCurr.properties.windSpeed.value +
    " mph";
  document.getElementById("brokenbow-vis").innerHTML =
    "Visibility: " +
    meters2miles(brokenbowCurr.properties.visibility.value) +
    " miles";
};

function displayBrokenBowDetail() {
  now =
    "<div class='detailed-forecast'><h2>" +
    brokenbowFore.properties.periods[0].name +
    "</h2>";
  now += "<p>" + brokenbowFore.properties.periods[0].detailedForecast + "</p>";
  now += "<h2>" + brokenbowFore.properties.periods[1].name + "</h2>";
  now +=
    "<p>" + brokenbowFore.properties.periods[1].detailedForecast + "</p></div>";
  document.getElementById("forecast-div").innerHTML = now;
  document.querySelector(".forecast-heading").innerHTML =
    "Detailed Forecast: Broken Bow";
}
// ? ****** Above is code for brokenbow *******
//! ////////////////////////////////////////////////////////////
// ? ****** Below is code for columbus *******
var columbusForecast = new XMLHttpRequest();
var columbusCurrent = new XMLHttpRequest();
var columbusFore;
var columbusCurr;

columbusForecast.open(
  "GET",
  "https://api.weather.gov/gridpoints/OAX/33,67/forecast",
  true
);
columbusForecast.responseType = "text";
columbusForecast.send();

columbusForecast.onload = function() {
  if (columbusForecast.status === 200) {
    columbusFore = JSON.parse(columbusForecast.responseText);
  }
};

columbusCurrent.open(
  "GET",
  "https://api.weather.gov/stations/KOLU/observations/current",
  true
);
columbusCurrent.responseType = "text";
columbusCurrent.send();

columbusCurrent.onload = function() {
  columbusCurr = JSON.parse(columbusCurrent.responseText);
  document.getElementById("columbus-temp").innerHTML = celsius2farenheit(
    columbusCurr.properties.temperature.value
  );
  document.getElementById("columbus-chill").innerHTML =
    "Windchill: " +
    celsius2farenheit(columbusCurr.properties.windChill.value) +
    "&deg;";
  document.getElementById("columbus-forecast").innerHTML =
    columbusCurr.properties.textDescription;
  document.getElementById("columbus-humidity").innerHTML =
    "Humidity: " +
    Math.round(columbusCurr.properties.relativeHumidity.value) +
    "%";
  document.getElementById("columbus-wind").innerHTML =
    "Wind: " +
    convertWind(columbusCurr.properties.windDirection.value) +
    " " +
    columbusCurr.properties.windSpeed.value +
    " mph";
  document.getElementById("columbus-vis").innerHTML =
    "Visibility: " +
    meters2miles(columbusCurr.properties.visibility.value) +
    " miles";
};

function displayColumbusDetail() {
  now =
    "<div class='detailed-forecast'><h2>" +
    columbusFore.properties.periods[0].name +
    "</h2>";
  now += "<p>" + columbusFore.properties.periods[0].detailedForecast + "</p>";
  now += "<h2>" + columbusFore.properties.periods[1].name + "</h2>";
  now +=
    "<p>" + columbusFore.properties.periods[1].detailedForecast + "</p></div>";
  document.getElementById("forecast-div").innerHTML = now;
  document.querySelector(".forecast-heading").innerHTML =
    "Detailed Forecast: Columbus";
}
// ? ****** Above is code for columbus *******
//! ////////////////////////////////////////////////////////////
// ? ****** Below is code for york *******
var yorkForecast = new XMLHttpRequest();
var yorkCurrent = new XMLHttpRequest();
var yorkFore;
var yorkCurr;

yorkForecast.open(
  "GET",
  "https://api.weather.gov/gridpoints/GID/93,80/forecast",
  true
);
yorkForecast.responseType = "text";
yorkForecast.send();

yorkForecast.onload = function() {
  if (yorkForecast.status === 200) {
    yorkFore = JSON.parse(yorkForecast.responseText);
  }
};

yorkCurrent.open(
  "GET",
  "https://api.weather.gov/stations/KJYR/observations/current",
  true
);
yorkCurrent.responseType = "text";
yorkCurrent.send();

yorkCurrent.onload = function() {
  yorkCurr = JSON.parse(yorkCurrent.responseText);
  document.getElementById("york-temp").innerHTML = celsius2farenheit(
    yorkCurr.properties.temperature.value
  );
  document.getElementById("york-chill").innerHTML =
    "Windchill: " +
    celsius2farenheit(yorkCurr.properties.windChill.value) +
    "&deg;";
  document.getElementById("york-forecast").innerHTML =
    yorkCurr.properties.textDescription;
  document.getElementById("york-humidity").innerHTML =
    "Humidity: " + Math.round(yorkCurr.properties.relativeHumidity.value) + "%";
  document.getElementById("york-wind").innerHTML =
    "Wind: " +
    convertWind(yorkCurr.properties.windDirection.value) +
    " " +
    yorkCurr.properties.windSpeed.value +
    " mph";
  document.getElementById("york-vis").innerHTML =
    "Visibility: " +
    meters2miles(yorkCurr.properties.visibility.value) +
    " miles";
};

function displayYorkDetail() {
  now =
    "<div class='detailed-forecast'><h2>" +
    yorkFore.properties.periods[0].name +
    "</h2>";
  now += "<p>" + yorkFore.properties.periods[0].detailedForecast + "</p>";
  now += "<h2>" + yorkFore.properties.periods[1].name + "</h2>";
  now += "<p>" + yorkFore.properties.periods[1].detailedForecast + "</p></div>";
  document.getElementById("forecast-div").innerHTML = now;
  document.querySelector(".forecast-heading").innerHTML =
    "Detailed Forecast: York";
}
// ? ****** Above is code for york *******
//! ////////////////////////////////////////////////////////////
// ? ****** Below is code for plattsmouth *******
var plattsmouthForecast = new XMLHttpRequest();
var plattsmouthCurrent = new XMLHttpRequest();
var plattsmouthFore;
var plattsmouthCurr;

plattsmouthForecast.open(
  "GET",
  "https://api.weather.gov/gridpoints/OAX/84,48/forecast",
  true
);
plattsmouthForecast.responseType = "text";
plattsmouthForecast.send();

plattsmouthForecast.onload = function() {
  if (plattsmouthForecast.status === 200) {
    plattsmouthFore = JSON.parse(plattsmouthForecast.responseText);
  }
};

plattsmouthCurrent.open(
  "GET",
  "https://api.weather.gov/stations/KOFF/observations/current",
  true
);
plattsmouthCurrent.responseType = "text";
plattsmouthCurrent.send();

plattsmouthCurrent.onload = function() {
  plattsmouthCurr = JSON.parse(plattsmouthCurrent.responseText);
  document.getElementById("plattsmouth-temp").innerHTML = celsius2farenheit(
    plattsmouthCurr.properties.temperature.value
  );
  document.getElementById("plattsmouth-chill").innerHTML =
    "Windchill: " +
    celsius2farenheit(plattsmouthCurr.properties.windChill.value) +
    "&deg;";
  document.getElementById("plattsmouth-forecast").innerHTML =
    plattsmouthCurr.properties.textDescription;
  document.getElementById("plattsmouth-humidity").innerHTML =
    "Humidity: " +
    Math.round(plattsmouthCurr.properties.relativeHumidity.value) +
    "%";
  document.getElementById("plattsmouth-wind").innerHTML =
    "Wind: " +
    convertWind(plattsmouthCurr.properties.windDirection.value) +
    " " +
    plattsmouthCurr.properties.windSpeed.value +
    " mph";
  document.getElementById("plattsmouth-vis").innerHTML =
    "Visibility: " +
    meters2miles(plattsmouthCurr.properties.visibility.value) +
    " miles";
};

function displayPlattsmouthDetail() {
  now =
    "<div class='detailed-forecast'><h2>" +
    plattsmouthFore.properties.periods[0].name +
    "</h2>";
  now +=
    "<p>" + plattsmouthFore.properties.periods[0].detailedForecast + "</p>";
  now += "<h2>" + plattsmouthFore.properties.periods[1].name + "</h2>";
  now +=
    "<p>" +
    plattsmouthFore.properties.periods[1].detailedForecast +
    "</p></div>";
  document.getElementById("forecast-div").innerHTML = now;
  document.querySelector(".forecast-heading").innerHTML =
    "Detailed Forecast: Plattsmouth";
}
// ? ****** Above is code for plattsmouth *******

// ? ****** Below is the code to pull alerts *******
// TODO: Pull Alerts from weather.gov
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

//! Global functions for converting numbers
function autorefresh(time) {
  setTimeout("location.reload(true);", time);
}

function celsius2farenheit(num) {
  return Math.round(num * (9 / 5) + 32);
}

function meters2miles(num) {
  return Math.round(num / 1609.344);
}

var direction = "";

function convertWind(num) {
  switch (true) {
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
