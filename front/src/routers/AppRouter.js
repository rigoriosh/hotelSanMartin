import React, { useState, useEffect } from 'react';

import biblio1 from '../assets/img/bibliotecas/biblio1.jpg';
import biblio2 from '../assets/img/bibliotecas/biblio2.jpg';
import biblio3 from '../assets/img/bibliotecas/biblio3.jpg';


export const AppRouter = () => {

    const [stateAppRouter, setStateAppRouter] = useState({
        backImg: biblio1,
        contBackImg: 0,
    });
    const {backImg, contBackImg} = stateAppRouter;
    // const [backImg, setBackImg] = useState(biblio1);
    // const [contBackImg, setContBackImg] = useState(0);

    useEffect(() => {
        setInterval(() => {
            logicaInterval();
        }, 6000);
        return () => {};
    }, []);

    const logicaInterval = () => {
        
            console.log(contBackImg);
            console.log(backImg);
            if (contBackImg === 0) {
                setStateAppRouter({
                    ...stateAppRouter,
                    backImg: biblio2,
                    contBackImg: contBackImg + 1
                })
                // setBackImg(biblio2)
                // setContBackImg(1)
            } else if (contBackImg === 1) {
                setStateAppRouter({
                    ...stateAppRouter,
                    backImg: biblio3,
                    contBackImg: contBackImg + 1
                })
                // setBackImg(biblio3)
                // setContBackImg(2)
            } else {
                setStateAppRouter({
                    ...stateAppRouter,
                    backImg: biblio1,
                    contBackImg: 0
                })
                // setBackImg(biblio3)
                // console.log(biblio1);
                // setContBackImg(0)
            }

       
    }

    return <div >

        <h1>AppRouter</h1>
        <h3>{backImg}</h3>
        <h3> contBackImg {contBackImg}</h3>
        <div className="App" style={{backgroundImage: `url(${backImg})`, width:'100vh', height:'100vh'}} >

        </div>
    </div>;
};
