import styled, { css }  from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.xhuge} 0;
    display: flex;
    align-items: center;
    min-height: 95vh;
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.spacings.small};
    padding: 0 ${theme.spacings.small};
    background-color: 'gray';
  `}
`;
