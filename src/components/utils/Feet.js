import React from "react";
import { Box,Typography } from '@mui/material'
import {Cursor,useTypewriter} from 'react-simple-typewriter'
const Feet = () => {
  const [detailsTitle] =useTypewriter({
    words:['maquinarias'],
    loop:{},
    typeSpeed:40,
    deleteSpeed:25
  });
  return (
    <>
      <div className="feet">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "15px",
            height: "60px",
            alignItems: "center",
            width:"100%",
            "@media (max-width:1000px)": {
              gap: "7px",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "2.2em",
              fontWeight: "bold",
              fontStyle: "italic",
              alignSelf: "bottom",
              color: "orange",
              zIndex: 150,
              "@media (max-width:1000px)": {
                fontSize: "1.3em",
              },
              "@media (max-width:500px)": {
                fontSize: "1.1em",
              },
            }}
          >
            KIRO
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "2.3em",
              fontStyle: "italic",
              fontWeight: "bold",
              alignSelf: "bottom",
              color: "white",
              "@media (max-width:1000px)": {
                fontSize: "1em",
              },
            }}
            style={{color:'white'}}
          >
            {detailsTitle}
          </Typography>
          <Cursor cursorStyle=""></Cursor>
          </Box>
          <div className='followUs' >
                <h1>Seguinos en nuestras redes:</h1>
                <div className='socialMedias'>
                    <a href='https://www.facebook.com/valtrahispano/?locale=es_LA'>
                    <img src='./socialMedias/facebook.png' alt=''/>
                    </a>
                    <a href='https://www.instagram.com/valtrahispano/'>
                    <img src='./socialMedias/instagram.png' alt=''/>
                    </a>
                    <a href='https://www.tiktok.com/discover/tractor-valtra'>
                    <img src='./socialMedias/tiktok.png' alt=''/>
                    </a>
                    <a href='https://www.tiktok.com/discover/tractor-valtra'>
                    <img src='./socialMedias/linkedin.png' alt=''/>
                    </a>
                    
                    
                </div>
            </div>
            <h1>@Copyright ENERO 2024</h1>
            <h2>AGUIPROGRAMMER</h2>
      </div>
    </>
  );
};

export default Feet;
