const express=require('express');
const router=express.Router();
const adminController=require('../controllers/adminController');

function isLogin(req,resp,next){
    if(req.user===null || typeof req.user === 'undefined'){
        resp.redirect('/admin/login');
    }else{
        next();
    }
}

function loginRed(req,resp,next){
    if(typeof req.user !=='undefined'){
        resp.redirect('/admin');
    }
    next();
}

router.get('/',isLogin,adminController.home);

router.get('/login',loginRed,adminController.getLogin);

router.post('/login',loginRed,adminController.postLogin);

router.get('/posts',isLogin,adminController.posts);

router.get('/edit-post/:id',isLogin,adminController.getEdit);

router.post('/edit-post/:id',isLogin,adminController.postEdit);

router.get('/add-post',isLogin,adminController.getAddPost);

router.post('/add-post',isLogin,adminController.postAddPost);

router.get('/delete-post/:id',isLogin,adminController.deletePost);

router.get('/logout',adminController.logout);

router.use(isLogin,adminController.error);

module.exports=router;