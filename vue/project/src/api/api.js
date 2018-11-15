import HttpService from './http-service';
const service = new HttpService();

export class Applications {
  constructor() {
  }

  login() {
   return service.GET();
  }
}


