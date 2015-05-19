/**
 * Created by Com on 29/03/2015.
 */
var cityCtrl = require('../controllers/city.controller.js')

module.exports = function(app) {
    app.route("/lostAndFound/city")
        .get(cityCtrl.fetchAllCities)
        .post(cityCtrl.createCity);

    app.route('/lostAndFound/city/:cityId')
        .put(cityCtrl.updateCity)
        .delete(cityCtrl.removeCity)
        .get(cityCtrl.getCity);

    app.param('cityId', cityCtrl.getByCityId);
}
