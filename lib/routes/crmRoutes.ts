import { Request, Response } from 'express';
import { ContactControler } from '../controllers/crmController'

export class Routes {
    public contactController: ContactControler = new ContactControler()
    public routes(app): void {
        // ROOT
        app.route('/')
        //get
        .get((req: Request, res: Response) => {
            res.status(200)
            .send({
                message: "GET request successfull"
            })
        })
        // CONTACT
        app.route('/contact')
        //get
        .get(this.contactController.getContacts)
        //post
        .post(this.contactController.addNewContact)
        // CONTACT DETAIL
        app.route('/contact/:contactID')
        //get
        .get(this.contactController.getContactWithId)
        //put
        .put(this.contactController.updateContact)
        //delete
        .delete(this.contactController.deleteContact)
    }
}