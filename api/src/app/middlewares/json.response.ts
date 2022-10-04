import { injectable } from 'inversify';
import { RequestEndMiddleware, RequestEndMiddlewareAsync } from 'dinoloop';
import { Request, Response, NextFunction } from 'express';

@injectable()
export class JsonResponse extends RequestEndMiddlewareAsync {
    invoke(request: any, response: any, next: any, result: any): Promise<void> {
        return response.json({
            status: response.status,
            result: result
        });
    }
}