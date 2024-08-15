import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../common/LoginButton';
import LogoutButton from '../common/LogoutButton';
import SignupButton from '../common/SignupButton';
import '../../styles/Header.less';

const { primary_accent_color } = colors;


function HeaderContent() {
  const { isAuthenticated } = useAuth0();

  return (
    <div
      className="header-container"
      style={{ backgroundColor: primary_accent_color }}
    >
      <div id="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div className="links">
        <Link to="/" className="nav-links">
          Home
        </Link>
        <Link to="/graphs" className="nav-links">
          Graphs
        </Link>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        {isAuthenticated ? (
          <Link to="/profile" className="nav-links">
            Profile
          </Link>
        ) : (
          <SignupButton />
        )}
      </div>
    </div>
  );
}

export { HeaderContent };
