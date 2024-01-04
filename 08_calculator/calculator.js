const add = function(num1,num2) {
  let sum = 0
  for (let i =0; i <= num1.length;i ++){
    sum += [i]
  }

  return sum + num2
};

const subtract = function(min,sub) {
	return min - sub
};

const sum = function(add1,add2) {
    let sum = 0
    for (let i =0; i < num1.length; i++){
        sum += num1[i];
  }
    return sum + num2
};

const multiply = function(mul1,mul2) {
  let product = 1
  for (let i = 0; i < mul1.length; i++){
    product *= mul1[i]
  }
  return product * mul2
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
