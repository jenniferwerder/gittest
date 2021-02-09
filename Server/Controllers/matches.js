var Datastore = require ('nedb')
, db = new Datastore ({ filename: '../Storage/SaveMatches.db', autoload: false});

const fs = require("fs");
const database = require('../../Storage/SaveMatches.js')

//let usersStorage = fs.readFileSync("../Storage/json.json", "utf8");
//let users = JSON.parse(usersStorage);

let user = require("../../Modul/match.js");
//import { json } from "body-parser";
const { v4: uuidv4 } = require("uuid");
const { stringify } = require("querystring");
const { countReset } = require('console');
const { match } = require('assert');
//import { user } from "../../Modul/user.js";



//router 2 (från början)
function getAllMatches(req, res) {  
  /*Rename this to getUsers
  console.log(users);
  res.send(users);*/
  //load data everytime, it must see if you get a new user etc --> get function 
  //why not in the database? --> transfer information (optimal, it would be with the others)
  //the user is loaded in the database
  db.loadDatabase()
   db.find({}, function (err, match) {
  //or res.send (delivery method)
  res.json(match)
});
}


//post 2 (från början)
//wanna req the body
function postMatch(req, res) {
  
let match = req.body;
 
 console.log(req.body)
  database.insertNewMatch(match)
  res.send(`This works!`);
}

function getMatch(req, res) {
  const userEmail  = req.params;
  /*const { id } = req.params;

  const foundUsers = users.find((user) => user.id == id);
  res.send(foundUsers);*/
  db.loadDatabase() 
  // changed the id to the email (the key how i want to identify)
  db.find({email1: userEmail.email1}, function (err, emails) {

    res.json(emails)

  });

}

function deleteMatch(req, res) {
  const { email } = req.params;

//users = users.filter((user) => (user.id = !id));
  database.removeNewMatch(email)

  res.send(`User with the id ${email} deleted from the database.`);
}
//first one matches, returns it


//to do a function
module.exports = {
  getAllMatches,
  postMatch,
  getMatch,
  deleteMatch
};



