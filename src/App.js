import './App.css';
import Nft from './NFT';
import Header from './Header';
import HowAiverse from './HowToAiverse';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <HowAiverse />
        <Nft />
      </header>
    </div>
  );
}

export default App;
