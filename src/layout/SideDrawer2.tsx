import { h, Fragment, Component } from 'preact'
import { useState } from 'preact/hooks'
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DrawerMenuItem from '@/layout/MenuItem'

// const drawerWidth = 240;

const DrawerHeader = styled(Fragment)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default (props: any) => {
  const theme = useTheme();
  const { open, setOpen } = props
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      sx={{
        // width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          // width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <DrawerMenuItem />
    </Drawer>
  );
}
