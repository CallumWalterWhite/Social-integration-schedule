import { Database } from 'sqlite3';
import { injectable } from 'inversify';
import { SecurityUser } from '../model/security.user.model';
import { IRepository } from './irepository';

@injectable()
export class UserRepository implements IRepository<SecurityUser> {
    _db : Database

    constructor() {
        this._db = new Database(process.env.PORT || "db.sqlite");
    }

    get(): SecurityUser {
        return new SecurityUser();
    }
    
    getAll(): SecurityUser[] {
        var sql = "select * from user"
        var params = []
        this._db.all(sql, params, (err, rows) => {
            });
        return [new SecurityUser()];
    }
}
