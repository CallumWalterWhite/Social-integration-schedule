const sqlite = require('sqlite3');
import { Database, open } from 'sqlite';
import { injectable } from 'inversify';
import { SecurityUser } from '../model/security.user.model';
import { IRepository } from './irepository';
import { IEncryptor } from '../common/encrypt/iencryption.common';

@injectable()
export class SecurityUserRepository implements IRepository<SecurityUser> {
    _db : Database

    constructor() {
    }

    async get([email, password]): Promise<SecurityUser> {
        try {
            this._db = await open({
                filename: "db.sqlite",
                driver: sqlite.Database
            })
            let securityUser = new SecurityUser(); 
            const query = 'select * from user where email = ? and password = ?;'
            const row = await this._db.get(query, [email, password]);
            securityUser._id = row['id'].toString();
            return securityUser;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
