import { injectable } from 'inversify';
import { ApiController, Controller, HttpGet, SendsResponse, Async, BindNumber, HttpPost } from 'dinoloop';
import { IProfileService } from '../services/isecurity.service';
import { Profile } from '../model/profile.model';
const jwt = require('jsonwebtoken');

@injectable()
@Controller('/profile')
export class ProfileController extends ApiController {
    name: string;
    _profileService: IProfileService

    constructor(private profileService: IProfileService) {
        super();
        this._profileService = profileService;
        this.name = 'ProfileController';
    }

    @HttpGet('/get')
    get(): string {
        var profile: Profile = this._profileService.get();
        return profile.title;
    }
    
    @HttpPost('/login')
    post(): Profile {
        var profile: Profile = this._profileService.get();
        jwt.sign({profile},'secretkey',(err,token)=>{
            profile._id=token;
        })
        return profile;
    }
}