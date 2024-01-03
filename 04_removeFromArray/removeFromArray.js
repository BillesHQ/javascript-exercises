const removeFromArray = function(num,remover) {
    let array = []
    for (let i = 0; i < num.length; i++){
        if (num[i] !== remover) {
                array.push(num[i])
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
