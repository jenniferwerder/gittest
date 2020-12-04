//SIGNUP PAGE
import express from 'express';
import user from '../../Modul/user';

//routerGet
router.get("/", function(req, res, next) {
    res.render('index', { title: 'Form Validation', success: req.session.success, errors: req.session.errors});
    req.session.errors = null;
  });
  
//routerPost
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
  
    //routerPatch
    router.patch("/:id", (req, res) => {
        const { id } = req.params;
        const { firstName, lastName, age } = req.body;
      
        const user = users.find((user) => user.id == id);
      
       
      });
      
  });
  
  
  
   export default router;
  