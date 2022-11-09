/*
* this is the navigational sidebar located on the left of dashboard views 
* 
========================================================================= */ 

import { useState, useContext } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme, List, ListItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import Header from "../../components/Header/Header";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { AppContext } from "../../ContextApi/AppContext";
import { CenterFocusStrong } from "@material-ui/icons";
import { fontWeight } from "@mui/system";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { UserGState } = useContext(AppContext);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[400],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const isAuthenticated = localStorage.getItem('AccessToken');

  // for user info
  const { UserGState, dispatchUser } = useContext(AppContext)
  const navigate = useNavigate();
  //logout function
  console.log('USERINFO:', UserGState.info);
  const Logout = () => {
    dispatchUser({ type: "LOGOUT" })
    navigate('/login');
  }

  return (
    <>
    {
      isAuthenticated &&
    <Box
      sx={{
        margin: "2rem 2rem",
        padding:0,
        textAlign: "center",
        justifyContent: "center",
        verticalAlign: "middle",

        "& .pro-sidebar-inner": {
          background: `${colors.primary[800]} !important`,
          boxShadow: "0 3px 25px rgb(0, 0, 0, 0.5)",
          borderRadius: "20px"
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        // "& .pro-inner-item": {
        //   // padding: "5px 35px 5px 20px !important",
        //   // width: "15em",
        //   border: "1px solid red"
        // },

        "& .pro-menu-item.active": {
          color: `${colors.grey[100]} !important`,
          fontWeight: "900",
          fontFamily: `"Helvetica Neue", sans-serif`,
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}
      sx={{
        paddingLeft: "1rem",
      }}>
        <Menu iconShape="square"
          style={{backgroundColor: `${colors.grey[900]} !important`}}>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{textAlign:"right"}}
          >
            {!isCollapsed && (
              <>
                {/* <Typography variant="h3" color={colors.grey[100]}>
                  ADMINISTRATOR
                </Typography> */}
                <IconButton className="buttonOverride" onClick={() => setIsCollapsed(!isCollapsed)}
>
                  <MenuOutlinedIcon />
                </IconButton>
              </>
            )}
          </MenuItem>

          {/* contains profilepic username and descriptive text */}
          {!isCollapsed && (


            <Box
              sx={{
                margin: "25px",
                padding: "20px",
                // backgroundColor: "rgba(0,0,0,.1)",
                borderRadius: "4px",
              }}>

              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="95px"
                  src={UserGState.info.profile_pic}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                 {UserGState.info.full_name}
                </Typography>
                <Header subtitle="Admin Dashboard" />
              </Box>
            </Box>
          )}

          <Box textAlign={isCollapsed ? "center" : "left"} marginLeft={isCollapsed ? undefined : "10%"} marginBottom="2rem"
            
            // sx={{
            //   "& .pro-inner-item:hover": {
            //     color: `${colors.grey[100]} !important`,
            //     backgroundColor: `${colors.grey[900]} !important`,
            //     width: "80%",

            //     paddingLeft: 0,
            //     borderRadius: "10px"
            //   },
            // }}
            >
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]} 
              sx={{ m: "2rem 0 0 0", fontWeight:"800"}}
            >

              JOBS

            </Typography>

            <Item
              title="Current Jobs"
              to="/current-jobs"
              icon={<WorkOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Team"
              to="/team"
              icon={<DownloadDoneIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Completed Jobs"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pending Jobs"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "2rem 0 0 0" }}
            >
              PAGES
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              // sx={{ m: "15px 0 5px 20px" }}
              sx={{ m: "2rem 0 0 0" }}
            >
              CHARTS
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  }  </>);
};

export default Sidebar;