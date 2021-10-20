import LoginForm from 'components/Auth/LoginForm';
import loginBg from 'asset/images/login_bg.jpg';

const Login = () => (
  <div className="login">
    <LoginForm />
    <img className="login__bg" src={loginBg} alt="" />
  </div>
);

export default Login;
