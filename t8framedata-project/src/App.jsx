import React from 'react';
import { Router, Route, Routes, useParams, useLocation } from 'react-router-dom';
import './App.css';
import Resources from './components/Resources';
import Punishment from './components/Punishment';
import Home from './components/Home';
import Navbar from './components/Navbar';

import Character from './components/Character';
import PreloadImages from './utils/PreloadImages';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Scrolls to top whenever the pathname changes

  return null;
};


function App() {
  return (
    <>
      <Navbar/>
      <div className='app-div'>

              <ScrollToTop />

              <PreloadImages />

              {/* Main page, rendered using React Routes */}
              <Routes>
                <Route path='/' element={<Home/>} ></Route>
                

                <Route path='/:char/framedata' element={<Character/>} ></Route>
                <Route path='/:char/punishment' element={<Punishment/>} ></Route>
                <Route path='/:char/resources' element={<Resources/>} ></Route>


              </Routes>
      </div>
    </>
  )
}

export default App