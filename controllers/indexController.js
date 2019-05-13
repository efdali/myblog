const blogModel=require("../models/blogModel");
const dateHelper=require("../helpers/dateHelper");

module.exports.home=(req,resp)=>{
    
    let page=(req.query.page===undefined || req.query.page<=0 ? 1 : req.query.page);
    console.log(page);
    let offset=(page-1)*5;

    blogModel.findAndCountAll({ 
        order:[['meta','DESC']],
        offset:offset,
        limit: 5 
    }).then(blogs=>{
        let pages=Math.ceil(blogs.count/5);
        resp.render("pages/home",{
            posts:blogs.rows,
            page,
            pages,
            _ : dateHelper
        });
    });

    
}

module.exports.post=(req,resp)=>{
    const url=req.params.url;
    blogModel.findOne({
        where:{
            url
        }
    }).then(post=>{
        resp.render("pages/post",{
            post,
            _:dateHelper
        });
    });

    
}