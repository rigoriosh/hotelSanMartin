import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Draggable from 'react-draggable';


// https://fontawesome.com/v5/search
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { faCogs } from '@fortawesome/free-solid-svg-icons';
// import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faTaxi } from '@fortawesome/free-solid-svg-icons';
// import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
// import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';


import '../styles/menuNavBarDots.css'

export const MenuNavBarDots = (props) => {

    const {iconTouchStart, setIconTouchStart, clickMenu, setClickMenu} = props;

    let navigate = useNavigate();


    const handleStart = (e) => {
        // console.log(e);
    }
    const handleDrag = (e) => {
        // console.log(e);
    }
    const handleStop = (e) => {
        // console.log(e);
    }

    useEffect(() => {
      
        // if (clickMenu) {
        //     setIconTouchStart('')
        // }
    
      return () => {}
    }, [clickMenu])
    
    return (
        <Draggable
            axis="both"
            handle=".navigationDots"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            grid={[25, 25]}
            scale={1}
            onStart={handleStart}
            onDrag={handleDrag}
            onStop={handleStop}
        >
                {/* <div
                    className='clickFather'
                    onTouchStart={()=>setClickMenu(!clickMenu)}
                >
                    <p>{ clickMenu ? '<' : '>'}</p>
                </div> */}
                <div className={`navigationDots ${clickMenu ? 'active' : ''}`} 
                    onTouchStart={()=>{
                        if(clickMenu !== 'active') setClickMenu(!clickMenu)
                    }}
                >
                    <span 
                        style={{ '--i':5,'--x':-1,'--y':-1,}}
                        className={iconTouchStart === 'faHome' ? 'activo' : ''}
                        onTouchStart={()=>{
                            if (clickMenu) {
                                navigate("/");
                                setIconTouchStart('faHome');
                            }
                        }}
                    >
                        <FontAwesomeIcon icon={faHome} />
                    </span>
                    <span
                        style={{ '--i':2,'--x':0,'--y':-1,}}
                        className={iconTouchStart === 'faBed' ? 'activo' : ''}
                        onTouchStart={()=>{
                            if (clickMenu) {
                                setIconTouchStart('faBed');
                                navigate("/rooms");
                            }
                        }}
                        >
                            <FontAwesomeIcon icon={faBed} />
                    </span>
                    <span
                        style={{'--i':8,'--x':1,'--y':-1, }}
                        className={iconTouchStart === 'faImages' ? 'activo' : ''}
                         onTouchStart={()=>{
                             if (clickMenu) {
                                 setIconTouchStart('faImages');
                                 navigate("/galery");
                             }
                         }}
                     >
                        <FontAwesomeIcon icon={faImages} />
                    </span>
                    <span
                        style={{ '--i':0,'--x':-1,'--y':0, }}
                        className={iconTouchStart === 'faPhone' ? 'activo' : ''}
                        onTouchStart={()=>{
                            if (clickMenu) {
                                setIconTouchStart('faPhone');
                                navigate("/contact");
                            }
                        }}
                     >
                        <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <span
                        style={{ '--i':1,'--x':1,'--y':0,}}
                        className={iconTouchStart === 'faTaxi' ? 'activo' : ''}
                         onTouchStart={()=>{
                             if (clickMenu) {
                                 setIconTouchStart('faTaxi')
                                 navigate("/transport");
                             }
                         }}
                     >
                        <FontAwesomeIcon icon={faTaxi} />
                    </span>
                    <span
                        style={{ '--i':7,'--x':-1,'--y':1,}}
                        className={iconTouchStart === 'faBook' ? 'activo' : ''}
                         onTouchStart={()=>{
                             if (clickMenu) {
                                 setIconTouchStart('faBook');
                                 navigate("/bookings");
                             }
                         }}
                     >
                        <FontAwesomeIcon icon={faBook} />
                    </span>
                    <span
                        style={{ '--i':4,'--x':1,'--y':1, }}
                        className={iconTouchStart === 'faStar' ? 'activo' : ''}
                         onTouchStart={()=>{
                             if (clickMenu) {
                                 setIconTouchStart('faStar');
                                 navigate("/ratings");
                             }
                         }}
                     >
                        <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span
                        style={{  '--i':3,'--x':0,'--y':1, }}
                        className={iconTouchStart === 'faHotel' ? 'activo' : ''}
                        onTouchStart={()=>{
                            if (clickMenu) {
                                setIconTouchStart('faHotel');
                                navigate("/hotel");
                            }
                        }}
                     >
                        <FontAwesomeIcon icon={faHotel} />
                    </span>
                    
                    {/* <span
                        style={{ '--i':6,'--x':0,'--y':0,}}
                        className={iconTouchStart === 'faCogs' ? 'activo' : ''}
                        // onTouchStart={()=>{setIconTouchStart('faCogs')}}
                     >
                        <FontAwesomeIcon
                            onTouchStart={()=>{setIconTouchStart('faCogs')}}
                            icon={faCogs} />
                    </span> */}
                    
                    {/* <p>{iconTouchStart}</p> */}
                </div>

            {/* </div> */}
        </Draggable>
    )
}
