
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import NavBar from './components/NavBar';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Routes>
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
