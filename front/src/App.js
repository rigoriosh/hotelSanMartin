import React, {  useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';


import { createContext } from "react";
import { initStore  } from './helpers/utils';
import { AppRouter } from './routers/AppRouter';
import { Expenses } from './routers/Expenses';
import { Invoices } from './routers/Invoices';

import bigImg1 from './assets/img/bigImages/bigImg1.JPG';
import bigImg2 from './assets/img/bigImages/bigImg2.jpeg';
import bigImg3 from './assets/img/bigImages/bigImg3.jpeg';
import bigImg4 from './assets/img/bigImages/bigImg4.jpeg';
import bigImg5 from './assets/img/bigImages/bigImg5.jpeg';

import BackGroundAPP1 from './assets/img/BackGroundAPP1.jpeg'

import smallImg1 from './assets/img/smallImages/smallImg1.jpeg';
import smallImg2 from './assets/img/smallImages/smallImg2.jpeg';
import smallImg3 from './assets/img/smallImages/smallImg3.jpeg';
import smallImg4 from './assets/img/smallImages/smallImg4.jpeg';
import smallImg5 from './assets/img/smallImages/smallImg5.jpeg';
import { Invoice } from './onlyToTests/Invoice';

export const StoreContext = createContext(null);

export const App = () => {
 
 const [store, setStore] = useState(initStore);
 const updateStore = (data, updateSession=true)=>{
   if (data) {
    //  setStore(data);
     setStore({...data, timeInitSessionUser: new Date()});
     sessionStorage.setItem('store', JSON.stringify(data))
   }
 }

 ////////////////
 const [backImg, setBackImg] = useState(bigImg1); //cambiar el background de la app
    const [contBackImg, setContBackImg] = useState(1); // contador para controlar el cambio de img en el background

    const matches = useMediaQuery('(min-width:415px)');

    useEffect(() => {
        intervaloCambioDeImgBackg();
        
        return () => {};
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
      
        if (contBackImg === 1) {
            matches ? setBackImg(BackGroundAPP1) : setBackImg(smallImg1)
        } else if (contBackImg === 2) {
            matches ? setBackImg(bigImg2) : setBackImg(smallImg2)
        } else if (contBackImg === 3) {
          matches ? setBackImg(bigImg3) : setBackImg(smallImg3)
        } else if (contBackImg === 4) {
          matches ? setBackImg(bigImg4) : setBackImg(smallImg4)
        } else {
            matches ? setBackImg(bigImg5) : setBackImg(smallImg5)
        }
    
      return () => {};
      // eslint-disable-next-line
    }, [contBackImg]);

    const intervaloCambioDeImgBackg = () => {
        setInterval(() => {
            setContBackImg(contBackImg => contBackImg === 5 ? 1 : contBackImg + 1);
        }, 8000);
    }
    
 ////////////////
 
 
  return  <div className="App" style={
      {
          backgroundImage: `url(${backImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize:'cover',
          backgroundColor:'transparent',
          backgroundPosition: 'center center',
          transition: 'all 0.5s',
          height:'100vh',
          position: 'absolute',
          width: '-webkit-fill-available',
      }} 
  >
    <StoreContext.Provider value={{store, updateStore}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <AppRouter/>} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
       
      </BrowserRouter>
    </StoreContext.Provider>
  </div>;
}

export default App;
