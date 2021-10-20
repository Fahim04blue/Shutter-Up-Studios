import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { AiFillWarning } from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';
import { useState } from 'react';

import GoogleButton from './GoogleButton';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
  });
  const [error, setError] = useState();
  const history = useHistory();
  const { login, loginWithGoogle } = useAuth();

  const onSubmit = async ({ email, password }, e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      setError('');
      await login(email, password);
      history.push('/');
    } catch (error) {
      console.log(error.message);
      setError('Login Failed');
    }
    e.target.reset();
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
    <nav className="login__sidebar">
      <div className="login__component">
        <h2 className="d-inline-block">Dream Capture</h2>
        <h2 className="login__header">Log in to your account</h2>
        <GoogleButton
          text="Continue with Google"
          handleLogin={handleGoogleLogin}
        />
        <div className="login__divider">
          <span>or</span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
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
                  <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ messages }) => {
                      console.log('messages', messages);
                      return messages
                        ? Object.entries(messages).map(([type, message]) => (
                          <p className="error__message" key={type}>
                            <AiFillWarning style={{ marginTop: '-5px' }} />
                            <span>{message}</span>
                          </p>
                        ))
                        : null;
                    }}
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
                    render={({ messages }) => {
                      console.log('messages', messages);
                      return messages
                        ? Object.entries(messages).map(([type, message]) => (
                          <p className="error__message" key={type}>
                            <AiFillWarning style={{ marginTop: '-5px' }} />
                            <span>
                              {' '}
                              {message}
                            </span>
                          </p>
                        ))
                        : null;
                    }}
                  />
                </div>
              </div>
            </label>
          </fieldset>
          <button type="submit" disabled={!isDirty || !isValid}>
            Sign in
          </button>
        </form>
        <footer>
          <p>
            Don't have an account?
            {' '}
            <Link to="/account/register">Sign up</Link>
            {' '}
          </p>
        </footer>
      </div>
    </nav>
  );
};

export default LoginForm;
