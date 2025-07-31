"use client";

import { Button } from "@mui/material";

export const FerrariButton = (props) => {
  return (
    <Button
      variant='contained'
      
      sx={{
        textTransform: "none",
        width: "200px",
        // height: "50px",
        padding: "24px",
        backgroundImage: "linear-gradient(180deg, #A00C01, #E53935)",
        margin: "30px",
        fontFamily:'inherit',
        textTransform: "uppercase"
      }} 
      // onClick={props.toggleDrawer('right', true)}
      >
      Send to HQ
    </Button>
  );
};
