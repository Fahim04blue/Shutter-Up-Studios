import requests from './httpService';

class CategoryService {
  getCategories() {
    return requests.get('/category');
  }

  getCategoryDataByName(category, value) {
    return requests.get(`/category?name=${category?.length ? category[value]?.name : 'Photography'}`);
  }
}

export default new CategoryService();
