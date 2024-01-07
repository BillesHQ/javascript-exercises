const palindromes = function (string) {
    let newString = string.toLowerCase()
    let result = '';
    for (let i = newString.length- 1; i >= 0; i--){
       if (string === ',') continue;
        result += newString[i];
    }
  return result === newString
};

// Do not edit below this line
module.exports = palindromes;
