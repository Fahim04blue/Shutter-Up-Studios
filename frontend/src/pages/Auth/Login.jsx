import loginBg from 'asset/images/login_bg.jpg';
import LoginForm from 'components/Auth/LoginForm';
import MetaData from 'components/common/MetaData';

const Login = () => (
  <div className="login">
    <MetaData title="Login" />
    <LoginForm />
    <img className="login__bg" src={loginBg} alt="" />
  </div>
);

export default Login;
