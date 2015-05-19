/**
 * Created by Com on 29/03/2015.
 */
var mongoose = require('mongoose'),
    SubCategory = mongoose.model('SubCategory'),
    async = require('async');

exports.createSubCategory = function (req, res) {
    console.log(req.body);
    var subCategory = new SubCategory(req.body);
    subCategory.save(function (err, subCategory) {
        if (err) {
            console.log('Unable to save SubCategory.');
            console.log(err);
            res.status(400).send(err.err);
        } else {
            res.send(subCategory);
        }
    });
}

exports.fetchAllSubCategories = function (req, res, next) {
    SubCategory.find().populate('category').exec(function (err, subCategories) {
        if (err) {
            console.log('Unable to fetch list of subCategories.')
            next(err);
        } else {
            res.send(subCategories);
        }

    });
}

exports.getBySubCategoryId = function (req, res, next, catId) {
    SubCategory.findOne({_id: catId}).populate('category').exec(
        function (err, subCategory) {
            if (err) {
                next(err);
            }
            if (subCategory) {
                req.subCategory = subCategory;
                next();
            } else {
                var error = {
                    error: 'SubCategory Not Found.'
                }
                res.status(404).send(error);
            }
        });
}

exports.updateSubCategory = function (req, res) {
    var newSubCategory = req.body;
    var oldSubCategory = req.subCategory;
    if (newSubCategory.name != undefined) {
        oldSubCategory.name = newSubCategory.name;
    }
    oldSubCategory.save(function (err, subCategory) {
        if (err) {
            console.log('Unable to update SubCategory.');
            console.log(err);
            res.status(400).send(err.err);
        } else {
            res.send(subCategory);
        }
    });
}

exports.getSubCategory = function (req, res) {
    res.send(req.subCategory);
}

exports.removeSubCategory = function (req, res) {
    var subCategory = req.subCategory;
    subCategory.remove(function (err, subCategory) {
        if (err) {
            console.log('Unable to remove SubCategory.');
            console.log(err);
            res.status(400).send(err.err);
        } else {
            res.send(subCategory);
        }
    });

}