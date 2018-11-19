import {fetch} from './fetch';


class HttpService {
  constructor() {
    console.log('HTTP');
  }

  GET(sUrl, params) {
    return fetch({
      //url: 'https://ng-http-64f39.firebaseio.com/data.json',
      url: sUrl,
      method: 'get',
      params: params
    });
  }

  POST(sUrl, params) {
   return fetch({
      //url: 'https://ng-http-64f39.firebaseio.com/data.json',
      url: sUrl,
      method: 'post',
      params: {
        data: params
      }
    });
  }
}

export default HttpService;
