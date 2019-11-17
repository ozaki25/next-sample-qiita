import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap';
import Layout from '../../components/Layout';
import useQiitaApi from '../../hooks/useQiitaApi';

function Items() {
  const { data, loading } = useQiitaApi();
  return (
    <Layout>
      <Panel>
        <Panel.Heading>記事一覧</Panel.Heading>
        {loading ? (
          <Panel.Body>loading...</Panel.Body>
        ) : (
          <ListGroup>
            {data.map(({ id, title, created_at, url, user: { name } }) => (
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
