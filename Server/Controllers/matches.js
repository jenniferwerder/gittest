var Datastore = require ('nedb')
, db = new Datastore ({ filename: '../Storage/SaveMatches.db', autoload: false});

const fs = require("fs");
const database = require('../../Storage/SaveMatches.js')

let user = require("../../Modul/match.js");
const { v4: uuidv4 } = require("uuid");
const { stringify } = require("querystring");
const { countReset } = require('console');
const { match } = require('assert');




//router 2 (från början)
function getAllMatches(req, res) {  
 
  db.loadDatabase()
   db.find({}, function (err, match) {
  //or res.send (delivery method)
  res.json(match)
});
}

function postMatch(req, res) {
  
let match = req.body;
 
 console.log(req.body)
  database.insertNewMatch(match)
  res.send(`This works!`);
}

function getMatch(req, res) {
  const userEmail  = req.params;
  
  db.loadDatabase() 
  // changed the id to the email (the key how i want to identify)
  db.find({email1: userEmail.email1}, function (err, emails) {

    res.json(emails)

  });

}

function deleteMatch(req, res) {
  const { email } = req.params;

  database.removeNewMatch(email)

  res.send(`User with the id ${email} deleted from the database.`);
}

module.exports = {
  getAllMatches,
  postMatch,
  getMatch,
  deleteMatch
};



