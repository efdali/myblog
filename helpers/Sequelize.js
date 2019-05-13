Sequelize=require("sequelize");

const sequelize=new Sequelize("myblog","root","",{
    host:"localhost",
    dialect:"mysql"
});

module.exports=sequelize;