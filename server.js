const express = require('express');
const app = express();


//router

const router = require('./routers/productRouters.js');
const bodyParser = require('body-parser');

//server

const PORT = 9001;

app.listen(PORT, ()=>{
    console.log(`server is run on  http://localhost:${PORT}`);
})

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));

app.use('/', router)




// test api

app.get('/', (req,res)=>{
    res.json({message:'everything is  a fine'})
})
