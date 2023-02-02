const convertToCelsius = function(num) {
  let celcius = 0
  celcius = (num - 32)* 0.556 
  return Math.round(celcius* 10) / 10
};

const convertToFahrenheit = function(num) {
  let fahrenheit = 0
  fahrenheit = (num * 1.8) + 32
  return Math.round(fahrenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
