import { useEffect } from 'react';
import Link from 'next/link';
import { Button, Glyphicon, Image, Panel } from 'react-bootstrap';
import Layout from '../../components/Layout';
import useQiitaComments from '../../hooks/useQiitaComments';

function Comments() {
  const { data, loading, refetch } = useQiitaComments();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <Layout>
      <Panel>
        <Panel.Heading className="clearfix">
          コメント一覧
          <Link href="/comments/new">
            <Button bsSize="xsmall" className="pull-right">
              <Glyphicon glyph="pencil" /> コメントを投稿する
            </Button>
          </Link>
        </Panel.Heading>
        {loading ? (
          <Panel.Body>loading...</Panel.Body>
        ) : (
          data.map(
            ({
              id,
              body,
              created_at,
              user: { id: username, profile_image_url },
            }) => (
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
                <pre>{body}</pre>
              </Panel.Body>
            ),
          )
        )}
      </Panel>
    </Layout>
  );
}

export default Comments;
