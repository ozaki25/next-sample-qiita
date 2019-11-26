import 'bootstrap/dist/css/bootstrap.css';
import { useContext } from 'react';
import { Grid } from 'react-bootstrap';
import Header from 'src/components/Header';
import { AuthUserContext } from 'src/contexts/authUser';

function Layout({ children }) {
  const { authUser } = useContext(AuthUserContext);
  return (
    <>
      <Header username={authUser && authUser.id} />
      <Grid>{children}</Grid>
    </>
  );
}

export default Layout;
