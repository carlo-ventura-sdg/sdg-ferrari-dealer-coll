
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

export const SelectorFilter = (props) => {
  const [text, setText] = React.useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <Stack mx='10px'>
      <Typography variant='body' color='#969696' marginBottom='10px'>
        {props.label}
      </Typography>
      <FormControl size='small' style={{ width: "150px" }}>
        <Select
          color='#4B4B4B'
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={text}
          label=''
          onChange={handleChange}>
          <MenuItem value={"All"}>
            All
          </MenuItem>
          <MenuItem value={"data 2"}>data 2</MenuItem>
          <MenuItem value={"data 3"}>data 3</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};
