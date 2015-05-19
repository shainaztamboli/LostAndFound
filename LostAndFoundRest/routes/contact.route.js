/**
 * Created by Com on 29/03/2015.
 */
var contactCtrl = require('../controllers/contact.controller.js');

module.exports = function(app) {
    app.route("/lostAndFound/contact")
        .get(contactCtrl.fetchAllContacts)
        .post(contactCtrl.createContact);

    app.route('/lostAndFound/contact/:contactId')
        .put(contactCtrl.updateContact)
        .delete(contactCtrl.removeContact)
        .get(contactCtrl.getContact);

    app.param('contactId', contactCtrl.getByContactId);
}
