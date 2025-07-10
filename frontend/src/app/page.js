import Image from "next/image";
import styles from "./page.module.css";
import { FerrariHeader } from "./components/FerrariHeader/FerrariHeader";
import localFont from 'next/font/local';
import { Box } from "@mui/material";


const ferrariSans = localFont({
  src: '../../public/fonts/Ferrari-SansRegular.woff2',
});
export default function Home() {
  return (
    <Box sx={{ display: 'flex' }}>
      <FerrariHeader style={{ fontFamily: ferrariSans.style.fontFamily }}></FerrariHeader></Box>
  );
}
