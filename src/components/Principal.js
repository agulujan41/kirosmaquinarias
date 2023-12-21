import {Box} from "@mui/material"
import React from 'react'
import Carousel from "./utils/Carousel";
import Navbar from "./utils/Navbar";
import Searchbar from "./utils/Searchbar";
const Principal = () => {
  return (
    <>
      {/*NAVBAR*/ }
      <Navbar/>
      {/*SEARCHNBAR*/}
      <Searchbar/>
      <Box id="lit_body" sx={{
        
      }}>
        <Carousel/>
        
      </Box>
    </>
   
  )
}

export default Principal
