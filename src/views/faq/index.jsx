import { useEffect, useContext } from "react";
import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { getAllJobs } from "../../API/Job";
import { AppContext } from "../../ContextApi/AppContext";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { JobGState, dispatchJob } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      const result = await getAllJobs();
      dispatchJob({ type: "GET_ALL_JOBS", payload: result.data.jobs });
    })();
  }, []);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      {JobGState.jobs.map((job) => {
        return (
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.greenAccent[500]} variant="h5">
                {job.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{job.description}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default FAQ;
