import './App.css';
import Photo from "./robot3.png";
import Box from "./Box";
import Tech from "./logo4.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <h1 className='h1'>How do Aiverse NFTs work?</h1>
        <p>Super ai generated images create your imagination to reality</p>
        </div>
        {/* <div className='tech'></div> */}
        <img src={Tech} className="techImg"/>
        <img src={Photo} className="robot" />
        <div>
        <h1 className='h2'>Type the phrase and Create</h1>
        <p className='p2'>abdg kjawbfjkheusfhweuhwuhug</p>
        </div>

        <Box />
      </header>
    </div>
  );
}

export default App;
