"use client";
import { Paper, Stack } from "@mui/material";
import { DCMainTabs } from "./DCMainTabs";
import { useEffect, useState } from "react";

export const DCMainSection = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/dealerData") // ← now uses Next.js API route as proxy
      .then((res) => res.json())
      .then((json) => {
        setData(json.db_response);
      })
      .catch((err) => console.error("Frontend error:", err));
  }, []);
  return (
    <Stack direction='row'>
      <DCMainTabs
        activeItem={props.activeItem}
        months={props.months}
        getSlotKey={props.getSlotKey}
        slots={props.slots}></DCMainTabs>
    </Stack>
  );
};
