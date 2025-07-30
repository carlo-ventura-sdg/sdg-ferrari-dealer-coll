import { Paper, Typography } from "@mui/material";


//la logica di questi colori è sbagliata va cambiata in base alla mappa nel mockup
const statusColors = {
    "Delivered": "#9CBFCD",
    "Pending Approval": "#FEE066",
    "Order Call": "#72D78A",
    "Preorder Call": "#BC72DC",
  };
export const FerrariOrderCardBase = ({ item }) => {
    return (
      <Paper
        elevation={2}
        sx={{
          width: "125px",
          height: "49px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          backgroundColor: "#fff",
          borderLeft: `8px solid ${statusColors["Delivered"] || "#636363"}`,
          borderRadius: 0,
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
    );
  };
  