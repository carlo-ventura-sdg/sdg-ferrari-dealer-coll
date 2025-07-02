"use client";
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
                    sx={{ p: "30px", paddingBottom:'0px' }}>
                    <Typography variant="body" fontSize={18} style={{ color:'#969696'}}>{key}</Typography>
                    <Typography variant="body" fontSize={30} style={{fontWeight:'bold', color:'black'}}>{value}</Typography>
                </Stack>
            ))}
        </Stack>
    );
};