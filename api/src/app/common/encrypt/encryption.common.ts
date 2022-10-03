import { injectable } from "inversify";
import { IEncryptor } from "./iencryption.common";
import { crypto } from 'crypto';

@injectable()
export class Encryptor implements IEncryptor {
    ALGORITHM = 'aes-256-cbc';
    IV_LENGTH = 16;
    KEY = process.env.SECRETKEY!;
    encrypt(key: string): string {
        const iv = crypto.randomBytes(this.IV_LENGTH);
        const cipher = crypto.createCipheriv(this.ALGORITHM, new Buffer(this.KEY), iv);
        return Buffer.concat([cipher.update(key,), cipher.final(), iv]).toString('hex');
    }
}