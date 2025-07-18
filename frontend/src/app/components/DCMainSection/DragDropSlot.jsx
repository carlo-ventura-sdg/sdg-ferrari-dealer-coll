"use client";
import { useDroppable } from "@dnd-kit/core";
import { Box, Paper, Stack } from "@mui/material";
import { FerrariOrderCard } from "../DCHeader/FerrariOrderCard";

export function DragDropSlot({ slotId, items, onDrop }) {
  const { setNodeRef, isOver } = useDroppable({ id: slotId });

  return (
    <Box
      ref={setNodeRef}
      sx={{
        minHeight: 200,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        // p: 1,
        backgroundColor: "white",
        transition: "background-color 0.2s ease",
      }}>
      <Stack direction='row' alignContent='center'>
        {items.map((item) => (
          <Stack direction='column'>
            <Box
              sx={{
                height: 20,
                width: 2,
                backgroundColor: "#878787",
                margin: "0 auto",
              }}
            />
            <FerrariOrderCard key={item.id} item={item} />
          </Stack>
        ))}
        <Stack direction='column'>
          <Box
            sx={{
              height: 20,
              width: 2,
              backgroundColor: "#878787",
              margin: "0 auto",
            }}
          />
          <Paper
            elevation={0}
            sx={{
              width: 125,
              height: 85,
              mx: 0.5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F8F8F8",
              border: "1.5px solid #858585",
              borderRadius: 0,
              color: "#858585",
              fontSize: 12,
              fontWeight: "bold",
            }}>
            Open Slot
          </Paper>
        </Stack>
      </Stack>
    </Box>
  );
}
