import { injectable } from 'inversify';
import { SecurityUser } from '../../model/security.user.model';

// IProfileService acts as Interface
@injectable()
export abstract class ISecurityService {
    abstract login(email: string, password: string): SecurityUser;
}