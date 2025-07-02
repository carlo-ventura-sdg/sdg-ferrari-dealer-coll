"use client";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";

const filters = [
  "All",
  "Delivered",
  "Order Pending Approval",
  "Order Call",
  "PreOrder Call",
];

export const CheckBoxFilter = (props) => {
  return (
    <Stack direction='column' mx='20px'>
      <Typography variant='body' color='#969696'>
        Order Status
      </Typography>
      <FormGroup row sx={{ color: "#4B4B4B" }}>
        {filters.map((filter) => (
          <FormControlLabel
          key={filter}
            control={<Checkbox defaultChecked style={{ color: "#F43324" }} />}
            sx={{
              "& .MuiFormControlLabel-label": {
                fontFamily: "inherit",
                fontSize: "14px",
              },
            }}
            label={filter}
          />
        ))}
      </FormGroup>
    </Stack>
  );
};
