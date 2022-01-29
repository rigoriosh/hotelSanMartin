import React, { useState, useEffect } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';

import bigImg1 from '../assets/img/bigImages/bigImg1.JPG';
import bigImg2 from '../assets/img/bigImages/bigImg2.jpeg';
import bigImg3 from '../assets/img/bigImages/bigImg3.jpeg';

import smallImg1 from '../assets/img/smallImages/smallImg1.jpeg';
import smallImg2 from '../assets/img/smallImages/smallImg2.JPG';
import smallImg3 from '../assets/img/smallImages/smallImg3.JPG';



export const AppRouter = () => {

    const [backImg, setBackImg] = useState(bigImg1); //cambiar el background de la app
    const [contBackImg, setContBackImg] = useState(1); // contador para controlar el cambio de img en el background

    const matches = useMediaQuery('(min-width:415px)');

    useEffect(() => {
        intervaloCambioDeImgBackg();
        
        return () => {};
    }, []);

    useEffect(() => {
      
        if (contBackImg === 1) {
            matches ? setBackImg(bigImg1) : setBackImg(smallImg1)
        } else if (contBackImg === 2) {
            matches ? setBackImg(bigImg2) : setBackImg(smallImg2)
        } else {
            matches ? setBackImg(bigImg3) : setBackImg(smallImg3)
        }
    
      return () => {};
    }, [contBackImg]);

    const intervaloCambioDeImgBackg = () => {
        setInterval(() => {
            setContBackImg(contBackImg => contBackImg === 3 ? 1 : contBackImg + 1);
        }, 8000);
    }
    

    return <div className="App" style={
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
        
        

    </div>;
};
