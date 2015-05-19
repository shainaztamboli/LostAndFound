/**
 * Created by Com on 29/03/2015.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CitySchema = new Schema({

    name :{
        type : String,
        required : true
    },

    state :{
        type : Schema.Types.ObjectId,
        ref : 'State',
        required : true
    }

});

mongoose.model('City', CitySchema);