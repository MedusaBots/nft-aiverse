import './App.css';
import Nft from './components/NFT/NFT';
import Mint from './components/Mint/Mint';
import Engage from './components/Engage/Engage';
import Header from './components/Header/Header';
import Carousl from './components/Crousel/Carousel';
import HowAiverse from './components/HowToAiverse/HowToAiverse';

function App() {
  return (
    <div className="App">
      <Header />
      <HowAiverse />
      <Engage />
      <Nft />
      <Mint />
      {/* <Carousl /> */}
    </div>
  );
}

export default App;
