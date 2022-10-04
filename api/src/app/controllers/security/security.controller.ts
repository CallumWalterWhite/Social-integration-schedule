import { injectable } from 'inversify';
import { ApiController, Controller, HttpGet, SendsResponse, Async, BindNumber, HttpPost, Parse } from 'dinoloop';
import { ISecurityService } from '../../services/security/isecurity.service';
import { SecurityUser } from '../../model/security.user.model';
import { toSecurityLogin } from '../../common/encrypt/handlers';
import { SecurityLogin } from './security.login.model';
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
    async login(@Parse(toSecurityLogin) securityLogin: SecurityLogin): Promise<string> {
        let securityUser: SecurityUser = await this._securityService.login(securityLogin.email, securityLogin.password);
        console.log(securityUser._jwt);
        return securityUser._jwt;
    }
}