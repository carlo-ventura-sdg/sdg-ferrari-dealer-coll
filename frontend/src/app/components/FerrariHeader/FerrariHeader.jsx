"use client";
import { FerrariHeaderTabs } from "./FerrariHeaderTabs";
import { Stack, AppBar, Toolbar, IconButton } from "@mui/material";
export const FerrariHeader = (props) => {
  return (
      <AppBar sx={{ backgroundColor: "black" }}>
        {/* <Toolbar style={{padding:0}}> */}
          {/* <IconButton
            size='medium'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}>
            Logo
          </IconButton> */}
          <FerrariHeaderTabs></FerrariHeaderTabs>
        {/* </Toolbar> */}
      </AppBar>
  );
};
