"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FerrariOrderCard } from "../FerrariOrderCard";
import { Grid, Stack, Box } from "@mui/material";
import { useDroppable } from "@dnd-kit/core";

export const CarModelAccordion = (props) => {
  const { setNodeRef, isOver } = useDroppable({
    id: props.name, // ← unique ID for droppable area
  });

  return (
    <Stack ref={setNodeRef}
    sx={{
      width: "100%",
      // p: 1,
      pointerEvents: "auto",
      overflow: "visible",
      // transition: "border 0.2s ease-in-out",
      minHeight: 120,
    }}>
      <Accordion defaultExpanded sx={{ marginTop: "30px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1-content'
          id='panel1-header'
          style={{ fontFamily: "inherit", fontWeight: "bold" }}
        >
          {props.name}
        </AccordionSummary>

        <AccordionDetails sx={{px:0}}>
          <Box
            ref={setNodeRef}
            sx={{
              width: "100%",
              // p: 1,
              border: isOver ? "2px dashed #ccc" : "none",
              transition: "border 0.2s ease-in-out",
              minHeight: 100,
            }}
          >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {(props.slots[props.name] || []).map((order, index) => (
                <Grid item key={index} xs={6}>
                  <FerrariOrderCard item={order} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};
