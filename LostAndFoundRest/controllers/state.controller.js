/**
 * Created by Com on 29/03/2015.
 */
var mongoose = require('mongoose'),
    State = mongoose.model('State'),
    async = require('async');

exports.createState = function (req, res){
    console.log(req.body);
    var state = new State(req.body);
    state.save(function(err, state){
        if(err){
            console.log('Unable to save State.');
            console.log(err);
            res.status(400).send(err.err);
        }else{
            res.send(state);
        }
    });
}

exports.fetchAllStates = function(req, res ,next){
    State.find(function(err, states){
        if(err){
            console.log('Unable to fetch list of states.')
            next(err);
        }else{
            res.send(states);
        }

    });
}

exports.getByStateId = function(req,res,next,stateId){
    State.findOne({_id:stateId}, function(err, state){
        if(err){
            next(err);
        }
        if(state){
            req.state = state;
            next();
        }else{
            var error ={
                error:'State Not Found.'
            }
            res.status(404).send(error);
        }
    });
}

exports.updateState = function(req, res){
    var newState = req.body;
    var oldState = req.state;
    if(newState.name != undefined){
        oldState.name = newState.name;
    }
    if(newState.code != undefined){
        oldState.code = newState.code;
    }

    oldState.save(function(err, state){
        if(err){
            console.log('Unable to update State.');
            console.log(err);
            res.status(400).send(err.err);
        }else{
            res.send(state);
        }
    });
}

exports.getState = function(req, res){
    res.send(req.state);
}

exports.removeState = function(req, res){
    var state = req.state;
    state.remove(function(err, state){
        if(err){
            console.log('Unable to remove State.');
            console.log(err);
            res.status(400).send(err.err);
        }else{
            res.send(state);
        }
    });

}