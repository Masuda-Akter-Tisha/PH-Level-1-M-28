// JS object
const person = {
    name : 'halima',
    food : 'rice',
    student : 'good',
    age: 23,
    isRich : false,
}
// console.log(person, typeof person);

// JSON ---> JS object with notation
// JSON.stringify ---> It will convert JS object to JSON string
// JSON.parse ---> It will convert JSON file to JS object

const personJson = JSON.stringify (person);
// console.log(personJson, typeof personJson);

// JSON file ---> JS object
const personParse = JSON.parse (personJson);
// console.log(personParse);

// void function ---> function that returns nothing
// Data-Load
  const loadData = () => {
     fetch('https://jsonplaceholder.typicode.com/todos/1') // promise of response
      .then ((res) => res.json()) // promise of json data
      .then ((data) => console.log(data))
  }  
  
  // // Data-Post
  //  const loadPost = () => {
  //    const url = 'https://jsonplaceholder.typicode.com/posts';
  //    fetch (url)
  //   .then (res => res.json ())
  //   .then (json => {
  //     console.log(json);
  //     displayPost (json)
  //   })
  //  }

  // const displayPost = (posts) => {
  //   posts.forEach (post => {
  //     console.log(post);
  //   });  
  // }
  