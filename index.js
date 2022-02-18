const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(name => name.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string) {
    return drivers.filter
}

console.log(drivers.filter(name => name.startsWith('Sa')))