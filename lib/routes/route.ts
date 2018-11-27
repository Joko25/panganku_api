import { Request, Response }    from "express";
import { UserController }       from "../controllers/user_controller";



export class Routes {
    public userController: UserController = new UserController();

    public routes(app): void {
        app.route('/').get((req: Request, res: Response) => {
            res.status(200).send({
                message: "GET request successfull!!!"
            });
        });

        app.route('/user')
        .get(this.userController.getUsers)
        .post(this.userController.addUser);

        app.route('/user/:uuid')
        .get((req: Request, res: Response) => {        
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        .put(this.userController.updateUser)
        .delete(this.userController.destroyUser);

    }
}