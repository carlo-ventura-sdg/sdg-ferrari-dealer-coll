"use client";
import { Stack, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { DCHeader } from "../DCHeader/DCHeader";
import { DCMainSection } from "../DCMainSection/DCMainSection";
import { DndContext, PointerSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";

const months = [
  "Jan 2025",
  "Feb 2025",
  "Mar 2025",
  "Apr 2025",
  "May 2025",
  "Jun 2025",
  "Jul 2025",
  "Aug 2025",
  "Sept 2025",
  "Oct 2025",
  "Nov 2025",
  "Dec 2025",
];

export const carRows = [
  {
    key: "Roma Spider",
    image: "/car1.png",
    name: "Roma Spider",
    description: "Avg. order age 278 days",
  },
  {
    key: "SF90 XX Spider",
    image: "/car2.png",
    name: "SF90 XX Spider",
    description: "Avg. order age 278 days",
  },
  {
    key: "12Cilindri",
    image: "/car3.png",
    name: "12Cilindri",
    description: "Avg. order age 278 days",
  },
  {
    key: "296 GTS",
    image: "/car4.png",
    name: "296 GTS",
    description: "Avg. order age 278 days",
  },
  {
    key: "Roma Spider2",
    image: "/car1.png",
    name: "Roma Spider2",
    description: "Avg. order age 278 days",
  },
  {
    key: "SF90 XX Spider2",
    image: "/car2.png",
    name: "SF90 XX Spider2",
    description: "Avg. order age 278 days",
  },
  {
    key: "12Cilindri2",
    image: "/car3.png",
    name: "12Cilindri2",
    description: "Avg. order age 278 days",
  },
  {
    key: "296 GTS2",
    image: "/car4.png",
    name: "296 GTS2",
    description: "Avg. order age 278 days",
  },
];

const getSlotKey = (month, rowKey) => `${month}--${rowKey}`;

function FerrariPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ width: "100%" }}
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
  const [value, setValue] = React.useState(0);
  const sensors = useSensors(useSensor(PointerSensor));
  const [activeItem, setActiveItem] = useState(null);

  const [slots, setSlots] = useState(() => {
    const base = {};
    for (const month of months) {
      for (const car of carRows) {
        base[getSlotKey(month, car.key)] = [];
      }
    }

    base["Jan 2025--Roma Spider"] = [
      {
        id: "o1",
        order: "7170000696",
        name: "Cristiano Ronaldo",
        status: "Delivered",
      },
      {
        id: "o2",
        order: "7170000696",
        name: "Cristiano Ronaldo",
        status: "Pending Approval",
      },
    ];

    base["Feb 2025--SF90 XX Spider"] = [
      {
        id: "o3",
        order: "7170000696",
        name: "Cristiano Ronaldo",
        status: "Delivered",
      },
      {
        id: "o4",
        order: "7170000696",
        name: "Cristiano Ronaldo",
        status: "Order Call",
      },
      {
        id: "o9",
        order: "7170000696",
        name: "Cristiano Ronaldo",
        status: "Pending Approval",
      }
    ];

    base["Mar 2025--Roma Spider"] = [
      {
        id: "o5",
        order: "7170000696",
        name: "Cristiano Ronaldo",
        status: "Delivered",
      },
      {
        id: "o6",
        order: "7170000696",
        name: "Cristiano Ronaldo",
        status: "Pending Approval",
      },
    ];

    base["Apr 2025--12Cilindri"] = [
      {
        id: "o7",
        order: "7170000696",
        name: "Cristiano Ronaldo",
        status: "Delivered",
      },
      {
        id: "o8",
        order: "7170000696",
        name: "Cristiano Ronaldo",
        status: "Pending Approval",
      },
      
    ];

    base["Sept 2025--296 GTS"] = [
      {
        id: "o6",
        order: "7170000696",
        name: "Cristiano Ronaldo",
        status: "Order Call",
      },
    ];
    base["Dec 2025--SF90 XX Spider"] = [
      {
        id: "o3",
        order: "7170000696",
        name: "Cristiano Ronaldo",
        status: "Pending Approval",
      },
      {
        id: "o4",
        order: "7170000696",
        name: "Cristiano Ronaldo",
        status: "Order Call",
      },
      {
        id: "o5",
        order: "7170000696",
        name: "Cristiano Ronaldo",
        status: "Pending Approval",
      },
    ];

    return base;
  });

  const handleDragStart = (event) => {
    setActiveItem(event.active.data.current);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveItem(null);

    if (!over || !active) return;

    const draggedData = active.data.current;
    const toSlotId = over.id;

    const fromSlotId = Object.keys(slots).find((key) =>
      slots[key].some((item) => item.id === active.id)
    );

    if (!fromSlotId || !toSlotId || fromSlotId === toSlotId) return;

    const item = slots[fromSlotId].find((i) => i.id === active.id);
    setSlots((prev) => {
      const next = { ...prev };
      next[fromSlotId] = next[fromSlotId].filter((i) => i.id !== active.id);
      next[toSlotId] = [...next[toSlotId], item];
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
    <Stack sx={{ width: "100%"}}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='basic tabs example'
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
        <Tab sx={{ fontFamily: "inherit"}}label='Home' {...a11yProps(0)} />
        <Tab sx={{ fontFamily: "inherit"}} label="Dealers's Collaboration" {...a11yProps(1)} />
        <Tab sx={{ fontFamily: "inherit"}} label='Historical Data' {...a11yProps(2)} />
      </Tabs>
      <FerrariPanel value={value} index={0}>
        Home
      </FerrariPanel>
      <FerrariPanel
        value={value}
        index={1}
        style={{ backgroundColor: "white", width: "100%" }}>
        <>
          <DCHeader activeItem={activeItem}></DCHeader>
          <DCMainSection activeItem={activeItem} months={months} getSlotKey={getSlotKey} slots={slots}></DCMainSection>
        </>
      </FerrariPanel>
      <FerrariPanel value={value} index={2}>
        Historical Data
      </FerrariPanel>
    </Stack></DndContext>
  );
};
