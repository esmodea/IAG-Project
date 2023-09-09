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
      <Route exact path='/' element={<Navigate to='/home' />} />
      <Route path='/m/home' element={isMobile ? <BottomBar /> : <></>}/>
      <Route path='/m/shop' element={isMobile ? <BottomBar /> : <></>}/>
      <Route path='/m/user' element={isMobile ? <BottomBar /> : <></>}/>
    </Routes>
  );
}

export default App;
