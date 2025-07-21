"use client";
import {
  Box,
  Paper,
  Typography,
  Divider,
  ListItem,
  Stack,
  List,
} from "@mui/material";
import { DragOverlay } from "@dnd-kit/core";
import { DragDropSlot } from "./DragDropSlot";
import { FerrariOrderCard } from "../DCHeader/FerrariOrderCard";
import { CarModelCard } from "./CarModelCard";
import { carRows } from "../FerrariHeader/FerrariHeaderTabs";
import { FerrariOrderCardBase } from "../DCHeader/FerrariOrderCardBase";

export const DragDropSection = (props) => {
  return (
    <>
      <Stack
        direction='row'
        sx={{
          display: "flex",
          // overflow: "auto",
          maxHeight: "650px",
          position: "relative",
          whiteSpace: "nowrap",
          overflowX: "auto",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            height: "42px", 
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#c1c1c1",
            borderRadius: "1px",
          },
        }}>
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
          {carRows.map((car) => (
            <Stack key={car.key} sx={{ backgroundColor: "white" }}>
              <CarModelCard
                image={car.image}
                name={car.name}
                desc={car.description}
              />
            </Stack>
          ))}
        </Stack>

        {/* Scrollable months */}
        <Stack direction='row' sx={{ display: "flex" }}>
          {props.months.map((month) => (
            <Stack
              key={month}
              sx={{ minWidth: 570, color: "#969696", display: "flex" }}>
              <Stack
                position='sticky'
                sx={{
                  zIndex: 1,
                  top: 0,
                  minWidth: "570px",

                  backgroundColor: "white",
                  display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                }}>
                <Typography
                  variant='body'
                  fontWeight='bold'
                  sx={{ mb: "15px" }}>
                  {month}
                </Typography>
              </Stack>

              {carRows.map((car) => {
                const slotId = props.getSlotKey(month, car.key);
                return (
                  <Stack
                    key={slotId}
                    sx={{
                      height: 180,
                      mt: 4,
                      borderTop: "2px solid #878787",
                    }}>
                    <Box
                      sx={{
                        height: 20,
                        width: 2,
                        backgroundColor: "#cfcfcf",
                        margin: "0 auto",
                      }}
                    />
                    <DragDropSlot
                      slotId={slotId}
                      items={props.slots[slotId] || []}
                    />
                  </Stack>
                );
              })}
            </Stack>
          ))}
        </Stack>
      </Stack>
      <DragOverlay>
        {props.activeItem ? <FerrariOrderCard item={props.activeItem} /> : null}
      </DragOverlay>
    </>
  );
};
