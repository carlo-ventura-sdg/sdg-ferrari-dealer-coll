"use client";
import { Stack, Tab, Tabs } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { DCHeader } from "../DCHeader/DCHeader";
import { DCMainSection } from "../DCMainSection/DCMainSection";

function FerrariPanel(props) {
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
    <Stack sx={{ width: "100%"}}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='basic tabs example'
        textColor='white'
        sx={{ marginBottom: "6px", marginLeft: "70px" }}
        slotProps={{
          indicator: {
            sx: {
              backgroundColor: "white",
              width: "60px",
              height: "2px",
              mx: "auto",
            },
          },
        }}>
        <Tab sx={{ fontFamily: "inherit"}}label='Home' {...a11yProps(0)} />
        <Tab sx={{ fontFamily: "inherit"}} label="Dealers's Collaboration" {...a11yProps(1)} />
        <Tab sx={{ fontFamily: "inherit"}} label='Historical Data' {...a11yProps(2)} />
      </Tabs>
      <FerrariPanel value={value} index={0}>
        Home
      </FerrariPanel>
      <FerrariPanel
        value={value}
        index={1}
        style={{ backgroundColor: "white", width: "100%" }}>
        <>
          <DCHeader></DCHeader>
          <DCMainSection></DCMainSection>
        </>
      </FerrariPanel>
      <FerrariPanel value={value} index={2}>
        Historical Data
      </FerrariPanel>
    </Stack>
  );
};
