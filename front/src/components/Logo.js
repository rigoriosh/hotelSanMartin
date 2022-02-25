import React from 'react'
import logo from "../assets/logoSanMartin.png"

export const Logo = () => {
  return (
      <div className='logo'>
          <img src={logo} alt="" style={{width:'50%'}}/>
      </div>
  )
}
