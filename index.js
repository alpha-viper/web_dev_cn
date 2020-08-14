const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();
const port=7000;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy')


app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static('./assets'))
app.use(expressLayouts);

// extract style and script from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//use express routers
app.use('/',require('./routes/index'));

//set up view engine
app.set('view engine','ejs');
app.set('views','./views');
app.use(session({
    name:'codeial',
    //TODO change the 
    secret:'blahsomething',
    saveUninitialized:'false',
    resave:'false',
    cookie:
    {
        maxAge: (1800+60+180)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.listen(port,function(err){
    if(err)
    {
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
});