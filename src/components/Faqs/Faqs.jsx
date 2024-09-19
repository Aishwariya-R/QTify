import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Faqs.module.css";

const Faqs = () => {
  return (
    <div className={styles.faqQuestions}>
      <h1 className={styles.faqTitle}>FAQs</h1>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className={styles.faqAccordionSummary}
        >
          <Typography>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.faqAccordionDetails}>
          <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className={styles.faqAccordionSummary}
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.faqAccordionDetails}>
          <Typography>
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className={styles.faqAccordionSummary}
        >
          <Typography>How Can I share my feedback?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.faqAccordionDetails}>
          <Typography>
          On the top-right you will see button name 'Give Feedback'. Click on it and a form will appear on screen. Please fill that form and submit it, and your feedback will be shared with us.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Faqs;
