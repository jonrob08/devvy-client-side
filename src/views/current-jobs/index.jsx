import { useEffect, useContext, useState } from "react";
import {
  Box,
  useTheme,
  Typography,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
} from "@mui/material";
import Header from "../../components/Header/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { getAllJobs, getOneJob } from "../../API/Job";
import { AppContext } from "../../ContextApi/AppContext";
import { Handshake } from "@mui/icons-material";
import Job from "../../components/Job";
import React from 'react';

// MUI Icons
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

const CurrentJobs = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { JobGState, dispatchJob } = useContext(AppContext);
  const [openDialog, setOpenDialog] = useState(false);
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  useEffect(() => {
    (async () => {
      const result = await getAllJobs();
      dispatchJob({ type: "GET_ALL_JOBS", payload: result.data.jobs });
    })();
  }, []);

  const handleJobData = async (jobId) => {
    const result = await getOneJob(jobId);
    dispatchJob({ type: "GET_ONE_JOB", payload: result.data });
    setOpenDialog(true);
  };

  return (
    <Box m="20px">
      <Header title="Current Jobs" subtitle="List of Active Jobs" />
      {!!JobGState.jobs?.length &&
        JobGState.jobs.map((job) => {
          return (
            <>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                  <Typography variant='h5'>
                    {job.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant='h6'>
                    Description
                  </Typography>
                  <Typography mb="20px">
                    {job.description}
                  </Typography>
                  <Typography variant='h6' mb="10px">
                    Tasks
                  </Typography>
                  <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {JobGState.jobDetail?.tasks.map((task) => {
                      const labelId = `checkbox-list-label-${task.title}`;

                      return (
                        <ListItem
                          key={task.title}
                          secondaryAction={
                            <IconButton edge="end" aria-label="comments">
                              <CommentIcon />
                            </IconButton>
                          }
                          disablePadding
                        >
                          <ListItemButton role={undefined} onClick={handleToggle(task.title)} dense>
                            <ListItemIcon>
                              <Checkbox
                                edge="start"
                                checked={checked.indexOf(task.title) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                              />
                            </ListItemIcon>
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </AccordionDetails>
              </Accordion>
            </>
          );
        })}
    </Box>
  );
};

export default CurrentJobs;
