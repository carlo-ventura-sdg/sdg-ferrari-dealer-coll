import { Stack, SwipeableDrawer } from "@mui/material";
import React from "react";
import { DragDropModelList } from "./DragDropModelsList";

export const DragDropSection = (props) => {
  return (
    <Stack width='100%'>
      <DragDropModelList
        months={props.months}
        activeItem={props.activeItem}
        slots={props.slots}
        ></DragDropModelList>
    </Stack>
  );
};
