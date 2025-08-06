"use client";
import { Box, Paper, Stack, Tab, Tabs } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { VisualSection } from "./VisualSection";
import { StatusLegend } from "./StatusLegend";
import { useSelector } from "react-redux";

function VisualPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ width: "100%" }}
      {...other}>
      {value === index && <Stack>{children}</Stack>}
    </div>
  );
}
VisualPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const DCMainTabs = (props) => {
  const [value, setValue] = React.useState(0);
  const { currentTab } = useSelector((state) => state.anagraficaDso);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack sx={{ width: "100%" }}>
      {/* <Paper style={{background: 'linear-gradient(3deg, rgba(255, 255, 255, 0.00) 9.42%, #F1F1F1 97.35%)',}}> */}
      {/* <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "3px",
            bgcolor: "#D3D3D3",
            zIndex: 0,
          }}
        /> */}
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        mb='20px'>
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
          }}>
          <Tab
            label='Visual'
            style={{
              textTransform: "uppercase",
              fontWeight: 400,
              fontSize: "15px",
              fontFamily: "inherit",
              // minHeight: 0,
              paddingBottom: "4px",
              color: value === 0 ? "#D92A1C" : "#B0B0B0",
            }}
            {...a11yProps(0)}
          />
          <Tab
            label='Table'
            style={{
              textTransform: "uppercase",
              fontWeight: 400,
              fontSize: "15px",
              fontFamily: "inherit",
              // minHeight: 0,
              paddingBottom: "4px",
              color: value === 1 ? "#D92A1C" : "#B0B0B0",
            }}
            {...a11yProps(1)}
          />
          {currentTab === "RD" && (
            <Tab
              label='New Order Call'
              style={{
                textTransform: "uppercase",
                fontWeight: 400,
                fontSize: "15px",
                fontFamily: "inherit",
                // minHeight: 0,
                paddingBottom: "4px",
                color: value === 2 ? "#D92A1C" : "#B0B0B0",
              }}
              {...a11yProps(2)}
            />
          )}
        </Tabs>
        <StatusLegend></StatusLegend>
      </Stack>
      <VisualPanel
        style={{ backgroundColor: "white", width: "100%" }}
        value={value}
        index={0}>
        <VisualSection
          activeItem={props.activeItem}
          months={props.months}
          slots={props.slots}></VisualSection>
      </VisualPanel>
      <VisualPanel value={value} index={1}></VisualPanel>
      <VisualPanel value={value} index={2}></VisualPanel>
      {/* </Paper> */}
    </Stack>
  );
};
