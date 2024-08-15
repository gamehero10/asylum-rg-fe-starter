import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../../styles/NavButtons.less';

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="nav-buttons"
      onClick={() =>
        loginWithRedirect({
          screen_hint: 'signup',
        })
      }
    >
      Sign Up
    </button>
  );
};

export default SignupButton;