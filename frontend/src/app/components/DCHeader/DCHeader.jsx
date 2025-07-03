"use client";
import { Paper, Stack } from "@mui/material";
import { FerrariButton } from "./FerrariButton";
import { HeaderDataSection } from "./HeaderDataSection";
import { FilterSection } from "./FilterSection";
import { AllocateOrdersSection } from "./AllocateOrdersSection/AllocateOrdersSection";

export const DCHeader = (props) => {
  return (
    <Paper elevation={0}>
      <Stack direction='column' width='100%'>
        <Stack direction='row' justifyContent='space-between'>
          <HeaderDataSection></HeaderDataSection>
          <AllocateOrdersSection></AllocateOrdersSection>
        </Stack>
        <FilterSection></FilterSection>
      </Stack>
    </Paper>
  );
};
