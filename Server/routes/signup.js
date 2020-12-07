
import express from 'express';
import users from '../Controllers/signup.js';

const router = express.Router();


router.get("/", function(req, res, next) {
    res.render('index', { title: 'Form Validation', success: req.session.success, errors: req.session.errors});
    req.session.errors = null;
    console.log('getsignup')
  
});
  
  // the string must match the name in the html.doc
  router.post("/submit", function(req, res, next) {
    req.check('email', 'invalid email adress').isEmail();
    //maybe take away the password checks??
    req.check ('password', 'Password invalid').isLength ({min: 4}). equals(req.confirmPassword);
    
    console.log('post')


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
  