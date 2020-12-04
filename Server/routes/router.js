// to make a server
import express from 'express';
// creates the string/library/the name refers to it/popular id
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [];
//why dark diown (req)?

//router 2 (från början)
router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});
//post 2 (från början)
router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the username ${user.firstName} added to the database!`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id == id);

  res.send(foundUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => (user.id = !id));

  res.send(`User with the id ${id} deleted from the database.`);
});
//first one matches, returns it

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id == id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with the id ${id} has been updated`);
});


//SIGNUP PAGE

router.get("/", function(req, res, next) {
  res.render('index', { title: 'Form Validation', success: req.session.success, errors: req.session.errors});
  req.session.errors = null;
});

// the string must match the name in the html.doc
router.post("/submit", function(req, res, next) {
  req.check('email', 'invalid email adress').isEmail();
  //maybe take away the password checks??
  req.check ('password', 'Password invalid').isLength ({min: 4}). equals(req.confirmPassword);
  
  var errors = req.validationErrors();
  if(errors) {
    req.sessions.errors = errors; 
    req.session.success = false;
  } else {
    req.session.success = true;
  }

  res.redirect('/');

});



 export default router;
