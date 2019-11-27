import { createContext } from 'react';
import useAuthUser from 'src/hooks/useAuthUser';

export const AuthUserContext = createContext(null);

function AuthUserProvider(props) {
  const { authUser } = useAuthUser();
  return <AuthUserContext.Provider value={{ authUser }} {...props} />;
}

export default AuthUserProvider;
