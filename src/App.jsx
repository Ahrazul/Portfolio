import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Experiences from './pages/experience/experience';
import Projects from './pages/projects/projects';
import Menu from './Menu/menu';
import About from './pages/about/about';

function App () {
  return (
    <div className='app-container'>
      <BrowserRouter>
      <Routes>
        <Route index element={<About/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/experience" element={<Experiences/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/navbar" element={<Menu/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;