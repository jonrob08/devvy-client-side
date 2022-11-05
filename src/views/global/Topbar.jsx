import { Box, IconButton, useTheme, Typography } from "@mui/material"
import { useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import { ColorModeContext, tokens } from "../../theme"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import SearchIcon from "@mui/icons-material/Search"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InputBase from "@mui/material/InputBase"
import { AppContext } from "../../ContextApi/AppContext"

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
    const {UserGState , dispatchUser} = useContext(AppContext)
    const navigate = useNavigate();
    //logout function
    const Logout = () => {
        dispatchUser({type:"LOGOUT"})
        navigate('/login');
    }

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
          {/* SEARCH BAR */}
          <Box
            display="flex"
            backgroundColor={colors.primary[400]}
            borderRadius="3px"
          >
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
          </Box>
    
          {/* ICONS */}
          <Box display="flex">
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
            <IconButton>
              <NotificationsOutlinedIcon />
            </IconButton>
            <Link to='/profile'>
              <IconButton>
                <PersonOutlinedIcon />
                <Typography variant="subtitle1">Profile</Typography>
              </IconButton>
            </Link>
            <IconButton onClick={Logout}>
              <ExitToAppIcon />
              <Typography variant="subtitle1">Logout</Typography>
            </IconButton>
          </Box>
        </Box>
      );
}

export default Topbar