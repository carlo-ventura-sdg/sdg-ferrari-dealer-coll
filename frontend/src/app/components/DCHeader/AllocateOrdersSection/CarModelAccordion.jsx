import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FerrariOrderCard } from '../FerrariOrderCard';

const orders = [
    {
        id: '7170000696',
        name: 'Cristiano Ronaldo',
    },
    {
        id: '7170000696',
        name: 'Cristiano Ronaldo',
    },
    {
        id: '7170000696',
        name: 'Cristiano Ronaldo',
    },
    {
        id: '7170000696',
        name: 'Cristiano Ronaldo',
    },
    {
        id: '7170000696',
        name: 'Cristiano Ronaldo',
    },
    {
        id: '7170000696',
        name: 'Cristiano Ronaldo',
    },
    {
        id: '7170000696',
        name: 'Cristiano Ronaldo',
    },
    {
        id: '7170000696',
        name: 'Cristiano Ronaldo',
    },
]

export const CarModelAccordion = (props) => {
    
    return (
          <Accordion defaultExpanded sx={{marginTop:'30px', }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              style={{fontFamily:'inherit', fontWeight:'bold', }}
            >
              {props.name}
            </AccordionSummary>
            <AccordionDetails>
                {orders.map((order, index) => (<FerrariOrderCard id={order.id} name={order.name}/>))}
              
            </AccordionDetails>
          </Accordion>
    )
};