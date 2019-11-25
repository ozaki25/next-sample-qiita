import { useEffect, useState } from 'react';

function useAuthUser() {
  const [loading, setLoading] = useState(false);
  const [authUser, setAuthUser] = useState(null);

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
