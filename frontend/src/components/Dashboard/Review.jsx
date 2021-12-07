import { ErrorMessage } from '@hookform/error-message';
import { useAuth } from 'contexts/AuthContext';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AiFillWarning } from 'react-icons/ai';
import ReviewService from 'services/ReviewService';
import Swal from 'sweetalert2';

const Review = () => {
  const { currentUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
  });
  const onSubmit = (data, e) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You can view your feedback on the Home page!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#35996E',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, publish it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const loading = toast.loading('Deleting...Please wait!');
        ReviewService.createReview(data)
          .then((data) => {
            toast.dismiss(loading);
            Swal.fire({
              title: 'Your Feedback is Published Successfully!',
              text: 'Thank you for your valuable feedback',
              icon: 'success',
              confirmButtonText: 'OK',
              confirmButtonColor: '#5f031d',
            });
            reset('', {
              keepValues: false,
            });
          })
          .catch((err) => {
            toast.dismiss(loading);
            Swal.fire('Something went wrong! Please try again.', '', 'error');
          });
      }
    });
  };
  return (
    <div className="add__services">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            defaultValue={currentUser?.displayName}
            {...register('name', {
              required: 'Name is Required',
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
          <label htmlFor="review">Review</label>
          <textarea
            name="review"
            type="text"
            {...register('review', {
              required: 'Review is Required',
            })}
          />
          <ErrorMessage
            errors={errors}
            name="review"
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
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default Review;
