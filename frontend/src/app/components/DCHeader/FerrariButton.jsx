"use client";

import { Button } from "@mui/material";

export const FerrariButton = (props) => {
  return (
    <Button
      variant='contained'
      style={{
        textTransform: "none",
        width: "200px",
        height: "50px",
        backgroundColor: "#D92A1C",
        margin: "30px",
        fontFamily:'inherit',
        
      }} onClick={props.toggleDrawer('right', true)}>
      Allocate Orders
    </Button>
  );
};
