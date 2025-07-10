"use client";
import { useDroppable } from "@dnd-kit/core";
import { Box, Paper } from "@mui/material";
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
        p: 1,
        backgroundColor: isOver ? "#e3f2fd" : "#f9f9f9",
        borderBottom: "1px solid #eee",
        transition: "background-color 0.2s ease",
      }}>
      {items.length === 0 ? (
        <Paper
          sx={{
            width: 130,
            height: 100,
            m: 0.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            borderLeft: "8px solid #ddd",
            color: "#aaa",
            fontSize: 12,
          }}>
          Open Slot
        </Paper>
      ) : (
        items.map((item) => <FerrariOrderCard key={item.id} item={item} />)
      )}
    </Box>
  );
}
