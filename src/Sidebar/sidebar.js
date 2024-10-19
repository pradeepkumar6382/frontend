import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Box, Typography,Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link, Outlet } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = ({setislog}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xl={2}>
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#f5f5f5',  
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* Logo or branding */}
      <Box sx={{ padding: '20px', textAlign: 'center', backgroundColor: '#ffffff', borderBottom: '1px solid #ddd' }}>
        <Typography variant="h6" noWrap>
          Demo project
        </Typography>
      </Box>

       <List>
        <ListItem button component={Link} to="/Home">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home"   />
        </ListItem>

        <ListItem  button component={Link} to="/courses">
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="My Courses" />
        </ListItem>

        <ListItem  button component={Link} to="/settings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>

        <ListItem  button component={Link} to="/profile">
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile"  />
        </ListItem>

        <Divider />

        <ListItem  button component={Link} to="/help">
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItem>

        <ListItem button onClick={()=>{ setislog({islog:false}); localStorage.clear()}}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Sign Out" />
        </ListItem>
      </List>
    </Drawer>
    </Grid>
    <Grid item xl={10}>
<Outlet/>
    </Grid>
    </Grid>
  );
};

export default Sidebar;
