import React, {  useState } from 'react'
// import { BrowserRouter } from "react-router-dom";

import { createContext } from "react";
import { initStore  } from './helpers/utils';
import { AppRouter } from './routers/AppRouter';

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
 
  return (
    <StoreContext.Provider value={{store, updateStore}}>
      {/* <BrowserRouter> */}
        <AppRouter/>
      {/* </BrowserRouter> */}
    </StoreContext.Provider>
  )
}

export default App;
