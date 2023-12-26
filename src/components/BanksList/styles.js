import styled, { css } from 'styled-components';
import { Container as BootContainer } from 'react-bootstrap';

export const Container = styled(BootContainer)`
  ${({ theme }) => css`
    min-height: 95vh;
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const TableTitle = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.medium};
  `}
`;


