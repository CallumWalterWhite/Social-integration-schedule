import { injectable } from 'inversify';
import { RequestStartMiddleware } from 'dinoloop';
import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');

@injectable()
export class AuthMiddleware extends RequestStartMiddleware {
    invoke(request: Request, response: Response, next: NextFunction): void {
        if (request.url.indexOf("login") > -1) {
            return next();
        }
        //Auth header value = > send token into header
        const bearerHeader = request.headers['authorization'];
        //check if bearer is undefined
        if(typeof bearerHeader !== 'undefined') {
            //split the space at the bearer
            const bearer = bearerHeader.split(' ');
            //Get token from string
            const bearerToken = bearer[1];

            jwt.verify(bearerToken,'secretkey',(err,authData)=>{
                if(err) {
                    response.sendStatus(403);
                }
                else{
                    return next();
                }
            })

        } else{
            //Fobidden
            response.sendStatus(403);
        }
    }
}