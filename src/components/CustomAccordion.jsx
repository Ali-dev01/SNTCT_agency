import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

const CustomAccordion = ({ data }) => {
  return (
    <>
      {data.map((accordion, i) => (
        <Accordion
          key={i}
          sx={{
            ...styles.accordionStyles,
            "::before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#3395FF" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              color: "#3E5F82",
              fontWeight: 700,
              fontSize: { xs: "16px", md: "20px" },
            }}
          >
            {accordion.title}
          </AccordionSummary>
          <AccordionDetails
            sx={{ fontSize: { xs: "16px", md: "18px" }, color: "#00336B" }}
          >
            {accordion.details}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
export default CustomAccordion;

const styles = {
  accordionStyles: {
    boxShadow: "none",
    mb: 2,
    borderRadius: "16px !important",
    "& .MuiAccordionSummary-root": {
      padding: "0 24px",
    },
    "& .MuiAccordionDetails-root": {
      padding: "0 24px 24px 24px",
    },
    "& .MuiAccordionSummary-content": {
      margin: "24px 0px",
    },
  },
};
