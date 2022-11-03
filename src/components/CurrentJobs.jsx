import { Box, Button, IconButton, Typography, useTheme, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { tokens } from "../theme";
import { React, useEffect, useState } from 'react';
import axios from 'axios';

// MUI Icons
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const CurrentJobs = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL
  const [job, setJob] = useState([])
  const config = {
    headers:{
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzYzM2M4Nzc3ZjljNmNkYjIxNGRhNGIiLCJpYXQiOjE2Njc0NTEyNzUsImV4cCI6MTY2NzUzNzY3NX0.Vl2cF_Y7683TOnn7-ZVAUPJf1w4YTR_1hHJlgz4BOqo'
    }
  };

  useEffect(() => {
    axios.get(`${REACT_APP_SERVER_URL}/api/v1/job`, config)
      .then(response => {
        setJob(response.data.jobs)
        console.log("This is an array of jobs>>>>", job)
      })
  }, [])

  const renderJobs = () => {
    console.log("We made it!")
    let jobsArr = job.map((j, idx) => <p>{j.title}</p>)
    console.log("THIS IS IT>>>", jobsArr)
    return jobsArr
  }

  return (
    <Box>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Job Title
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, porro officia, adipisci, laborum incidunt sit quas iure quis ab accusamus quos. Cumque ratione totam ipsum exercitationem excepturi libero iste aliquam.
            {renderJobs()}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
};

export default CurrentJobs;