/**
 * Created by Com on 29/03/2015.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var contactSchema = new Schema({

    name :{
        type : String,
        required : true
    },

    phoneNumber :{
        type : Number,
        required : true
    },

    email :{
        type : String,
        required : false
    }

});

mongoose.model('Contact', contactSchema);

