const express=require('express');
const body_parser = require('body-parser');
const path=require('path');
const rootDir=require('./util/path');
const exphbs = require('express-handlebars');

const app=express();

const usernameRoutes=require('./routes/username');
const userRoutes=require('./routes/users');

//const createUserRoutes=require('./routes/create-user');

app.engine('Handlebars',exphbs({defaultLayout: 'main',extname:'handlebars'}));
app.set('view engine','Handlebars');

app.use(body_parser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));

app.use(usernameRoutes);
//app.use(createUserRoutes);
app.use(userRoutes);


app.use((req,res,next)=>{
     res.status(404).sendFile(path.join(rootDir,'views','404.html'));
 });

app.listen('3000',()=>{
    console.log('Server Started');
});