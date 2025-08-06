"use client";
import { useDroppable } from "@dnd-kit/core";
import { Box, Paper } from "@mui/material";
import { FerrariOrderCard } from "../../DCHeader/FerrariOrderCard";

export function DragDropSlot({ slotId, items = [], onDrop }) {
  const { setNodeRef } = useDroppable({ id: slotId });

  return (
    <Box
      ref={setNodeRef}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        gap: "8px",
        width: "100%",
        minHeight: 150,
        backgroundColor: "white",
        p: 1,
      }}
    >
      {[...items, { isOpenSlot: true }].map((item, index) => (
        <Box
          key={`${slotId}-${item?.id || "open-slot"}`}
          sx={{
            width: "130px", // fixed card width for column effect
            flexShrink: 0,
          }}
        >
          {item.isOpenSlot ? (
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                height: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#F8F8F8",
                border: "1.5px solid #858585",
                borderRadius: 0,
                color: "#858585",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              Open Slot
            </Paper>
          ) : (
            <FerrariOrderCard id={item?.id} item={item} />
          )}
        </Box>
      ))}
    </Box>
  );
}
