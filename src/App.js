import './App.css';
import Profile from './components/Profile';
// import About from './components/About';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
// import Topnav from './components/Topnav';
import Main from './components/Main';

import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
 } from 'react-router-dom';

function App() {
  return (
      <Router>

        
        {/* <Topnav /> */}

        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Router>


  );
}

export default App;
