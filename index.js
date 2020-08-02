const express=require('express');
const app=express();
const port=7000;

//use express routers
app.use('/',require('./routes/index'));


app.listen(port,function(err){
    if(err)
    {
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
})