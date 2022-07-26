import { h, Fragment, Component } from 'preact'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import GroupsIcon from '@mui/icons-material/Groups'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import ManageHistoryIcon from '@mui/icons-material/ManageHistory'
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices'
import PaymentIcon from '@mui/icons-material/Payment'
import PostAddIcon from '@mui/icons-material/PostAdd'
import PsychologyIcon from '@mui/icons-material/Psychology'
import QuizIcon from '@mui/icons-material/Quiz'

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

export default () => {
  return <List component='nav'>
    <MenuLink icon={<PostAddIcon />} text='新しい記事' href='/ThemeSelectio' />
    <MenuLink icon={<LibraryBooksIcon />} text='作成した記事一覧' href='/' />
    <MenuLinkPro icon={<PsychologyIcon />} text='AIアドバイス機能' href='/AiSupport' />
    <MenuLink icon={<ManageAccountsIcon />} text='UI設定' href='/UiPreference' />
    <MenuLink icon={<PaymentIcon />} text='Pricing' href='/Pricing' />
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
}
