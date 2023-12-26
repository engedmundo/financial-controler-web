import styled, { css } from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';

export const NavContainer = styled(Navbar)`
  ${({ theme }) => css`
  position: sticky;
  background-color: ${theme.colors.grayDark};
  color: ${theme.colors.white};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  `}
`;
