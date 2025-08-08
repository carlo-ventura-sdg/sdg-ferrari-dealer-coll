import { legendItems, mapStatusToLabel } from "@/app/utils/legend";
import { Paper, Typography } from "@mui/material";


export const FerrariOrderCardBase = ({ item }) => {
  const label = mapStatusToLabel(item.status);
  const color =
    legendItems.find((item) => item.label === label)?.color || "#636363";
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
            borderLeft: `8px solid ${color}`,
            borderRadius: 0,
            px: 0.5,
            // mb: 0.5,
            // mr: 0.5,
            boxShadow: 2,
            cursor: "grab",
          }}>
          <Typography
            variant='body'
            fontSize={10}
            fontWeight='bold'
            textTransform='uppercase'>
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
