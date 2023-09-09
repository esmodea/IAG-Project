import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import BottomBar from './application/mobile/components/common/BottomBarMobile';
import './application/common/common.css';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 768;
  
  return (
    <Routes>
      <Route exact path='/m' element={<Navigate to='/m/home' />} />
      <Route exact path='/' element={<Navigate to='/m' />} />
      <Route path='/m/home' element={isMobile ? <BottomBar /> : <Navigate to='/home'/>}/>
      <Route path='/m/shop' element={isMobile ? <BottomBar /> : <Navigate to='/shop'/>}/>
      <Route path='/m/user' element={isMobile ? <BottomBar /> : <Navigate to='/user'/>}/>
      <Route path='/home' element={isMobile ? <Navigate to='/m/user'/> : <></>}/>
      <Route path='/shop' element={isMobile ? <Navigate to='/m/user'/> : <></>}/>
      <Route path='/user' element={isMobile ? <Navigate to='/m/user'/> : <></>}/>
    </Routes>
  );
}

export default App;
