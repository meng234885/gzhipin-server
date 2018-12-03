const mongoose=require('mongoose');

module.exports =new  Promise((resolve, reject) =>{
    mongoose.connect('mongoose://localhost:27017/gzhipin',{useNewUrlParser:true})
    mongoose.connection.once('open',err=>{
        if (!err){
            console.log("数据库开启成功");
            resolve()
        } else {
            reject(err)
        }
    })
} )