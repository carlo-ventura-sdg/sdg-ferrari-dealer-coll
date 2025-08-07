// FerrariOrderCardDialog.jsx
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { IconButton, Stack } from "@mui/material";

export const FerrariOrderCardDialog = ({ open, onClose, id, item }) => {
  return (
    <Dialog
      maxWidth='xs'
      fullWidth
      onClose={() => {
        onClose(false);
      }}
      open={open}>
      <Stack
        width='100%'
        px='24px'
        pb='24px'
        height='350px'
        justifyContent='space-around'>
        <Stack direction='row' width='100%' justifyContent='space-between'>
          <Typography
            mt='24px'
            fontFamily='inherit'
            fontWeight={600}
            fontSize='18px'
            color='#181818'>
            {item.customer_name}
          </Typography>
          <IconButton
            size='small'
            onClick={() => {
              onClose(false);
            }}>
            <CloseIcon sx={{ color:'#181818'}}/>
          </IconButton>
        </Stack>

        <Typography
          fontFamily='inherit'
          fontWeight={400}
          fontSize='15px'
          color='#181818'>
          {item.customer_code}
        </Typography>
        <Stack>
          <Typography
            fontFamily='inherit'
            fontWeight={400}
            fontSize='13px'
            color='#8F8F8F'>
            Date
          </Typography>
          <Typography
            fontFamily='inherit'
            fontWeight={400}
            fontSize='13px'
            color='#181818'>
            {item.day_w_desc}
          </Typography>
        </Stack>
        <Stack>
          <Typography
            fontFamily='inherit'
            fontWeight={400}
            fontSize='13px'
            color='#8F8F8F'>
            OPT
          </Typography>
          <Typography
            fontFamily='inherit'
            fontWeight={400}
            fontSize='13px'
            color='#181818'>
            {item.status}
          </Typography>
        </Stack>
        <Stack>
          <Typography
            fontFamily='inherit'
            fontWeight={400}
            fontSize='13px'
            color='#8F8F8F'>
            Order Call Month
          </Typography>
          <Typography
            fontFamily='inherit'
            fontWeight={400}
            fontSize='13px'
            color='#181818'>
            {item.month}
          </Typography>
        </Stack>
      </Stack>
    </Dialog>
  );
};
