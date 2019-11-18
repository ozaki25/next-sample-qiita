import { Navbar } from 'react-bootstrap';

const basePath = process.env.basePath;

function Header() {
  return (
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a href={`${basePath}/`}>Qiita Sample</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  );
}

export default Header;
