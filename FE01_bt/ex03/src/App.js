import './App.css';
import Menu from './component/Menu'
import About from './component/About';
import Project from './component/Project';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <div>
      <Router>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Project" element={<Project/>}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;