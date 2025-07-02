import { Divider, Drawer, Stack, SwipeableDrawer, Typography } from "@mui/material";
import React from "react";
import { FerrariButton } from "./FerrariButton";

export const AllocateOrdersSection = (props) => {
  const [open, setOpen] = React.useState({right: false});

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

  const list = (anchor) => (
    <Stack
      sx={{ width: 300, margin:'15px' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <Typography variant="body" marginBottom='15px' fontWeight='bold'>Allocate Orders</Typography>
      <Divider />
      <Stack marginTop='15px'>
      <Typography variant="body" fontSize={12}>Allocate by FIFO or drag the orders below into the open slots</Typography></Stack>
    </Stack>
  );

  return (
    <React.Fragment key={'right'}>
      <FerrariButton toggleDrawer={toggleDrawer}></FerrariButton>
      <SwipeableDrawer
        anchor={'right'}
        open={open['right']}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}>
        {list('right')}
      </SwipeableDrawer>
    </React.Fragment>
  );
};
