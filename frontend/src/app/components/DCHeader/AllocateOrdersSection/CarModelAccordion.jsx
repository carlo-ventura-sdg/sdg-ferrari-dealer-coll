"use client";
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
    id: "o1",
    order: "7170000696",
    name: "Cristiano Ronaldo",
    status: "Delivered",
  },
  {
    id: "o2",
    order: "7170000696",
    name: "Cristiano Ronaldo",
    status: "Pending Approval",
  },
  {
    id: "o5",
    order: "7170000696",
    name: "Cristiano Ronaldo",
    status: "Order Call",
  },
  {
    id: "o3",
    order: "7170000696",
    name: "Cristiano Ronaldo",
    status: "Delivered",
  },
  {
    id: "o4",
    order: "7170000696",
    name: "Cristiano Ronaldo",
    status: "Pending Approval",
  },
  {
    id: "o6",
    order: "7170000696",
    name: "Cristiano Ronaldo",
    status: "Order Call",
  },

];

export const CarModelAccordion = (props) => {
  return (
    <Accordion defaultExpanded sx={{ marginTop: "30px" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1-content'
        order='panel1-header'
        style={{ fontFamily: "inherit", fontWeight: "bold" }}>
        {props.name}
      </AccordionSummary>
      <AccordionDetails>
        <Stack sx={{ worderth: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {orders.map((order, index) => (
              <Grid item key={index} size={6}>
                <FerrariOrderCard item={orders}/>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};
