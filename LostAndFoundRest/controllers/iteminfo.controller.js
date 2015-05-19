/**
 * Created by Com on 29/03/2015.
 */
/**
 * Created by Com on 29/03/2015.
 */
var mongoose = require('mongoose'),
    ItemInfo = mongoose.model('ItemInfo'),
    Contact = mongoose.model('Contact'),
    async = require('async');

exports.createItemInfo = function (req, res) {
    console.log("Before Save: " + req.body.contact);
    var contact = new Contact(req.body.contact);
    contact.save(function (err, contact) {
        if (err) {
            console.log('Unable to save Contact.');
            console.log(err);
            res.status(400).send(err.err);
        } else {
            console.log("After Save: " + contact);
            req.body.contact = contact;
            var itemInfo = new ItemInfo(req.body);
            itemInfo.save(function (err, itemInfo) {
                if (err) {
                    console.log('Unable to save Item Info.');
                    console.log(err);
                    res.status(400).send(err.err);
                } else {
                    res.send(itemInfo);
                }
            });
        }
    });


}

exports.fetchAllItemInfos = function (req, res, next) {
    ItemInfo.find().populate('state').populate('city').populate('category')
        .populate('subCategory').populate('contact').exec(function (err, items) {
            if (err) {
                console.log('Unable to fetch list of items.')
                next(err);
            } else {
                res.send(items);
            }

        });
}

exports.getByItemInfoId = function (req, res, next, itemInfoId) {
    ItemInfo.findOne({_id: itemInfoId}).populate('state').populate('city').populate('category')
        .populate('subCategory').populate('contact').exec(
        function (err, itemInfo) {
            if (err) {
                next(err);
            }
            if (itemInfo) {
                req.itemInfo = itemInfo;
                next();
            } else {
                var error = {
                    error: 'Item Info Not Found.'
                }
                res.status(404).send(error);
            }
        });
}

exports.updateItemInfo = function (req, res) {
    var newItemInfo = req.body;
    var oldItemInfo = req.itemInfo;
    if (newItemInfo.itemDescription != undefined) {
        oldItemInfo.itemDescription = newItemInfo.itemDescription;
    }
    oldItemInfo.save(function (err, itemInfo) {
        if (err) {
            console.log('Unable to update Item Info.');
            console.log(err);
            res.status(400).send(err.err);
        } else {
            res.send(itemInfo);
        }
    });
}

exports.getItemInfo = function (req, res) {
    res.send(req.itemInfo);
}

exports.removeItemInfo = function (req, res) {
    var itemInfo = req.itemInfo;
    itemInfo.remove(function (err, itemInfo) {
        if (err) {
            console.log('Unable to remove itemInfo.');
            console.log(err);
            res.status(400).send(err.err);
        } else {
            res.send(itemInfo);
        }
    console.log(req.body);
});

}

exports.removeItemInfoForDate = function (req, res) {
    ItemInfo.remove({
        date: {
            $gte: req.body.fromDate,
            $lt: req.body.toDate
        }
    }, function(err, items){
        if(err){
            console.log('Unable to fetch list of Items.')
        }else{
            console.log("count: "+items);
            res.sendStatus("Removed items.")
        }
    });
}