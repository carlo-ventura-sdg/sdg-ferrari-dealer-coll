"use client";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { useDraggable } from "@dnd-kit/core";
import { FerrariOrderCardBase } from "./FerrariOrderCardBase";



export const FerrariOrderCard = ({ item }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: item.id,
    data: {...item},
  });

  return (
    <Box
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      sx={{ opacity: isDragging ? 0.6 : 1,  }}
    >
      <FerrariOrderCardBase item={item} />
    </Box>
  );
};

