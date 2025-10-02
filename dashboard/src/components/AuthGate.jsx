import React, { useContext } from 'react';
import { useUser } from './UserContext';

const AuthGate = ({ children }) => {
  const { loading, user } = useUser();

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f9f9f9' }}>
        <h2>Loading...</h2>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return null;
};

export default AuthGate;