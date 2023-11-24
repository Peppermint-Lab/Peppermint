// UserContext.js
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const SessionProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserProfile = async () => {
    const token = getCookie('session');
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }).then(res => res.json())
        .then((res) => {
          if(res.user){
            setUser(res.user)
            setLoading(false);
          } else {
              console.error('Failed to fetch user profile');
              router.push('/auth/login');
          }
        })
    } catch (error) {
      // Handle fetch errors if necessary
      console.error('Error fetching user profile:', error);
      router.push('/auth/login');
      
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('fetching user profile');
    fetchUserProfile();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
