import { Button, Stack, Typography } from "@mui/material";

export const AllocateOrdersHeaderSection = (props) => {
    
    return (
        <Stack direction='column'>
            <Typography variant="body" fontSize='13px' fontWeight={400} color="#8F8F8F" >Orders to be allocated</Typography>
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
                <Typography variant="body" fontSize='13px' fontWeight={400} color='#181818'>25</Typography>
                <Button variant="text"   sx={{textDecorationLine:'underline', fontSize:'13px', fontWeight:600, fontFamily:'inherit', color:'#DA291C', textTransform: "none"}}  onClick={props.toggleDrawer('right', true)}>Allocate</Button>
            </Stack>
        </Stack>
    );
};