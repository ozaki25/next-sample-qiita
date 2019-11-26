import { Glyphicon, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import env from 'src/constants/env';

const StyledNavbar = styled(Navbar)`
  background-color: #d9edf7;
  border-color: #d9edf7;
`;

function Header({ username }) {
  return (
    <StyledNavbar fluid>
      <StyledNavbar.Header>
        <StyledNavbar.Brand>
          <a href={`${env.basePath}/`}>Qiita Sample</a>
        </StyledNavbar.Brand>
        <StyledNavbar.Toggle />
      </StyledNavbar.Header>
      {username && (
        <StyledNavbar.Collapse>
          <StyledNavbar.Text pullRight>
            <Glyphicon glyph="user" />
            {' '}
            {username}
          </StyledNavbar.Text>
        </StyledNavbar.Collapse>
      )}
    </StyledNavbar>
  );
}

export default Header;
