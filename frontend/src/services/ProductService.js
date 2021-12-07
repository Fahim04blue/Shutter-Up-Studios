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

  getServiceDataByCategory(category, value, sort) {
    return requests.get(`/services?category=${category?.length ? category[value]._id : '617af46432aaf72197f2f033'}&${sort}`);
  }

  getServiceById(id) {
    return requests.get(`/services/${id}`);
  }

  updateServiceById(id, body) {
    return requests.patch(`/services/${id}`, body);
  }

  deleteService(id) {
    return requests.delete(`/services/${id}`);
  }
}

export default new ProductService();
