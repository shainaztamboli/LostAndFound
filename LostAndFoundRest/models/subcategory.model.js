/**
 * Created by Com on 29/03/2015.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SubCategorySchema = new Schema({

    name :{
        type : String,
        required : true
    },

    category :{
        type : Schema.Types.ObjectId,
        ref : 'Category',
        required : true
    }

});

mongoose.model('SubCategory', SubCategorySchema);