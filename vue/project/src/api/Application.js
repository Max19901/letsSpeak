import HttpService from './http-service';
const service = new HttpService();

export class Application {
  constructor() {
  }

  login(oUser) {
    //return service.GET();
    return service.GET();
  }
  isUserActive() {
    return true;
  }
}


