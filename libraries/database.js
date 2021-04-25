const mongoose   = require('mongoose');
const app_config = require('../config/app.js');

const databaseInitializer = async function (uri) {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

    if(app_config.app.environment == "development"){
        mongoose.connection.on('connected', function () {  
            console.log(`Database connection open to ${mongoose.connection.host} ${mongoose.connection.name}`);
        }); 
        
        mongoose.connection.on('error',function (err) {  
        console.log('Mongoose default connection error: ' + err);
        }); 
        
        mongoose.connection.on('disconnected', function () {  
        console.log('Mongoose default connection disconnected'); 
        });
    }
}

module.exports = {
    databaseInitializer,
};