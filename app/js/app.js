document.getElementById('btnLogin').addEventListener('click', () =>{
    fetch('http://localhost:1339/owner/:id')
    .then((response) => response.json() )
    .then((json) =>{
    var helloUser = document.getElementById('hello')
    
    helloUser.innerHTML = `<h1>Welcome, ${rows.fist_name}</h1>`
    });
}); // 