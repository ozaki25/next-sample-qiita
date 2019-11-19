import 'bootstrap/dist/css/bootstrap.css';
import { Grid } from 'react-bootstrap';
import Header from 'components/Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Grid>{children}</Grid>
    </>
  );
}

export default Layout;
