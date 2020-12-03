//server
import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './router.js';
//var expressValidator = require ('express-validator);


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/router', usersRoutes);

app.get('/', (req, res) => {
  res.send('Hello from HomePage');
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
//Alex code below 
// app.get("/", function (req, res) {
//   fs.readFile("/View/eksamensopg.html", "utf8", function (err, text) {
//     res.send(text);
//   });
// });
