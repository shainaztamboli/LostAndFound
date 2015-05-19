/**
 * Created by Com on 29/03/2015.
 */
/**
 * This controller will handle all the requests of this router
 * @type {exports}
 */
var categoryCtrl = require('../controllers/category.controller.js');

module.exports = function(app){
    app.route("/lostAndFound/category")
        .get(categoryCtrl.fetchAllCategory)
        .post(categoryCtrl.createCategory);

    app.route('/lostAndFound/category/:categoryId')
        .put(categoryCtrl.updateCategory)
        .delete(categoryCtrl.removeCategory)
        .get(categoryCtrl.getCategory);

    /**
     * When we send the parameter through URL first below code will be called.
     */
    app.param('categoryId', categoryCtrl.getByCategoryId);
}