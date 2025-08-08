"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FerrariOrderCard } from "../FerrariOrderCard/FerrariOrderCard";
import { Grid, Stack, Box } from "@mui/material";
import { useDroppable } from "@dnd-kit/core";
import { useSelector } from "react-redux";
import { mapStatusToLabel } from "@/app/utils/legend";

export const CarModelAccordion = (props) => {
  const { name: modelName, onExpand, slots } = props;
  const { setNodeRef, isOver } = useDroppable({ id: modelName });
  const [expanded, setExpanded] = React.useState(false);
  // console.log(slots, "Slots in CarModelAccordion");

  const handleChange = (event, isExpanded) => {
    setExpanded(isExpanded);
    if (isExpanded && typeof onExpand === "function") {
      onExpand(modelName);
    }
  };
  
  const allOrders = React.useMemo(() => {
    return Object.values(slots)
      .flatMap((monthsObj) =>
        Object.values(monthsObj || {}).flatMap((orders) =>
          (orders || []).filter(
            (order) =>
              !["Transit", "Delivered"].includes(
                mapStatusToLabel(order.status_id)
              )
          )
        )
      )
      .sort((a, b) => (b.rank ?? 0) - (a.rank ?? 0));
  }, [slots]);
  // const allOrders = React.useMemo(() => {
  //   return Object.values(slots || {})
  //     .flat()
  //     .filter(
  //       (order) =>
  //         !["Transit", "Delivered"].includes(mapStatusToLabel(order.status_id))
  //     )
  //     .sort((a, b) => (b.rank ?? 0) - (a.rank ?? 0));
  // }, [slots, mapStatusToLabel]);

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
              {allOrders.map((order, index) => (
                <Grid item xs={12} sm={6} md={4} key={order?.dso || index}>
                  <FerrariOrderCard id={order?.dso} item={order} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};
