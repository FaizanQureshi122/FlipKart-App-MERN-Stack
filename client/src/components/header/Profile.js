

import { Box,Menu,styled, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import { PowerSettingsNew } from '@mui/icons-material';

const Component = styled(Menu)`
 margin-top : 5px;
`
const Logout = styled(Typography)`
 font-size: 16px;
 margin-left: 16px;
`

const Profile = ({account, setAccount}) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  }
  const handleClose = () => {
    setOpen(false)
  }

   const logoutUser = () => {
    setAccount('');
   } 

    return (
    <>
      <Box onClick={handleClick}> 
        <Typography style={{ marginTop: 2, cursor:'pointer'}}>{account}</Typography>
      </Box>
     
<Component 
anchorEl={open}
open={Boolean(open)}
onClose={handleClose}
> <MenuItem onClick={()=> {handleClose(); logoutUser(); }}>
    <PowerSettingsNew color='primary' fontSize='small'/>
    <Logout>Logout</Logout>
    </MenuItem>
    </Component>     
    
    </>
  )
}

export default Profile
