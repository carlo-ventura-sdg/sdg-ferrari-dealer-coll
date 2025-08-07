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

// const data = [
//   {
//     dealer: "Dealer name",
//     model: "Roma Spider",
//     orders: "717000000696",
//     status: "Frozen",
//   },
//   { dealer: "", model: "", orders: "717000000696", status: "Actual" },
//   { dealer: "", model: "", orders: "717000000696", status: "PO Allocated" },
//   { dealer: "", model: "", orders: "717000000696", status: "Frozen" },
//   {
//     dealer: "",
//     model: "12 Cilindri",
//     orders: "717000000696",
//     status: "OC Allocated",
//   },
//   { dealer: "", model: "", orders: "717000000696", status: "Actual" },
//   { dealer: "", model: "", orders: "717000000696", status: "PO Allocated" },
//   {
//     dealer: "Dealer name",
//     model: "Roma Spider",
//     orders: "717000000696",
//     status: "OC Allocated",
//   },
//   { dealer: "", model: "", orders: "717000000696", status: "Actual" },
//   { dealer: "", model: "", orders: "717000000696", status: "Frozen" },
// ];

// const defaultRow = {
//   customerNumber: "904644",
//   customerName: "Customer name",
//   wDate: "08/05/2024",
//   allocationDate: "08/05/2024",
//   opt: "91",
//   orderCall: "2025/08",
// };

const regionColumnsNames = [
  "DEALER",
  "MODEL",
  "ORDER",
  "CUSTOMER NUMBER",
  "CUSTOMER NAME",
  "W DATE [FIFO]",
  "ALLOCATION DATE",
  "OPT",
  "ORDER CALL",
  "STATUS",
];
const dealerColumnsNames = [
  "MODEL",
  "ORDER",
  "CUSTOMER",
  "W DATE [FIFO]",
  "OPT",
  "ORDER CALL",
  "STATUS",
];
const getStatusBar = (status) => {
  const colors = {
    Frozen: "#1C3B8A",
    Actual: "#4FC483",
    "PO Allocated": "#8DDAEC",
    "OC Allocated": "#EFB166",
  };
  return (
    <Box display='flex' alignItems='center'>
      <Box flexGrow={1}>{status}</Box>
      <Box width={6} height={49} bgcolor={colors[status] || "grey"} ml={1} />
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
  const currentColumns =
    currentTab === "RD" ? regionColumnsNames : dealerColumnsNames;

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
        <Table size='small' stickyHeader>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#e0e0e0" }}>
              {currentColumns.map((column, index) => (
                <TableCell
                  sx={{
                    fontFamily: "inherit",
                    fontSize: "11px",
                    fontWeight: "400px",
                    color: "#8F8F8F",
                  }}>
                  <b>{column}</b>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentTab == "RD"
              ? paginatedData.map((row, idx) => (
                  <TableRow
                    key={idx}
                    sx={{
                      backgroundColor: idx % 2 === 0 ? "#f9f9f9" : "#eeeeee",
                    }}>
                    <TableCell
                      sx={{
                        fontFamily: "inherit",
                        fontSize: "11px",
                        fontWeight: "400px",
                        color: "#181818",
                      }}>
                      {row.dealer}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "inherit",
                        fontSize: "11px",
                        fontWeight: "400px",
                        color: "#181818",
                      }}>
                      {row.model}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "inherit",
                        fontSize: "11px",
                        fontWeight: "400px",
                        color: "#181818",
                      }}>
                      {row.dso}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "inherit",
                        fontSize: "11px",
                        fontWeight: "400px",
                        color: "#181818",
                      }}>
                      {row.customer}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "inherit",
                        fontSize: "11px",
                        fontWeight: "400px",
                        color: "#181818",
                      }}>
                      customer name
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "inherit",
                        fontSize: "11px",
                        fontWeight: "400px",
                        color: "#181818",
                      }}>
                      'data'
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "inherit",
                        fontSize: "11px",
                        fontWeight: "400px",
                        color: "#181818",
                      }}>
                      'data'
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "inherit",
                        fontSize: "11px",
                        fontWeight: "400px",
                        color: "#181818",
                      }}>
                      {row.status_id}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "inherit",
                        fontSize: "11px",
                        fontWeight: "400px",
                        color: "#181818",
                      }}>
                      'order call'
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "inherit",
                        fontSize: "11px",
                        fontWeight: "400px",
                        color: "#181818",
                      }}>
                      {getStatusBar(row.dso_status)}
                    </TableCell>
                  </TableRow>
                ))
              : paginatedData.map((row, idx) => (
                  <TableRow
                    key={idx}
                    sx={{
                      backgroundColor: idx % 2 === 0 ? "#f9f9f9" : "#eeeeee",
                    }}>
                    <TableCell
                      sx={{
                        fontFamily: "inherit",
                        fontSize: "11px",
                        fontWeight: "400px",
                        color: "#181818",
                      }}>
                      {row.model}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "inherit",
                        fontSize: "11px",
                        fontWeight: "400px",
                        color: "#181818",
                      }}>
                      {row.dso}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "inherit",
                        fontSize: "11px",
                        fontWeight: "400px",
                        color: "#181818",
                      }}>
                      {row.customer}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "inherit",
                        fontSize: "11px",
                        fontWeight: "400px",
                        color: "#181818",
                      }}>
                      'data'
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "inherit",
                        fontSize: "11px",
                        fontWeight: "400px",
                        color: "#181818",
                      }}>
                      {row.status_id}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "inherit",
                        fontSize: "11px",
                        fontWeight: "400px",
                        color: "#181818",
                      }}>
                      'order call'
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "inherit",
                        fontSize: "11px",
                        fontWeight: "400px",
                        color: "#181818",
                      }}>
                      {getStatusBar(row.dso_status)}
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
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
