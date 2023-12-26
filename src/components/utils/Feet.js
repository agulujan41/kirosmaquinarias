import React from 'react'

const Feet = () => {
  return (
    <>
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
    </>
  )
}

export default Feet
