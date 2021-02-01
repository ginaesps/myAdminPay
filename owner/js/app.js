function hide(objectId){
    document.getElementById(objectId).style.display = 'none';
}

function show(objectId){
    document.getElementById(objectId).style.display = 'block'; // que atributo se le debería asignar?
}

//user login
document.getElementById('btnLogin').addEventListener('click', ()=>{
    let login, pwd; //idd, nombred, edadd;
    
        login=document.getElementById("login").value;
        pwd=document.getElementById("pwd").value;
    
        var data = {phone_number: login, password:pwd};
     
        fetch('http://localhost:1339/login', {
            method: 'POST', 
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
            var userId = json.rows[0].id; // instead of an input, the value was stored in a variable for safety reasons
            document.getElementById('signin-page')
            document.getElementById('hello').innerHTML = ` 
                <h1>Welcome, ${json.rows[0].first_name}</h1>
            ` 
        }));
})

document.getElementById('btnAssociatedDebtors').addEventListener('click', ()=>{
    //agregar 
    show('associatedDebtors');
})

document.getElementById('btnHideDebtors').addEventListener('click', ()=>{
    hide('associatedDebtors');
})

//document.getElementById('d_debtor_id', )

document.getElementById('generate__debt').addEventListener('click', ()=>{
    show('debt__creation');
})

document.getElementById('btnGenerateDebt').addEventListener('click', ()=>{
    hide('debt__creation');
})

document.getElementById('btnRegisterDebtor').addEventListener('click',()=>{
    show('registerDebtor-form');
})

document.getElementById('btnRegisteredDebtor').addEventListener('click',()=>{
    hide('registerDebtor-form');
    
    let first_name, paternal_surname, maternal_surname, phone_number, email, idebt_concept, idebt_amount;

    first_name=document.getElementById('first_name').value;
    paternal_surname=document.getElementById('paternal_surname').value;
    maternal_surname=document.getElementById('maternal_surname').value;
    phone_number=document.getElementById('phone_number').value;
    email=document.getElementById('email').value;
    pwd=phone_number;
    idebt_concept=document.getElementById('idebt_concept');
    idebt_amount=document.getElementById('idebt_amount');

    var debtorCreation = {
        first_name: first_name,
        paternal_surname: paternal_surname,
        maternal_surname: maternal_surname,
        phone_number: phone_number,
        email: email,
        password: pwd
    }

    fetch('http://localhost:1339/debtor/', {
        method:'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()
    .catch(error =>console.error('Error: ',error))
    .then(response => {
        console.log('Success: ', response);
    }))

    //the reason that causes that you can create the initialDebt variable at the same level than debtorCreation is because you need the debtor's id
})