"use client";
import { Box, Paper, Stack, Tab, Tabs } from "@mui/material";
import React from "react";

export const DCMainTabs = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack
      direction='row'
      sx={{ width: "100%", justifyContent: "center", height: "100%" }}>
      <Paper style={{background: 'linear-gradient(3deg, rgba(255, 255, 255, 0.00) 9.42%, #F1F1F1 97.35%)',}}>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "3px",
            bgcolor: "#D3D3D3",
            zIndex: 0,
          }}
        />
        <Tabs
          value={value}
          onChange={handleChange}
          slotProps={{
            indicator: {
              sx: {
                backgroundColor: "#D92A1C",
                height: "3px",
                zIndex: 1,
              },
            },
          }}
          sx={{
            minHeight: 0,
            zIndex: 2,
          }}>
          <Tab
            label='Visual'
            style={{
              textTransform: "none",
              fontWeight: 600,
              fontSize: "16px",
              minHeight: 0,
              paddingBottom: "4px",
              color: value === 0 ? "#D92A1C" : "#B0B0B0",
            }}
          />
          <Tab
            label='Table'
            style={{
              textTransform: "none",
              fontWeight: 600,
              fontSize: "16px",
              minHeight: 0,
              paddingBottom: "4px",
              color: value === 1 ? "#D92A1C" : "#B0B0B0",
            }}
          />
        </Tabs>
      </Paper>
    </Stack>
  );
};
