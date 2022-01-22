
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Hotels from './Pages/Hotels';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotels' element={<Hotels />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
