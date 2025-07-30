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
import { FerrariOrderCard } from "../../DCHeader/FerrariOrderCard";

export const DragDropModelSection = (props) => {
  const { selectedModel, slots, months, activeItem } = props;

  return (
    <>
      <Stack
        direction='row'
        sx={{
          display: "flex",
          maxHeight: "650px",
          position: "relative",
          overflowX: "auto",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            height: "2px",
            backgroundColor: "#d2d2d2",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#181818",
            borderRadius: "1px",
          },
        }}>
        <Stack direction='row' sx={{ display: "flex", position: "relative" }}>
          {months.map((month, index) => {
            const slotKey = props.getSlotKey
              ? props.getSlotKey(month, selectedModel)
              : `${month}--${selectedModel}`;

            return (
              <Stack
                key={month}
                sx={{
                  minWidth: 570,
                  color: "#969696",
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}>
                <Stack
                  position='sticky'
                  sx={{
                    zIndex: 1,
                    top: 0,
                    mb: "20px",
                    minWidth: "570px",
                    backgroundColor: "white",
                    textAlign: "center",
                    borderBottom: "1px solid #181818", // 👈 horizontal base line
                  }}>
                  <Typography
                    variant='body'
                    fontSize='14px'
                    sx={{ mb: "10px", color: "#181818" }}>
                    {month}
                  </Typography>
                  <Box
                    sx={{
                      width: "1px",
                      height: "15px",
                      backgroundColor: "#444", // vertical line color
                      margin: "0 auto",
                    }}
                  />
                </Stack>

                {/* Slot rendering */}
                {slots?.[selectedModel] && (
                  <DragDropSlot slotId={slotKey} items={slots[selectedModel]} />
                )}
              </Stack>
            );
          })}
        </Stack>
      </Stack>

      <DragOverlay>
        {activeItem ? <FerrariOrderCard item={activeItem} /> : null}
      </DragOverlay>
    </>
  );
};
