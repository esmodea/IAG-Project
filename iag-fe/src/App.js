import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePageMobile from './application/mobile/pages/HomePageMobile';
import ShopPageMobile from './application/mobile/pages/ShopPageMobile';
import UserPageMobile from './application/mobile/pages/UserPageMobile';
import WriterPageMobile from './application/mobile/pages/WriterPageMobile';
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
      {/* <Route path='/m/shop' element={isMobile ? <ShopPageMobile /> : <Navigate to='/shop'/>}/>
      <Route path='/m/user' element={isMobile ? <UserPageMobile /> : <Navigate to='/user'/>}/> */}
      <Route path='/home' element={isMobile ? <Navigate to='/m/home'/> : <HomePageWeb />}/>
      <Route path='/shop' element={isMobile ? <Navigate to='/m/home'/> : <></>}/>
      <Route path='/user' element={isMobile ? <Navigate to='/m/home'/> : <></>}/>
      {authors.map((author, idx) => {
        return(
          <Route key={idx * 136} path={`/m/${author.id}`} element={isMobile ? <WriterPageMobile /> : <Navigate to={`/writer/${author.id}`} />} />
        )
      })}
      {authors.map((author, idx) => {
        return(
          <Route key={idx * 127} path={`/writer/${author.id}`} element={isMobile ? <Navigate to={`/m/${author.id}`} />: <WriterPageWeb />} />
        )
      })}            
    </Routes>
  );
}

export default App;
