"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FerrariOrderCard } from "../FerrariOrderCard";
import { Grid, Stack, Box } from "@mui/material";
import { useDroppable } from "@dnd-kit/core";
import { useSelector } from "react-redux";

export const CarModelAccordion = (props) => {
  const { name: modelName, slots, onExpand } = props;
  const { setNodeRef, isOver } = useDroppable({ id: modelName });
  const [expanded, setExpanded] = React.useState(false);
  const { currentTab } = useSelector((state => state.anagraficaDso));
  const handleChange = (event, isExpanded) => {
    setExpanded(isExpanded);
    if (isExpanded && typeof onExpand === "function") {
      onExpand(modelName);
    }
  };

  let allOrders = [];

if (currentTab === "RD") {
  allOrders = React.useMemo(() => {
    const flat = [];
    Object.values(slots).forEach((monthsObj) => {
      Object.values(monthsObj || {}).forEach((orders) => {
        if (Array.isArray(orders)) {
          flat.push(...orders);
        }
      });
    });
    return flat;
  }, [slots]);
}


  return (
    <Stack
      ref={setNodeRef}
      sx={{
        width: "100%",
        pointerEvents: "auto",
        overflow: "visible",
        minHeight: 120,
      }}>
      <Accordion
        expanded={expanded}
        onChange={handleChange}
        sx={{ marginTop: "30px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1-content'
          id='panel1-header'
          style={{
            fontFamily: "inherit",
            fontWeight: "bold",
            fontSize: "18px",
          }}>
          {modelName}
        </AccordionSummary>

        <AccordionDetails sx={{ px: 0 }}>
          <Box
            sx={{
              width: "100%",
              border: isOver ? "2px dashed #ccc" : "none",
              transition: "border 0.2s ease-in-out",
              minHeight: 100,
            }}>
            <Grid container spacing={2}>
              {currentTab === "RD"
                ? allOrders.map((order, index) => (
                    <Grid item xs={12} sm={6} md={4} key={order?.id || index}>
                      <FerrariOrderCard id={order?.id} item={order} />
                    </Grid>
                  ))
                : (slots[modelName] || []).map((order, index) => (
                    <Grid item key={index} xs={6}>
                      <FerrariOrderCard id={order?.id} item={order} />
                    </Grid>
                  ))}
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};
