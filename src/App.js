import './App.css';
import DashboardBody from './components/DashboardBody';
import Header from './components/Header';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <div className="App">
      <Header />

      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <DashboardBody />
        </div>
      </div>
    </div>
  );
}

export default App;
