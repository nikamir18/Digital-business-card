import React from 'react';
import ReactDOM from 'react-dom';
import Info from './components/Info';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import About from './components/About';

export default function App(){
  return (
    <div className="container">
      <Info/>
      <Contacts/>
      <Footer/>
    </div>
  )
}