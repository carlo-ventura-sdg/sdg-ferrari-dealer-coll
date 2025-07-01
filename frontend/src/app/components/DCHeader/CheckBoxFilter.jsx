"use client";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";

export const CheckBoxFilter = (props) => {
  return (
    <Stack direction='column' mx='20px'>
      <Typography color='grey'>Order Status</Typography>
      <FormGroup row sx={{ color:"#4B4B4B", }}>
        <FormControlLabel
          control={<Checkbox defaultChecked style={{ color: "#F43324" }} />}
          label='All'
        />
        <FormControlLabel
          control={<Checkbox defaultChecked style={{ color: "#F43324" }} />}
          label='Delivered'
        />
        <FormControlLabel
          control={<Checkbox defaultChecked style={{ color: "#F43324" }} />}
          label='Order Pending Approval'
        />
        <FormControlLabel
          control={<Checkbox defaultChecked style={{ color: "#F43324" }} />}
          label='Order Call'
        />
        <FormControlLabel
          control={<Checkbox defaultChecked style={{ color: "#F43324" }} />}
          label='PreOrder Call'
        />
      </FormGroup>
    </Stack>
  );
};
