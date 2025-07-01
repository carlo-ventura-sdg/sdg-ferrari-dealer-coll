import { FerrariHeaderTabs } from "./FerrariHeaderTabs";
import { Stack, AppBar, Toolbar, IconButton } from "@mui/material";
export const FerrariHeader = (props) => {
  return (
    <Stack sx={{ flexGrow: 1, }}>
      <AppBar position='static'sx={{ backgroundColor:'red'}}>
        <Toolbar>
          <IconButton
            size='medium'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}>
            Logo
          </IconButton>
          <FerrariHeaderTabs></FerrariHeaderTabs>
        </Toolbar>
      </AppBar>
    </Stack>
  );
};
