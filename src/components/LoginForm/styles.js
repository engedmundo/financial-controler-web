import styled, { css }  from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: block;
    border: 1px solid ${theme.colors.secondaryColor};
    height: 100%;
    width: 100%;
    border-radius: ${theme.spacings.xmall};
    align-self: center;
    padding: ${theme.spacings.xmall};
  `}
`;
