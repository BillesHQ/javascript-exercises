const convertToCelsius = function(f) {
  f = (f-32)/1.8
  return Math.round(10*f)/10
};

const convertToFahrenheit = function(c) {
 c = (c * 9/5) + 32
 return Math.round(10*c)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
