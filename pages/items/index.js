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
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        data.map(item => <Item key={item.id} {...item} />)
      )}
    </div>
  );
}

export default Items;
