import React from 'react'
import  {Box} from '@mui/material'
import Carousel from "./utils/Carousel";
import Navbar from "./utils/Navbar";
const Principal = () => {
  
  return (
    
    <>
      
      {/*NAVBAR*/ }
      <Navbar id='box_nav'/>
      {/*MAIN*/}
      <section id='main_section' class='hidden'> 
        <Box id="lit_body" sx={{mt:11,
        '@media (max-width:1000px)':{
          mt:7
        }
      }}

        >
          <Carousel/>
          
        </Box>
      </section>
      <section class='hidden'> 
        <div style={{height:'300vh'}}>

        </div>
      </section>

      
      
       
      
    </>
    
  
    
   )

}

export default Principal
