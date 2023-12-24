import * as Styled from './styles';
import Container from 'react-bootstrap/Container';

export const Footer = ({ children }) => {
  return (
    <Styled.Container>
      <Container>
        Desenvolvido por Edmundo Abreu e Lima!
      </Container>
    </Styled.Container>
  );
};
