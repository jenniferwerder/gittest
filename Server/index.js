//server
const express = require('express'); //This does that
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
//maybe take row 7 away
const app = express();

//const router = express.Router();

const server = express();
const PORT = 5000;


const user = require ('./routes/user.js'); // This does this
const matches = require ('./routes/matches.js');
//const interests = require('./routes/interests.js);

//var expressValidator = require ('express-validator);
/*var corsOptions = {
    origin: function (origin, callback) {
      // db.loadOrigins is an example call to load
      // a list of origins from a backing database
      db.loadOrigins(function (error, origins) {
        callback(error, origins)
      })
    }
  }*/
//changing input to json
server.use(cors())
server.use(bodyParser.json());   //use rroutes for example 
server.use(express.static(path.join(__dirname, '../View')));
server.use(express.urlencoded({
    extended:true
}))

//server.use(express.static('../View'));
server.use('/users', user.router); //Calls another code base
server.use('/match', matches.router);
server.use('/interest', user.router);

// added function
server.get('/', (req, res) => { res.send('Hello from HomePage') });
server.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));






