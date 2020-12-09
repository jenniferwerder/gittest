//import express from 'express'; 
// creates the string/library/the name refers to it/popular id
//instad of using "const match[]"
//import * as fs from 'fs';

const fs = require ('fs');
//let usersStorage = fs.readFileSync('./Storage/json.json', "utf8"); 
//let matches = JSON.parse(usersStorage);

const { v4: uuidv4 } = require ('uuid');
//import { match } from '../../Modul/match';


function getMatch (req, res) {
  //console.log(match);
  res.send(match);
  };
  
function postMatch (req, res) {
  const match = req.body;
  const matchWithId = {...match, id: uuidv4()}; //matchwithID
  match.push({ ...match, id: uuidv4() }); //or MATCHES instead?
  res.send(posted);

  res.send(`User with the id ${match} added to the database!`);
   
};

function getIdMatch (req, res) {
  const { id } = req.params;

  const foundMatch = matches.find((match) => match.id == id);

  res.send(foundUser);

}

 function deleteMatch (req, res) {
    const { id } = req.params;
  
    matches = matches.filter((match) => (match.id = !id));
  
    res.send(`User with the idMatch ${id} deleted from the database.`);
  };


  module.exports = {
    getMatch, 
    postMatch, 
    getIdMatch, 
    deleteMatch 
  };



