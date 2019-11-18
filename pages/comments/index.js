import { Image, Panel } from 'react-bootstrap';
import Layout from '../../components/Layout';
import useQiitaComments from '../../hooks/useQiitaComments';

function Items() {
  const { data, loading } = useQiitaComments();
  return (
    <Layout>
      <Panel>
        <Panel.Heading>コメント一覧</Panel.Heading>
        {loading ? (
          <Panel.Body>loading...</Panel.Body>
        ) : (
          data.map(
            ({
              id,
              body,
              rendered_body,
              created_at,
              user: { id: username, profile_image_url },
            }) => (
              <Panel.Body key={id}>
                <Image
                  src={profile_image_url}
                  alt={username}
                  rounded
                  responsive
                />
                <div>
                  <label>{username}</label> <small>{created_at}</small>
                </div>
                <pre>{body}</pre>
              </Panel.Body>
            ),
          )
        )}
      </Panel>
    </Layout>
  );
}

export default Items;
