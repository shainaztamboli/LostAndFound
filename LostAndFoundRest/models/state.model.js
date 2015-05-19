/**
 * Created by Com on 29/03/2015.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StateSchema = new Schema({

    name :{
        type : String,
        required : true
    },

    code :{
        type : String,
        required : true
    }

});

mongoose.model('State', StateSchema);

