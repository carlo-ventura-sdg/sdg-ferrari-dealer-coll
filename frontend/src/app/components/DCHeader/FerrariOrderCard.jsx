"use client";
import { Paper, Typography } from "@mui/material";
import { useDraggable } from "@dnd-kit/core";


//la logica di questi colori è sbagliata va cambiata in base alla mappa nel mockup
const statusColors = {
  "Delivered": "#9CBFCD",
  "Pending Approval": "#FEE066",
  "Order Call": "#72D78A",
  "Preorder Call": "#BC72DC",
};

export const FerrariOrderCard = ({item}) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: item.id,
    data: item,
  });

  return (
    <Paper
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      elevation={isDragging ? 6 : 2}
      sx={{
        width: 120,
        height: 80,
        m: 0.5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderLeft: `8px solid ${statusColors[item.status] || "#636363"}`,
        opacity: isDragging ? 0.6 : 1,
        px: 1,
        boxShadow: 2,
        cursor: "grab",
      }}>
      <Typography variant='body2' fontWeight='bold'>
        {item.order}
      </Typography>
      <Typography variant='caption'>{item.name}</Typography>
      <Typography variant='caption' color='text.secondary'>
        {item.status}
      </Typography>
    </Paper>
  );
};
