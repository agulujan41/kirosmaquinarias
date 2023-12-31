import { Box,Typography } from '@mui/material'
import {Cursor,useTypewriter} from 'react-simple-typewriter'
import MenuIcon from '@mui/icons-material/Menu';
//import WhatsAppIcon from '@mui/icons-material/WhatsApp';
//import AgricultureIcon from '@mui/icons-material/Agriculture';
//import CallIcon from '@mui/icons-material/Call';
import React from 'react'

const Navbar = () => {

  const [detailsTitle] =useTypewriter({
    words:['maquinarias'],
    loop:{},
    typeSpeed:40,
    deleteSpeed:25
  })
  return (
    <>
        <Box sx = {{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        gap:'20px',
        pl:6,
        alignItems:'center',
        backgroundColor:'black',
        pt:'30px',
        pb:'30px',
        position:'fixed',
        zIndex: '100',
        top:0,
        height:'90px',
        '@media (max-width:1000px)':{
            height:'60px',
            pl:2
        }

      }} id="navbar" >
          
          <Box sx={{display:'flex',flexDirection:'row',gap:'15px',alignItems:'center'}}> 
            <Box component="img" src="./logo-orange.jpg" alt='' sx={{height:'60px',zIndex:170,
            '@media (max-width:1000px)':{
              height:'40px'
          }

          
          }}/>
            <Box sx ={{
              display:'flex',
              flexDirection:'row',
              gap:'15px',
              height:'60px',
              alignItems: 'center',
              '@media (max-width:1000px)':{
                gap:'7px'
            }
              
            }}>
              <Typography sx={{fontFamily:"'Bebas Neue', sans-serif" ,fontSize:'3.2em',fontWeight:'bold',fontStyle:'italic',alignSelf: 'bottom'
              ,color:'orange',zIndex:170,'@media (max-width:1000px)':{
                fontSize:'1.5em'

            },
            '@media (max-width:500px)':{
              fontSize:'1.3em'

          },

            }}>KIRO</Typography>
              
              <Typography sx={{fontFamily:"'Bebas Neue', sans-serif" ,fontSize:'2.3em',fontStyle:'italic',fontWeight:'bold',alignSelf: 'bottom'
               ,color:'white','@media (max-width:1000px)':{
                fontSize:'1em'
            },
            }}  className='neon'>{detailsTitle}</Typography>
            <Cursor cursorStyle=''>
            
            </Cursor>
            <Box component='img' src='./yellow-tractor.png' alt='' sx={{height:'45px',zIndex:170}}/>
          
            </Box>
            
          </Box>
          <div className='navbar-box' id='navbar_box'>
            <div className='btnX' id='btnX'>
              <span>×</span>
            </div>
            <nav>
              <ul>
                <li>
                  <span className="material-symbols-outlined lpMenu">navigate_next</span>
                  <a href='#main_section'>Inicio</a>
                  <span className="material-symbols-outlined rpMenu">expand_more</span>
                </li>
                <li>
                  <span className="material-symbols-outlined lpMenu">navigate_next</span>
                  <a href='#tractores'>Productos</a>
                  <span className="material-symbols-outlined rpMenu">expand_more</span>
                </li>
                <li>
                  <span className="material-symbols-outlined lpMenu">navigate_next</span>
                  <a href='#empresa'>Empresa</a>
                  <span className="material-symbols-outlined rpMenu">expand_more</span>
                </li>
                <li>
                  <span className="material-symbols-outlined lpMenu">navigate_next</span>
                  <a href='#contacto'>Contactanos</a>
                  <span className="material-symbols-outlined rpMenu">expand_more</span>
                </li>
              </ul>
            </nav>
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
          </div>
          <MenuIcon id = 'menu_icon_button' sx={{color:'orange',display:'none',position:'fixed',cursor:'pointer','@media (max-width:1000px)':{
              display:'flex',mr:2,top:'10px',right:0,height:'40px'
          }}}/>
          
      </Box>
      
    </>
  )
}

export default Navbar
