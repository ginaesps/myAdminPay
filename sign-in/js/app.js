/*document.getElementById('btnLogin').addEventListener('click', ()=>{
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
            var ownerInfo = {
                first_name: json.rows[0].first_name,
                paternal_surname: json.rows[0].paternal_surname,
                maternar_surname: json.rows[0].maternar_surname,
                phone_number: json.rows[0].phone_number,
                email: json.rows[0].email
            }
            document.getElementById('hello').innerHTML = ` 
                <h1>Welcome, ${json.rows[0].first_name}</h1>
                <input type="number" id="owner_id" disabled value='${json.rows[0].id}'</input>     
            ` // en este caso, como pasar la informacion a la página de owner o debtor?
        }))
        ;
})*/