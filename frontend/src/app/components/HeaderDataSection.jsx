import { Stack, Typography } from "@mui/material";

const tempData = {
    "Complete Order call": "80%",
    "Average OPT": "29",
    "Order call slots": "15",
    "Avg order age": "436 days",
  };
export const HeaderDataSection = (props) => {
    
    return (
        <Stack direction='row' >
            {Object.entries(tempData).map(([key, value]) => (
                <Stack
                    key={key}
                    direction='column'
                    justifyContent='flex-start'
                    sx={{ padding: "30px" }}>
                    <Typography variant="body" style={{color:'grey'}}>{key}</Typography>
                    <Typography variant="h4" style={{fontWeight:'bold', color:'black'}}>{value}</Typography>
                </Stack>
            ))}
        </Stack>
    );
};