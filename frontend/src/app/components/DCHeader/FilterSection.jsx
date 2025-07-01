"use client";
import { Stack } from "@mui/material";
import { SelectorSection } from "./SelectorSection";
import { CheckBoxFilter } from "./CheckBoxFilter";

export const FilterSection = (props) => {
  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center'>
      <SelectorSection></SelectorSection>
      <CheckBoxFilter></CheckBoxFilter>
    </Stack>
  );
};
