import { useEffect, useContext, useState } from "react";
import {
  Box,
  useTheme,
  Typography,
  Button,
  AccordionActions,
} from "@mui/material";
import Header from "../../components/Header/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { getAllJobs, deleteJobTask, deleteJobTaskItem } from "../../API/Job";
import { AppContext } from "../../ContextApi/AppContext";
import AddJobModel from "./AddJobModel";
import AddTaskModel from "./AddTaskModel";
import AddItemModel from "./AddItemModel";

const CurrentJobs = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { JobGState, dispatchJob } = useContext(AppContext);
  const [openJobModel, setOpenJobModel] = useState(false);
  const [openTaskModel, setOpenTaskModel] = useState(false);
  const [openItemModel, setOpenItemModel] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await getAllJobs();
      dispatchJob({ type: "GET_ALL_JOBS", payload: result.data.jobs });
    })();
  }, []);

  const handleTaskModel = (open, jobId) => {
    setOpenTaskModel(open);
    setSelectedJobId(jobId);
  };

  const handleItemModel = (open, jobId, taskId) => {
    setOpenItemModel(open);
    setSelectedJobId(jobId);
    setSelectedTaskId(taskId);
  };

  const renderJobTaskItems = (task) => {
    return (
      <>
        {!!task.items?.length &&
          task.items.map((item) => {
            return (
              <Accordion defaultExpanded key={item._id}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography color={colors.greenAccent[500]} variant="h5">
                    {item.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.description}</Typography>
                </AccordionDetails>
                <AccordionActions>
                <Button
                    variant="contained"
                    // onClick={() => handleItemModel(true, task.job, task._id)}
                  >
                    Update Item
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => deleteJobTaskItem(task.job, item.task, item._id, )}
                  >
                    Delete Item
                  </Button>
                </AccordionActions>
              </Accordion>
            );
          })}
      </>
    );
  };

  const renderJobTasks = (tasks) => {
    return (
      <>
        {!!tasks?.length &&
          tasks.map((task) => {
            return (
              <Accordion defaultExpanded key={task._id}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography color={colors.greenAccent[500]} variant="h5">
                    {task.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{task.description}</Typography>
                  {renderJobTaskItems(task)}
                </AccordionDetails>
                <AccordionActions>
                <Button
                    variant="contained"
                    // onClick={() => handleTaskModel(true, job._id)}
                  >
                    Update Task
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => deleteJobTask(task.job, task._id)}
                  >
                    Delete Task
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => handleItemModel(true, task.job, task._id)}
                  >
                    Create Item
                  </Button>
                </AccordionActions>
              </Accordion>
            );
          })}
      </>
    );
  };

  return (
    <Box m="20px">
      <Header title="Current Jobs" subtitle="List of Active Jobs" />
      <Button variant="contained" onClick={() => setOpenJobModel(true)}>
        Create Job
      </Button>
      {!!JobGState.jobs?.length &&
        JobGState.jobs.map((job) => {
          return (
            <>
              <Accordion defaultExpanded key={job._id}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography color={colors.greenAccent[500]} variant="h5">
                    {job.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{job.description}</Typography>
                  {renderJobTasks(job.tasks)}
                </AccordionDetails>
                <AccordionActions>
                  <Button
                    variant="contained"
                    onClick={() => handleTaskModel(true, job._id)}
                  >
                    Create Task
                  </Button>
                </AccordionActions>
              </Accordion>
              <AddJobModel
                open={openJobModel}
                onClose={() => setOpenJobModel(false)}
              />
              <AddTaskModel
                open={openTaskModel}
                jobId={selectedJobId}
                onClose={() => handleTaskModel(false, null)}
              />
              <AddItemModel
                open={openItemModel}
                jobId={selectedJobId}
                taskId={selectedTaskId}
                onClose={() => handleItemModel(false, null, null)}
              />
            </>
          );
        })}
    </Box>
  );
};

export default CurrentJobs;
