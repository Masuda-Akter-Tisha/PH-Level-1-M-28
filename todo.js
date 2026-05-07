const loadTodo = () => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    fetch (url)
    .then (res => res.json ())
    .then(data => {
        console.log(data);
        displayTodo (data);
    })
}

// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// }

const displayTodo = (todos) => {
    // get the container and empty the container
    const todoContainer = document.getElementById ('todo-container');
    todoContainer.innerHTML = '';

    todos.forEach (todo => {
        // console.log(todo);
        // 2 create element and set innerHtml
        const todoCard = document.createElement ('div');
        todoCard.className = 'todo-card';
        todoCard.innerHTML = `
        <h4>${todo.completed === true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-solid fa-circle-xmark"></i>`}</h4>
        <p>${todo.title}</p>
        `
        // 3 add child into the parent
        todoContainer.appendChild (todoCard);
    })
    
}

loadTodo ();