const fs = require("fs");

let usersStorage = fs.readFileSync("../Storage/json.json", "utf8");
let users = JSON.parse(usersStorage);

let user = require("../../Modul/user.js");
//import { json } from "body-parser";
const { v4: uuidv4 } = require("uuid");
//import { user } from "../../Modul/user.js";

//temporary database
//let users = []
//why dark diown (req)?

//router 2 (från början)
function getUsers(req, res) {  
  //Rename this to getUsers
  console.log(users);
  res.send(users);
  
}

//post 2 (från början)
//wanna req the body
function postUsers(req, res) {
  let user = req.body;
  user['id'] = uuidv4()
  //make an extra id, and push it in
  users.push({ ...user });
  console.log(users);
  res.send(`User with the username ${user.name} and i ${user.id} added to the database!`);
}

function getIdUsers(req, res) {
  const { id } = req.params;

  const foundUsers = users.find((user) => user.id == id);

  res.send(foundUsers);
}

function deleteUsers(req, res) {
  const { id } = req.params;

  users = users.filter((user) => (user.id = !id));

  res.send(`User with the id ${id} deleted from the database.`);
}
//first one matches, returns it

function patchUsers(req, res) {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id == id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

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



