//server
import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './router.js';
import userMatches from './matches';
import userInterests from './interests';

//var expressValidator = require ('express-validator);

const app = express();
const PORT = 5000;

//changing input to json
app.use(bodyParser.json());
//use rroutes for example 
app.use('/user', usersRoutes);
app.use('/match', userMatches);
app.use('/interest', usersInterests);

// added function
app.get('/user', (req, res) => { res.send('Hello from HomePage'); });

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));


//Alex code below 
// app.get("/", function (req, res) {
//   fs.readFile("/View/eksamensopg.html", "utf8", function (err, text) {
//     res.send(text);
//   });
// });
