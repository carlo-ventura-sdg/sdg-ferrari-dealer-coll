"use client";
import * as React from 'react';
import Image from "next/image";
import { FerrariHeaderTabs } from "./FerrariHeaderTabs";
import { Stack, AppBar, Toolbar, IconButton, Box } from "@mui/material";
export const FerrariHeader = (props) => {
  return (
    <AppBar
      position='fixed'
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        flexShrink: 0,
        backgroundColor: "black",
        boxShadow: "none",
      }}>
      <Box
        sx={{
          display: "flex",
          marginBottom: "-40px",
          marginTop: "15px",
          marginLeft: "20px",
        }}>
        <Image src='/logo-ferrari.svg' alt='logo' width={30} height={35} />
      </Box>
      <FerrariHeaderTabs />
    </AppBar>
  );
};
