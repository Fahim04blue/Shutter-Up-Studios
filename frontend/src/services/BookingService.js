import requests from './httpService';

class BookingService {
  createBooking(body) {
    return requests.post('/booking', body);
  }

  getBookings(email, page) {
    return requests.get(`/booking?page=${page}&email=${email}`);
  }

  getAllBookings(page) {
    return requests.get(`/booking?page=${page}`);
  }

  getSessionPaymentStatus(id) {
    return requests.get(`/booking/sessions/${id}`);
  }

  updateBookingStatus(id, body) {
    return requests.patch(`/booking/${id}`, body);
  }
}

export default new BookingService();
