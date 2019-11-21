import { useState } from 'react';
import qiitaApi from 'src/api/qiita';

function useQiitaComments() {
  const [values, setValues] = useState([]);
  const [value, setValue] = useState({});
  const [loading, setLoading] = useState(false);

  const findList = async () => {
    setLoading(true);
    setValues(await qiitaApi.getComments());
    setLoading(false);
  };

  const find = async ({ id }) => {
    setLoading(true);
    setValue(await qiitaApi.getComment({ id }));
    setLoading(false);
  };

  const create = async ({ comment }) => {
    setLoading(true);
    await qiitaApi.postComment({ comment });
    setLoading(false);
  };

  const update = async ({ id, comment }) => {
    setLoading(true);
    await qiitaApi.patchComment({ id, comment });
    setLoading(false);
  };

  const destory = async ({ id }) => {
    setLoading(true);
    await qiitaApi.deleteComment({ id });
    setLoading(false);
  };

  return {
    comments: values,
    comment: value,
    loading,
    findList,
    find,
    create,
    update,
    destory,
  };
}

export default useQiitaComments;
