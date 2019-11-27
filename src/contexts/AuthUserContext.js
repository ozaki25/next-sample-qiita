import { createContext, useEffect, useState } from 'react';
import qiitaApi from 'src/api/qiita';

export const AuthUserContext = createContext(null);

function AuthUserProvider(props) {
  const [authUser, setAuthUser] = useState(null);

  const fetchAuthUser = async () => {
    if (!authUser) {
      setAuthUser(await qiitaApi.getUser({ userId: 'oz25' }));
    }
  };

  useEffect(() => {
    fetchAuthUser();
  }, []);

  return <AuthUserContext.Provider value={{ authUser }} {...props} />;
}

export default AuthUserProvider;
