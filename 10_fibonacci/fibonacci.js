const fibonacci = function(num) {
    if (num <= 2) {
        return 1
    }
    let first = 1;
    let second = 1;
    let last;
    for (let i = 2; i < num; i++) {

        last = first + second;

        first = second;
        second = last;
    }
    return last
};

// Do not edit below this line
module.exports = fibonacci;
