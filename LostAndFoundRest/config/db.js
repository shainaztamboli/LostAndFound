/**
 * Created by Com on 29/03/2015.
 */
var config=require('./config'),
    mongoose =require('mongoose');

module.exports = function(){
    console.log(config.db);
    var db = mongoose.connect(config.db, function(err){
        if(err){
            console.log('Unable to connect to DB.');
            console.log(err);
        }

    });

    require('../models/state.model');
    require('../models/contact.model');
    require('../models/city.model');
    require('../models/category.model');
    require('../models/subcategory.model');
    require('../models/iteminfo.model');

    return db;
}