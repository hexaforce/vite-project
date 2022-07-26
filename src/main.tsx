import { Component, h, render } from 'preact'
import { Router, route } from 'preact-router'
import Album from '@/contents/Album'
import ArticleList from '@/contents/ArticleList'
import ThemeSelectio from '@/contents/ArticleTheme'
import Pricing from '@/contents/Pricing'
import SignIn from '@/contents/SignIn'
import SignInSide from '@/contents/SignInSide'
import SignUp from '@/contents/SignUp'
import StickyFooter from '@/contents/StickyFooter'
import Write from '@/contents/Write'
import AiSupport from '@/contents/ai-support/AiSupport'
import Checkout from '@/contents/checkout/Checkout'
import UiPreference from '@/contents/ui-preference/UiPreference'
import ArticleQuestion from '@/management/ArticleQuestion'
import ArticleTheme from '@/management/ArticleTheme'
import Maintenance from '@/management/Maintenance'
import SystemSetting from '@/management/SystemSetting'
import UserManage from '@/management/UserManage'

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import MainLayout1 from '@/layout/MainLayout1'
import MainLayout2 from '@/layout/MainLayout2'

const MainLayout = ({ children, path, mdOnly }: { children: JSX.Element; path: string, mdOnly: boolean }) => {
  return mdOnly ? <MainLayout1 path={path}>
    {children}
  </MainLayout1> : <MainLayout2 path={path}>
    {children}
  </MainLayout2>

}

/** Stateless app */
const Main = () => {
  const theme = useTheme();
  const mdOnly = useMediaQuery(theme.breakpoints.up('md'));

  const isAuthenticated = async () => {
    return false
  }

  const handleRoute = async (e: any) => {
    switch (e.url) {
      case '/profile':
        const isAuthed = await isAuthenticated()
        if (!isAuthed) route('/SignIn', true)
        break
    }
  }

  return (
    <Router onChange={handleRoute}>

      {/* 新しい記事 */}
      <MainLayout path='/ThemeSelectio' mdOnly={mdOnly} >
        <ThemeSelectio />
      </MainLayout>

      {/* 作成した記事一覧 */}
      <MainLayout path='/' mdOnly={mdOnly} >
        <ArticleList />
      </MainLayout>

      {/* CodeMirror */}
      <Write path='/Write' />

      {/* AIサポート機能 */}
      <MainLayout path='/AiSupport' mdOnly={mdOnly} >
        <AiSupport />
      </MainLayout>

      {/* UI設定 */}
      <MainLayout path='/UiPreference' mdOnly={mdOnly} >
        <UiPreference />
      </MainLayout>

      <MainLayout path='/management/ArticleTheme' mdOnly={mdOnly} >
        <ArticleTheme />
      </MainLayout>

      <MainLayout path='/management/ArticleQuestion' mdOnly={mdOnly} >
        <ArticleQuestion />
      </MainLayout>

      <MainLayout path='/management/SystemSetting' mdOnly={mdOnly} >
        <SystemSetting />
      </MainLayout>

      <MainLayout path='/management/UserManage' mdOnly={mdOnly} >
        <UserManage />
      </MainLayout>

      <MainLayout path='/management/Maintenance' mdOnly={mdOnly} >
        <Maintenance />
      </MainLayout>

      <Checkout path='/Checkout' />
      <Album path='/Album' />
      <Pricing path='/Pricing' />
      <SignIn path='/SignIn' />
      <SignInSide path='/SignInSide' />
      <SignUp path='/SignUp' />
      <StickyFooter path='/StickyFooter' />
      {/* <Profile path="/profile/:user?" />  */}

      <Error type='404' default />
    </Router>
  )
}

/** fall-back route (handles unroutable URLs) */
const Error = (props: any) => (
  <section class='error'>
    <h2>Error {props.type}</h2>
    <p>It looks like we hit a snag.</p>
    <pre>{props.url}</pre>
  </section>
)

render(<Main />, document.body)
