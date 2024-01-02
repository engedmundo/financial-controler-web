import { Container } from 'react-bootstrap'
import BanksList from '../../components/BanksList'
import PageHeading from '../../components/PageHeading'

const Banks = () => {
  return (
    <Container>
      <PageHeading title={'Listagem dos bancos'}/>
      <BanksList />
    </Container>
  )
}

export default Banks
