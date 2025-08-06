import {
  Divider,
  Drawer,
  IconButton,
  Stack,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import React from "react";
import { DragDropModelAccordion } from "./DragDropModelAccordion";
import { useSelector } from "react-redux";

export const DragDropModelList = (props) => {
  const { carModelsForDealer, selectedModel, currentTab } = useSelector(
    (state) => state.anagraficaDso
  );
  const { carModels } = useSelector((state) => state.regionSection);
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
      <Stack marginTop='15px'>
        {currentTab == "RD"
          ? carModels.map((car, index) => (
              <DragDropModelAccordion
                months={props.months}
                key={index}
                name={car}
                activeItem={props.activeItem}
                slots={props.slots}
                selectedModel={selectedModel}
              />
            ))
          : carModelsForDealer.map((car, index) => (
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
