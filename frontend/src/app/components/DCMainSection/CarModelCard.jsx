"use client";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export const CarModelCard = (props) => {
  return (
    <Stack direction='row' alignItems='center' mx='0px'>
      
      <Image
        src={'/car1.png'}
        alt={props.name}
        width={75}
        height={42}
        style={{ marginRight: "20px" }}
      /><Typography variant='body' color='black' fontWeight='bold' sx={{fontSize:'18px'}}>
        {props.name}
      </Typography>
      {/* <Typography variant='body' color='#969696' fontSize={11}>
        {props.desc}
      </Typography> */}
    </Stack>
  );
};
