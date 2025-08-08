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
export const RegionTable = (props) => {
  return (
    <Table size='small' stickyHeader>
      <TableHead>
        <TableRow sx={{ backgroundColor: "#e0e0e0" }}>
          {regionColumnsNames.map((column, index) => (
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
        {props.paginatedData.map((row, idx) => (
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
              {row.dealer_desc}
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "inherit",
                fontSize: "11px",
                fontWeight: "400px",
                color: "#181818",
              }}>
              {row.model_desc}
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
              {row.customer_code}
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "inherit",
                fontSize: "11px",
                fontWeight: "400px",
                color: "#181818",
              }}>
              {row.customer_desc}
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "inherit",
                fontSize: "11px",
                fontWeight: "400px",
                color: "#181818",
              }}>
              {row.day_w_desc}
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
              {row.flag_order_call}
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "inherit",
                fontSize: "11px",
                fontWeight: "400px",
                color: "#181818",
              }}>
              {props.getStatusBar(row.status_id)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
