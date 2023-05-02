import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandeMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandeMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Random Text should be here</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandeMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An 2 Important Questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Random Text should be here</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandeMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An 3 Important Questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Random Text should be here</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandeMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An 4 Important Questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Random Text should be here</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandeMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An 5 Important Questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Random Text should be here</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandeMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An 6 Important Questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Random Text should be here</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
