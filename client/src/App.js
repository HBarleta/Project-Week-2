
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import Locations from './components/Locations';
import Menu from './components/Menu';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/About Us' element={<AboutUs/>}/>
        <Route path='/Locations' element={<Locations/>}/>
        <Route path='/Menu' element={<Menu/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
