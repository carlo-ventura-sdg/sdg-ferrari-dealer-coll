import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FerrariOrderCard } from "../FerrariOrderCard";
import { Grid, Stack } from "@mui/material";

const orders = [
  {
    id: "7170000696",
    name: "Cristiano Ronaldo",
  },
  {
    id: "7170000696",
    name: "Cristiano Ronaldo",
  },
  {
    id: "7170000696",
    name: "Cristiano Ronaldo",
  },
  {
    id: "7170000696",
    name: "Cristiano Ronaldo",
  },
  {
    id: "7170000696",
    name: "Cristiano Ronaldo",
  },
  {
    id: "7170000696",
    name: "Cristiano Ronaldo",
  },
  {
    id: "7170000696",
    name: "Cristiano Ronaldo",
  },

];

export const CarModelAccordion = (props) => {
  return (
    <Accordion defaultExpanded sx={{ marginTop: "30px" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1-content'
        id='panel1-header'
        style={{ fontFamily: "inherit", fontWeight: "bold" }}>
        {props.name}
      </AccordionSummary>
      <AccordionDetails>
        <Stack sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {orders.map((order, index) => (
              <Grid item size={6}>
                <FerrariOrderCard id={order.id} name={order.name} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};
