const express=require('express')
const app=express()

app.get('/',(req,resp)=>{
     resp.sendFile('public/index.html',{root:__dirname})
})

app.listen(7000)
console.log("server is running on 7000")