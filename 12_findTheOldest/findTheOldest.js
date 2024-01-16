const findTheOldest = function(people) {
    // let years = [];
    let currentYear = new  Date().getFullYear()
    for (let i =0; i < people.length; i++) {
        if (!people[i].yearOfDeath && people[i].yearOfDeath != typeof 'number'){
            // years.push(currentYear - people[i].yearOfBirth);
            people[i].age = (currentYear - people[i].yearOfBirth)
        } else {
            // years[i].age = (people[i].yearOfDeath - people[i].yearOfBirth)
            people[i].age = (people[i].yearOfDeath - people[i].yearOfBirth)
        }
    }
    return Math.max(...people.ages)


    // let ages = years.sort()
    // let answer = ages.reduce(ages
    // return Math.max(...people.ages)
    // let person = people.find(p => p.)



};

// Do not edit below this line
module.exports = findTheOldest;
