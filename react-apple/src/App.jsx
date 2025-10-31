import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './component/Header/Header'
import  Alert  from "./component/Main/Alert";
import Section1 from './component/Main/Section1';
import Section2 from './component/Main/Section2';
import Section3 from './component/Main/Section3';
import Section4 from './component/Main/Section4';
import Section5 from './component/Main/Section5';
import Section6 from './component/Main/Section6';
import Footer from './component/Footer/footer';

function App()  {
  return (
    <>
      <Header/>
      <Alert/>
     <Section1/>
     <Section2/> 
     <Section3/>
     <Section4/>
     <Section5/>
      <Section6/> 
      <Footer/>
     </>
    
  )
};
export default App;