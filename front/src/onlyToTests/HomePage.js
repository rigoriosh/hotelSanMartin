import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export const HomePage = () => {
    let navigate = useNavigate();
    let location = useLocation();
    useEffect(() => {
      
    console.log(location);
      return () => {};
    }, [location]);
    
  return (
    <div>
        <h1>HomePage</h1>
        <p>{JSON.stringify(location)}</p>
        <Outlet />
        {
            location.pathname !== '/' &&
                <button onClick={()=>{
                    navigate("/");
                }}>
                    Home
                </button>
        }
    </div>
  );
};
