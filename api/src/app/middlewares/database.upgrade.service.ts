import { injectable } from 'inversify';
import { RequestStartMiddleware } from 'dinoloop';
import { Request, Response, NextFunction } from 'express';
var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

@injectable()
export class DatabaseUpgradeMiddleware extends RequestStartMiddleware {
    DBSOURCE = process.env.DBSOURCE || "db.sqlite";
    invoke(request: Request, response: Response, next: NextFunction): void {
        try{
            let db = new sqlite3.Database(this.DBSOURCE, (err) => {
                if (err) {
                // Cannot open database
                console.error(err.message)
                throw err
                }else{
                    db.run(`CREATE TABLE user (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name text, 
                        email text UNIQUE, 
                        password text, 
                        CONSTRAINT email_unique UNIQUE (email)
                        )`,
                    (err) => {
                        if (err) {
                            // Table already created
                        }else{
                            // Table just created, creating some rows
                            var insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
                            db.run(insert, ["admin","admin@example.com",md5("admin123456")])
                            db.run(insert, ["user","user@example.com",md5("user123456")])
                        }
                    });  
                }
            });

        }
        catch(err){
            response.sendStatus(500);
        }
        return next();
    }
}