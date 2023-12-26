import * as Styled from './styles';
import Container from 'react-bootstrap/Container';

export const HomeContent = ({ children }) => {
  return (
  <Styled.Container>
    <Container>
      <Styled.Paragraph>
        Selecione as opções no menu.
      </Styled.Paragraph>
    </Container>
  </Styled.Container>
  );
};

