// "use client";
// import { List, ListItem, Paper, Stack } from "@mui/material";
// import { useSelector } from "react-redux";

// export const DealersSideSection = (props) => {
//   const { dealers } = useSelector((state) => state.regionSection);
//   return (
//     <Stack
//       sx={{
//         paddingTop: "30px",
//         width: "180px",
//         flexShrink: 0,
//         position: "sticky",
//         left: 0,
//         zIndex: 2,
//         backgroundColor: "white",
//       }}>
//       {dealers.map((d, index) => (
//         <Stack
//           key={index}
//           sx={{
//             backgroundColor: "white",
//             borderLeft: "2px solid #000",
//             pl: "10px",
//             mb: "30px",
//           }}>
//           {d}
//           {/* <CarModelCard
//             // image={car.image}
//             name={car.model}
//             desc={car.vettura}
//           /> */}
//         </Stack>
//       ))}
//     </Stack>
//   );
// };
