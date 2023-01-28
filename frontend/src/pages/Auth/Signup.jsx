import signup from 'asset/images/signup.jpg';
import SignupForm from 'components/Auth/SignupForm';
import MetaData from 'components/common/MetaData';

const Signup = () => (
  <div className="signup">
    <MetaData title="Signup" />
    <img className="signup__img" src={signup} alt="signup" />
    <SignupForm />
  </div>
);

export default Signup;
