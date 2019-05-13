const blogModel=require('../models/blogModel');
const passport=require('passport');
require('../helpers/local');

module.exports.home=(req,resp)=>{
    resp.render("admin/pages/home");
}

module.exports.getLogin=(req,resp)=>{
    resp.render("admin/pages/login");
}

module.exports.postLogin=(req,resp,next)=>{
    passport.authenticate('local',{
        successRedirect: '/admin',
        failureRedirect: '/admin/login'
    })(req,resp,next);
}

module.exports.logout=(req,resp)=>{
    req.logout();
    resp.redirect('/admin/login');
}

module.exports.posts=(req,resp)=>{

    blogModel.findAll({
        order:[['meta','DESC']]
    }).then(posts=>{
        resp.render("admin/pages/posts",{
            posts
        });     

    });

}

module.exports.getEdit=(req,resp)=>{
    const {id}=req.params;
    console.log(id)
    blogModel.findOne({
        where :{
            id
        }
    }).then(post=>{
        
        resp.render("admin/pages/edit-post",{
            post
        });

    });

}

module.exports.postEdit=(req,resp)=>{
    
    const {title,subTitle,text,url,image}=req.body;
    blogModel.update({
        image,
        title,
        subTitle,
        text,
        url
    },{
        where:{
            id:req.params.id
        }
    }).then(post=>{
        
        resp.redirect('/admin/posts');

    });

}

module.exports.getAddPost=(req,resp)=>{
    resp.render('admin/pages/edit-post',{
        post:undefined
    });
}

module.exports.postAddPost=(req,resp)=>{
    const {title,subTitle,text,url,image}=req.body;

    blogModel.create({
        image,
        title,
        subTitle,
        text,
        url
    }).then(id=>{
        resp.redirect('/admin/posts');
    });
}

module.exports.deletePost=(req,resp)=>{
    const {id}=req.params;

    blogModel.destroy({
        where:{
            id
        }
    }).then(()=>{
        resp.redirect('/admin/posts');
    });

}

module.exports.error=(req,resp)=>{
    resp.render("admin/static/404");
}