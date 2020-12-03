// classes from diagram > put in to the classes so it's the correct obj
// import classes from here to the interests/martches 
// id in every file there 
//different classes> making a map > inside that, json > userID, interests ID 
//array
//interest= > and having an array  >
//the things that will pop up in the json

const { getMaxListeners } = require("process");

//look at my object diagram
// see how to do with the other attributes 
class user {
    constructor (firstName, lastName, phoneNumber, age, gender, email, location, work, education, image){
    //define them, they are thrown away from the constructor
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.age = age; 
    this.gender = gender;
    this.email = email;
    this.location = location;
    this.work = work;
    this.education= education;
    this.image = image; 
}
}
// keep them in the same folder? 
class interests extends user{
    constructor (user, interests) {
        super(user);
        user.interests = interests; 
    }

}

class image extends user {
    // put in height, width, name, source ?
    constructor (user, name) {
        super (user); 
        this.name = name;

    }
};
//userID???
class match {
    constructor(matchname1, matchname2) {
        this.matchname1 = matchname1;
        this.matchname2 = matchname2;

    }
}

// all the users (with attributes etc)

//var = variables are containers for storing data values 
//matches 
var matchArray = [];
var matchArray = [match1, match2];

// new match 
// put in the right users 
var match1 = new match (user, user);
var match2 = new match (user, user);

// new interests 
//change the name of the user when i have created all the users 
new interests (user1)
new interst (user2)
new interst (user3)
new interst (user4)

// storing data, images  --> ask for help here, don't know if this is the correct way of doing it
// choose correct name for image 
var image1=  new image (user1);