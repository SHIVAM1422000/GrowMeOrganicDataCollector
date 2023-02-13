import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
export default function NavigationComponent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'black', marginBottom:'5vh',padding:'10px', color:'greenyellow'}}>
        <Toolbar variant="dense">
              <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            GrowMeOrganic
          </Typography>
      
    
           <Typography variant="h6" color="inherit" component="div" sx={{ ml: 3}}>
           <Link to="/" style={{color:'white' , textDecoration:'none', cursor:'pointer'}}>Show Form</Link>
          </Typography>
         
           <Typography variant="h6" color="inherit" component="div" sx={{ ml: 3}}>
           <Link to="/display" style={{color:'white' , textDecoration:'none', cursor:'pointer'}}>Details </Link>
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}