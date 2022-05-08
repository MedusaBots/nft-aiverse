import './Header.css';
import logo from './logo.png';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import spiral from './spiralBG.png';
import LanguageIcon from '@mui/icons-material/Language';
import BigHand from './landinghand.png';
import PoweredBy from './poweredBy.png';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';

const Header = () => {


    return (
        <div className='headerParent'>
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
                    <p className='headerInternalLink'>HOME</p>
                    <p className='headerInternalLink'>ABOUT</p>
                    <p className='headerInternalLink'>MINT</p>
                    <p className='headerInternalLink'>CONTACT US</p>
                </div>
                <div className='headerExternalLink'>
                    <button className='connectButton'> Connect Wallet</button>
                    <FacebookSharpIcon className='externalLink' />
                    <TwitterIcon className='externalLink' />
                    <EmailIcon className='externalLink' />
                </div>
            </div>
            <div className='headerContent'>
                <div style={{backdropFilter: 'blur(1px)'}}>
                <p className='headerAttractiveHeading'>"Own a piece of<br/>Artificial Intelligence"</p>
                <p className='headerSubHeading'>Imaginate & Generate</p>
                <p className='headerHeadingContent'>These are AI generated image NFTs which a user can create by typing a phrase and<br/>making a NFT of the image.</p>
                <div className='poweredBy'>
                    <img className='poweredByLogo' src={PoweredBy} />
                    <button className='mintYourNft'>Mint your NFT </button>
                </div>
                </div>       
            </div>
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
    )
}

export default Header;