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
  updateTab,
  getCarModelsForDealer,
} from "@/app/redux/reducers/anagrafica-dso-reducer";

import { DCHeader } from "../DCHeader/DCHeader";
import { DCMainSection } from "../DCMainSection/DCMainSection";
import localFont from "next/dist/compiled/@next/font/dist/local";
import {
  getCarModels,
  getRegionData,
} from "@/app/redux/reducers/region-section-reducer";

// const months = [
//   "Jan 2025", "Feb 2025", "Mar 2025", "Apr 2025", "May 2025", "Jun 2025",
//   "Jul 2025", "Aug 2025", "Sept 2025", "Oct 2025", "Nov 2025", "Dec 2025"
// ];
// const months = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"];

// const getSlotKey = (month, rowKey) => `${month}--${rowKey}`;

function FerrariPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ width: "100%", alignItems: "center" }}
      {...other}>
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
  const { currentTab, selectedModel, carSlotsForDate} = useSelector(
    (state) => state.anagraficaDso
  );
  const { carSlotsForDealer, monthDSO } = useSelector(
    (state) => state.regionSection
  );
  const months = Object.keys(monthDSO);
  // console.log("Months:", months);
  // console.log("Car Slots for Date:", carSlotsForDate);
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    dispatch(getDealerData());
    dispatch(getRegionData());
    if (currentTab === "DC") {
      dispatch(getCarModelsForDealer());
    } else if (currentTab === "RD") {
      dispatch(getCarModels());
    }
  }, [currentTab]);

  useEffect(() => {
    if (currentTab === "DC") {
      const newSlots = {};

      (carSlotsForDate || []).forEach((entry) => {
        const { month, models } = entry;

        Object.entries(models || {}).forEach(([model, slots]) => {
          if (model.trim() !== selectedModel.trim()) return;

          if (!newSlots[month]) newSlots[month] = {};
          if (!newSlots[month][model]) newSlots[month][model] = [];

          newSlots[month][model].push(
            ...slots.map((slot) => ({
              dso: slot.dso,
              customer_code: slot.customer_code,
              customer_name: slot.customer_desc,
              model_name: slot.model_desc,
              model_code: model,
              status: slot.status_id,
              order_call: slot.flag_order_call,
              day_w_code: slot.day_w_code,
              day_w_desc: slot.day_w_desc,
              allocation_month: month,
              rank: slot.rank,
            }))
          );
        });
        setSlots(newSlots);
      });
    } else if (currentTab === "RD") {
      if (!carSlotsForDealer || typeof carSlotsForDealer !== "object") return;

      const newSlots = {};

      Object.entries(carSlotsForDealer).forEach(
        ([dealerCode, monthlySlots]) => {
          if (!newSlots[dealerCode]) newSlots[dealerCode] = {};

          Object.entries(monthlySlots).forEach(([month, dealerSlots]) => {
            if (!newSlots[dealerCode][month]) newSlots[dealerCode][month] = [];

            dealerSlots.forEach((slot) => {
              newSlots[dealerCode][month].push({
                dso: slot.dso,
                customer_code: slot.customer_code,
                customer_name: slot.customer_desc,
                model_name: slot.model_desc,
                model_code: slot.model_code,
                dealer: slot.dealer_desc,
                status: slot.status_id,
                day_w_code: slot.day_w_code,
                day_w_desc: slot.day_w_desc,
                allocation_month: month,
                rank: slot.rank,
              });
            });
          });
        }
      );

      // newSlots.UNASSIGNED = [];

      setSlots(newSlots);
    }
  }, [carSlotsForDealer, carSlotsForDate]);

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
          (i) => i.dso !== draggedItemId
        );
      }

      if (toSlotId === "UNASSIGNED") {
        const originalCar = draggedItem.model_code;
        if (!originalCar || !next[originalCar]) return next;

        if (!next[originalCar].some((i) => i.dso === draggedItemId)) {
          next[originalCar].push(draggedItem);
        }

        return next;
      }

      if (!next[toSlotId]) next[toSlotId] = [];

      if (!next[toSlotId].some((i) => i.dso === draggedItemId)) {
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
      onDragEnd={handleDragEnd}>
      <Stack sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='ferrari header tabs'
          textColor='white'
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
          }}>
          <Tab sx={{ fontFamily: "inherit" }} label='Home' {...a11yProps(0)} />
          <Tab
            sx={{ fontFamily: "inherit" }}
            label="Dealer's Collaboration"
            {...a11yProps(1)}
            onClick={() => {
              dispatch(updateTab("DC"));
            }}
          />
          <Tab
            sx={{ fontFamily: "inherit" }}
            label='Region Dashboard'
            {...a11yProps(2)}
            onClick={() => {
              dispatch(updateTab("RD"));
            }}
          />
        </Tabs>

        <FerrariPanel value={value} index={0}>
          Home
        </FerrariPanel>

        <FerrariPanel
          value={value}
          index={1}
          style={{ backgroundColor: "white", width: "100%" }}>
          <>
            <DCHeader activeItem={activeItem} slots={slots} />
            <Divider
              sx={{
                backgroundColor: "#8F8F8F",
                height: "1px",
                mt: "44px",
                mb: "14px",
                mx: "30px",
              }}></Divider>
            <DCMainSection
              activeItem={activeItem}
              months={months}
              slots={slots}
            />
          </>
        </FerrariPanel>

        <FerrariPanel
          value={value}
          index={2}
          style={{ backgroundColor: "white", width: "100%" }}>
          <>
            <DCHeader activeItem={activeItem} slots={slots} />
            <Divider
              sx={{
                backgroundColor: "#8F8F8F",
                height: "1px",
                mt: "44px",
                mb: "14px",
                mx: "30px",
              }}></Divider>
            <DCMainSection
              activeItem={activeItem}
              months={months}
              slots={slots}
            />
          </>
        </FerrariPanel>
      </Stack>
    </DndContext>
  );
};
