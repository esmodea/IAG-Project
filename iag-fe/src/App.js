import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import BottomBar from './application/mobile/components/common/BottomBarMobile';

function App() {
  return (
    <Routes>
      <Route path='/m/home' element={<BottomBar />}/>
      <Route exact path='/' element={<Navigate to='/home' />} />
    </Routes>
  );
}

export default App;
