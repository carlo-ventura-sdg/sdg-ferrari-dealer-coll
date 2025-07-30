"use client";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";

const filters = [
  "Delivered",
  "Transit",
  "Frozen",
  "00",
  "P",
  "W",
];

export const CheckBoxFilter = (props) => {
  return (
    <Stack direction='column' mx='20px'>
      <Typography variant='body' color='#8F8F8F' fontWeight={400} fontSize='13px'>
        Order Status
      </Typography>
      <FormGroup row sx={{ color: "#181818" }}>
        {filters.map((filter) => (
          <FormControlLabel
          key={filter}
            control={<Checkbox defaultChecked style={{ color: "#181818" }} />}
            sx={{
              "& .MuiFormControlLabel-label": {
                fontFamily: "inherit",
                fontSize: "12px",
                fontWeight: 400,
                color: "#181818",
              },
            }}
            label={filter}
          />
        ))}
      </FormGroup>
    </Stack>
  );
};
