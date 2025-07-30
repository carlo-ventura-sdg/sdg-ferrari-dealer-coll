"use client";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Stack, Tabs, Tab, Divider } from "@mui/material";
import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useDispatch, useSelector } from "react-redux";
import {
  getDealerData,
  getCarModels,
} from "@/app/redux/reducers/anagrafica-dso-reducer";

import { DCHeader } from "../DCHeader/DCHeader";
import { DCMainSection } from "../DCMainSection/DCMainSection";
import localFont from "next/dist/compiled/@next/font/dist/local";

// const months = [
//   "Jan 2025", "Feb 2025", "Mar 2025", "Apr 2025", "May 2025", "Jun 2025",
//   "Jul 2025", "Aug 2025", "Sept 2025", "Oct 2025", "Nov 2025", "Dec 2025"
// ];
const months = [
  "Q1", "Q2", "Q3", "Q4", "Q5", "Q6"];

// const getSlotKey = (month, rowKey) => `${month}--${rowKey}`;

function FerrariPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ width: "100%", alignItems: "center" }}
      {...other}
    >
      {value === index && <Stack>{children}</Stack>}
    </div>
  );
}

FerrariPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const FerrariHeaderTabs = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const sensors = useSensors(useSensor(PointerSensor));
  const [activeItem, setActiveItem] = useState(null);

  const carSlots = useSelector((state) => state.anagraficaDso.carSlots || []);

  const [slots, setSlots] = useState({ UNASSIGNED: [] });

  useEffect(() => {
    dispatch(getDealerData());
    dispatch(getCarModels());
  }, []);

  // Transform carSlots into slot structure
  useEffect(() => {
    const newSlots = {};
    carSlots.forEach((slot) => {
      const model = slot.model?.trim();
      if (!model) return;

      if (!newSlots[model]) newSlots[model] = [];

      newSlots[model].push({
        id: slot.dso, // or slot.vin
        order: slot.dso,
        name: slot.vettura,
        status: slot.status_id,
        car: model,
      });
    });

    newSlots.UNASSIGNED = [];
    setSlots(newSlots);
  }, [carSlots]);

  const handleDragStart = (event) => {
    const data = event.active?.data?.current;
    if (data) setActiveItem(data);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveItem(null);
    if (!over) return;

    const draggedItem = active?.data?.current;
    const draggedItemId = draggedItem?.id;
    const toSlotId = over.id;

    if (!draggedItem || !draggedItemId || !toSlotId) return;

    const fromSlotId = Object.keys(slots).find((slotKey) =>
      slots[slotKey]?.some((item) => item.id === draggedItemId)
    );

    if (fromSlotId === toSlotId) return;

    setSlots((prev) => {
      const next = { ...prev };

      if (fromSlotId) {
        next[fromSlotId] = next[fromSlotId].filter(
          (i) => i.id !== draggedItemId
        );
      }

      if (toSlotId === "UNASSIGNED") {
        const originalCar = draggedItem.car;
        if (!originalCar || !next[originalCar]) return next;

        if (!next[originalCar].some((i) => i.id === draggedItemId)) {
          next[originalCar].push(draggedItem);
        }

        return next;
      }

      if (!next[toSlotId]) next[toSlotId] = [];

      if (!next[toSlotId].some((i) => i.id === draggedItemId)) {
        next[toSlotId].push(draggedItem);
      }

      return next;
    });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <Stack sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="ferrari header tabs"
          textColor="white"
          sx={{ marginBottom: "6px", marginLeft: "70px" }}
          slotProps={{
            indicator: {
              sx: {
                backgroundColor: "white",
                width: "60px",
                height: "2px",
                mx: "auto",
              },
            },
          }}
        >
          <Tab sx={{ fontFamily: "inherit" }} label="Home" {...a11yProps(0)} />
          <Tab
            sx={{ fontFamily: "inherit" }}
            label="Dealer's Collaboration"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ fontFamily: "inherit" }}
            label="Historical Data"
            {...a11yProps(2)}
          />
        </Tabs>

        <FerrariPanel value={value} index={0}>
          Home
        </FerrariPanel>

        <FerrariPanel value={value} index={1} style={{ backgroundColor: "white", width: "100%" }}>
          <>
            <DCHeader activeItem={activeItem} slots={slots} />
            <Divider sx={{backgroundColor:'#8F8F8F', height:'1px', my:'14px'}}></Divider>
            <DCMainSection
              activeItem={activeItem}
              months={months}
              slots={slots}
            />
          </>
        </FerrariPanel>

        <FerrariPanel value={value} index={2}>
          Historical Data
        </FerrariPanel>
      </Stack>
    </DndContext>
  );
};
