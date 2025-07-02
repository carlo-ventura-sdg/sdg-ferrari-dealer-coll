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
export const DateSelectorFilter = (props) => {
  const [text, setText] = React.useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };
  //DA CAMBIARE CON DATEPICKER
  return (
    <Stack mx='10px'>
      <Typography
        variant='body'
        fontSize={14}
        color='#969696'
        marginBottom='10px'>
        {props.label}
      </Typography>
      <FormControl size='small' style={{ width: "150px" }}>
        <InputLabel id='demo-simple-select-label'></InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={text}
          label=''
          onChange={handleChange}>
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
