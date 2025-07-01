"use client";

import { Stack } from "@mui/material";
import { DateSelectorFilter } from "./DateSelectorFilter";
import { SelectorFilter } from "./SelectorFilter";

export const SelectorSection = (props) => {
  return (
    <Stack
      direction='row'
      justifyContent='flex-start'
      style={{ margin: "20px" }}>
      <DateSelectorFilter label='From'></DateSelectorFilter>
      <DateSelectorFilter label='To'></DateSelectorFilter>
      <SelectorFilter label='Model Type'></SelectorFilter>
      <SelectorFilter label='Client Type'></SelectorFilter>
    </Stack>
  );
};
