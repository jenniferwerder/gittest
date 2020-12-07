
//import { } from "../../Storage/json.json"
const fs = require('fs');
let usersStorage = fs.readFileSync('./Storage/json.json', "utf8"); 
let users = JSON.parse(usersStorage);

//import { json } from "body-parser";
import { v4  as uuidv4 } from "uuid";
import { user } from "../../Modul/user.js";

//temporary database
//let users = []
//why dark diown (req)?

//router 2 (från början)
export const getUser = (req, res) => {
  console.log(users);
  res.send(users);
};

//post 2 (från början)
//wanna req the body
export const postUser = (req, res) => {
  const user = req.body;

  //make an extra id, and push it in 
  users.push({ ...user, id: uuidv4() });

  res.send(`User with the username ${user.firstName} added to the database!`);
};

export const getIdUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id == id);

  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => (user.id = !id));

  res.send(`User with the id ${id} deleted from the database.`);
};
//first one matches, returns it


export const patchUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id == id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with the id ${id} has been updated`);
};


//to do a function


 //export default router;
 
