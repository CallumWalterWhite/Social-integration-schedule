import { injectable } from 'inversify';
import { ApiController, Controller, HttpGet, SendsResponse, Async, BindNumber, HttpPost } from 'dinoloop';
import { ISecurityService } from '../../services/security/isecurity.service';
import { SecurityUser } from '../../model/security.user.model';
const jwt = require('jsonwebtoken');

@injectable()
@Controller('/secure')
export class SecurityController extends ApiController {
    name: string;
    _securityService: ISecurityService

    constructor(private securityService: ISecurityService) {
        super();
        this._securityService = securityService;
        this.name = 'secure';
    }
    
    @HttpPost('/login')
    login(): SecurityUser {
        var profile: SecurityUser = this._securityService.get();
        jwt.sign({profile},'secretkey',(err,token)=>{
            profile._id=token;
        })
        return profile;
    }
}