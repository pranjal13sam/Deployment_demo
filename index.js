require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res)=>{
  res.send('<h1>Please Login at Chai aur Code</h1>')
})

app.get('/justforfun',(req,res)=>{
  res.send("hello my name is pranjal")
})

//this below code is for deployment
app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${port}`)
})