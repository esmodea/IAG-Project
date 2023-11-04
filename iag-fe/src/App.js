import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePageMobile from './application/mobile/pages/HomePageMobile';
import ShopPageMobile from './application/mobile/pages/ShopPageMobile';
import UserPageMobile from './application/mobile/pages/UserPageMobile';
import HomePageWeb from './application/web/pages/HomePageWeb';
import WriterPageWeb from './application/web/pages/WriterPageWeb';
import './application/common/common.css';
import './App.css';
import authors from './application/mock-data/authorNames';

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
      <Route path='/m/home' element={isMobile ? <HomePageMobile /> : <Navigate to='/home'/>}/>
      <Route path='/m/shop' element={isMobile ? <ShopPageMobile /> : <Navigate to='/shop'/>}/>
      <Route path='/m/user' element={isMobile ? <UserPageMobile /> : <Navigate to='/user'/>}/>
      <Route path='/home' element={isMobile ? <Navigate to='/m/home'/> : <HomePageWeb />}/>
      <Route path='/shop' element={isMobile ? <Navigate to='/m/shop'/> : <></>}/>
      <Route path='/user' element={isMobile ? <Navigate to='/m/user'/> : <></>}/>
      {authors.map((author) => {
        return(
          <>
            <Route path={`/home/${author.name}`} element={isMobile ? <Navigate to={`/m/home/${author.name}`} />: <WriterPageWeb />} />
            <Route path={`/m/home/${author.name}`} element={isMobile ? <></> : <Navigate to={`/home/${author.name}`} />} />
          </>
        )
      })}
    </Routes>
  );
}

export default App;
