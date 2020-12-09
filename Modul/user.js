/*const fs = require ('fs')
// is this correct?
let rawdata = fs.readFileSync('json.json')
let json = JSON.parse(rawdata);*/

class user {
    constructor (firstName, lastName, phoneNumber, age, gender, email, location, work, education, interestsGender){
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
    this.interestsGender=interestsGender;

} 

}
module.exports = {
    user,
  
  }


