import signup from 'asset/images/signup.jpg';
import SignupForm from 'components/Auth/SignupForm';

const Signup = () => (
  <div className="signup">
    <img className="signup__img" src={signup} alt="signup" />
    <SignupForm />
  </div>
);

export default Signup;
