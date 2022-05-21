const add = function(addend1 = 0, addend2 = 0) {
	return addend1 + addend2
};

const subtract = function(addend1 = 0, addend2 = 0) {
	return addend1 - addend2
};

const sum = function(addends = []) {
	let sum = 0;
  for (let index = 0; index < addends.length; index++){
    sum = sum + addends[index];
  }
  return sum;

};

const multiply = function(multiples = []) {
  let total = 1;
  for (let index = 0; index < multiples.length; index++){
    total = total * multiples[index];
  }
  return total;
};

const power = function(number = 1, power = 0) {
	return number ** power;
};

const factorial = function(number = 1) {
  let multiplication = 1;
	for (let index = 1; index <= number; index++) {
    multiplication = multiplication * index;
    
  }
  return multiplication
};

// Do not edit below this line
// module.exports = {
//   add,
//   subtract,
//   sum,
//   multiply,
//   power,
//   factorial
// };