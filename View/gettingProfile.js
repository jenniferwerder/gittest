function updateNewUser(){
    var userdata = localStorage.getItem("email");
  if(typeof userdata === undefined || userdata === null){
    userdata = JSON.stringify({username:"",firstName:"",lastName:"", password:"",email:""});
    localStorage.setItem("email",email);
  }
    return JSON.parse(userdata);
}

function save_user(firstName , lastName,  email, password){
    userdata = JSON.stringify({firstName:firstName,lastName:lastName,email:email, password:password});
    localStorage.setItem("userdata",userdata);
      return userdata;
}

document.getElementById('save').addEventListener("click",function(){
    save_user(
    document.getElementById('firstName').value,
    document.getElementById('lastName').value,
    document.getElementById('email').value,
    document.getElementById('password').value,

    );
  userdata = load_user();
    document.getElementById('firstName').value = userdata.firstName;
    document.getElementById('lastName').value = userdata.lastName;
    document.getElementById('email').value = userdata.email;
    document.getElementById('password').value = userdata.password;
});

userdata = load_user();
    document.getElementById('firstName').value = userdata.firstName;
    document.getElementById('lastName').value = userdata.lastName;
    document.getElementById('email').value = userdata.email;
    document.getElementById('password').value = userdata.password;

/*let email = localStorage.getItem("email")
    const options = {
        method: "GET",
        redirect:'manual',
        headers: {
            "content-type": "application/json"
        }
    
    }
    fetch(`http://localhost:5000/users/${email}`, options).then((resp)=> resp.json ()).then(function(userInformation){
      document.getElementById("firstName").defaultValue= "hej"

})
      
.catch(err =>{
    alert(err)
})*/

/*function editProfile(){
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    
}

    
fetch(`http://localhost:5000/users/${email}`, {
      method:'GET',
      redirect:'manual'
})
      .then((resp) => resp.json())
      .then(function (userInformation) {
 })

function SetDefaultValue() {
    let firstName = document.getElementById("firstName").value="blää";
    
}	
        
//document.getElementById("firstName").defaultValue= "hej"
//document.getElementById("lastName").defaultValue= "blä"
   /* let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
}

const editedUser = { firstName, lastName, dateOfBirth, password };*/

    

//[0] = array
//alert (userInformation[0].email)


    
    //catching errors after running through the code 
     //.catch(err =>{
     // alert(err)
    //});

    //console.log(userInformation);