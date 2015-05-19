/**
 * Created by Com on 29/03/2015.
 */

var mongoose = require('mongoose'),
    Category = mongoose.model('Category');

exports.createCategory = function (req, res){
    console.log(req.body);
    var category = new Category(req.body);
    category.save(function(err, category){
        if(err){
            console.log('Unable to save Category.');
            console.log(err);
            res.status(400).send(err.err);
        }else{
            res.send(category);
        }
    });
}

exports.fetchAllCategory = function(req, res ,next){
    Category.find(function(err,categories ){
        if(err){
            console.log('Unable to fetch list of categories.')
            next(err);
        }else{
            res.send(categories);
        }

    });
}

exports.getByCategoryId = function(req,res,next,categoryId){
    Category.findOne({_id:categoryId}, function(err, category){
        if(err){
            next(err);
        }
        if(category){
            req.category = category;
            next();
        }else{
            var error ={
                error:'category Not Found.'
            }
            res.status(404).send(error);
        }
    });
}

exports.updateCategory = function(req, res){
    var newCategory = req.body;
    var oldCategory = req.category;
    if(newCategory.name != undefined){
        oldCategory.name = newCategory.name;
    }
    if(newCategory.code != undefined){
        oldCategory.code = newCategory.code;
    }

    oldCategory.save(function(err, category){
        if(err){
            console.log('Unable to update Category.');
            console.log(err);
            res.status(400).send(err.err);
        }else{
            res.send(category);
        }
    });
}

exports.getCategory = function(req, res){
    res.send(req.category);
}

exports.removeCategory = function(req, res){
    var category = req.category;
    category.remove(function(err, category){
        if(err){
            console.log('Unable to remove Category.');
            console.log(err);
            res.status(400).send(err.err);
        }else{
            res.send(category);
        }
    });

}