import React from 'react';

const loadingImg =
  'https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg';

const Loading = () => (
  <div
    className="spinner"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: '50px',
      marginBottom: '50px',
    }}
  >
    <img src={loadingImg} alt="Loading..." />
    <p style={{ color: '#295ca6' }}>...Loading</p>
  </div>
);

export default Loading; 