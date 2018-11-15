import axios from 'axios';

export class AppCraft {
  constructor(){
    console.log('lala');
  }
  login(user) {
    axios.post('https://ng-http-64f39.firebaseio.com/data.json', user)
      .then(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });
    console.log('pass:' + user);
  }
  isUserAuth () {
    console.log('ddsd user check auth');
    return false;
  }
}


