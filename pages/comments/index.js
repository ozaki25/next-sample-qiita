import {
  Button,
  ControlLabel,
  FormControl,
  FormGroup,
  Image,
  Panel,
} from 'react-bootstrap';
import Layout from '../../components/Layout';
import useQiitaComments from '../../hooks/useQiitaComments';

function Items() {
  const { data, loading } = useQiitaComments();
  const onSubmit = e => {
    e.preventDefault();
  };

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
        <Panel.Body>
          <form onSubmit={onSubmit}>
            <FormGroup>
              <ControlLabel>コメントを投稿する</ControlLabel>
              <FormControl componentClass="textarea" name="comment" />
            </FormGroup>
            <Button type="submit">投稿</Button>
          </form>
        </Panel.Body>
      </Panel>
    </Layout>
  );
}

export default Items;
