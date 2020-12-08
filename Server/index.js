//server
import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/user.js';
import userMatches from './routes/matches.js';
//import usersInterests from './routes/interests.js';


//var expressValidator = require ('express-validator);

const app = express();
const PORT = 5000;
const fs = require ('fs'); //get the file system

//changing input to json
app.use(bodyParser.json());   //use rroutes for example 
app.use('/user', usersRoutes);
app.use('/match', userMatches);
app.use('/interest', usersInterests);

// added function
app.get('/', (req, res) => { res.send('Hello from HomePage'); });
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));



