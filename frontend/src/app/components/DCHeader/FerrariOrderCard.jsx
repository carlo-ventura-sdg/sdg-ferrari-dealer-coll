import { Paper, Typography } from "@mui/material";

export const FerrariOrderCard = (props) => {
//   const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
//     id: item.id,
//     data: item,
//   });

  return (
    <Paper
    //   ref={setNodeRef}
    //   {...listeners}
    //   {...attributes}
    //   elevation={isDragging ? 6 : 2}
      sx={{
        width: 120,
        height: 80,
        m: 0.5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderLeft: `8px solid #636363`,
        // opacity: isDragging ? 0.6 : 1,
        px: 1,
        boxShadow: 2,
        cursor: "grab",
      }}>
      <Typography variant='body2' fontWeight='bold'>
        {props.id}
      </Typography>
      <Typography variant='caption'>{props.name}</Typography>
      {/* <Typography variant='caption' color='text.secondary'>
        {status}
      </Typography> */}
    </Paper>
  );
};
