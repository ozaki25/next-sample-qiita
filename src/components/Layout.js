import 'bootstrap/dist/css/bootstrap.css';
import { Grid } from 'react-bootstrap';
import Header from 'src/components/Header';
import useAuthUser from 'src/hooks/useAuthUser';

function Layout({ children }) {
  const { authUser } = useAuthUser();
  return (
    <>
      <Header username={authUser && authUser.id} />
      <Grid>{children}</Grid>
    </>
  );
}

export default Layout;
