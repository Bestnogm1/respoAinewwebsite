import React, { useState, useRef } from "react";
import styles from "./Reviews.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { reviewsData } from "./ReviewsData";
function Reviews(props) {
  const [reviews] = useState(reviewsData);

  return (
    <div className={styles.Reviews}>
      <div className={styles.ReviewsHeader}>
        <header>Frequently Asked Questions</header>
      </div>
      <div className={styles.ReviewsContainer}>
        {reviews.map((review) => (
          <div className={styles.review}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography> {review.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{review.description}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
