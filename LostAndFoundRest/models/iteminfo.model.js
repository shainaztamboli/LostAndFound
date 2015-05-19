/**
 * Created by Com on 29/03/2015.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemInfoSchema = new Schema({

    itemDescription :{
        type : String,
        required : false
    },

    date :{
        type : Date,
        required : true
    },

    lostItem :{
        type : Boolean,
        required : true
    },

    address:{
        type : String,
        required : true
    },

    street:{
        type : String,
        required : true
    },

    pincode:{
        type : Number,
        required : true
    },

    state :{
        type : Schema.Types.ObjectId,
        ref : 'State',
        required : true
    },

    city :{
        type : Schema.Types.ObjectId,
        ref : 'City',
        required : true
    },

    category :{
        type : Schema.Types.ObjectId,
        ref : 'Category',
        required : true
    },

    subCategory :{
        type : Schema.Types.ObjectId,
        ref : 'SubCategory',
        required : true
    },

    contact:{
        type : Schema.Types.ObjectId,
        ref : 'Contact',
        required : true
    }
});

mongoose.model('ItemInfo', ItemInfoSchema);