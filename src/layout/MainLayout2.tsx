import { Component, Fragment, h } from 'preact'
import { useState } from 'preact/hooks'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material'
import { styled, ThemeProvider, createTheme, useTheme } from '@mui/material/styles'
import {
  ChevronLeft,
  ChevronRight,
  Menu
} from '@mui/icons-material'
import MenuList from '@/layout/MenuList'

const mdTheme = createTheme()
const drawerWidth = 240

export default ({ children, path }: { children: JSX.Element; path: string }) => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <AppBar position='fixed' open={open}>
          <Toolbar>
            <IconButton color='inherit' aria-label='open drawer' onClick={handleDrawerOpen} edge='start' sx={{ mr: 2, ...(open && { display: 'none' }) }}>
              <Menu />
            </IconButton>
            <Typography variant='h6' noWrap component='div'>
              AIエディタ
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          variant='persistent'
          anchor='left'
          open={open}
          sx={{
            // width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>{theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}</IconButton>
          </DrawerHeader>
          <Divider />
          <MenuList />
        </Drawer>

        <Main open={open}>
          <DrawerHeader />
          {children}
        </Main>
      </Box>
    </ThemeProvider>
  )
}

const Main = styled(Fragment, { shouldForwardProp: (prop) => prop !== 'open' })<{ open?: boolean }>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}))

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const DrawerHeader = styled(Fragment)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))
