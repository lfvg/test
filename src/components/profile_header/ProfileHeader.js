import { Avatar, Card, Paper, Box, Typography, Icon, Stack } from "@mui/material";
import InvertColorsRoundedIcon from '@mui/icons-material/InvertColorsRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';

export default function ProfileHeader(){
return(
    <Card sx={{position:"relative", display:"block", m: 4}}>
        <Paper elevation={0} sx={{height: 200, backgroundColor: "red"}}>
            {/* todo adicionar um if pra imagem ou default */}
        </Paper>
        <Box spacing={2} direction="row" height={86} marginLeft="120px" padding="12px">
            <Typography variant="h5">John Doe</Typography>
            <Stack direction="row">
                <Typography variant="h6"><InvertColorsRoundedIcon/> Teacher</Typography>
                <Typography variant="h6"><LocationOnRoundedIcon/> Teacher</Typography>
                <Typography variant="h6"><CalendarTodayRoundedIcon/> Teacher</Typography>
            </Stack>
        </Box>
        <Avatar variant="rounded" 
        src="https://randomuser.me/api/portraits/women/27.jpg" 
        sx={{width: 96, height: 96, position: "absolute",bottom:0, left: 12, bottom: 12, borderWidth:"4px", borderColor: "white"}}/>
    </Card>
);

}