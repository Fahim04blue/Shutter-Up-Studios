import requests from './httpService';

class BookingService {
  createBooking(body) {
    return requests.post('/booking', body);
  }

  getBookings(email) {
    return requests.get(`/booking?email=${email}`);
  }

  getAllBookings() {
    return requests.get('/booking');
  }

  getSessionPaymentStatus(id) {
    return requests.get(`/booking/sessions/${id}`);
  }

  updateBookingStatus(id, body) {
    return requests.patch(`/booking/${id}`, body);
  }
}

export default new BookingService();
