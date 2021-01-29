var Datastore = require ('nedb')
, db = new Datastore ({ filename: '../Storage/UserInformation.db', autoload: false});

const fs = require("fs");
const database = require('../../Storage/SaveUser.js')

let usersStorage = fs.readFileSync("../Storage/json.json", "utf8");
let users = JSON.parse(usersStorage);

let user = require("../../Modul/user.js");
//import { json } from "body-parser";
const { v4: uuidv4 } = require("uuid");
const { stringify } = require("querystring");
//import { user } from "../../Modul/user.js";

//temporary database
//let users = []
//why dark diown (req)?

//router 2 (från början)
function getUsers(req, res) {  
  /*Rename this to getUsers
  console.log(users);
  res.send(users);*/
  //load data everytime, it must see if you get a new user etc --> get function 
  //why not in the database? --> transfer information (optimal, it would be with the others)
  //the user is loaded in the database
  db.loadDatabase()
   db.find({}, function (err, users) {
  //or res.send (delivery method)
  res.json(users)
});
}


//post 2 (från början)
//wanna req the body
function postUsers(req, res) {
  //console.log(req)
  //let user = 
   
    /*firstName = req.body.firstName,
    lastName = req.body.lastName,
    email = req.body.email,
    password = req.body.password,
    cpr = req.body.cpr,
    age = req.body.age 
  }*/
let user = req.body;
 user['id'] = uuidv4()
 //user ['firstName'] = req.body.firstName
  //make an extra id, and push it in
  /*users.push({ ...user });
  console.log(users);*/
 console.log(req.body)
  database.insertNewUser(user)
  res.send(`User with the username ${user.firstName} and i ${user.id} added to the database!`);
}

function getIdUsers(req, res) {
  /*const { id } = req.params;

  const foundUsers = users.find((user) => user.id == id);

  res.send(foundUsers);*/
  db.loadDatabase() 
  // changed the id to the email (the key how i want to identify)
  const { useremail } = req.params;
  db.find({ email: useremail}, function (err, emails) {

    res.json(emails)

  });

}

function deleteUsers(req, res) {
  const { id } = req.params;

//users = users.filter((user) => (user.id = !id));
  database.removeNewUser(id)

  res.send(`User with the id ${id} deleted from the database.`);
}
//first one matches, returns it

function patchUsers(req, res) {
  const { id } = req.params;
  const userInformation = req.body;

  //combining this information with the other = one id
  userInformation.id = id

  database.updateNewUser(userInformation)


  /*const user = users.find((user) => user.id == id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;*/

  res.send(`User with the id ${id} has been updated`);
}

//to do a function
module.exports = {
  getUsers,
  postUsers,
  getIdUsers,
  deleteUsers,
  patchUsers,
};



