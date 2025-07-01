"use client";
import { Paper, Stack } from "@mui/material";
import { CarModelCard } from "./CarModelCard";

export const CarModelSideSection = (props) => {
  return (
    <Paper elevation={3}>
      <Stack
        direction='column'
        height='100%'
        width='100%'
        alignItems='center'
        justifyItems='center'
        my='40px'>
        <CarModelCard></CarModelCard>
        <CarModelCard></CarModelCard>
        <CarModelCard></CarModelCard>
        <CarModelCard></CarModelCard>
      </Stack>
    </Paper>
  );
};
