// import inverisfy decorate statements
import './inversify.decorate';
import { Container } from 'inversify';
import { ProfileController } from '../controllers/security.controller';
import { ApplicationErrorController } from '../controllers/application.error.controller';
import { ProfileService } from '../services/security.service';
import { JsonResponse } from '../middlewares/json.response';
import { IProfileService } from '../services/isecurity.service';

let container = new Container();
container.bind(IProfileService).to(ProfileService);
container.bind(ProfileController).toSelf();
container.bind(ApplicationErrorController).toSelf();
container.bind(JsonResponse).toSelf();

export { container as AppContainer };