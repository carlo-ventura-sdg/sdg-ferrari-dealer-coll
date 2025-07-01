"use client";
import { Stack, Tab, Tabs } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { FilterHeader } from "./FilterHeader";

function FerrariPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Stack>{children}</Stack>}
    </div>
  );
}
FerrariPanel.propTypes = {
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

export const FerrariHeaderTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack style={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='basic tabs example'
        textColor='white'
        indicatorColor='white'>
        <Tab label='Home' {...a11yProps(0)} />
        <Tab label="Dealers's Collaboration" {...a11yProps(1)} />
        <Tab label='Historical Data' {...a11yProps(2)} />
      </Tabs>
      <FerrariPanel
        value={value}
        index={0}
        >
        Home
      </FerrariPanel>
      <FerrariPanel value={value} index={1} style={{ backgroundColor: "white" }}>
        <FilterHeader></FilterHeader>
      </FerrariPanel>
      <FerrariPanel value={value} index={2}>
        Historical Data
      </FerrariPanel>
    </Stack>
  );
};
