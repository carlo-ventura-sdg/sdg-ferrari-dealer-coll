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
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

export const AllocateOrdersList = (props) => {
  const { carModelsForDealer, currentTab } = useSelector(
    (state) => state.anagraficaDso
  );
  const { carModels } = useSelector((state) => state.regionSection);
  // const { dealerData } = useSelector(
  //   (state) => state.anagraficaDso
  // );
  // const { selectedModel } = useSelector((state) => state.anagraficaDso);
  // const [slots, setSlots] = React.useState([]);
  // React.useEffect(() => {
  //   const newSlots = {};

  //   (dealerData.db_response || []).forEach((slot) => {
  //     const model = slot.model_desc?.trim();
  //     if (model !== selectedModel?.trim()) return;
  //     console.log("All Orders:", dealerData);

  //     if (!newSlots[model]) newSlots[model] = [];

  //     newSlots[model].push({
  //       dso: slot.dso,
  //       customer_code: slot.customer_code,
  //       customer_name: slot.customer_desc,
  //       model_name: slot.model_desc,
  //       model_code: slot.model_code,
  //       status: slot.status_id,
  //       order_call: slot.flag_order_call,
  //       day_w_code: slot.day_w_code,
  //       day_w_desc: slot.day_w_desc,
  //       allocation_month: slot.allocation_month,
  //       rank: slot.rank,
  //     });
  //   });

  //   setSlots(newSlots);
  // }, [dealerData, selectedModel]);

  return (
    <Stack
      sx={{
        width: 400,
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

        {currentTab == "RD"
          ? carModels.map((car, index) => (
              <CarModelAccordion
                key={index}
                name={car}
                activeItem={props.activeItem}
                slots={props.slots}
              />
            ))
          : carModelsForDealer.map((car, index) => (
              <CarModelAccordion
                key={index}
                name={car}
                activeItem={props.activeItem}
                slots={props.slots}
              />
            ))}
      </Stack>
    </Stack>
  );
};
