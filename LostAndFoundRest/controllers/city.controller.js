/**
 * Created by Com on 29/03/2015.
 */
var mongoose = require('mongoose'),
    City = mongoose.model('City'),
    async = require('async');

exports.createCity = function (req, res) {
    console.log(req.body);
    var city = new City(req.body);
    city.save(function (err, city) {
        if (err) {
            console.log('Unable to save City.');
            console.log(err);
            res.status(400).send(err.err);
        } else {
            res.send(city);
        }
    });
}

exports.fetchAllCities = function (req, res, next) {
    City.find().populate('state').exec(function (err, cities) {
        if (err) {
            console.log('Unable to fetch list of Cities.')
            next(err);
        } else {
            res.send(cities);
        }

    });
}

exports.getByCityId = function (req, res, next, cityId) {
    City.findOne({_id: cityId}).populate('state').exec(
        function (err, city) {
            if (err) {
                next(err);
            }
            if (city) {
                req.city = city;
                next();
            } else {
                var error = {
                    error: 'City Not Found.'
                }
                res.status(404).send(error);
            }
        });
}

exports.updateCity = function (req, res) {
    var newCity = req.body;
    var oldCity = req.city;
    if (newCity.name != undefined) {
        oldCity.name = newCity.name;
    }
    oldCity.save(function (err, city) {
        if (err) {
            console.log('Unable to update City.');
            console.log(err);
            res.status(400).send(err.err);
        } else {
            res.send(city);
        }
    });
}

exports.getCity = function (req, res) {
    res.send(req.city);
}

exports.removeCity = function (req, res) {
    var city = req.city;
    city.remove(function (err, city) {
        if (err) {
            console.log('Unable to remove City.');
            console.log(err);
            res.status(400).send(err.err);
        } else {
            res.send(city);
        }
    });

}