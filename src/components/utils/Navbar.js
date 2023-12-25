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
        pt:1,
        pb:1,
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
              
              <Typography  sx={{fontFamily:"'Manrope', sans-serif" ,fontSize:'2.3em',fontStyle:'italic',fontWeight:'bold',alignSelf: 'bottom'
               ,color:'white','@media (max-width:1000px)':{
                fontSize:'1.3em'
            }
            }}>{detailsTitle}</Typography>
            <Cursor cursorStyle=''>
            
            </Cursor>
            <Box component='img' src='./yellow-tractor.png' sx={{height:'45px'}}/>
            </Box>
          </Box>
          
          <Box sx={{display:'flex',flexDirection:'row',gap:'10px',mr:'100px',fontFamily:"'Manrope', sans-serif",fontWeight:'bolder',fontSize:'1em'
            ,'@media (max-width:1000px)':{
              display:'none'
          }
        
        }}>
              <Box sx={{display:'flex',flexDirection:'row',gap:'10px',pr:'10px',borderRight:'1px solid gray'}}>
                  <CallIcon />
                  <Typography sx={{fontFamily:"'Manrope', sans-serif" }}>+54 9 387 543-6384</Typography>
              </Box>
              <Box sx={{display:'flex',flexDirection:'row',gap:'10px',pr:'10px',borderRight:'1px solid gray'}}>
                  <WhatsAppIcon sx={{color:'green'}}/>
                  <a href='https://wa.me/+543875436384' target='_blank' style={{fontFamily:"'Manrope', sans-serif" ,color:'black',textDecoration:'none',fontWeight:'normal'}}>+54 9 387 543-6384</a>
              </Box>
              <Box sx={{display:'flex',flexDirection:'row',gap:'10px',pr:'10px'}}>
                  <Typography sx={{fontFamily:"'Manrope', sans-serif" }}>Lun a Vie: 9 a 18 hs.</Typography>
              </Box>
            
          </Box>
          <MenuIcon sx={{color:'orange',display:'none','@media (max-width:1000px)':{
              display:'flex',mr:2
          }}}/>

      </Box>
    </>
  )
}

export default Navbar
