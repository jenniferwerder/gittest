var Datastore = require ('nedb')
, db = new Datastore ({ filename: '../Storage/UserInformation.db', autoload: false});

const fs = require("fs");
const database = require('../../Storage/SaveUser.js')

let usersStorage = fs.readFileSync("../Storage/json.json", "utf8");
let users = JSON.parse(usersStorage);

let user = require("../../Modul/user.js");

const { v4: uuidv4 } = require("uuid");
const { stringify } = require("querystring");
const { countReset } = require('console');




//router 2 (från början)
function getUsers(req, res) {  
  //the user is loaded in the database
  db.loadDatabase()
   db.find({}, function (err, users) {
  res.json(users)
});
}

function postUsers(req, res) {
let user = req.body;
 user['id'] = uuidv4()
 
console.log(req.body)
database.insertNewUser(user)
  res.send(`User with the username ${user.firstName} and i ${user.id} added to the database!`);
}

function getIdUsers(req, res) {
  const useremail  = req.params;
  db.loadDatabase() 
  // changed the id to the email (the key how i want to identify)
  db.find({email: useremail.email}, function (err, emails) {

    res.json(emails)

  });

}

function deleteUsers(req, res) {
  const { email } = req.params;
//users = users.filter((user) => (user.id = !id));
  database.removeNewUser(email)

  res.send(`User with the id ${email} deleted from the database.`);
}

function patchUsers(req, res) {
  const { email } = req.params;
  const editProfile = req.body;

  patchingUsers(email, editProfile);
  res.send('Updated information!');
}

//to do a function
module.exports = {
  getUsers,
  postUsers,
  getIdUsers,
  deleteUsers,
  patchUsers,
};