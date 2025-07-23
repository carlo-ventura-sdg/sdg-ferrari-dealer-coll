import {
    Divider,
    Drawer,
    IconButton,
    Stack,
    SwipeableDrawer,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { FerrariButton } from "../FerrariButton";
  import { CarModelAccordion } from "./CarModelAccordion";
  import { carCards } from "../../DCMainSection/CarModelSideSection";
  import CloseIcon from "@mui/icons-material/Close";
  
  export const AllocateOrdersList = (props) => {
  
    return (
      <Stack
        sx={{
          width: 300,
          margin: "15px",
          overflow: "scroll",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        role='presentation'>
        <Stack
          display='flex'
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          width='100%'>
          <Typography variant='body' fontWeight='bold'>
            Allocate Orders
          </Typography>
          <IconButton onClick={props.toggleDrawer(props.anchor, false)}>
            <CloseIcon sx={{ color: "black" }}></CloseIcon>
          </IconButton>
        </Stack>
  
        <Divider />
        <Stack marginTop='15px'>
          <Typography variant='body' fontSize={12}>
            <span
              style={{
                color: "#e53935",
                fontWeight: "bold",
                textDecoration: "underline",
              }}>
              Allocate by FIFO
            </span>{" "}
            or drag the orders below into the open slots
          </Typography>
  
          {carCards.map((car, index) => (
            <CarModelAccordion key={index} name={car.name} activeItem={props.activeItem} slots={props.slots}/>
          ))}
        </Stack>
      </Stack>
    );
    
  };
  