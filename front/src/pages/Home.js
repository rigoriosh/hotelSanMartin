import React, { useState } from 'react';
import { /* Link, */ Outlet } from 'react-router-dom';
import { MenuNavBarDots } from '../components/MenuNavBarDots';
import { PieDePagina } from '../components/PieDePagina';



export const Home = () => {

  const [iconTouchStart, setIconTouchStart] = useState('');
  const [clickMenuNavBar, setClickMenuNavBar] = useState(false);


  
  // const eventLogger = (e, data) => {
  //   console.log('Event: ', e);
  //   console.log('Data: ', data);
  // };

  


  return <div id='Home' style={{
      backgroundColor:'rgba(0, 119, 117, 0.2)',
      color:'black',
      position:'absolute',
      width:'100%',
      height:'100vh'
      }}
      onTouchStart={()=>{
        if (clickMenuNavBar){
          console.log(11111)
          setClickMenuNavBar(false)
        } 
      }}
    >
      {/* <p>Home</p> */}
        {/* <nav
            style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
            }}
        >
            <Link to="/" >Inicio</Link> |{" "}
            <Link to="/hotel" >hotel</Link> |{" "}
            <Link to="/rooms" >rooms</Link> |{" "}
            <Link to="/galery" >galery</Link> |{" "}
            <Link to="/transport" >transport</Link> |{" "}
            <Link to="/contact" >contact</Link> |{" "}
            <Link to="/bookings" >bookings</Link> |{" "}
            <Link to="/ratings" >ratings</Link> |{" "}
        </nav> */}
        <div style={{display:'flex',  justifyContent:'space-around'}}
        >
          {/* <MenuNavBar/> */}
          <MenuNavBarDots
            iconTouchStart={iconTouchStart}
            setIconTouchStart={setIconTouchStart}
            clickMenu = {clickMenuNavBar}
            setClickMenu = {setClickMenuNavBar}
          />
          {/* <p>{`Click oprimido ${iconTouchStart}`}</p> */}
        </div>
        
        
      <Outlet/>
      <PieDePagina />
  </div>;
};
