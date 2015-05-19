/**
 * Created by Com on 29/03/2015.
 */
var mongoose = require('mongoose'),
    Contact = mongoose.model('Contact'),
    async = require('async');

exports.createContact = function (req, res){
    console.log(req.body);
    var contact = new Contact(req.body);
    contact.save(function(err, contact){
        if(err){
            console.log('Unable to save contact.');
            console.log(err);
            res.status(400).send(err.err);
        }else{
            res.send(contact);
        }
    });
}

exports.fetchAllContacts = function(req, res ,next){
    Contact.find(function(err, contacts){
        if(err){
            console.log('Unable to fetch list of contacts.')
            next(err);
        }else{
            res.send(contacts);
        }

    });
}

exports.getByContactId = function(req,res,next,contactId){
    Contact.findOne({_id:contactId}, function(err, contact){
        if(err){
            next(err);
        }
        if(contact){
            req.contact = contact;
            next();
        }else{
            var error ={
                error:'Contact Not Found.'
            }
            res.status(404).send(error);
        }
    });
}

exports.updateContact = function(req, res){
    var newContact = req.body;
    var oldContact = req.contact;
    if(newContact.name != undefined){
        oldContact.name = newContact.name;
    }
    if(newContact.phoneNumber != undefined){
        oldContact.phoneNumber = newContact.phoneNumber;
    }

    if(newContact.email != undefined){
        oldContact.email = newContact.email;
    }

    oldContact.save(function(err, contact){
        if(err){
            console.log('Unable to update contact.');
            console.log(err);
            res.status(400).send(err.err);
        }else{
            res.send(contact);
        }
    });
}

exports.getContact = function(req, res){
    res.send(req.contact);
}

exports.removeContact = function(req, res){
    var contact = req.contact;
    contact.remove(function(err, contact){
        if(err){
            console.log('Unable to remove contact.');
            console.log(err);
            res.status(400).send(err.err);
        }else{
            res.send(contact);
        }
    });

}