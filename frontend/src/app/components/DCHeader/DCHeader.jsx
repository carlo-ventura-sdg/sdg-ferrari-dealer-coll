"use client";
import { Paper, Stack } from "@mui/material";
import { FerrariButton } from "./FerrariButton";
import { HeaderDataSection } from "./HeaderDataSection";
import { FilterSection } from "./FilterSection";
import { AllocateOrdersSection } from "./AllocateOrdersSection/AllocateOrdersSection";
import React, { useState } from "react";
import { AllocateOrdersHeaderSection } from "./AllocateOrdersSection/AllocateOrdersHeaderSection";
import { CheckBoxFilter } from "./CheckBoxFilter";
import { SelectorSection } from "./SelectorSection";
import { useSelector } from "react-redux";

export const DCHeader = (props) => {
  const [open, setOpen] = useState({ right: false });
  const {currentTab} = useSelector((state) => state.anagraficaDso);

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
    <Paper elevation={0}>
      <Stack direction='column' width='100%'>
        {/* <FilterSection></FilterSection> */}
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center' mb='10px'>
          <SelectorSection></SelectorSection>
          {currentTab === "RD" && (
            <FerrariButton></FerrariButton>
          )}
          
        </Stack>
        <Stack
          direction='row'
          justifyContent='space-between'
          mx='30px'
          alignItems='center'>
          <HeaderDataSection></HeaderDataSection>
          {/* <FerrariButton toggleDrawer={toggleDrawer}></FerrariButton> */}
          <CheckBoxFilter></CheckBoxFilter>
          <AllocateOrdersHeaderSection
            toggleDrawer={toggleDrawer}></AllocateOrdersHeaderSection>
          <AllocateOrdersSection
            toggleDrawer={toggleDrawer}
            open={open}
            activeItem={props.activeItem}
            slots={props.slots}></AllocateOrdersSection>
        </Stack>
      </Stack>
    </Paper>
  );
};
