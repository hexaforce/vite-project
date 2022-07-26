import { h, Fragment, Component } from 'preact'
import { useState } from 'preact/hooks'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import DrawerMenu from './SideDrawer2'
import HeadAppBar from './HeadAppBar2'

// const drawerWidth = 240;

const Main = styled(Fragment, { shouldForwardProp: (prop) => prop !== 'open' })<{ open?: boolean; }>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));


const DrawerHeader = styled(Fragment)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default ({ children, path }: { children: JSX.Element; path: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HeadAppBar open={open} setOpen={setOpen} />
      <DrawerMenu open={open} setOpen={setOpen} />
      <Main open={open}>
        {/* <DrawerHeader /> */}
        {children}
      </Main>
    </Box>
  );
}
