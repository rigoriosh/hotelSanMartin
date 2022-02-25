import React from 'react'
import { useState } from 'react';
import Draggable from 'react-draggable';
// https://fontawesome.com/v5/search
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import '../styles/menuNavBar.css'


export const MenuNavBar = () => {

  const [clickMenu, setClickMenu] = useState(false);
  const optMenu = [
    {
      name: 'Home',
      icon: <FontAwesomeIcon icon={faHome} />,
    },
    {
      name: 'Profile',
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      name: 'Message',
      icon: <FontAwesomeIcon icon={faCommentDots} />,
    },
    {
      name: 'Seting',
      icon: <FontAwesomeIcon icon={faCogs} />,
    },
    {
      name: 'Pasword',
      icon: <FontAwesomeIcon icon={faLock} />,
    },
    {
      name: 'Sign',
      icon: <FontAwesomeIcon icon={faSignInAlt} />,
    },
    {
      name: 'Out',
      icon: <FontAwesomeIcon icon={faSignOutAlt} />,
    },
  ]


    const handleStart = (e) => {
        console.log(e);
    }
    const handleDrag = (e) => {
        console.log(e);
    }
    const handleStop = (e) => {
        console.log(e);
    }
    return (
        <Draggable
            axis="x"
            handle=".navigation"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            grid={[25, 25]}
            scale={1}
            onStart={handleStart}
            onDrag={handleDrag}
            onStop={handleStop}
        >
            <div className={`navigation ${clickMenu ? 'active' : ''}`}>
                <div className={`toggle ${clickMenu ? 'active' : ''}`}
                    onClick={()=>setClickMenu(!clickMenu)}
                >
                </div>
                <ul>
                    {
                        optMenu.map((opt, i) => (
                        <li key={opt + i}>
                            <a href="#">
                            <span className='icon'>
                                {opt.icon}
                            </span>
                            <span className='title'>{opt.name}</span>
                            </a>
                        </li>
                        ))
                    }
                </ul>
            </div>
        </Draggable>
  )
}
