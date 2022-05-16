import './Header.css';
import logo from '../../assets/images/logo.png';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import spiral from '../../assets/images/spiralBG.png';
import LanguageIcon from '@mui/icons-material/Language';
import TelegramIcon from '@mui/icons-material/Telegram';
import BigHand from '../../assets/images/landinghand.png';

const Header = (props) => {
    const internalLinks = ['HOME', 'ABOUT', 'MINT', 'CONTACT US'];

    const handleScrollTo = (data) => {
        props.passData(data.toLowerCase());
    }

    return (
        <div className='headerParent' id='home'>
            <div className='headerEllipse'>
                <div className='headerEllipseTwo'></div>
            </div>
            <img className='spiral' src={spiral}></img>
            <img className='bigHand' src={BigHand}></img>
            <div className='titleBarParent'>
                <div className='logoTitleParent'>
                    <img className='headerLogo' src={logo}></img>
                    <div className='headerTitles'>
                        <p className='aiverse'>Aiverse</p>
                        <p className='nfts'>NFTs</p>
                    </div>
                </div>
                <div className='headerInternalLinks'>
                    {internalLinks.map((item,index) => {
                        return <p className='headerInternalLink' onClick={() => handleScrollTo(item)} key={index}>{item}</p>
                    })}
                </div>
                <div className='headerExternalLink'>
                    <button className='connectButton'> Connect Wallet</button>
                    <TelegramIcon className='externalLink' />
                    <TwitterIcon className='externalLink' />
                    <EmailIcon className='externalLink' />
                </div>
            </div>
            <div className='headerContent'>
                <div style={{backdropFilter: 'blur(1px)'}}>
                <p className='headerAttractiveHeading'>"Own a piece of<br/>Artificial Intelligence"</p>
                <p className='headerSubHeading'>Imaginate & Generate</p>
                <p className='headerHeadingContent'>These are AI generated image NFTs which a user can create by typing a phrase and making a NFT of the image.</p>
                <div className='poweredBy'>
                    <button className='mintYourNft'>Mint your NFT </button>
                </div>
                </div>       
            </div>
            <div className='section'>
            <div className='headerBottom'>
                <p className='headerBottomContent'>REWARDS</p>
                <p className='headerBottomContent'>AIRDROPS</p>
                <p className='headerBottomContent'>OWNERSHIP</p>
                <LanguageIcon />
                <p className='headerBottomContent'>CREATE</p>
                <p className='headerBottomContent'>FROM</p>
                <p className='headerBottomContent'>IMAGINATIONS</p>
                <LanguageIcon />
                <p className='headerBottomContent'>FIRST</p>
                <p className='headerBottomContent'>EVER</p>
                <p className='headerBottomContent'>GENERATED</p>
                <p className='headerBottomContent'>NFTS</p>
            </div>
            </div>
        </div>
    )
}

export default Header;