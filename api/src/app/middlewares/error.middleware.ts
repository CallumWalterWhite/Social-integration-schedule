import { injectable } from 'inversify';
import { ErrorMiddleware } from 'dinoloop';
import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');

@injectable()
export class SoSErrorMiddleware extends ErrorMiddleware {
    invoke(err: Error, request: Request, response: Response, next: NextFunction): void {
        response.json({ error: err.message });
        response.sendStatus(500);
    }
}