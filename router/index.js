//引入express模块
const express = require('express');

const router =new express.Router()

router.get('/',(req,res)=>{
  res.send('这是服务器返回的相应')
})





module.exports = router;