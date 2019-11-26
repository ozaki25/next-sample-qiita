import { useEffect } from 'react';
import Router from 'next/router';
import { Image, Panel } from 'react-bootstrap';

import Layout from 'src/components/Layout';
import IconButton from 'src/components/IconButton';
import useQiitaComments from 'src/hooks/useQiitaComments';
import dateFormatUtil from 'src/utils/dateFormat';
import env from 'src/constants/env';

function Comment({
  id,
  body,
  created_at,
  user: { id: username, profile_image_url },
  refetch,
  destory,
}) {
  const onClickEdit = () => {
    Router.push(`${env.basePath}/comments/edit?id=${id}`);
  };

  const onClickDelete = async () => {
    if (window.confirm('削除します\nよろしいですか？')) {
      await destory({ id });
      refetch();
    }
  };

  return (
    <Panel.Body key={id}>
      <Image
        src={profile_image_url}
        alt={username}
        height="60"
        width="60"
        rounded
        responsive
      />
      <label htmlFor="user">{username}</label>
      {' '}
      <small>{dateFormatUtil.yyyymmddhhmm(created_at)}</small>
      {username === 'oz25' && (
        <>
          {' '}
          <IconButton
            bsSize="xsmall"
            bsStyle="primary"
            onClick={onClickEdit}
            glyph="pencil"
          >
            編集
          </IconButton>
          {' '}
          <IconButton
            bsSize="xsmall"
            bsStyle="danger"
            onClick={onClickDelete}
            glyph="trash"
          >
            削除
          </IconButton>
        </>
      )}
      <pre>{body}</pre>
    </Panel.Body>
  );
}

function Comments() {
  const {
    loading, findList, destory, comments,
  } = useQiitaComments();
  const onClickNew = async () => {
    Router.push(`${env.basePath}/comments/new`);
  };

  useEffect(() => {
    findList();
  }, []);

  return (
    <Layout>
      <Panel>
        <Panel.Heading className="clearfix">
          コメント一覧
          <IconButton
            bsSize="xsmall"
            className="pull-right"
            onClick={onClickNew}
            glyph="pencil"
          >
            コメントを投稿する
          </IconButton>
        </Panel.Heading>

        <Panel.Body>
          <a href="https://qiita.com/ozaki25/private/7c780fc2e98952562fe4">
            Qiitaで記事を確認する
          </a>
        </Panel.Body>
        {loading ? (
          <Panel.Body>loading...</Panel.Body>
        ) : (
          comments.map((props) => (
            <Comment
              key={props.id}
              refetch={findList}
              destory={destory}
              {...props}
            />
          ))
        )}
      </Panel>
    </Layout>
  );
}

export default Comments;
