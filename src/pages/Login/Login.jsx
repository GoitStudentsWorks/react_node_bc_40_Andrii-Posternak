import { useDispatch } from 'react-redux';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { loginUser } from 'redux/auth/authOperations';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmt = form => {
    dispatch(loginUser(form));
  };

  return (
    <AuthForm authType={'login'} btnTitle={'Login'} onSubmit={handleSubmt} />
  );
};
