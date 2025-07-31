"use client";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const tempData = ["All", "data 2", "data 3"];

export const SelectorFilter = (props) => {
  const [text, setText] = React.useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <Stack mx='10px'>
      <Typography
        variant='body'
        fontSize={16.5}
        fontWeight={400}
        color='#181818'
        
        sx={{textTransform: "uppercase"}}>
        {props.label}
      </Typography>
      <FormControl size='medium' style={{ width: "250px" }}>
        <Select
          color='#181818'
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={text}
          label=''
          onChange={handleChange}
          >
          {tempData.map((data, index) => (
            <MenuItem key={index} value={data} sx={{ fontFamily: "inherit" }}>
              {data}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};
