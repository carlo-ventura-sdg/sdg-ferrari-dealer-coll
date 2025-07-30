"use client";
import { Stack } from "@mui/material";
import { SelectorSection } from "./SelectorSection";

export const FilterSection = (props) => {
  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center'>
      <SelectorSection></SelectorSection>
      
    </Stack>
  );
};
