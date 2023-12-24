import { BankList } from '../BanksList';
import * as Styled from './styles';
import Container from 'react-bootstrap/Container';

export const HomeContent = ({ children }) => {
  return (
  <Styled.Container>
    <Container>
      <Styled.Paragraph>
        Home content Bemvindo!
        <BankList/>
      </Styled.Paragraph>
    </Container>
  </Styled.Container>
  );
};

