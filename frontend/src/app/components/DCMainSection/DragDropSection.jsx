"use client";
import {
  Box,
  Paper,
  Typography,
  Divider,
  ListItem,
  Stack,
  List,
} from "@mui/material";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import { useState } from "react";
import { DragDropSlot } from "./DragDropSlot";
import { FerrariOrderCard } from "../DCHeader/FerrariOrderCard";
import { CarModelCard } from "./CarModelCard";

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

const carRows = [
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

export const DragDropSection = () => {
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

    base["Sept 2025--12Cilindri"] = [
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

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}>
      <Paper
        sx={{
          display: "flex",
          overflow: "auto",
          maxHeight: "calc(100vh - 100px)",
          position: "relative",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}>
        {/* Fixed left column with car names */}
        <List
          sx={{
            paddingY: "40px",
            width: 240,
            flexShrink: 0,
            position: "sticky",
            left: 0,
            zIndex: 2,
            backgroundColor: "white",
            borderRight: "1px solid #ccc",
          }}>
          {carRows.map((car) => (
            <ListItem key={car.key} sx={{ height: 150 }}>
              <CarModelCard
                image={car.image}
                name={car.name}
                desc={car.description}
              />
            </ListItem>
          ))}
        </List>

        {/* Scrollable months */}
        <Box sx={{ display: "flex" }}>
          {months.map((month) => (
            <Box
              key={month}
              sx={{ minWidth: 260, borderLeft: "1px solid #ccc" }}>
              <Box
                sx={{
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  background: "#f4f4f4",
                  borderBottom: "1px solid #ccc",
                }}>
                {month}
              </Box>

              {carRows.map((car) => {
                const slotId = getSlotKey(month, car.key);
                return (
                  <Box
                    key={slotId}
                    sx={{
                      height: 150,
                      p: 1,
                      borderTop: "1px solid #e0e0e0",
                    }}>
                    <DragDropSlot slotId={slotId} items={slots[slotId] || []} />
                  </Box>
                );
              })}
            </Box>
          ))}
        </Box>
      </Paper>

      <DragOverlay>
        {activeItem ? <FerrariOrderCard item={activeItem} /> : null}
      </DragOverlay>
    </DndContext>
  );
};
