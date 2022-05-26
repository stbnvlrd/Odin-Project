const findTheOldest = function(people) {
    let peopleAge = [];
    for (let index = 0; index < people.length; index++) {
        
        if (people[index].yearOfDeath == null) {
            people[index].yearOfDeath = 2022;
        }
        console.log(people[index].yearOfDeath - people[index].yearOfBirth);
        peopleAge.push({name: people[index].name, year: (people[index].yearOfDeath - people[index].yearOfBirth)});
    }
    oldestName = "";
    oldestAge = 0;
    for (let index = 0; index < peopleAge.length; index++) {
        if(peopleAge[index].year > oldestAge){
            oldestAge = peopleAge[index].year;
            oldestName = peopleAge[index].name;
        }
    }

    return oldestName;
};

// Do not edit below this line
module.exports = findTheOldest;