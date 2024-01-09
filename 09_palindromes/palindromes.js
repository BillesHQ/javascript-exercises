const palindromes = function (string) {
    let newString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    let result = '';
    for (let i = newString.length- 1; i >= 0; i--){
        result += newString[i];
    }
  return result === newString
};

// Do not edit below this line
module.exports = palindromes;

