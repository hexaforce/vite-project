import { Fragment, h } from 'preact'
import { Link } from 'preact-router/match'
import { useState } from 'preact/hooks'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import MuiDrawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { ThemeProvider, createTheme, styled } from '@mui/material/styles'
import AssignmentIcon from '@mui/icons-material/Assignment'
import BarChartIcon from '@mui/icons-material/BarChart'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import DashboardIcon from '@mui/icons-material/Dashboard'
import EditIcon from '@mui/icons-material/Edit'
import LayersIcon from '@mui/icons-material/Layers'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import MenuIcon from '@mui/icons-material/Menu'
import PeopleIcon from '@mui/icons-material/People'
import PostAddIcon from '@mui/icons-material/PostAdd'
import PsychologyIcon from '@mui/icons-material/Psychology'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Copyright from '@/contents/component/Copyright'

const drawerWidth: number = 240

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}))

const mdTheme = createTheme()

function MenuLink(props: any) {
  const { icon, text, href } = props
  return (
    <Fragment>
      <ListItemButton href={href}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </Fragment>
  )
}

function MenuLinkPro(props: any) {
  const { icon, text, href } = props
  return (
    <ListItemButton href={href} sx={{ height: 50 }}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
      <Chip sx={{ mt: 6 }} label='Pro Plan' color='primary' variant='outlined' size='small' />
    </ListItemButton>
  )
}

export default function App({ children, path }: { children: JSX.Element; path: string }) {
  const [open, setOpen] = useState(false)
  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

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

        <Drawer variant='permanent' open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component='nav'>
            <MenuLink icon={<PostAddIcon />} text='新しい記事' href='/ThemeSelectio' />
            <MenuLink icon={<LibraryBooksIcon />} text='作成した記事一覧' href='/' />
            <MenuLinkPro icon={<PsychologyIcon />} text='AIサポート機能' href='/Pricing' />
            <MenuLink icon={<ManageAccountsIcon />} text='UI設定' href='/Content' />
            {/* <MenuLink icon={<ShoppingCartIcon />} text='Album' href='/Album' /> */}
            {/* <MenuLink icon={<PeopleIcon />} text='Pricing' href='/Pricing' /> */}
            {/* <MenuLink icon={<ShoppingCartIcon />} text='Album2' href='/Album2' />
            <MenuLink icon={<PeopleIcon />} text='Pricing2' href='/Pricing2' />
            <MenuLink icon={<PeopleIcon />} text='コンテンツ' href='/Content' /> */}
            {/* <MenuLink icon={<BarChartIcon />} text='SignIn' href='/SignIn' /> */}
            {/* <MenuLink icon={<LayersIcon />} text='SignInSide' href='/SignInSide' /> */}
            {/* <MenuLink icon={<AssignmentIcon />} text='SignUp' href='/SignUp' /> */}
            <Divider sx={{ my: 1 }} />
            <ListSubheader component='div' inset>
              管理者メニュー
            </ListSubheader>
            <MenuLink icon={<DashboardIcon />} text='StickyFooter' href='/StickyFooter' />
          </List>
        </Drawer>
        <Box
          component='main'
          sx={{
            backgroundColor: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900]),
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
            {children}
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
