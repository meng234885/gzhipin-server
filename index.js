const express=require('express')
const router=require('./router')
const db=require("./db")
const app=express();


(async ()=>{
    await db;
    app.use(router)
})

app.listen(4000,err=>{
    if (!err){
        console.log('服务器开启成功~请访问: http://localhost:4000');
    } else {
        console.log(err);
    }
})