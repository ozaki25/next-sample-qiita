import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap';
import Layout from '../../components/Layout';
import useQiitaApi from '../../hooks/useQiitaApi';

function Items() {
  // const { data, loading } = useQiitaApi();
  const { data, loading } = { data: [], loading: false };
  return (
    <Layout>
      <Panel>
        <Panel.Heading>コメント一覧</Panel.Heading>
        {loading ? (
          <Panel.Body>loading...</Panel.Body>
        ) : (
          <ListGroup>
            {data.map(({ id, title, created_at, url }) => (
              <ListGroupItem key={id} href={url}>
                {title} <small>{created_at}</small>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Panel>
    </Layout>
  );
}

export default Items;
