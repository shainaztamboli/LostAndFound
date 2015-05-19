/**
 * Created by Com on 29/03/2015.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({

    name :{
        type : String,
        required : true
    }
});

mongoose.model('Category', CategorySchema);

