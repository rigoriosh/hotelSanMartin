import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Rooms = () => {
  return <div id='Rooms'>
      <p>Rooms</p>
      <div style={{display:'flex'}}>
        <Link to="/rooms/double" >Double</Link> |{" "}
        <Link to="/rooms/simple" >Simple</Link> |{" "}
      </div>
      <Outlet/>
  </div>;
};
