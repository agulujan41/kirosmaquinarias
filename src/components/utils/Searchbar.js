import {Box} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const Searchbar = () => {
  return (
    <>
         <Box sx={{backgroundColor:'white',pt:2,pb:2,
      display:'flex',justifyContent:'flex-end',mt:11,
      '@media (max-width:1000px)':{
        mt:6
    }
    }}>
          <SearchIcon sx={{mr:2}} />
      </Box>
    </>
  )
}

export default Searchbar
