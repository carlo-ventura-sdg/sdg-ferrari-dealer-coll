"use client";
import { Stack, Typography } from "@mui/material";

const tempData = {
  "Filled slots": "1000",
  "Filled slots %": "78",
};
export const HeaderDataSection = (props) => {
  return (
    <Stack direction='row'>
      {Object.entries(tempData).map(([key, value]) => (
        <Stack
          key={key}
          direction='column'
          justifyContent='flex-start'
          pr='40px'>
          <Typography
            variant='body'
            fontSize='13px'
            fontWeight={400}
            style={{ color: "#8F8F8F" }}>
            {key}
          </Typography>
          <Typography
            variant='body'
            fontSize='18px'
            fontWeight={500}
            style={{ fontWeight: "bold", color: "#181818" }}>
            {value}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};
