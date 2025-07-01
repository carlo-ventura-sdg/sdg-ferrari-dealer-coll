"use client";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export const CarModelCard = (props) => {
  return (
    <Stack direction='column' alignItems='center' m='15px'>
      <Typography variant='h7' color='black' fontWeight='bold'>
        Roma Spider
      </Typography>
      <Image
        src={"/car1.png"}
        alt='car1'
        width={122}
        height={70}
        style={{ marginRight: "25px" }}
      />
      <Typography variant='body2' color='black'>
        Avg. order age 278 days
      </Typography>
    </Stack>
  );
};
