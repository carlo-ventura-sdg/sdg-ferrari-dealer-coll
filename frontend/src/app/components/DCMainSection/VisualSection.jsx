"use client";
import { Stack } from "@mui/material";
import { CarModelSideSection } from "./CarModelSideSection";
import { DragDropSection } from "./DragDropSection";

export const VisualSection = (props) => {
  return (
    <Stack direction='row'>
      {/* <CarModelSideSection></CarModelSideSection> */}
      <DragDropSection  activeItem={props.activeItem} months={props.months} getSlotKey={props.getSlotKey} slots={props.slots}></DragDropSection>
    </Stack>
  );
};
