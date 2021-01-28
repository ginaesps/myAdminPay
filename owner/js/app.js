document.getElementById('btnLogin').addEventListener('click', ()=>{
    let login, pwd; //idd, nombred, edadd;
    
        login=document.getElementById("phone_number").value;
        pwd=document.getElementById("pwd").value;
    
        var data = {phone_number: login, password:pwd};
    
        fetch('http://localhost:1339/login', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()        
        .catch(error => console.error('Error:', error))
        .then((json) => {
            //console.log(json.rows[0]);
            document.getElementById('hello').innerHTML = `
                <h1>Welcome, ${json.rows[0].first_name}</h1>    
            `
        }))
        ;
})
