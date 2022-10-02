import { injectable } from 'inversify';
import { Profile } from '../model/profile.model';

// IProfileService acts as Interface
@injectable()
export abstract class IProfileService {
    abstract get(): Profile;
}