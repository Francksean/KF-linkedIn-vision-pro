import React from 'react'
import './navbar.css'
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import Badge from '@mui/material/Badge';


function Navbar() {
  return (
    <div className='navbar'>
      <CottageRoundedIcon style={{height:'25px', width:'25px', color:'rgba(255,255,255,0.8)'}}/>
      <ConnectWithoutContactRoundedIcon style={{height:'25px', width:'25px', color:'rgba(255,255,255,0.8)'}}/>
      <Badge badgeContent={4} color="error">
        <NotificationsRoundedIcon style={{height:'25px', width:'25px', color:'rgba(255,255,255,0.8)'}}/>
      </Badge>
      <WorkRoundedIcon style={{height:'25px', width:'25px', color:'rgba(255,255,255,0.8)'}}/>
    </div>
  )
}

export default Navbar