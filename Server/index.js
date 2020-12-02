import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from '../Server/router.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/router', usersRoutes);

/*app.get('/', (req, res) => {
   res.send('Hello from HomePage');
});*/

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

app.get('/',function(req,res){
   fs.readFile(__dirname + '/View/eksamensopg.html', 'utf8', function(err, text){
        res.send(text);
   })
})
