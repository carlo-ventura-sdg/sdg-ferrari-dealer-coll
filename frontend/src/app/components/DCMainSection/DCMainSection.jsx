"use client";
import { Paper, Stack } from "@mui/material";
import { DCMainTabs } from "./DCMainTabs";

export const DCMainSection = (props) => {
  return (
    <Stack direction='row'>
      
      <DCMainTabs></DCMainTabs>
    </Stack>
  );
};
