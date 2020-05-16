const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.get('/', (req,res)=>{
    res.send("Hello World")
})

mongoose.connect('mongodb+srv://sajidlab:Frontenddevelopment@123@react-blog-w4ltf.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser: true}).then(()=>console.log("DB created"))
                        .catch(err=>console.error(err))
app.listen(5000)