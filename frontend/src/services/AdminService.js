import requests from './httpService';

class AdminService {
  createAdmin(body) {
    return requests.post('/admin', body);
  }

  verifyAdmin(body) {
    return requests.post('/admin/isAdmin', body);
  }
}

export default new AdminService();
