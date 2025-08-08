"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  TablePagination,
  Divider,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RegionTable } from "./RegionTable";
import { DealerTable } from "./DealerTable";
import { legendItems, mapStatusToLabel } from "@/app/utils/legend";

const getStatusBar = (status) => {
  const label = mapStatusToLabel(status);
  const color = legendItems.find(item => item.label === label)?.color || 'grey';

  return (
    <Box display='flex' alignItems='center'>
      <Box flexGrow={1}>{label}</Box>
      <Box width={6} height={49} bgcolor={color} ml={3} />
    </Box>
  );
};

export default function TableSection() {
  const { currentTab, dealerData } = useSelector(
    (state) => state.anagraficaDso
  );
  const { regionData } = useSelector((state) => state.regionSection);
  const [page, setPage] = useState(0);
  const rowsPerPage = 50;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const currentData =
    currentTab === "RD" ? regionData.reg_response : dealerData.db_response;

  const paginatedData = currentData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box m={2}>
      {/* <Divider></Divider> */}
      <TableContainer
        component={"div"}
        sx={{
          maxHeight: 500,
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
        {currentTab === "RD" ? (
          <RegionTable paginatedData={paginatedData} getStatusBar={getStatusBar}></RegionTable>
        ) : (
          <DealerTable paginatedData={paginatedData} getStatusBar={getStatusBar}></DealerTable>
        )}
      </TableContainer>
      <TablePagination
        sx={{
          "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows":
            {
              fontFamily: "inherit",
              fontSize: "11px",
              fontWeight: "400px",
              color: "#181818",
            },
        }}
        component='div'
        count={currentData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[]}
      />
    </Box>
  );
}
