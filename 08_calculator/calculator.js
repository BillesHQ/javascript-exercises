const add = function(num1,num2) {
	return num1 + num2
};

const subtract = function(min,sub) {
	return min - sub
};

const sum = function(add1,add2) {
	return add1 + add2
};

const multiply = function(mul1,mul2) {
  return mul1 * mul2
};

const power = function(num, exponent) {
	return Math.pow(num,exponent)
};

const factorial = function(start,end) {
  let proudct = 1
  for (let i = start; i <= end; i ++){
    proudct *= i
    }
  return proudct
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
