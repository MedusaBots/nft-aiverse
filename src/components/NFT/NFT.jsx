import './NFT.css';
import Card from "./Card";

function Nft() {
  return (
      <div className='NFTbody'>
        <div className="App-header"><h1 className="nftH1">Aiverse NFT Gives Access</h1></div>
        <div className="carding">
        <Card title="Get Access"  hrcolor="background: #FFB070;" color="#FFB070" text="Digital Begins AI Models"/>
        <Card title="Get Various" hrcolor="#F1F965" color="#F1F965" text="Collections"/>
        <Card title="Get Ownership" hrcolor="#54FAAE" color="#54FAAE" text="Land in Metaverse"/>
        </div>
      </div>
  );
}

export default Nft;