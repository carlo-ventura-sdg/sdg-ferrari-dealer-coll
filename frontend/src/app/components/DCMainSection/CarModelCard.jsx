"use client";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export const CarModelCard = (props) => {
  return (
    <Stack direction='column' alignItems='center' m='10px'>
      <Typography variant='h7' color='black' fontWeight='bold'>
        {props.name}
      </Typography>
      <Image
        src={props.image}
        alt={props.name}
        width={122}
        height={70}
        
      />
      <Typography variant='body' color='#969696' fontSize={11}>
        {props.desc}
      </Typography>
    </Stack>
  );
};
