import CreditCardsList from "../../components/CreditCardsList"
import PageHeading from "../../components/PageHeading"

const CreditCards = () => {
  return (
    <div>
      <PageHeading title={'Listagem dos Cartões de Crédito'} />
      <CreditCardsList />
    </div>
  )
}

export default CreditCards
