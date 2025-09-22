import { Route, Routes, Navigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePageMobile from './application/mobile/pages/HomePageMobile';
import WriterPageMobile from './application/mobile/pages/WriterPageMobile';
import HomePageWeb from './application/web/pages/HomePageWeb';
import WriterPageWeb from './application/web/pages/WriterPageWeb';
import './application/common/common.css';
import './App.css';
import authors from './application/mock-data/authorNames';
import articles from './application/mock-data/homeArticles';
import keysData from './application/common/keys.json';

const keyMult = 2;

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      document.title = "IAG News"
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
        const newIdx = Math.min([idx * keyMult + keysData.keys.authors.min, keysData.keys.authors.max]);
        return(
          <Route key={newIdx} path={`/m/${author.id}`} element={isMobile ? <WriterPageMobile /> : <Navigate to={`/writer/${author.id}`} />} />
        )
      })}
      {authors.map((author, idx) => {
        const newIdx = Math.min([(idx * keyMult + keysData.keys.authors.min) - 1, keysData.keys.authors.max]);
        return(
          <Route key={newIdx} path={`/writer/${author.id}`} element={isMobile ? <Navigate to={`/m/${author.id}`} />: <WriterPageWeb />} />
        )
      })}
      {articles.map((article, idx) => {
        const newIdx = Math.min([(idx * keyMult + keysData.keys.articles.min), keysData.keys.articles.max]);
        return(
          <Route key={newIdx} path={`/m/${article.key}`} element={isMobile ? <WriterPageMobile /> : <Navigate to={`/article/${article.key}`} />} />
        )
      })}
      {articles.map((article, idx) => {
        const newIdx = Math.min([(idx * keyMult + keysData.keys.articles.min) - 1, keysData.keys.articles.max]);
        return(
          <Route key={newIdx} path={`/article/${article.key}`} element={isMobile ? <WriterPageMobile /> : <Navigate to={`/m/${article.key}`} />} />
        )
      })}
    </Routes>
  );
}

export default App;
