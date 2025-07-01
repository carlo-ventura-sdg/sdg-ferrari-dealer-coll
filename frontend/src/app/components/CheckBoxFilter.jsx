import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";

export const CheckBoxFilter = (props) => {
  return (
    <Stack direction='column'>
      <Typography></Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label='All' />
        <FormControlLabel control={<Checkbox defaultChecked />} label='Delivered' />
        <FormControlLabel control={<Checkbox defaultChecked />} label='Order Pending Approval' />
        <FormControlLabel control={<Checkbox defaultChecked />} label='Order Call' />
        <FormControlLabel control={<Checkbox defaultChecked />} label='PreOrder Call' />
      </FormGroup>
    </Stack>
  );
};
