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
  const { name, slots = {}, onExpand } = props;
  const { setNodeRef, isOver } = useDroppable({ id: name });
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (event, isExpanded) => {
    setExpanded(isExpanded);
    if (isExpanded && typeof onExpand === "function") {
      onExpand(name); // Call parent's getCarSlots(name)
    }
  };

  return (
    <Stack
      ref={setNodeRef}
      sx={{
        width: "100%",
        pointerEvents: "auto",
        overflow: "visible",
        minHeight: 120,
      }}
    >
      <Accordion expanded={expanded} onChange={handleChange} sx={{ marginTop: "30px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1-content'
          id='panel1-header'
          style={{
            fontFamily: "inherit",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          {name}
        </AccordionSummary>

        <AccordionDetails sx={{ px: 0 }}>
          <Box
            sx={{
              width: "100%",
              border: isOver ? "2px dashed #ccc" : "none",
              transition: "border 0.2s ease-in-out",
              minHeight: 100,
            }}
          >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {(slots[name] || []).map((order, index) => (
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
