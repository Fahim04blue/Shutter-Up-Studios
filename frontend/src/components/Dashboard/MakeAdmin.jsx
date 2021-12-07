import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { useForm } from 'react-hook-form';
import { AiFillWarning } from 'react-icons/ai';
import UserService from 'services/UserService';

const MakeAdmin = () => {
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
    UserService.makeAdmin(data);
    reset('', {
      keepValues: false,
    });
  };
  return (
    <div className="add__services">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            {...register('email', {
              required: 'Email is Required',
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
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default MakeAdmin;
