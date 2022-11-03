import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ColorModeContext, useMode } from './theme'
import AppProvider from "./ContextApi/AppContext";
import { CssBaseline, ThemeProvider } from '@mui/material'
import Topbar from './views/global/Topbar';
import Sidebar from './views/global/Sidebar';
import Dashboard from "./views/dashboard";
import Team from "./views/team";
import Contacts from "./views/contacts";
import Invoices from "./views/invoices";
import Form from "./views/form";
import Calendar from "./views/calendar";
import FAQ from "./views/faq";
import Bar from "./views/bar";
import Pie from "./views/pie";
import Line from "./views/line"
import Geography from "./views/geography";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";
import FindFriends from "./views/findFriends";
import Home from "./views/social-home";
import Login from "./views/login";
import Profile from "./views/profile";
import Groups from './components/Groups/Groups'

function App() {
  const [ theme, colorMode ] = useMode()
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <AppProvider>
      <BrowserRouter>
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
      <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
               <Route path='/login' element={<Login />} />
              <Route element={<ProtectedRoute />}>
              <Route path='/social-home' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/profile/:id' element={<Profile />} />
            <Route path='/friends' element={<FindFriends />} />
            <Route path = '/groups' element = {<Groups />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
              </Route>
            </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  </BrowserRouter>
    </AppProvider>
  );
}

export default App;
