"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, Stack, Box } from "@mui/material";
import { useDroppable } from "@dnd-kit/core";
import { CarModelCard } from "../CarModelCard";
import { DragDropModelSection } from "./DragDropModelSection";
import { useDispatch, useSelector } from "react-redux";
import { getCarSlots, getCarSlotsByMonth } from "@/app/redux/reducers/anagrafica-dso-reducer";
import {
  getCarSlotsForDealer,
  getDealers,
} from "@/app/redux/reducers/region-section-reducer";

export const DragDropModelAccordion = (props) => {
  const dispatch = useDispatch();
  const { currentTab } = useSelector((state) => state.anagraficaDso);
  const { setNodeRef, isOver } = useDroppable({
    id: props.index,
  });

  return (
    <Stack
      ref={setNodeRef}
      sx={{
        width: "100%",
        // p: 1,
        pointerEvents: "auto",
        overflow: "visible",
        // transition: "border 0.2s ease-in-out",
        minHeight: 120,
      }}>
      <Accordion
        // sx={{ marginTop: "30px" }}
        onChange={(event, isExpanded) => {
          if (isExpanded && currentTab === "RD") {
            dispatch(getDealers(props.name));
            dispatch(getCarSlotsForDealer(props.name));
          } else if (isExpanded) {
            dispatch(getCarSlots(props.name));
            dispatch(getCarSlotsByMonth(props.name));
            
          }
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1-content'
          id='panel1-header'
          style={{ fontFamily: "inherit", fontWeight: "bold" }}>
          <Stack sx={{ backgroundColor: "white" }}>
            <CarModelCard name={props.name} />
          </Stack>
          {/* {props.name} */}
        </AccordionSummary>

        <AccordionDetails sx={{ px: 0 }}>
          <DragDropModelSection
            selectedModel={props.selectedModel}
            slots={props.slots}
            months={props.months}
            activeItem={props.activeItem}></DragDropModelSection>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};
