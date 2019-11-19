import { useEffect } from 'react';
import Router from 'next/router';
import { Button, Glyphicon, Image, Panel } from 'react-bootstrap';
import Layout from '../../components/Layout';
import useQiitaComments from '../../hooks/useQiitaComments';

const basePath = process.env.basePath;

function Comment({
  id,
  body,
  created_at,
  user: { id: username, profile_image_url },
  refetch,
  destory,
}) {
  const onClickEdit = () => {
    Router.push(`${basePath}/comments/edit?id=${id}`);
  };

  const onClickDelete = async () => {
    if (confirm('削除します\nよろしいですか？')) {
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
      <label>{username}</label> <small>{created_at}</small>
      {username === 'oz25' && (
        <>
          <Button bsSize="xsmall" bsStyle="primary" onClick={onClickEdit}>
            <Glyphicon glyph="pencil" /> 編集する
          </Button>{' '}
          <Button bsSize="xsmall" bsStyle="danger" onClick={onClickDelete}>
            <Glyphicon glyph="trash" /> 削除する
          </Button>
        </>
      )}
      <pre>{body}</pre>
    </Panel.Body>
  );
}

function Comments() {
  const { loading, findList, destory, comments } = useQiitaComments();

  const onClickNew = async () => {
    Router.push(`${basePath}/comments/new`);
  };

  useEffect(() => {
    findList();
  }, []);

  return (
    <Layout>
      <Panel>
        <Panel.Heading className="clearfix">
          コメント一覧
          <Button bsSize="xsmall" className="pull-right" onClick={onClickNew}>
            <Glyphicon glyph="pencil" /> コメントを投稿する
          </Button>
        </Panel.Heading>

        {loading ? (
          <Panel.Body>loading...</Panel.Body>
        ) : (
          comments.map(props => (
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
