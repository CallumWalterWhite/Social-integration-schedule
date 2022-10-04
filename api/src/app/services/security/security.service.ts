import { injectable } from 'inversify';
import { IEncryptor } from '../../common/encrypt/iencryption.common';
import { JwtProvider } from '../../common/jwt/jwt.common';
import { SecurityUser } from '../../model/security.user.model';
import { IRepository } from '../../persistence/irepository';
import { ISecurityService } from './isecurity.service';
const jwt = require('jsonwebtoken');

@injectable()
export class SecurityService implements ISecurityService {
    constructor(private _encryptor: IEncryptor,
                private _securityUserRepository: IRepository<SecurityUser>){

    }

    async login(email: string, password: string): Promise<SecurityUser> {
        let securityUser : SecurityUser = await this._securityUserRepository.get([email, this._encryptor.encrypt(password)]);
        if (securityUser._id == null) {
            throw new Error('User not found!');
        }
        securityUser._jwt = await JwtProvider.sign(securityUser);
        return securityUser;
    }
}