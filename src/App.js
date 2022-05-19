import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Courseentry from './component/Courseentry';
import Courseview from './component/Courseview';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' exact element={<Courseentry/>}/>
     <Route path='/courseview' exact element={<Courseview/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
