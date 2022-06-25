import { Fragment, h } from 'preact'
import { useState } from 'preact/hooks'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import MuiDrawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import Toolbar from '@mui/material/Toolbar'
import { styled } from '@mui/material/styles'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import DashboardIcon from '@mui/icons-material/Dashboard'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import PostAddIcon from '@mui/icons-material/PostAdd'
import PsychologyIcon from '@mui/icons-material/Psychology'
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import StorageIcon from '@mui/icons-material/Storage';
import QuizIcon from '@mui/icons-material/Quiz';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

const drawerWidth: number = 240

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

function MenuLink(props: any) {
  const { icon, text, href } = props
  return (
    <ListItemButton href={href}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
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

export default function DrawerMenu(props: any) {
  const { open, setOpen } = props
  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
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
        <MenuLinkPro icon={<PsychologyIcon />} text='AIサポート機能' href='/AiSupport' />
        <MenuLink icon={<ManageAccountsIcon />} text='UI設定' href='/UiPreference' />

        {/* <MenuLink icon={<ShoppingCartIcon />} text='Album' href='/Album' /> */}
        {/* <MenuLink icon={<PeopleIcon />} text='Pricing' href='/Pricing' /> */}
        {/* <MenuLink icon={<ShoppingCartIcon />} text='Album2' href='/Album2' /> */}
        {/* <MenuLink icon={<PeopleIcon />} text='Pricing2' href='/Pricing2' /> */}
        {/* <MenuLink icon={<PeopleIcon />} text='コンテンツ' href='/Content' /> */}
        {/* <MenuLink icon={<BarChartIcon />} text='SignIn' href='/SignIn' /> */}
        {/* <MenuLink icon={<LayersIcon />} text='SignInSide' href='/SignInSide' /> */}
        {/* <MenuLink icon={<AssignmentIcon />} text='SignUp' href='/SignUp' /> */}
        {/* <MenuLink icon={<DashboardIcon />} text='StickyFooter' href='/StickyFooter' /> */}

        <Divider sx={{ my: 1 }} />
        <ListSubheader component='div' inset>
          管理者メニュー
        </ListSubheader>
        <MenuLink icon={<FormatListNumberedIcon />} text='テーマの編集' href='/management/ArticleTheme' />
        <MenuLink icon={<QuizIcon />} text='質問の編集' href='/management/ArticleQuestion' />
        <MenuLink icon={<MiscellaneousServicesIcon />} text='システム設定' href='/management/SystemSetting' />
        <MenuLink icon={<GroupsIcon />} text='ユーザ管理' href='/management/UserManage' />
        <MenuLink icon={<ManageHistoryIcon />} text='メンテナンス' href='/management/Maintenance' />

      </List>
    </Drawer>
  )
}
