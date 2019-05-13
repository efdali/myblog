const Sequelize=require('sequelize');

const Model=Sequelize.Model;
const sequelize=require('../helpers/Sequelize');

class BlogModel extends Model{}

BlogModel.init({

    id:{
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER
    },
    title:{
        type:Sequelize.TEXT
    },
    subTitle:{
        type:Sequelize.TEXT
    },
    text:{
        type:Sequelize.TEXT
    },
    meta:{
        type:Sequelize.DATE,
        defaultValue:Date.now
    },
    url:{
        type:Sequelize.STRING
    },
    image:{
        type:Sequelize.STRING
    }
},{
    sequelize,
    modelName:"blogModel",
    timestamps:false
});

module.exports=BlogModel;