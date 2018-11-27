import { users }                    from "../models/user_model";
import {Request, Response }         from "express";
import { check, validationResult }  from "express-validator/check";
import * as crypto                  from "crypto";

export class UserController{

    public getUsers(req: Request, res: Response){
        users.findAll().then(user =>{
            res.json(user);
        })
    };

    public addUser(req: Request, res: Response){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.mapped() });
        }

        let password = req.body.password;

        let data = {
            uuid        : req.body.uuid,
            username    : req.body.username,
            password    : crypto.createHash('md5').update(password).digest("hex"),
            email       : req.body.email
        };
        users.create(data).then(newUser =>{
            res.json({
                "status":"success",
                "message":"user added",
                "data": newUser
            })
        });
    };

    public updateUser(req: Request, res: Response){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.mapped() });
        }
        let password = req.body.password;
        let data:any;
        if (password) {
            data = {
                uuid        : req.body.uuid,
                username    : req.body.username,
                password    : crypto.createHash('md5').update(password).digest("hex"),
                email       : req.body.email
            }
        }else{
            data = {
                uuid        : req.body.uuid,
                username    : req.body.username,
                email       : req.body.email
            }
        }
           
        users.update(data, {
            where: {uuid: req.params.uuid}
        }).then(affectedRow => {
            return users.findOne({where: {uuid: req.params.uuid}}).then(b => {
                res.json({
                    "status": "success",
                    "message": "Book updated",
                    "data": b
                })
            })
        });
    };

    public destroyUser(req: Request, res: Response){
        users.destroy({ 
            where: {uuid: req.params.uuid }
        }).then(affectedRow =>{
            if(affectedRow){
                return {
                    "status":"success",
                    "message": "User deleted",
                    "data": null
                }
            }

            return {
                "status":"error",
                "message": "Failed",
                "data": null
            } 
        }).then(r => {
            res.json(r)
        });
    };
};