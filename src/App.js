import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './Auth';
import Cars from './Pages/Cars';

function App() {
  return (
    < >
    <Routes>
      <Route path='/' element={<Auth/>}/>
      <Route path='/cars' element={<Cars/>}/>
    </Routes>

    </>
  );
}

export default App;
