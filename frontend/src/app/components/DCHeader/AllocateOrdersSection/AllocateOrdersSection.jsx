import {
  SwipeableDrawer,
} from "@mui/material";
import React from "react";
import { AllocateOrdersList } from "./AllocateOrdersList";

export const AllocateOrdersSection = (props) => {
  const drawerWidth = 340;
  return (
    <React.Fragment key={"right"}>
      <SwipeableDrawer 
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
        variant= 'persistent'
        // variant= {open.right == false ? 'temporary' : 'persistent'}
        anchor={"right"}
        open={props.open["right"]}
        onClose={props.toggleDrawer("right", false)}>
        <AllocateOrdersList anchor={'right'} toggleDrawer={props.toggleDrawer} activeItem={props.activeItem}></AllocateOrdersList>
      </SwipeableDrawer>
    </React.Fragment>
  );
};
