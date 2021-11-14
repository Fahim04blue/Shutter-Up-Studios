import requests from './httpService';

class ProductService {
  createService(body) {
    return requests.post('/services', body);
  }

  getServices() {
    return requests.get('/services');
  }

  getPopularServices() {
    return requests.get('/services?sort=createdAt&limit=4');
  }

  getServiceById(id) {
    return requests.get(`/services/${id}`);
  }

  deleteService(id) {
    return requests.delete(`/services/${id}`);
  }
}

export default new ProductService();
