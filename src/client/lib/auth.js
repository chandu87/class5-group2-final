import _ from 'lodash';

// This method sends the loggedIn authToken along with the request to the server
export const protectedFetch = (url, properites = {}) => {
  // get token from localStorage
  const authToken = localStorage.getItem('authToken');

  return new Promise((resolve, reject) => {
    if (!_.isString(authToken) || authToken == 'undefined' || authToken == 'null') {
      return reject(new Error('Login token missing, unauthorized'));
    }

    const propsWithAuthorization = {...properites};
    _.set(propsWithAuthorization, 'headers.authorization', authToken);
    
    fetch(url, propsWithAuthorization)
    .then(res => resolve(res))
    .catch(error => reject(error))
  })
}