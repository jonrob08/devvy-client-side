import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import AppProvider from "./ContextApi/AppContext";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "./theme";
import Topbar from "./views/global/Topbar";
import Sidebar from "./views/global/Sidebar";
import Dashboard from "./views/dashboard";
import Team from "./views/team";
import Contacts from "./views/contacts";
import Invoices from "./views/invoices";
import Form from "./views/form";
import Calendar from "./views/calendar";
import FAQ from "./views/faq";
import Bar from "./views/bar";
import Pie from "./views/pie";
import Line from "./views/line";
import Geography from "./views/geography";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";
import FindFriends from "./views/findFriends";
import Social from "./views/social-home";
import Login from "./views/login";
import Profile from "./views/profile";
import Groups from "./components/Groups/Groups";
import Main from "./views/main";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const colors = tokens(theme.palette.mode);

  return (
    <AppProvider>
      <BrowserRouter>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app container justify-content-center align-items-center">
              <main className="login">
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<Main />} />
                </Routes>
              </main>
              <Sidebar isSidebar={isSidebar} />

              <main className="content container justify-content-center align-items-center">
              <Topbar setIsSidebar={setIsSidebar} className="Visibility"/>
                  <Box
                  sx={{
                    background: `${colors.primary[700]} !important`,
                    boxShadow: "0 3px 25px rgb(0, 0, 0, 0.5)",
                    borderRadius: "20px",
                    padding: "1.5rem",
                  }}
                >

                  <Routes>
                    {/* <Route element={<ProtectedRoute />} /> */}
                    {/* <ProtectedRoute path="/" element={<Dashboard/>} /> */}
                    <Route path="/dashboard" element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>} />
                    <Route
                      path="/social-home"
                      element={
                        <ProtectedRoute>
                          <Social />
                        </ProtectedRoute>
                      }
                    />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/profile/:id" element={<Profile />} />
                    <Route path="/friends" element={<FindFriends />} />
                    <Route
                      path="/groups"
                      element={
                        <ProtectedRoute>
                          <Groups />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/team"
                      element={
                        <ProtectedRoute>
                          <Team />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/contacts"
                      element={
                        <ProtectedRoute>
                          <Contacts />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/invoices"
                      element={
                        <ProtectedRoute>
                          <Invoices />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/form"
                      element={
                        <ProtectedRoute>
                          <Form />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/calendar"
                      element={
                        <ProtectedRoute>
                          <Calendar />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/faq"
                      element={
                        <ProtectedRoute>
                          <FAQ />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/bar"
                      element={
                        <ProtectedRoute>
                          <Bar />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/pie"
                      element={
                        <ProtectedRoute>
                          <Pie />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/line"
                      element={
                        <ProtectedRoute>
                          <Line />
                        </ProtectedRoute>
                      }
                    />
                    <Route path="/geography" element={
                    <ProtectedRoute>
                      <Geography />
                    </ProtectedRoute>
                    } 
                    />
                  </Routes>
                </Box>
              </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
