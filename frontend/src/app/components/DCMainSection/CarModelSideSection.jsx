"use client";
import { List, ListItem, Paper, Stack } from "@mui/material";
import { CarModelCard } from "./CarModelCard";
import { useSelector } from "react-redux";

export const carCards = [
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
  const { dealerData }  = useSelector((state) => state.anagraficaDso);
  return (
    <Stack
      sx={{
        paddingTop: "30px",
        width: 240,
        flexShrink: 0,
        position: "sticky",
        left: 0,
        zIndex: 2,
        backgroundColor: "white",
        // borderRight: "1px solid #ccc",
      }}>
      {/* {dealerData.db_response.map((car) => (
        <Stack key={car.vettura} sx={{ backgroundColor: "white" }}>
          <CarModelCard
            // image={car.image}
            name={car.model}
            desc={car.vettura}
          />
        </Stack>
      ))} */}
    </Stack>
  );
};

