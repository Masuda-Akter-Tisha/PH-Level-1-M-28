const loadPost = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch (url)
    .then (res => res.json ())
    .then (json => {
        // console.log(json);
        displayData (json);
    })
}

const displayData = (posts) => {
    // 1 --->for of
//    for (let post of posts) {
//     console.log(post);    
//    }

    // 2 ---> plain for 
//    for (let i = 0; i < posts.length; i ++) {
//          console.log(posts[i]);
//    }

     // 3 ---> forEach 
     posts.forEach (post => {
        console.log(post);
     })
}