import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import BottomBar from './application/mobile/components/common/BottomBarMobile';
import './application/common/common.css';

function App() {
  return (
    <Routes>
      <Route exact path='/m' element={<Navigate to='/m/home' />} />
      <Route exact path='/' element={<Navigate to='/home' />} />
      <Route path='/m/home' element={<BottomBar />}/>
      <Route path='/m/shop' element={<BottomBar />}/>
      <Route path='/m/user' element={<BottomBar />}/>
    </Routes>
  );
}

export default App;
