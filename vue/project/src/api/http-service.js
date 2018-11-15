import {fetch} from './fetch';


class HttpService {
  constructor() {
    console.log('HTTP');
  }

  GET() {
    return fetch({
      url: 'https://ng-http-64f39.firebaseio.com/data.json',
      method: 'get',
      params: {}
    });
  }

  POST(data) {
   return fetch({
      url: 'https://ng-http-64f39.firebaseio.com/data.json',
      method: 'post',
      params: {
        data: data
      }
    });
  }
}

export default HttpService;
