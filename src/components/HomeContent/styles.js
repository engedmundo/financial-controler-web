import styled, { css }  from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small} 0;
    min-height: 90vh;
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css``}
`;
