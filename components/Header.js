import { Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Qiita Sample</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  );
}

export default Header;