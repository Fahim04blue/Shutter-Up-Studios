import requests from './httpService';

class ReviewService {
  createReview(body) {
    return requests.post('/reviews', body);
  }

  getReviews() {
    return requests.get('/reviews');
  }
}

export default new ReviewService();
