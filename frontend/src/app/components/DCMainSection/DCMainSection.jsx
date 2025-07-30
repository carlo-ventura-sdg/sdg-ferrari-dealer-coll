"use client";
import { Divider, Paper, Stack } from "@mui/material";
import { DCMainTabs } from "./DCMainTabs";
import { useEffect, useState } from "react";

export const DCMainSection = (props) => {
 
  return (
    <Stack direction='row' mx='35px'> 
   
      <DCMainTabs  activeItem={props.activeItem} months={props.months}slots={props.slots} ></DCMainTabs>
    </Stack>
  );
};
