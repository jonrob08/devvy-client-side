import { useState, useContext, useEffect } from "react";
import axios from 'axios';
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AppContext } from "../../ContextApi/AppContext";
import Job from "../../components/Job";

// MUI Icons
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const CurrentJobs = () => {
    // for user info
    const { UserGState, dispatchUser } = useContext(AppContext)
    const navigate = useNavigate();
    //logout function
    console.log('USERINFO:', UserGState.info);
    const Logout = () => {
        dispatchUser({ type: "LOGOUT" })
        navigate('/login');
    }

    const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL
    const [job, setJob] = useState([])
    // const config = {
    //     headers: {
    //         Authorization:`Bearer ${localStorage.getItem('AccessToken')}`,
    //         Accept: 'application/json;charset=UTF-8',
    //     }
    // };
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    // useEffect(() => {
    //     axios.get(`${REACT_APP_SERVER_URL}/api/v1/job`, config)
    //         .then(response => {
    //             setJob(response.data.jobs)
    //             console.log("This is an array of jobs>>>>", job)
    //         })
    // }, [])

    const renderJobs = () => {
        let jobsArr = job.map((j, idx) => <p>{j.title}</p>)
        console.log("JOBS:", jobsArr)
        return jobsArr
    }

    return <Box m="20px">
        <Header title="Current Jobs" subtitle="These are you current open jobs" />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                <Typography variant='h5'>
                    Job Title
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='h6'>
                    Description
                </Typography>
                <Typography mb="20px">
                    Description goes here, lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, porro officia, adipisci, laborum incidunt sit quas iure quis ab accusamus quos. Cumque ratione totam ipsum exercitationem excepturi libero iste aliquam.
                </Typography>
                <Typography variant='h6' mb="10px">
                    Tasks
                </Typography>
                <Job />
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                <Typography variant='h5'>
                    Job Title
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='h6'>
                    Description
                </Typography>
                <Typography mb="20px">
                    Description goes here, lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, porro officia, adipisci, laborum incidunt sit quas iure quis ab accusamus quos. Cumque ratione totam ipsum exercitationem excepturi libero iste aliquam.
                </Typography>
                <Typography variant='h6' mb="10px">
                    Tasks
                </Typography>
                <Job />
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                <Typography variant='h5'>
                    Job Title
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='h6'>
                    Description
                </Typography>
                <Typography mb="20px">
                    Description goes here, lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, porro officia, adipisci, laborum incidunt sit quas iure quis ab accusamus quos. Cumque ratione totam ipsum exercitationem excepturi libero iste aliquam.
                </Typography>
                <Typography variant='h6' mb="10px">
                    Tasks
                </Typography>
                <Job />
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                <Typography variant='h5'>
                    Job Title
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='h6'>
                    Description
                </Typography>
                <Typography mb="20px">
                    Description goes here, lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, porro officia, adipisci, laborum incidunt sit quas iure quis ab accusamus quos. Cumque ratione totam ipsum exercitationem excepturi libero iste aliquam.
                </Typography>
                <Typography variant='h6' mb="10px">
                    Tasks
                </Typography>
                <Job />
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                <Typography variant='h5'>
                    Job Title
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='h6'>
                    Description
                </Typography>
                <Typography mb="20px">
                    Description goes here, lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, porro officia, adipisci, laborum incidunt sit quas iure quis ab accusamus quos. Cumque ratione totam ipsum exercitationem excepturi libero iste aliquam.
                </Typography>
                <Typography variant='h6' mb="10px">
                    Tasks
                </Typography>
                <Job />
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                <Typography variant='h5'>
                    Job Title
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='h6'>
                    Description
                </Typography>
                <Typography mb="20px">
                    Description goes here, lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, porro officia, adipisci, laborum incidunt sit quas iure quis ab accusamus quos. Cumque ratione totam ipsum exercitationem excepturi libero iste aliquam.
                </Typography>
                <Typography variant='h6' mb="10px">
                    Tasks
                </Typography>
                <Job />
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                <Typography variant='h5'>
                    Job Title
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='h6'>
                    Description
                </Typography>
                <Typography mb="20px">
                    Description goes here, lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, porro officia, adipisci, laborum incidunt sit quas iure quis ab accusamus quos. Cumque ratione totam ipsum exercitationem excepturi libero iste aliquam.
                </Typography>
                <Typography variant='h6' mb="10px">
                    Tasks
                </Typography>
                <Job />
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                <Typography variant='h5'>
                    Job Title
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='h6'>
                    Description
                </Typography>
                <Typography mb="20px">
                    Description goes here, lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, porro officia, adipisci, laborum incidunt sit quas iure quis ab accusamus quos. Cumque ratione totam ipsum exercitationem excepturi libero iste aliquam.
                </Typography>
                <Typography variant='h6' mb="10px">
                    Tasks
                </Typography>
                <Job />
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                <Typography variant='h5'>
                    Job Title
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='h6'>
                    Description
                </Typography>
                <Typography mb="20px">
                    Description goes here, lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, porro officia, adipisci, laborum incidunt sit quas iure quis ab accusamus quos. Cumque ratione totam ipsum exercitationem excepturi libero iste aliquam.
                </Typography>
                <Typography variant='h6' mb="10px">
                    Tasks
                </Typography>
                <Job />
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                <Typography variant='h5'>
                    Job Title
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='h6'>
                    Description
                </Typography>
                <Typography mb="20px">
                    Description goes here, lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, porro officia, adipisci, laborum incidunt sit quas iure quis ab accusamus quos. Cumque ratione totam ipsum exercitationem excepturi libero iste aliquam.
                </Typography>
                <Typography variant='h6' mb="10px">
                    Tasks
                </Typography>
                <Job />
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                <Typography variant='h5'>
                    Job Title
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='h6'>
                    Description
                </Typography>
                <Typography mb="20px">
                    Description goes here, lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, porro officia, adipisci, laborum incidunt sit quas iure quis ab accusamus quos. Cumque ratione totam ipsum exercitationem excepturi libero iste aliquam.
                </Typography>
                <Typography variant='h6' mb="10px">
                    Tasks
                </Typography>
                <Job />
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                <Typography variant='h5'>
                    Job Title
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='h6'>
                    Description
                </Typography>
                <Typography mb="20px">
                    Description goes here, lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, porro officia, adipisci, laborum incidunt sit quas iure quis ab accusamus quos. Cumque ratione totam ipsum exercitationem excepturi libero iste aliquam.
                </Typography>
                <Typography variant='h6' mb="10px">
                    Tasks
                </Typography>
                <Job />
            </AccordionDetails>
        </Accordion>

    </Box>
}

export default CurrentJobs;