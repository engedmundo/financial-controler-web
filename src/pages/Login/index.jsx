import { Footer } from '../../components/Footer';
import { LoginForm } from '../../components/LoginForm';
import { Row, Col, Container, Figure } from 'react-bootstrap';
import * as Styled from './styles';

export default function Login() {
  return (
    <>
      <Styled.Container>
        <Container>
          <Row>
            <Col>
              <Styled.ImageContainer>
                <img src="assets/images/login.jpg" alt="Login" style={{ maxHeight: '400px' }}/>
              </Styled.ImageContainer>
            </Col>
            <Col>
              <LoginForm />
            </Col>
          </Row>
        </Container>
      </Styled.Container>
      <Footer />
    </>
  )
}
