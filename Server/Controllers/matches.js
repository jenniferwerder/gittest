//import express from 'express'; 
// creates the string/library/the name refers to it/popular id
//instad of using "const match[]"
const fs = require('fs');
let usersStorage = fs.readFileSync('./Storage/json.json', "utf8"); 
let matches = JSON.parse(usersStorage);

import { v4  as uuidv4 } from "uuid";
//import { match } from '../../Modul/match';


export const getMatch = (req, res) => {
  //console.log(match);
  res.send(match);
  };
  
export const postMatch = (req, res) => {
  const match = req.body;
  const matchWithId = {...match, id: uuidv4()};
  match.push({ ...match, id: uuidv4() }); //or MATCHES instead?
  res.send(posted);

  res.send(`User with the id ${match} added to the database!`);
   
};

export const getIdMatch = (req, res) => {
  const { id } = req.params;

  const foundMatch = matches.find((match) => match.id == id);

  res.send(foundUser);

}

export const deleteMatch = (req, res) => {
    const { id } = req.params;
  
    matches = matches.filter((match) => (match.id = !id));
  
    res.send(`User with the idMatch ${id} deleted from the database.`);
  };


  



