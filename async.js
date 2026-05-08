// const loadData = async () => {
//     const url = 'https://jsonplaceholder.typicode.com/todos/1';
//     const res = await fetch (url);
//     const data = await res.json()
//     console.log(data);

//       console.log('hello');
//       console.log('hey!there');
// }
      
//  loadData();     

const loadData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const res = await fetch (url);
    const data= await res.json ();
    
    displayData (data);
    
}

const displayData = (todos) => {
        console.log(todos);
        
} 
 loadData ();

 console.log('hello');
 