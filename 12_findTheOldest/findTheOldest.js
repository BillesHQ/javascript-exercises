const findTheOldest = function(people) {
    let years = [];
    let currentYear = new  Date().getFullYear();
    for (let i =0; i < people.length; i++) {
        if (!people[i].yearOfDeath && people[i].yearOfDeath != typeof 'number'){
            years.push(currentYear - people[i].yearOfBirth);
            // people[i].age = (currentYear - people[i].yearOfBirth)
        } else {
            years.push(people[i].yearOfDeath - people[i].yearOfBirth)
            // people[i].age = (people[i].yearOfDeath - people[i].yearOfBirth)
        }
    }

    // for (let i = 1; i < people.length; i++){
    //     let first = people[i+1].age
    //     let second = people[i].age
    //     let last = first < second
    //     first = second
    //     second = last
    // let ages = years.sort()
    // let ages = Math.max(...years).indexOf()
    let index = years.indexOf(Math.max(...years));
    // // let answer = ages.reduce(ages
    // }
    return people[index]
    // let person = people.find(p => p.)
};

// Do not edit below this line
module.exports = findTheOldest;
