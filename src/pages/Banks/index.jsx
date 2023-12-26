import { Footer } from '../../components/Footer';
import { BanksList } from '../../components/BanksList';
import { MainMenu } from '../../components/MainMenu';

function Banks() {
  return (
    <div className="Banks">
      <MainMenu />
      <BanksList />
      <Footer />
    </div>
  );
}

export default Banks;
