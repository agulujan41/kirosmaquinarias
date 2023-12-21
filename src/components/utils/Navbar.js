import { Box,Typography } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import React from 'react'

const Navbar = () => {
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
        backgroundColor:'white',
        pt:1,
        pb:1,
        position:'fixed',
        zIndex: '100',
        top:0,
        height:'90px',
        '@media (max-width:1000px)':{
            height:'60px'
        }

      }} id="navbar" >
          <Box sx={{display:'flex',flexDirection:'row',gap:'15px',alignItems:'center'}}> 
            <Box component="img" src="./logo.png" sx={{height:'60px',
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
              
            }}>
              <Typography sx={{fontFamily:"'Manrope', sans-serif" ,fontSize:'3.2em',fontWeight:'bold',fontStyle:'italic',alignSelf: 'bottom'
              ,'@media (max-width:1000px)':{
                fontSize:'2.0em'
            }
            }}>KYRO</Typography>
              <Typography  sx={{fontFamily:"'Manrope', sans-serif" ,fontSize:'2.3em',fontStyle:'italic',fontWeight:'bold',alignSelf: 'bottom'
              ,'@media (max-width:1000px)':{
                fontSize:'1.7em'
            }
            }}>maquinarias</Typography>
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
                  <WhatsAppIcon />
                  <a href='https://wa.me/+543875436384' target='_blank' style={{fontFamily:"'Manrope', sans-serif" ,color:'black',textDecoration:'none',fontWeight:'normal'}}>+54 9 387 543-6384</a>
              </Box>
              <Box sx={{display:'flex',flexDirection:'row',gap:'10px',pr:'10px'}}>
                  <Typography sx={{fontFamily:"'Manrope', sans-serif" }}>Lun a Vie: 9 a 18 hs.</Typography>
              </Box>
            
          </Box>
      </Box>
    </>
  )
}

export default Navbar
