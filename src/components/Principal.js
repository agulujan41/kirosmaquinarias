import React from 'react'
import  {Box} from '@mui/material'
import Carousel from "./utils/Carousel";
import Navbar from "./utils/Navbar";
import CardsTractores from './utils/CardsTractores';
import Contact from './utils/Contact';
import Feet from './utils/Feet';
const Principal = () => {


  return (
    
    <>
      
      
      {/*NAVBAR*/ }
      <Navbar id='box_nav'/>
      {/*MAIN*/}
      <section id='main_section' className='hidden'> 
        <Box id="lit_body" sx={{mt:'90px',
        '@media (max-width:1000px)':{
          mt:'60px'
        }
      }}

        >
          <Carousel/>
          
        </Box>
      </section>
      <section id='tractores'>
        <div className='tractoresContainer'>
        <Box sx={{mr:11,ml:11,
          '@media (max-width:1000px)':{
            p:2
          }}}>
          
          <div className='cardDialog' id='tractoresCard'>
              <h1 >NUESTRAS MAQUINARIAS</h1>
              <CardsTractores/>
            </div>
          </Box>
          </div>
      </section>
      <section className='empresaSection hidden2' id='empresa'> 
        <Box sx={{m:2,mr:11,ml:11,
          '@media (max-width:1000px)':{
            m:2
          }
          }}>
          <div className='cardDialog'>
            <h1 >¿Quienes somos?</h1>
            <p >American Agro es una división de American Vial. Una empresa de capitales argentinos que nace con el objetivo de proveer maquinaria y repuesto vial de primer nivel al Mercado Argentino y Sudamericano. Representante en el país de las marcas XCMG (principalmente), ZoomLion (Chery by Lion), Wecan, Janyong y HBXG, American Vial cuenta hoy con mas de 20 puntos de venta en el país y mas de 1.500 unidades vendidas a lo largo y ancho de la Argentina, ubicándose entre las empresas lideres del mercado. Ademas, cuenta con representación comercial y técnica en Brasil, Uruguay, Chile y Peru.</p>
          </div>
          
          <Box component='img' src='./empresa.jpg' alt='' sx={{width:'100%'}}/>
        </Box>
        
        

      
      </section>
      <section id='contacto'>
        <Contact/>

      
      </section >

      <section id='feet'>  
          <Feet/>
      </section>
      
       
      
    </>
    
  
    
   )

}

export default Principal
