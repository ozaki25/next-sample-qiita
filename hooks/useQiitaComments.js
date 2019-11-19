import { useState, useEffect } from 'react';
import qiitaApi from 'api/qiita';

function useQiitaComments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({});
  const [loading, setLoading] = useState(false);

  const findList = async () => {
    setLoading(true);
    setComments(await qiitaApi.getComments());
    setLoading(false);
  };

  const find = async ({ id }) => {
    setLoading(true);
    setComment(await qiitaApi.getComment({ id }));
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
    comments,
    comment,
    loading,
    findList,
    find,
    create,
    update,
    destory,
  };
}

export default useQiitaComments;
