"use client";
import { Stack } from "@mui/material";
import { DragDropSection } from "./DragDropSection/DragDropSection";

export const VisualSection = (props) => {
  return (
    <Stack direction='row' justifyContent='center' >
      <DragDropSection
        activeItem={props.activeItem}
        months={props.months}
        slots={props.slots}
        ></DragDropSection>
    </Stack>
  );
};
