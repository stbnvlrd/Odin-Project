const ftoc = function(temp_fahrenheit) {
  return Math.round(((temp_fahrenheit-32)*5/9)*10)/10
};

const ctof = function(temp_celsius) {
  return Math.round(((temp_celsius*1.8)+32)*10)/10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};