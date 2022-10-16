const express = require('express');
const sequelize = require('./model');
const app = express();
const port = 4000;
const userCtr = require('./controllers/userController') 

require('./model/contact');
require('./model/user');

app.use(express.json());

sequelize.sync({force:false})

app.post('/adduser',userCtr.addUser)

app.get('/readAllUser',userCtr.ReadUser)

app.get('/ReadSingleUser/:id',userCtr.ReadSingleUser)

app.patch('/updateUser/:id',userCtr.updateUser)

app.delete('/deleteUser/:id',userCtr.deleteUser)


app.listen(port,()=>{
    console.log(`my server run at http://localhost:${port}`);
});