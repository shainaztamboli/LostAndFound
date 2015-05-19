/**
 * Created by Com on 29/03/2015.
 */
var stateCtrl = require('../controllers/state.controller.js');

module.exports = function(app){
    app.route("/lostAndFound/state")
        .get(stateCtrl.fetchAllStates)
        .post(stateCtrl.createState);

    app.route('/lostAndFound/state/:stateId')
        .put(stateCtrl.updateState)
        .delete(stateCtrl.removeState)
        .get(stateCtrl.getState);

    app.param('stateId', stateCtrl.getByStateId);
}