import About from '../About/About';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Preloader from '../Prealoder/Prealoder';
import api from '../../utils/api';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";



function App() {

  return (
    <div className='page'>
      <BrowserRouter>
      <Switch>
      <Route path='/about'>
             <Navigation/>
            <About />
          </Route>
      
      <>
      <Route path='/home'>
      <Header/>
      <Navigation/>
      <Main/>
      <Footer/>
      </Route>
    
      </>
      </Switch>
      </BrowserRouter>
    </div>
    
    
    
  );
}

export default App;
