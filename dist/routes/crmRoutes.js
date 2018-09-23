"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmController_1 = require("../controllers/crmController");
class Routes {
    constructor() {
        this.contactController = new crmController_1.ContactControler();
    }
    routes(app) {
        // ROOT
        app.route('/')
            //get
            .get((req, res) => {
            res.status(200)
                .send({
                message: "GET request successfull"
            });
        });
        // CONTACT
        app.route('/contact')
            //get
            .get(this.contactController.getContacts)
            //post
            .post(this.contactController.addNewContact);
        // CONTACT DETAIL
        app.route('/contact/:contactID')
            //get
            .get(this.contactController.getContactWithId)
            //put
            .put(this.contactController.updateContact)
            //delete
            .delete(this.contactController.deleteContact);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map