import { injectable } from 'inversify';
import { SecurityUser } from '../../model/security.user.model';
import { ISecurityService } from './isecurity.service';

@injectable()
export class SecurityService implements ISecurityService {
    login(): SecurityUser {
        return new SecurityUser();
    }
}