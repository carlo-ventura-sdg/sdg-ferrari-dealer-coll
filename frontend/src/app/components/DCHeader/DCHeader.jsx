"use client";
import { Paper, Stack } from "@mui/material";
import { FerrariButton } from "./FerrariButton";
import { HeaderDataSection } from "./HeaderDataSection";
import { FilterSection } from "./FilterSection";
import { AllocateOrdersSection } from "./AllocateOrdersSection/AllocateOrdersSection";
import React from "react";

export const DCHeader = (props) => {
  const [open, setOpen] = React.useState({ right: false });

  const toggleDrawer = (anchor, newOpen) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen({ ...open, [anchor]: newOpen });
  };
  return (
    <Paper elevation={0} >
      <Stack direction='column' width='100%' >
        <Stack
          direction='row'
          justifyContent='space-between'
          >
          <HeaderDataSection></HeaderDataSection>
          <FerrariButton toggleDrawer={toggleDrawer}></FerrariButton>
          <AllocateOrdersSection
            toggleDrawer={toggleDrawer}
            open={open}></AllocateOrdersSection>
        </Stack>
        <FilterSection></FilterSection>
      </Stack>
    </Paper>
  );
};
