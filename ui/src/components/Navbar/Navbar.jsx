import React, { useEffect, useState } from 'react'

const Navbar = () => {

  const [state, setState] = useState({
    cont:0
  });

  const {cont} = state;


  useEffect(() => {
    
    setInterval(() => {
      setState(state => ({
        ...state,
        cont: state.cont + 1,
      }))
    }, 6000);
  
    return () => { };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    
    console.log(cont);
  
    return () => {};
  }, [cont]);
  
  

  return (
    <div>
      <p>Navbar</p>
      <p>state { JSON.stringify(state) }</p>
    </div>
  )
}

export default Navbar
