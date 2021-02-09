function gettingInformation(){
    // Getting the email fron local storage
    var email = localStorage.getItem("email");

    fetch(`http://localhost:5000/users/${email}`).then((resp) => resp.json()).then(function(data) {
    // Inserting the info already in storage
    //Getting all the users data from the function
    //taking users data and put in to the "right place"
    // 0 = they way is going to be transported (array) => thrown in an array
    document.getElementById('firstName').defaultValue = data[0].firstName;
    document.getElementById('lastName').defaultValue = data[0].lastName;
    document.getElementById('password').defaultValue = data[0].password;
    document.getElementById('cpr').defaultValue = data[0].cpr;
    document.getElementById('age').defaultValue = data[0].age;
})

}