import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import biblio1 from './assets/img/bibliotecas/biblio1.jpg';
import biblio2 from './assets/img/bibliotecas/biblio2.jpg';
import biblio3 from './assets/img/bibliotecas/biblio3.jpg';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const App = () => {

  const [backImg, setBackImg] = useState(biblio1);
  const [contBackImg, setContBackImg] = useState(0);

  useEffect(() => {

    setInterval(() => {
      console.log(contBackImg);
      if (contBackImg === 0) {
        setBackImg(biblio2)
        setContBackImg(1)
      } else if (contBackImg === 1) {
        setBackImg(biblio3)
        setContBackImg(2)
      } else if (contBackImg === 2) {
        setBackImg(biblio3)
        console.log(biblio1);
        setContBackImg(0)
      }

    }, 6000);
  
    return () => {};
  }, []);
  


  return (
      <div className="App" style={{backgroundImage: `url(${backImg})`, width:'100vh', height:'100vh'}} >
        <h1>Rigo</h1>
        {/* <Grid container spacing={1}>
          <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2, width: '100%', height: '100vh',
                      backgroundImage: biblio1 }}>
            primary.main
          </Box>
        </Grid> */}
      </div>
    )
}


export default App;