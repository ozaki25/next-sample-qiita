import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import env from 'src/constants/env';

const StyledNavbar = styled(Navbar)`
  background-color: #d9edf7;
  border-color: #d9edf7;
`;

function Header() {
  return (
    <StyledNavbar fluid>
      <StyledNavbar.Header>
        <StyledNavbar.Brand>
          <a href={`${env.basePath}/`}>Qiita Sample</a>
        </StyledNavbar.Brand>
      </StyledNavbar.Header>
    </StyledNavbar>
  );
}

export default Header;
