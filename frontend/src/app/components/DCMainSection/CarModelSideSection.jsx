"use client";
import { List, ListItem, Paper, Stack } from "@mui/material";
import { CarModelCard } from "./CarModelCard";

const carCards = [
  {
    image: "/car1.png",
    name: "Roma Spider",
    description: "Avg. order age 278 days",
  },
  {
    image: "/car2.png",
    name: "SF90 XX Spider",
    description: "Avg. order age 278 days",
  },
  {
    image: "/car3.png",
    name: "12Cilindri",
    description: "Avg. order age 278 days",
  },
  {
    image: "/car4.png",
    name: "296 GTS",
    description: "Avg. order age 278 days",
  },
  {
    image: "/car1.png",
    name: "Roma Spider",
    description: "Avg. order age 278 days",
  },
  {
    image: "/car2.png",
    name: "SF90 XX Spider",
    description: "Avg. order age 278 days",
  },
  {
    image: "/car3.png",
    name: "12Cilindri",
    description: "Avg. order age 278 days",
  },
  {
    image: "/car4.png",
    name: "296 GTS",
    description: "Avg. order age 278 days",
  },
];

export const CarModelSideSection = (props) => {
  return (
    <Paper elevation={3}>
      <Stack
        direction='column'
        height='100%'
        width='230px'
        alignItems='center'
        justifyItems='center'
        my='40px'>
        <List
          sx={{
            overflow: "scroll",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            height: 600
          }}>
          {carCards.map((car, index) => {
            return (
              <ListItem key={index}>
                <CarModelCard
                  image={car.image}
                  name={car.name}
                  desc={car.description}></CarModelCard>
              </ListItem>
            );
          })}
        </List>
      </Stack>
    </Paper>
  );
};
