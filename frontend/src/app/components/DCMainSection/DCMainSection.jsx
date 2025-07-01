"use client";
import { Paper, Stack } from "@mui/material";
import { CarModelSideSection } from "./CarModelSideSection";
import { DCMainTabs } from "./DCMainTabs";

export const DCMainSection = (props) => {
  return (
    <Stack direction='row'>
      <CarModelSideSection></CarModelSideSection>
      <DCMainTabs></DCMainTabs>
    </Stack>
  );
};
