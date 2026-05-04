// JS object
const person = {
    name : 'halima',
    food : 'rice',
    student : 'good',
    age: 23,
    isRich : false,
}
console.log(person, typeof person);

// JSON ---> JS object with notation
// JSON.stringify ---> It will convert JS object to JSON string
// JSON.parse ---> It will convert JSON file to JS object

const personJson = JSON.stringify (person);
console.log(personJson, typeof personJson);

// JSON file ---> JS object
const personParse = JSON.parse (personJson);
console.log(personParse);
