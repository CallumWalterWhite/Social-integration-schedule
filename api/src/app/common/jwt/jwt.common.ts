import { injectable } from "inversify";
var md5 = require('md5');
const jwt = require('jsonwebtoken');


@injectable()
export class JwtProvider {
    static async sign<T>(data: T): Promise<string> {
        let jwt_token : string = ''
        jwt_token = jwt.sign({data},'secretjeysa');
        return jwt_token;
    }
}