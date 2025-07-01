import { FormControl, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";
import React from "react";

export const DateSelectorFilter = (props) => {
  const [text, setText] = React.useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };
//DA CAMBIARE CON DATEPICKER 
  return (
    <Stack margin='10px'>
      <Typography variant='body' color='grey' marginBottom='10px'>
        {props.label}
      </Typography>
      <FormControl size="small" style={{width:'150px', }}>
        <InputLabel id='demo-simple-select-label'></InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={text}
          label=''
          onChange={handleChange}>
          <MenuItem value={"data 1"}>data 1</MenuItem>
          <MenuItem value={"data 2"}>data 2</MenuItem>
          <MenuItem value={"data 3"}>data 3</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};
