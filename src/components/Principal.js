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
        <Box id="lit_body" sx={{mt:7,
        '@media (max-width:1000px)':{
          mt:4
        }
      }}

        >
          <Carousel/>
          
        </Box>
      </section>
      <section class='hidden'> 
        <Box sx={{m:2,mr:11,ml:11,
          '@media (max-width:1000px)':{
            m:2
          }
          }}>
          <h1 style={{color:'white',textAlign:'center'}}>¿Quienes somos?</h1>
          <p style={{color:'white',textAlign:'justify'}}>American Agro es una división de American Vial. Una empresa de capitales argentinos que nace con el objetivo de proveer maquinaria y repuesto vial de primer nivel al Mercado Argentino y Sudamericano. Representante en el país de las marcas XCMG (principalmente), ZoomLion (Chery by Lion), Wecan, Janyong y HBXG, American Vial cuenta hoy con mas de 20 puntos de venta en el país y mas de 1.500 unidades vendidas a lo largo y ancho de la Argentina, ubicándose entre las empresas lideres del mercado. Ademas, cuenta con representación comercial y técnica en Brasil, Uruguay, Chile y Peru.</p>
          <Box component='img' src='./empresa.jpg' sx={{width:'100%'}}/>
        </Box>
        
        <div style={{height:'300vh',backgroundColor:'white'}}>

        </div>
      </section>
      <section>

      </section>

      
      
       
      
    </>
    
  
    
   )

}

export default Principal
