const express=require('express');
const router=express.Router();
const indexController=require('../controllers/indexController');

router.get('/',indexController.home);

router.get('/post/:url',indexController.post);

router.get('/about',(req,resp)=>{
    resp.render("pages/about");
});

router.get('/admin',(req,resp)=>{
    resp.send("admin");
});



module.exports=router;