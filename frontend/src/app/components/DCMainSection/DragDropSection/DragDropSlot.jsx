"use client";
import { useDroppable } from "@dnd-kit/core";
import { Box, Paper, Stack } from "@mui/material";
import { FerrariOrderCard } from "../../DCHeader/FerrariOrderCard";

export function DragDropSlot({ slotId, items, onDrop }) {
  const { setNodeRef, isOver } = useDroppable({ id: slotId });
// console.log("DragDropSlot items:", items);
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
      <Stack direction='row' alignContent='center' maxHeight='30px'>
        {/* {items.map((item) => ( */}
          <Stack direction='column'>
            
            <FerrariOrderCard key={items[0].id} item={items[0]} />
          </Stack>
        {/* ))} */}
        {/* <Stack direction='column'> */}
          
          <Paper
            elevation={0}
            sx={{
              width: "132px",
              height: "64px",
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
        {/* </Stack> */}
      </Stack>
    </Box>
  );
}
