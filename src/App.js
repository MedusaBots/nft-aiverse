import './App.css';
import Nft from './NFT';
import Header from './Header';
import HowAiverse from './HowToAiverse';
import Mint from './Mint';
import Engage from './Engage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <HowAiverse />
        <Engage />
        <Nft />
        <Mint />
      </header>
    </div>
  );
}

export default App;
