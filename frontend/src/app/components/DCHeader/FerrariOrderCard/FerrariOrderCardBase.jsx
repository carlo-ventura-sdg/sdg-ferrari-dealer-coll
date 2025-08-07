import { Paper, Typography } from "@mui/material";

//la logica di questi colori è sbagliata va cambiata in base alla mappa nel mockup
const statusColors = {
  Delivered: "#9CBFCD",
  Transit: "#FEE066",
  95: "#FEE066",
  "00": "#72D78A",
  P: "#BC72DC",
  W: "#BC72DC",
};
export const FerrariOrderCardBase = ({ item }) => {
  // console.log("FerrariOrderCardBase item:", item);
  return (
    <>
      {!item || item.length === 0 ? (
        ""
      ) : (
        <Paper
          elevation={2}
          sx={{
            width: "150px",
            height: "60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            backgroundColor: "#fff",
            borderLeft: `8px solid ${statusColors["95"] || "#636363"}`,
            borderRadius: 0,
            px: 0.5,
            // mb: 0.5,
            // mr: 0.5,
            boxShadow: 2,
            cursor: "grab",
          }}>
          <Typography variant='body' fontSize={10} fontWeight='bold' textTransform='uppercase'>
            {item.customer_name}
          </Typography>
          <Typography variant='body' fontSize={11}>
            {item.customer_code}
          </Typography>
          <Typography
            variant='body'
            fontSize={8}
            textAlign='end'
            sx={{ color: "#7A7A7A" }}>
            {item.status}
          </Typography>
        </Paper>
      )}
    </>
  );
};
