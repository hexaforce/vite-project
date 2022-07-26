import { h } from 'preact'
import { useState } from 'preact/hooks'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'

const drawerWidth: number = 240

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

export default (props: any) => {
  const { open, setOpen } = props

  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <AppBar position='absolute' open={open} elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
      <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
          flexWrap: 'wrap',
        }}
      >
        <IconButton
          edge='start'
          color='inherit'
          aria-label='open drawer'
          onClick={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography component='h1' variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
          AIエディタ
        </Typography>

        <Stack direction='row' spacing={2} sx={{ my: 1, typography: 'subtitle2' }}>
          <Button elevation={0} size='small' variant='contained' color='success' href='/SignIn'>
            ログイン
          </Button>
          <Button elevation={0} size='small' variant='outlined' color='inherit' href='/SignUp'>
            新規登録
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
