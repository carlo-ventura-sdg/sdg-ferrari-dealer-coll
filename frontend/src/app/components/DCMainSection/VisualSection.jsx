"use client";
import { Stack } from "@mui/material";
import { CarModelSideSection } from "./CarModelSideSection";
import { DragDropSection } from "./DragDropSection/DragDropSection";

export const VisualSection = (props) => {
  return (
    <Stack direction='row' justifyContent='center' >
      {/* <CarModelSideSection></CarModelSideSection> */}
      <DragDropSection
        activeItem={props.activeItem}
        months={props.months}
        slots={props.slots}
        ></DragDropSection>
    </Stack>
  );
};
