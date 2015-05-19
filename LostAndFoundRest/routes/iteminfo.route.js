/**
 * Created by Com on 29/03/2015.
 */
var ItemInfoCtrl = require('../controllers/iteminfo.controller.js');

module.exports = function(app) {
    app.route("/lostAndFound/itemInfo")
        .get(ItemInfoCtrl.fetchAllItemInfos)
        .post(ItemInfoCtrl.createItemInfo);

    app.route('/lostAndFound/itemInfo/:itemInfoId')
        .get(ItemInfoCtrl.getItemInfo);

    app.param('itemInfoId', ItemInfoCtrl.getByItemInfoId);

    app.route('/lostAndFound/itemInfo')
        .put(ItemInfoCtrl.removeItemInfoForDate);


}
