import "./Header.css";
import logo from "../../assets/images/logo.png";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import spiral from "../../assets/images/spiralBG.png";
import LanguageIcon from "@mui/icons-material/Language";
import BigHand from "../../assets/images/landinghand.png";
import PoweredBy from "../../assets/images/poweredBy.png";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { Bitski } from "bitski";
import { useState, useEffect } from "react";

const Header = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const providerOptions = {
    metmask: {
      package: true,
    },
    bitski: {
      package: Bitski, // required
      options: {
        clientId: "BITSKI_CLIENT_ID", // required
        callbackUrl: "BITSKI_CALLBACK_URL", // required
      },
    },
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: "INFURA_ID", // required
      },
    },
    coinbasewallet: {
      package: CoinbaseWalletSDK, // Required
      options: {
        appName: "web3modal", // Required
        infuraId: "INFURA_ID", // Required
        rpc: "", // Optional if `infuraId` is provided; otherwise it's required
        chainId: 1, // Optional. It defaults to 1 if not provided
        darkMode: false, // Optional. Use dark theme, defaults to false
      },
    },
  };

  const web3Modal = new Web3Modal({
    network: "rinkeby",
    theme: "dark",
    cacheProvider: true,
    providerOptions,
  });

  const connectWallet = async () => {
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    await window.ethereum.send("eth_requestAccounts");
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setWalletAddress(account);
  };
  useEffect(() => {
    if (walletAddress != "") {
      connectWallet();
    }
  }, []);
  return (
    <div className="headerParent">
      <div className="headerEllipse">
        <div className="headerEllipseTwo"></div>
      </div>
      <img className="spiral" src={spiral}></img>
      <img className="bigHand" src={BigHand}></img>
      <div className="titleBarParent">
        <div className="logoTitleParent">
          <img className="headerLogo" src={logo}></img>
          <div className="headerTitles">
            <p className="aiverse">Aiverse</p>
            <p className="nfts">NFTs</p>
          </div>
        </div>
        <div className="headerInternalLinks">
          <p className="headerInternalLink">HOME</p>
          <p className="headerInternalLink">ABOUT</p>
          <p className="headerInternalLink">MINT</p>
          <p className="headerInternalLink">CONTACT US</p>
        </div>
        <div className="headerExternalLink">
          <button className="connectButton" onClick={connectWallet}>
            {walletAddress
              ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(
                  walletAddress.length - 5,
                  walletAddress.length
                )}`
              : "Connect Wallet"}
          </button>
          <FacebookSharpIcon className="externalLink" />
          <TwitterIcon className="externalLink" />
          <EmailIcon className="externalLink" />
        </div>
      </div>
      <div className="headerContent">
        <div style={{ backdropFilter: "blur(1px)" }}>
          <p className="headerAttractiveHeading">
            "Own a piece of
            <br />
            Artificial Intelligence"
          </p>
          <p className="headerSubHeading">Imaginate & Generate</p>
          <p className="headerHeadingContent">
            These are AI generated image NFTs which a user can create by typing
            a phrase and
            <br />
            making a NFT of the image.
          </p>
          <div className="poweredBy">
            <img className="poweredByLogo" src={PoweredBy} />
            <button className="mintYourNft">Mint your NFT </button>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="headerBottom">
          <p className="headerBottomContent">REWARDS</p>
          <p className="headerBottomContent">AIRDROPS</p>
          <p className="headerBottomContent">OWNERSHIP</p>
          <LanguageIcon />
          <p className="headerBottomContent">CREATE</p>
          <p className="headerBottomContent">FROM</p>
          <p className="headerBottomContent">IMAGINATIONS</p>
          <LanguageIcon />
          <p className="headerBottomContent">FIRST</p>
          <p className="headerBottomContent">EVER</p>
          <p className="headerBottomContent">GENERATED</p>
          <p className="headerBottomContent">NFTS</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
