"use client";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { useDraggable } from "@dnd-kit/core";

//la logica di questi colori è sbagliata va cambiata in base alla mappa nel mockup
const statusColors = {
  Delivered: "#9CBFCD",
  "Pending Approval": "#FEE066",
  "Order Call": "#72D78A",
  "Preorder Call": "#BC72DC",
};

export const FerrariOrderCard = ({ item }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: item.id,
    data: item,
  });

  return (
    <Stack>
      <Box
        sx={{
          height: 20,
          width: 2,
          backgroundColor: "#878787", 
          margin: "0 auto",
        }}
      />
      <Paper
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        elevation={isDragging ? 6 : 2}
        sx={{
          width: "125px",
          height: "80px",
          // m: 0.5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          backgroundColor: "#fff",
          borderLeft: `8px solid ${statusColors[item.status] || "#636363"}`,
          borderRadius: 0,
          opacity: isDragging ? 0.6 : 1,
          px: 0.5,
          boxShadow: 2,
          cursor: "grab",
        }}>
        <Typography variant='body' fontSize={10} fontWeight='bold'>
          {item.order}
        </Typography>
        <Typography variant='body' fontSize={11}>
          {item.name}
        </Typography>
        <Typography
          variant='body'
          fontSize={8}
          textAlign='end'
          sx={{ color: "#7A7A7A" }}>
          {item.status}
        </Typography>
      </Paper>
    </Stack>
  );
};
