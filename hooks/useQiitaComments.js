import { useState, useEffect } from 'react';
import qiitaApi from '../api/qiita';

function useQiitaComments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchComments = async () => {
    setLoading(true);
    setComments(await qiitaApi.getComments());
    setLoading(false);
  };

  const fetchComment = async ({ id }) => {
    setLoading(true);
    setComment(await qiitaApi.getComment({ id }));
    setLoading(false);
  };

  const addComment = async comment => {
    setLoading(true);
    await qiitaApi.postComment({ comment });
    setLoading(false);
  };

  const updateComment = async ({ id, comment }) => {
    setLoading(true);
    await qiitaApi.putComment({ id, comment });
    setLoading(false);
  };

  return {
    comments,
    comment,
    loading,
    fetch: fetchComments,
    find: fetchComment,
    add: addComment,
    update: updateComment,
  };
}

export default useQiitaComments;
