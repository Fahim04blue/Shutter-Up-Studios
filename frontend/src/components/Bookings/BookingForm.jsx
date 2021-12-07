import { ErrorMessage } from '@hookform/error-message';
import { useAuth } from 'contexts/AuthContext';
import useAsync from 'Hooks/useAsync';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AiFillWarning } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import BookingService from 'services/BookingService';
import ProductService from 'services/ProductService';
import { prettyPrintNumbers } from 'utils/utils';

const BookingForm = () => {
  const { id } = useParams();
  const { currentUser } = useAuth();

  const getServiceById = useCallback(
    () => ProductService.getServiceById(id),
    [id]
  );
  const { data: service, isLoading } = useAsync(getServiceById);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
  });

  const serviceData = {
    name: service?.name,
    category: service?.category.name,
    price: service?.price,
  };

  const onSubmit = (data) => {
    const bookingDetails = {
      ...data,
      packageInfo: serviceData,
    };

    // console.log(bookingDetails);
    const loading = toast.loading(
      'Booking your session...! You are about to redirect to payment page'
    );
    BookingService.createBooking(bookingDetails)
      .then((res) => {
        toast.dismiss(loading);
        reset('', {
          keepValues: false,
        });
        console.log(res.sessionUrl);
        window.location.href = res.sessionUrl;
      })
      .catch((err) => {
        toast.dismiss(loading);
        console.log(err.message);
      });
  };

  return (
    <div className="booking__sidebar">
      <div className="booking__component">
        <h2 className="d-inline-block company__name">ShutterUP Studios</h2>
        <h2 className="booking__header">Book your session now</h2>
        <div className="package__info">
          <label className="package__label">
            <div className="package__label__title">Package Information</div>
          </label>
          <p className="package__details">
            Package Name: <span>{service?.name}</span>
          </p>
          <p className="package__details">
            Package Category: <span>{service?.category.name}</span>
          </p>
          <p className="package__details">
            Package Price:{' '}
            <span>TK. {prettyPrintNumbers(service?.price)} BDT</span>
          </p>
        </div>
        <div className="contact__box">
          <h2 className="booking__header mt-3 mb-3">Contact Form</h2>

          <div className="contact__form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset>
                <label htmlFor="name">Your Name</label>
                <input
                  name="name"
                  type="text"
                  defaultValue={currentUser?.displayName}
                  {...register('name', {
                    required: 'Your Name is Required',
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="name"
                  render={({ messages }) =>
                    messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <p className="error__message" key={type}>
                            <AiFillWarning style={{ marginTop: '-5px' }} />
                            <span>{message}</span>
                          </p>
                        ))
                      : null
                  }
                />
              </fieldset>

              <fieldset>
                <label htmlFor="email">Your Email</label>
                <input
                  name="email"
                  type="text"
                  defaultValue={currentUser?.email}
                  {...register('email', {
                    required: 'Your Email is Required',
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ messages }) =>
                    messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <p className="error__message" key={type}>
                            <AiFillWarning style={{ marginTop: '-5px' }} />
                            <span>{message}</span>
                          </p>
                        ))
                      : null
                  }
                />
              </fieldset>

              <fieldset>
                <label htmlFor="address">Your Contact Address</label>
                <input
                  name="address"
                  type="text"
                  {...register('address', {
                    required: 'You Address is Required',
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="address"
                  render={({ messages }) =>
                    messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <p className="error__message" key={type}>
                            <AiFillWarning style={{ marginTop: '-5px' }} />
                            <span>{message}</span>
                          </p>
                        ))
                      : null
                  }
                />
              </fieldset>

              <fieldset>
                <label htmlFor="phone">Your Contact no.</label>
                <input
                  name="phone"
                  type="number"
                  {...register('phone', {
                    required: 'Your Contact no. is Required',
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="phone"
                  render={({ messages }) =>
                    messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <p className="error__message" key={type}>
                            <AiFillWarning style={{ marginTop: '-5px' }} />
                            <span>{message}</span>
                          </p>
                        ))
                      : null
                  }
                />
              </fieldset>

              <fieldset>
                <label htmlFor="eventDate">Date of Event</label>
                <input
                  name="eventDate"
                  type="datetime-local"
                  placeholder="eventDate"
                  {...register('eventDate', {
                    required: 'Event Date is Required',
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="eventDate"
                  render={({ messages }) =>
                    messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <p className="error__message" key={type}>
                            <AiFillWarning style={{ marginTop: '-5px' }} />
                            <span>{message}</span>
                          </p>
                        ))
                      : null
                  }
                />
              </fieldset>

              <fieldset>
                <label htmlFor="eventLocation">Location of Event</label>
                <input
                  name="eventLocation"
                  type="text"
                  {...register('eventLocation', {
                    required: 'Event Location is Required',
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="eventLocation"
                  render={({ messages }) =>
                    messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <p className="error__message" key={type}>
                            <AiFillWarning style={{ marginTop: '-5px' }} />
                            <span>{message}</span>
                          </p>
                        ))
                      : null
                  }
                />
              </fieldset>

              <button type="submit">Book</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
