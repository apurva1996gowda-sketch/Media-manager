import { AppBar, Avatar, Badge, Box, Button, IconButton, TextField, Toolbar, Tooltip } from '@mui/material'
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MicNoneIcon from '@mui/icons-material/MicNone';

function Topbar() {

  return (
    <>
    {/* Topbar */}
      <AppBar sx={{ position: 'static', backgroundColor: 'white' }} elevation={0}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          <Box sx={{ display: 'flex', gap: 5,alignItems:'center' }}>
            <IconButton><MenuIcon sx={{ color: 'black', fontSize: 35 }} /></IconButton>
            <SlowMotionVideoIcon sx={{ color: 'red', fontSize: 35 }} />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TextField placeholder='Search' sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderRadius: 10, height: 48 } }, "& .MuiOutlinedInput-input": { padding: "10px 14px" }, width: 500 }} />
          <Tooltip title='Search with your voice'>
              <IconButton>
                <MicNoneIcon sx={{ color: 'black', fontSize: 35 }} />
              </IconButton>
            </Tooltip>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <Button variant='contained' sx={{ backgroundColor: '#f2f2f2', color: 'black', textTransform: 'none', fontWeight: '600', fontSize: 15, borderRadius: 5 }} startIcon><AddIcon />Create</Button>
            <Tooltip title='Notifications'>
              <IconButton>
                <Badge badgeContent={5} color='error'><NotificationsNoneIcon sx={{ color: 'black', fontSize: 35 }} /></Badge>
              </IconButton>
            </Tooltip>
            <Avatar src='../public/profilephoto.jpg' alt='apurva' />
          </Box>
          
        </Toolbar>
      </AppBar>

      {/*Side bar*/}
      
    </>
  )
}

export default Topbar