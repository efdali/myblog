const express=require('express'),
path=require('path'),
// blogModel=require("./models/blogModel"),
bodyParser=require('body-parser'),
session=require('express-session'),
passport=require('passport'),
app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(session({
    cookie:{maxAge:60000},
    secret:"MyBlog with Nodejs",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
// blogModel.sync({force:true}).then(()=>{
//     blogModel.create({title:"denene",subTitle:"sgklseg",text:"sdwesg",url:"deneme"}).then((a)=>{
//         console.log(a.id+" oldu");
//     });
// });
        
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

app.use((req,resp,next)=>{
    resp.locals.user=req.user;
    next();
});


app.use('/public',express.static(path.join(__dirname,'/public')));

require('./routes/routerManager')(app);

app.use((req,resp)=>{
    resp.render('static/404');
});

let port=process.env.PORT || 8080;

app.listen(port);
