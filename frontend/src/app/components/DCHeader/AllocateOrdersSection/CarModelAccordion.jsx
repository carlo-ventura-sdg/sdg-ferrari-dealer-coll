"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FerrariOrderCard } from "../FerrariOrderCard";
import { Grid, Stack } from "@mui/material";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { DragDropSlot } from "../../DCMainSection/DragDropSlot";
const base = {};
const orders = (base["Roma Spider"] = [
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
]);

base["SF90 XX Spider"] = [
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
    status: "Order Call",
  },
  {
    id: "o9",
    order: "7170000696",
    name: "Cristiano Ronaldo",
    status: "Pending Approval",
  },
];

base["12Cilindri"] = [
  {
    id: "o7",
    order: "7170000696",
    name: "Cristiano Ronaldo",
    status: "Delivered",
  },
  {
    id: "o8",
    order: "7170000696",
    name: "Cristiano Ronaldo",
    status: "Pending Approval",
  },
];

base["296 GTS"] = [
  {
    id: "o6",
    order: "7170000696",
    name: "Cristiano Ronaldo",
    status: "Order Call",
  },
];

export const CarModelAccordion = (props) => {
  return (
    <>
      <Accordion defaultExpanded sx={{ marginTop: "30px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1-content'
          order='panel1-header'
          style={{ fontFamily: "inherit", fontWeight: "bold" }}>
          {props.name}
        </AccordionSummary>
        <AccordionDetails>
          <Stack sx={{ width: "300px" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {(base[props.name] || []).map((order, index) => (
                <Grid item key={index} xs={6}>
                  <FerrariOrderCard item={order} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </AccordionDetails>
      </Accordion>
      {/* <DragOverlay>
        {props.activeItem ? <FerrariOrderCard item={props.activeItem} /> : null}
      </DragOverlay> */}
    </>
  );
};
