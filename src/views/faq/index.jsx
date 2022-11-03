import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Test Question 1 
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, porro officia, adipisci, laborum incidunt sit quas iure quis ab accusamus quos. Cumque ratione totam ipsum exercitationem excepturi libero iste aliquam.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Test Question 2 
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, porro officia, adipisci, laborum incidunt sit quas iure quis ab accusamus quos. Cumque ratione totam ipsum exercitationem excepturi libero iste aliquam.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Test Question 3
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, porro officia, adipisci, laborum incidunt sit quas iure quis ab accusamus quos. Cumque ratione totam ipsum exercitationem excepturi libero iste aliquam.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Test Question 4 
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, porro officia, adipisci, laborum incidunt sit quas iure quis ab accusamus quos. Cumque ratione totam ipsum exercitationem excepturi libero iste aliquam.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Test Question 5
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, porro officia, adipisci, laborum incidunt sit quas iure quis ab accusamus quos. Cumque ratione totam ipsum exercitationem excepturi libero iste aliquam.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Test Question 6
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, porro officia, adipisci, laborum incidunt sit quas iure quis ab accusamus quos. Cumque ratione totam ipsum exercitationem excepturi libero iste aliquam.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
}

export default FAQ