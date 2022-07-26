import { FormatListNumbered, Groups, LibraryBooks, ManageAccounts, ManageHistory, MiscellaneousServices, Payment, PostAdd, Psychology, Quiz } from '@mui/icons-material'
import { Chip, Divider, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'
import { Component, Fragment, h } from 'preact'

const MenuLink = (props: any) => {
  const { icon, text, href } = props
  return (
    <ListItemButton href={href}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  )
}

const MenuLinkForPro = (props: any) => {
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
  return (
    <List component='nav'>
      <MenuLink icon={<PostAdd />} text='新しい記事' href='/ThemeSelectio' />
      <MenuLink icon={<LibraryBooks />} text='作成した記事一覧' href='/' />
      <MenuLinkForPro icon={<Psychology />} text='AIアドバイス機能' href='/AiSupport' />
      <MenuLink icon={<ManageAccounts />} text='UI設定' href='/UiPreference' />
      <MenuLink icon={<Payment />} text='Pricing' href='/Pricing' />
      <Divider sx={{ my: 1 }} />
      <ListSubheader component='div' inset>
        管理者メニュー
      </ListSubheader>
      <MenuLink icon={<FormatListNumbered />} text='テーマの編集' href='/management/ArticleTheme' />
      <MenuLink icon={<Quiz />} text='質問の編集' href='/management/ArticleQuestion' />
      <MenuLink icon={<MiscellaneousServices />} text='システム設定' href='/management/SystemSetting' />
      <MenuLink icon={<Groups />} text='ユーザ管理' href='/management/UserManage' />
      <MenuLink icon={<ManageHistory />} text='メンテナンス' href='/management/Maintenance' />
    </List>
  )
}
