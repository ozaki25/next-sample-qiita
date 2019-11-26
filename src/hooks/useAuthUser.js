import { useEffect, useState } from 'react';
import qiitaApi from 'src/api/qiita';

function useAuthUser() {
  const [loading, setLoading] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  const fetchAuthUser = async () => {
    if (!authUser) {
      setLoading(true);
      setAuthUser(await qiitaApi.getUser({ userId: 'oz25' }));
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAuthUser();
  }, []);

  return { authUser, loading };
}

export default useAuthUser;
