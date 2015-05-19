/**
 * Created by Com on 29/03/2015.
 */
module.exports = function (app) {
    require('../routes/state.route')(app);
    require('../routes/contact.route')(app);
    require('../routes/city.route')(app);
    require('../routes/category.route')(app);
    require('../routes/subcategory.route')(app);
    require('../routes/iteminfo.route')(app);

    app.use('/lostAndFound/*', function (req, res, next) {
        res.json({'error': 'No Such Service Present'}, 404);
    });

    app.use('*', function (req, res, next) {
        res.send('<html><body><h1>404 Page Not Found.</h1></body></html>');
    })
}