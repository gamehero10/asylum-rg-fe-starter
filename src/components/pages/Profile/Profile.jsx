import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../../../styles/Profile.less';


const Profile = () => {
    const { user } = useAuth0();
    const { name, picture, email } = user;

    return (
         <div>
            <div className = "profile-background">
              <img 
              src = {picture}
              alt = "Profile"
              className = "profile-img"
              />
            </div>

            <div className = "profile-info">
              <h2>{name}</h2>
              <p>{email}</p>
            </div>

            <div className = "profile-raw-background">
            <div className = "profile-raw-card">
            <pre id = "profile-raw">{JSON.stringify(user, null, 2)}</pre>
            </div>
            </div>
         </div>
   );
};






export default Profile;