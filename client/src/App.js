
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';

import Locations from './components/Locations';
import Menu from './components/Menu';
import Login from './components/Login';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      {/* navbar will always be present */}
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        {/* root is landing page */}
        <Route path='/admin' element={<Login></Login>}/>
        {/* admin login page */}
        <Route path='/Location' element={<Locations/>}/>
        <Route path='/Menu' element={<Menu/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
