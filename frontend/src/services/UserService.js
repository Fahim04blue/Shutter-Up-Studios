import requests from './httpService';

class UserService {
  createUser(body) {
    return requests.post('/user', body);
  }

  signIn(email) {
    return requests.get(`/user?email=${email}`);
  }

  makeAdmin(body) {
    return requests.post('/user/makeAdmin', body);
  }
}

export default new UserService();
