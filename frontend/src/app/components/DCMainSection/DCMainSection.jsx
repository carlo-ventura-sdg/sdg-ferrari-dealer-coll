"use client";
import { Paper, Stack } from "@mui/material";
import { DCMainTabs } from "./DCMainTabs";

export const DCMainSection = (props) => {
  return (
    <Stack direction='row'>
      
      <DCMainTabs  activeItem={props.activeItem} months={props.months} getSlotKey={props.getSlotKey} slots={props.slots}></DCMainTabs>
    </Stack>
  );
};
