const indexRouter=require('./indexRouter'),
adminRouter=require('./adminRouter');

module.exports=(app)=>{
    app.use('/admin',adminRouter);
    app.use(indexRouter);
}