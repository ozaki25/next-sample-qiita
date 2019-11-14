import { useState, useEffect } from 'react';
import qiitaApi from '../api/qiita';

function useQiitaApi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchItems = async () => {
    setLoading(true);
    setData(await qiitaApi.getItems());
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return { data, loading };
}

export default useQiitaApi;
