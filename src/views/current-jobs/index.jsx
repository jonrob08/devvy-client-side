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

const CurrentJobs = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { JobGState, dispatchJob } = useContext(AppContext);
  const [openDialog, setOpenDialog] = useState(false);

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
              <Accordion defaultExpanded onClick={() => handleJobData(job._id)}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography color={colors.greenAccent[500]} variant="h5">
                    {job.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{job.description}</Typography>
                </AccordionDetails>
              </Accordion>
              <Dialog
                sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
                maxWidth="xs"
                open={openDialog}
              >
                <DialogTitle>{job.title}</DialogTitle>
                <DialogContent dividers>
                  {JobGState.jobDetail?.tasks.map((task) => (
                    <>
                      <Typography>{task.title}</Typography>
                      {task.items.map((task) => (
                        <Typography>{task.title}</Typography>
                      ))}
                    </>
                  ))}
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setOpenDialog(false)}>Ok</Button>
                </DialogActions>
              </Dialog>
            </>
          );
        })}
    </Box>
  );
};

export default CurrentJobs;
