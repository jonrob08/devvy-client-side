import { ColorModeContext, useMode} from './theme';
import { CssBaseLine, ThemeProvider } from '@mui/material';
import DashboardBody from './components/DashboardBody';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [theme, colorMode] = useMode();
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
