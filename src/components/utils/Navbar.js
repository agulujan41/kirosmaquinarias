import { Box,Typography } from '@mui/material'
import {Cursor,useTypewriter} from 'react-simple-typewriter'
import MenuIcon from '@mui/icons-material/Menu';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
//import AgricultureIcon from '@mui/icons-material/Agriculture';
import CallIcon from '@mui/icons-material/Call';
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
            <Box component="img" src="./logo-orange.jpg" sx={{height:'60px',
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
              <Typography sx={{fontFamily:"'Manrope', sans-serif" ,fontSize:'3.2em',fontWeight:'bold',fontStyle:'italic',alignSelf: 'bottom'
              ,color:'orange',zIndex:150,'@media (max-width:1000px)':{
                fontSize:'1.5em'

            }
            }}>KIRO</Typography>
              
              <Typography sx={{fontFamily:"'Manrope', sans-serif" ,fontSize:'2.3em',fontStyle:'italic',fontWeight:'bold',alignSelf: 'bottom'
               ,color:'white','@media (max-width:1000px)':{
                fontSize:'1.3em'
            }
            }}  class='neon'>{detailsTitle}</Typography>
            <Cursor cursorStyle=''>
            
            </Cursor>
            <Box component='img' src='./yellow-tractor.png' sx={{height:'45px'}}/>
          
            </Box>
            
          </Box>
          <div class='navbar-box' id='navbar_box'>
            <nav>
              <ul>
                <li>
                  <span>></span>
                  <a href=''>Inicio</a>
                </li>
                <li>
                  <span>></span>
                  <a href=''>Tractores</a>
                </li>
                <li>
                  <span>></span>
                  <a href=''>Empresa</a>
                </li>
                <li>
                  <span>></span>
                  <a href=''>Contactanos</a>
                </li>
              </ul>
            </nav>
          </div>
          <MenuIcon id = 'menu_icon_button' sx={{color:'orange',display:'none',position:'fixed',cursor:'pointer','@media (max-width:1000px)':{
              display:'flex',mr:2,top:'20px',right:0
          }}}/>
          
      </Box>
      
    </>
  )
}

export default Navbar
