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
import { DealersSideSection } from "./DealersSideSection";
import { useSelector } from "react-redux";

export const DragDropModelSection = (props) => {
  const { selectedModel, slots, months, activeItem } = props;
  const { currentTab } = useSelector((state) => state.anagraficaDso);
  const { carSlotsForDealer } = useSelector((state) => state.regionSection);

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
            width: "2px",
            backgroundColor: "#d2d2d2",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#181818",
            borderRadius: "1px",
          },
        }}>
        <Stack direction='column'>
          {/* Header Row: Month Labels */}
          <Stack direction='row' sx={{ display: "flex", position: "sticky" }}>
            <Box sx={{ width: 120 }} />
            {months.map((month) => (
              <Stack
                key={month}
                position='sticky'
                sx={{
                  zIndex: 1,
                  top: 0,
                  mb: "20px",
                  minWidth: "570px",
                  backgroundColor: "white",
                  textAlign: "center",
                  borderBottom: "1px solid #181818",
                  pointerEvents: 'none',
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
                    backgroundColor: "#444",
                    margin: "0 auto",
                  }}
                />
              </Stack>
            ))}
          </Stack>

          {/* Dealer Rows */}
          {Object.entries(slots).map(([dealerId, dealerItems]) => (
            <Stack
              direction='row'
              key={dealerId}
              alignItems='flex-start'
              spacing={0}
              sx={{ mb: 3 }} // Add space between dealers
            >
              {/* Dealer Name Column */}
              {currentTab === "RD" && (
                <Stack
                  sx={{
                    backgroundColor: "white",
                    borderLeft: "2px solid #000",
                    pl: "10px",
                    minWidth: 120,
                    height:' 100%',
                    alignItems: "flex-start",
                    position: "sticky",
                    pointerEvents: 'none',
                    left: 0,
                    zIndex: 2,
                  }}>
                  <Typography
                    variant='body'
                    color='#000'
                    fontWeight={400}
                    fontSize='11px'
                    sx={{ pt: "8px" }}>
                    {dealerId}
                  </Typography>
                </Stack>
              )}

              {/* Month Columns per Dealer */}
              {months.map((month, index) => {
                const monthSlots = dealerItems?.[month] || [];

                return (
                  <Stack
                    key={index}
                    sx={{
                      minWidth: 550,
                      display: "flex",
                      alignItems: "flex-start",
                      mx: "30px",
                    }}>
                    <DragDropSlot
                      slotId={`${dealerId}-${month}`}
                      items={monthSlots}
                    />
                  </Stack>
                );
              })}
            </Stack>
          ))}
        </Stack>
      </Stack>

      <DragOverlay zIndex={9999}>
        {activeItem ? <FerrariOrderCard item={activeItem} /> : null}
      </DragOverlay>
    </>
  );
};
