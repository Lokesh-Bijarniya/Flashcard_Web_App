import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Accordionn({summary, details}) {
  return (
    <div className="faq-content my-8 w-full lg:w-3/4">
      <Accordion className="border border-blue-500 ">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='font-semibold'
        >
          {summary}
        </AccordionSummary>
        <AccordionDetails>{details}</AccordionDetails>
      </Accordion>
    </div>
  );
}
