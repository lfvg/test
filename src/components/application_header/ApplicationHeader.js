import { AppBar, Box, Button, IconButton, Menu, Stack, MenuItem, Toolbar } from "@mui/material";
import LogoDevRoundedIcon from '@mui/icons-material/LogoDevRounded';
import AccountCircle from '@mui/icons-material/AccountCircle';
export default function ApplicationHeader(){
    return (
        <AppBar>
            <Toolbar>
            <IconButton size="large"  edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}>
                <LogoDevRoundedIcon/>
            </IconButton>
            <Stack direction="row">
                <Button>
                    B1
                </Button>
                <Button>
                    B2
                </Button>
                <Button>
                    B3
                </Button>
                <Button>
                    B4
                </Button>
                <Button>
                    B5
                </Button>
            </Stack>
        <Menu>
            <MenuItem>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
    </Toolbar>
        </AppBar>
        
    );
}