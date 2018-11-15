import axios from 'axios';

export function fetch(options){
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      headers: {
        'Content-Type': 'application/json',
        // 'token_in_header': global_.token,
      },
      timeout:30 * 1000
    });
    instance(options)
      .then(response => {
        console.log('response', response);
        resolve(response);
      })
      .catch(error => {
        console.log('请求异常信息：'+error);
        reject(error);
      });
  });
}
