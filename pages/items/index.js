import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap';
import Layout from '../../components/Layout';
import useQiitaApi from '../../hooks/useQiitaApi';

function Item({ id, title, created_at, url, user: { name } }) {
  return (
    <ListGroupItem href={url}>
      {title} <small>{created_at}</small>
    </ListGroupItem>
  );
}

function Items() {
  const { data, loading } = useQiitaApi();
  console.log(data);
  return (
    <Layout>
      <Panel>
        <Panel.Heading>記事一覧</Panel.Heading>
        {loading ? (
          <Panel.Body>loading...</Panel.Body>
        ) : (
          <ListGroup>
            {data.map(item => (
              <Item key={item.id} {...item} />
            ))}
          </ListGroup>
        )}
      </Panel>
    </Layout>
  );
}

export default Items;
