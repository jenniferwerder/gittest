//server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();

const server = express();
const PORT = 5000;

const user = require ('./routes/user.js');
const matches = require ('./routes/matches.js');
//const interests = require('./routes/interests.js);

//var expressValidator = require ('express-validator);

//changing input to json
server.use(bodyParser.json());   //use rroutes for example 
server.use ('/users', user.router);
server.use('/view', express.static('./view/'));
server.use('/match', matches.router);
server.use('/interest', user.router);

// added function
server.get('/', (req, res) => { res.send('Hello from HomePage'); });
server.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

/*module.exports = {
    userRoutes, 
    postMatch, 
    usersInterests, 
  };*/





