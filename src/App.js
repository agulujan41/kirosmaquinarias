import './App.css';
import {Route,Routes} from "react-router-dom"
import Principal from './components/Principal';
import React from 'react';


function App() {
  return (
   
      <Routes>
        <Route path='/' element={<Principal/>}/>
      </Routes>
  );
}

export default App;
