import logoImg from '../assets/images/lens-logo.svg';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useWeb3React } from '@web3-react/core';
import { connectWallet } from '../helpers/Wallet';

const Header = () => {
  const { account, active, chainId, activate, deactivate } = useWeb3React();
  return (
    <div className="HeaderContainer">
      <img className="LogoImage" src={logoImg} alt="" />
      <div className="HeaderRightSideContainer">
        {active ?
          <IconButton size="large" onClick={() => deactivate()}>
            <LogoutIcon fontSize="inherit" />
          </IconButton> :
          <IconButton size="large" onClick={() => connectWallet(activate)}>
            <LoginIcon fontSize="inherit" />
          </IconButton>
        }
      </div>
    </div>
  );
}

export default Header;
