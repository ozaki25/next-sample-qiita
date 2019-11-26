import { createContext } from 'react';
import useAuthUser from 'src/hooks/useAuthUser';

export const AuthUserContext = createContext(null);

function AuthUserProvider(props) {
  const { authUser, loading } = useAuthUser();
  // eslint-disable-next-line no-nested-ternary
  return loading ? (
    <p>logging in now...</p>
  ) : authUser ? (
    <AuthUserContext.Provider value={{ authUser }} {...props} />
  ) : (
    <p>no logged in</p>
  );
}

export default AuthUserProvider;
