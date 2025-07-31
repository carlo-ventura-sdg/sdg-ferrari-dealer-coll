"use client";

import { Stack } from "@mui/material";
import { DateSelectorFilter } from "./DateSelectorFilter";
import { SelectorFilter } from "./SelectorFilter";
import { useSelector } from "react-redux";

export const SelectorSection = (props) => {
  const {currentTab} = useSelector((state) => state.anagraficaDso);

  return (
    <Stack
      direction='row'
      justifyContent='flex-start'
      style={{ margin: "20px" }}>
      <DateSelectorFilter label='From'></DateSelectorFilter>
      <DateSelectorFilter label='To'></DateSelectorFilter>
      <SelectorFilter label='Model'></SelectorFilter>
      <SelectorFilter label='Client'></SelectorFilter>
      {currentTab === "RD" && (
        <SelectorFilter label='Dealer'></SelectorFilter>
      )}
    </Stack>
  );
};
