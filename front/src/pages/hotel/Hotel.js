import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Hotel = () => {
  return <div id='Hotel' >
      <p>Hotel</p>
      <div style={{display:'flex'}}>
        <Link to="/hotel/us" >us</Link> |{" "}
        <Link to="/hotel/location" >location</Link> |{" "}
        <Link to="/hotel/policies" >policies</Link> |{" "}
      </div>
      <Outlet/>
  </div>;
};
