import { useContext, useEffect, useState } from 'react';
import { AuthUserContext } from 'src/contexts/authUser';

function useAuthUser() {
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useContext(AuthUserContext);

  const fetchAuthUser = async () => {
    if (!authUser) {
      setLoading(true);
      await setAuthUser({ name: 'ozaki25' });
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAuthUser();
  }, []);

  return { authUser, loading };
}

export default useAuthUser;
