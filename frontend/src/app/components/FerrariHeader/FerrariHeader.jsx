"use client";
import Image from "next/image";
import { FerrariHeaderTabs } from "./FerrariHeaderTabs";
import { Stack, AppBar, Toolbar, IconButton, Box } from "@mui/material";
export const FerrariHeader = (props) => {
  return (
    <AppBar
      sx={{ backgroundColor: "black", boxShadow: "none"}}>
      
        <Box sx={{ display: "flex", marginBottom:'-40px', marginTop:'15px', marginLeft:'20px' }}>
          <Image src='/logo-ferrari.svg' alt='logo' width={30} height={35} />
        </Box>
          <FerrariHeaderTabs />
    </AppBar>
  );
};
