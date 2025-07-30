import {
  Divider,
  Drawer,
  IconButton,
  Stack,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import React from "react";
// import { carCards } from "../../DCMainSection/CarModelSideSection";
import CloseIcon from "@mui/icons-material/Close";
import { carCards } from "../CarModelSideSection";
import { DragDropModelAccordion } from "./DragDropModelAccordion";
import { useSelector } from "react-redux";

export const DragDropModelList = (props) => {
  const { carModels, selectedModel } = useSelector((state) => state.anagraficaDso);
  return (
    <Stack
      sx={{
        width: "100%",
        height: "600px",
        overflowY: "scroll",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      role='presentation'>
      <Stack marginTop='15px' >
        {carModels.map((car, index) => (
          <DragDropModelAccordion
          months={props.months}
            key={index}
            name={car}
            activeItem={props.activeItem}
            slots={props.slots}
            selectedModel={selectedModel} 
          />
        ))}
      </Stack>
    </Stack>
  );
};
