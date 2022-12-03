import logo from './logo.svg';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/bootstrap/dist/js/react';

import {BrowserRouter, Route, Routes ,NavLink} from 'react-router-dom';
import ShopeList from './Shop_list/ShopeList';
import Add_Shope from './Shop_list/Add_Shope';
import NavBar from './Nav Bar/NavBar';
function App() {
  return (
    <>
    <NavBar/>
    <Routes> 
      <Route path="/"  element={<ShopeList/>}/> 
      <Route path="/add_shope"  element={<Add_Shope/>}/>   
    </Routes> 
   
    </>
  );
}

export default App;
