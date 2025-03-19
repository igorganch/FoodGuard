const Sequelize = require('sequelize');
var fs = require('fs');

if(process.env.NODE_ENV !== 'production'){
    require("dotenv").config();
}

var sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        port: process.env.DB_PORT,
        dialectOptions: {
            reuire: true,
            ssl: { rejectUnauthorized: false },
        },
    }
);

sequelize.authenticate().then(function(){

    console.log("Connection succesful to postgre");
    
    }).catch(function(err){
    console.log("Error connection to postgre : " + err);
    
    });


    