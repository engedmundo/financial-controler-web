import AccountsList from "../../components/AccountsList"
import PageHeading from "../../components/PageHeading"

const Accounts = () => {
  return (
    <div>
      <PageHeading title={'Listagem das Contas'}/>
      <AccountsList />
    </div>
  )
}

export default Accounts
