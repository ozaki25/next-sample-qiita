import { useContext } from 'react';
import { AuthUserContext } from 'src/contexts/AuthUserContext';

function useAuthUser() {
  const { authUser } = useContext(AuthUserContext);
  return { authUser };
}

export default useAuthUser;
