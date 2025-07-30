import { Box, Stack, Typography } from "@mui/material";

const legendItems = [
  { label: "Delivered", color: "#4FC483" },     
  { label: "Transit", color: "#1C3B8A" },       
  { label: "OO", color: "#EFB166" },           
  { label: "P", color: "#BDDAEC" },            
  { label: "W", color: "#AD6DCF" },           
];

export const StatusLegend = () => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {legendItems.map((item, index) => (
        <Stack direction="row" spacing={0.5} alignItems="center" key={index}>
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: item.color,
            }}
          />
          <Typography variant="body" sx={{ fontSize: 13, color:'black' }}>
            {item.label}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};
