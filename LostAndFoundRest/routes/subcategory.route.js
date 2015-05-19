/**
 * Created by Com on 29/03/2015.
 */
var SubCategoryCtrl = require('../controllers/subcategory.controller');

module.exports = function(app) {
    app.route("/lostAndFound/subCategory")
        .get(SubCategoryCtrl.fetchAllSubCategories)
        .post(SubCategoryCtrl.createSubCategory);

    app.route('/lostAndFound/subCategory/:subCategoryId')
        .put(SubCategoryCtrl.updateSubCategory)
        .delete(SubCategoryCtrl.removeSubCategory)
        .get(SubCategoryCtrl.getSubCategory);

    app.param('subCategoryId', SubCategoryCtrl.getBySubCategoryId);
}