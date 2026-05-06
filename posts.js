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
    // 1 get the container
    const postsContainer = document.getElementById ('posts-container');
    // console.log(postsContainer);
    
     posts.forEach (post => {
        //  console.log(post.title);
        
        // 2 create Html element 
        let li = document.createElement ('li');
        li.innerText = post.title; 
        // console.log(li);
        
        // 3  add element into postContainer
          postsContainer.appendChild (li);
     })
}