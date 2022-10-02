import { injectable } from 'inversify';
import { Profile } from '../model/profile.model';
import { IProfileService } from './isecurity.service';

// ProfileService is implementation of IAboutService
@injectable()
export class ProfileService implements IProfileService {

    get(): Profile {
        return new Profile();
    }
}