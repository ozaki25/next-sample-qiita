import { useState, useEffect } from 'react';
import qiitaApi from '../api/qiita';

function useQiitaComments() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchComments = async () => {
    setLoading(true);
    setData(await qiitaApi.getComments());
    setLoading(false);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return { data, loading, refetch: fetchComments };
}

export default useQiitaComments;
