import { ErrorMessage } from '@hookform/error-message';
import { useAuth } from 'contexts/AuthContext';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillWarning } from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import GoogleButton from './GoogleButton';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    watch,
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
  });
  const password = useRef({});
  password.current = watch('password', '');

  const [error, setError] = useState();
  const history = useHistory();

  const { signup, loginWithGoogle } = useAuth();

  const onSubmit = async ({ email, password, name }, e) => {
    e.preventDefault();
    // console.log(email, password, name);
    try {
      setError('');
      await signup(email, password, name);
      history.push('/');
      e.target.reset();
    } catch (error) {
      console.log(error.message);
      setError('Email already exists!');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setError('');
      await loginWithGoogle();
      history.push('/');
    } catch (error) {
      console.log(error.message);
      setError('Failed to create an account!');
    }
  };

  return (
    <div className="signup__sidebar">
      <div className="signup__component">
        <h2 className="d-inline-block">Dream Capture</h2>
        <h2 className="signup__header">Create your account</h2>
        <GoogleButton
          text="Sign up with Google"
          handleLogin={handleGoogleLogin}
        />
        <div className="signup__divider">
          <span>or</span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <label htmlFor="name">
              Name
              <div className="input__field">
                <div className="box">
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    {...register('name', {
                      required: 'Name is Required',
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="name"
                    render={({ messages }) =>
                      // console.log("messages", messages);
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
                </div>
              </div>
            </label>
          </fieldset>

          <fieldset>
            <label htmlFor="email">
              Email Address
              <div className="input__field">
                <div className="box">
                  <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    {...register('email', {
                      required: 'Email is Required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Please enter a valid Email',
                      },
                    })}
                  />
                  {error && (
                    <p className="error__message">
                      <AiFillWarning style={{ marginTop: '-5px' }} />
                      <span>{error}</span>
                    </p>
                  )}

                  <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ messages }) =>
                      // console.log("messages", messages);
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
                </div>
              </div>
            </label>
          </fieldset>

          <fieldset>
            <label htmlFor="password">
              Password
              <div className="input__field">
                <div className="box">
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    {...register('password', {
                      required: 'Password is required',
                      pattern: {
                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                        message:
                          'Password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter',
                      },
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="password"
                    render={({ messages }) =>
                      // console.log("messages", messages);
                      messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <p className="error__message" key={type}>
                              <AiFillWarning style={{ marginTop: '-5px' }} />
                              <span> {message}</span>
                            </p>
                          ))
                        : null
                    }
                  />
                </div>
              </div>
            </label>
          </fieldset>

          <fieldset>
            <label htmlFor="password">
              Confirm Password
              <div className="input__field">
                <div className="box">
                  <input
                    name="confirm_password"
                    type="password"
                    placeholder="Confirm Password"
                    {...register('confirm_password', {
                      required: 'Password Confirmation is required',
                      validate: (value) =>
                        value === password.current || 'Passwords do not match',
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="confirm_password"
                    render={({ messages }) =>
                      // console.log("messages", messages);
                      messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <p className="error__message" key={type}>
                              <AiFillWarning style={{ marginTop: '-5px' }} />
                              <span> {message}</span>
                            </p>
                          ))
                        : null
                    }
                  />
                </div>
              </div>
            </label>
          </fieldset>

          <fieldset>
            <label htmlFor="checkbox">
              <input
                name="checkbox"
                type="checkbox"
                placeholder="Checkbox"
                {...register('checkbox', {
                  required: 'This is required',
                })}
              />
              <span className="check__message">
                I agree to the Terms &amp; Conditions{' '}
              </span>
              <ErrorMessage
                errors={errors}
                name="checkbox"
                render={({ message }) => (
                  <p className="check__error--message">
                    <AiFillWarning style={{ marginTop: '-5px' }} />
                    <span>{message}</span>
                  </p>
                )}
              />
            </label>
          </fieldset>
          <footer>
            <button type="submit" disabled={!isDirty || !isValid}>
              Sign up
            </button>
            <span>
              Have an account? <Link to="/login">Login in now</Link>{' '}
            </span>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
