import Layout from '../../components/Layout';
import useQiitaApi from '../../hooks/useQiitaApi';

function Item({ id, title, created_at, url, user: { name } }) {
  return (
    <div key={id}>
      <a href={url}>
        {title} <small>{created_at}</small>
      </a>
    </div>
  );
}

function Items() {
  const { data, loading } = useQiitaApi();
  return (
    <Layout>
      {loading ? (
        <p>loading...</p>
      ) : (
        data.map(item => <Item key={item.id} {...item} />)
      )}
    </Layout>
  );
}

export default Items;
