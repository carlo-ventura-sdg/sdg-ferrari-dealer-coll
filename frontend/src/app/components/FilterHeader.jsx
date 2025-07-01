import { Stack } from "@mui/material";
import { FerrariButton } from "./FerrariButton";
import { HeaderDataSection } from "./HeaderDataSection";
import { FilterSection } from "./FilterSection";


export const FilterHeader = (props) => {
  return (
    <Stack direction='column'>
      <Stack direction='row' justifyContent='space-between'>
        <HeaderDataSection></HeaderDataSection>
        <FerrariButton></FerrariButton>
      </Stack>
      <FilterSection></FilterSection>
    </Stack>
  );
};
