import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    background: ${theme.colors.black};
    color: ${theme.colors.light};
    padding: ${theme.spacings.small} 0;
  `}
`;
