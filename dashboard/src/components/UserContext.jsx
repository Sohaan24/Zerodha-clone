import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';


const UserContext = createContext();


export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cookies, , removeCookie] = useCookies(['token']);
  
  const apiUrl = import.meta.env.VITE_API_URL;
  const frontendUrl = import.meta.env.VITE_FRONTEND_URL;

  const logout = async () => {
    try {

      await axios.get(`${apiUrl}/logout`, { withCredentials: true });
    } catch (error) {
      console.error("Logout API call failed, but proceeding.", error);
    } finally {
      
      removeCookie("token", { path: '/' }); 
      localStorage.removeItem('username');
      setUser(null);
      window.location.href = `${frontendUrl}/login`; 
    }
  };

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.token) {
       
        window.location.href = `${frontendUrl}/login`;
        return;
      }

      try {
        const { data } = await axios.get(`${apiUrl}/verify-user`, { withCredentials: true });
        if (data.status && data.user) {
          setUser({ username: data.user });
        } else {
         
          logout();
        }
      } catch (error) {
        console.error("User verification failed:", error);
        logout();
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
    
  }, [cookies.token]);

  const value = { user, loading, logout };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};