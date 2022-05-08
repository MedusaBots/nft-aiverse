import './App.css';
import Photo from "./robot3.png";
import Box from "./Box";
import Tech from "./logo4.png"



function HowAiverse(){
    return(
        <div className='aiversebg'>
        <div className='top-header'>
        <h1 className='header-aiverse'><span>How do Aiverse NFTs work?</span></h1>
        <p className='p1'>Super ai generated images create your imagination to reality</p>
        </div>
        {/* <div className='tech'></div> */}
        <img src={Tech} className="techImg"/>
        <img src={Photo} className="robot" />
        <Box />
        </div>
    )
}

export default HowAiverse;