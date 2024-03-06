const findTheOldest = function(people) {
    let years = [];
    let currentYear = new  Date().getFullYear();
    for (let i =0; i < people.length; i++) {
        if (!people[i].yearOfDeath && people[i].yearOfDeath != typeof 'number'){
            years.push(currentYear - people[i].yearOfBirth);
        } else {
            years.push(people[i].yearOfDeath - people[i].yearOfBirth)
        }
    }


    let index = years.indexOf(Math.max(...years));

    return people[index]

};

function findTheOldest2(people) {
    let maxAge = -1;
    let maxPerson;
    let currentYear = new  Date().getFullYear();
    for (let i = 0; i < people.length; i++) {
        let age;
        if (!people[i].yearOfDeath && people[i].yearOfDeath != typeof 'number'){
            age = currentYear - people[i].yearOfBirth
        } else {
            age = people[i].yearOfDeath - people[i].yearOfBirth
        }
        if (age > maxAge) {
            maxAge = age;
            maxPerson = people[i];
        }
    }
    return maxPerson
};

// Do not edit below this line
module.exports = findTheOldest;
