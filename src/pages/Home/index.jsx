import { Footer } from '../../components/Footer';
import { HomeContent } from '../../components/HomeContent';
import { MainMenu } from '../../components/MainMenu';

function Home() {
  return (
    <div className="Home">
      <MainMenu />
      <HomeContent />
      <Footer />
    </div>
  );
}

export default Home;
