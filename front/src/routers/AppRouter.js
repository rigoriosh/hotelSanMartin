import React from 'react';
import { Link, Outlet } from 'react-router-dom';



export const AppRouter = () => {

    
    

    return <div className="App" style={
        {
            // backgroundImage: `url(${backImg})`,
            // backgroundRepeat: 'no-repeat',
            // backgroundSize:'cover',
            // backgroundColor:'transparent',
            // backgroundPosition: 'center center',
            // transition: 'all 0.5s',
            height:'100vh',
            position: 'absolute',
            width: '-webkit-fill-available',
        }} 
    >
        <nav
            style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
            }}
        >
            <Link to="/invoices">Invoices</Link> |{" "}
            <Link to="/expenses">Expenses</Link>
        </nav>
        <Outlet />


    </div>;
};
