// import inverisfy decorate statements
import './inversify.decorate';
import { Container } from 'inversify';
import { SecurityController } from '../controllers/security/security.controller';
import { ApplicationErrorController } from '../controllers/application.error.controller';
import { SecurityService } from '../services/security/security.service';
import { JsonResponse } from '../middlewares/json.response';
import { ISecurityService } from '../services/security/isecurity.service';
import { IEncryptor } from '../common/encrypt/iencryption.common';
import { Encryptor } from '../common/encrypt/encryption.common';
import { IRepository } from '../persistence/irepository';
import { SecurityUserRepository } from '../persistence/security.user.repository';

let container = new Container();
container.bind(ISecurityService).to(SecurityService);
container.bind(IEncryptor).to(Encryptor);
container.bind(IRepository).to(SecurityUserRepository);
container.bind(SecurityController).toSelf();
container.bind(ApplicationErrorController).toSelf();
container.bind(JsonResponse).toSelf();

export { container as AppContainer };