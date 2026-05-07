const loadPost = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch (url)
    .then (res => res.json ())
    .then (data => {
        console.log(data);
        dataPost (data);
    })
}

// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati      excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur  expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }

const dataPost = (posts) => {
    // 1 get the parent container and empty the container
    const postsContainer = document.getElementById ('posts-container');
    postsContainer.innerHTML = '';

    posts.forEach (post => {
        // 2 create child and set innerHtml
        const postCard = document.createElement ('div');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <h2>${post.id}</h2>
            <p>${post.title}</p>
            <p>${post.body}</p>
        `
        // 3 add child into parent
        postsContainer.appendChild (postCard);
    })
}

// loadPost ();