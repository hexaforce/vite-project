import { Component, h, render } from 'preact'
import { Router, route } from 'preact-router'
import MenuLayout from '@/layout/MenuLayout'
import Album from '@/contents/Album'
import ArticleList from '@/contents/ArticleList'
import ThemeSelectio from '@/contents/ArticleTheme'
import Pricing from '@/contents/Pricing'
import SignIn from '@/contents/SignIn'
import SignInSide from '@/contents/SignInSide'
import SignUp from '@/contents/SignUp'
import StickyFooter from '@/contents/StickyFooter'
import Write from '@/contents/Write'
import Content from '@/contents/dashboard/DashboardContent'
import AiSupport from '@/contents/ai-support/AiSupport'
import UiPreference from '@/contents/ui-preference/UiPreference'
import Checkout from '@/contents/checkout/Checkout'

import ArticleQuestion from '@/management/ArticleQuestion'
import ArticleTheme from '@/management/ArticleTheme'
import SystemSetting from '@/management/SystemSetting'
import UserManage from '@/management/UserManage'
import Maintenance from '@/management/Maintenance'

// -rw-r--r--  1 hexaforce  staff  1375  6 25 14:54 ArticleQuestion.tsx
// -rw-r--r--  1 hexaforce  staff  1372  6 25 14:52 ArticleTheme.tsx
// -rw-r--r--  1 hexaforce  staff  1371  6 25 14:58 Maintenance.tsx
// -rw-r--r--  1 hexaforce  staff  1373  6 25 14:55 SystemSetting.tsx
// -rw-r--r--  1 hexaforce  staff  1370  6 25 14:56 UserManage.tsx

/** Stateless app */
const Main = () => {
  const isAuthenticated = async () => {
    return true
  }

  const handleRoute = async (e: any) => {
    switch (e.url) {
      case '/profile':
        const isAuthed = await isAuthenticated()
        if (!isAuthed) route('/', true)
        break
    }
  }

  return (
    <Router onChange={handleRoute}>

      {/* 新しい記事 */}
      <MenuLayout path='/ThemeSelectio'>
        <ThemeSelectio />
      </MenuLayout>

      {/* 作成した記事一覧 */}
      <MenuLayout path='/'>
        <ArticleList />
      </MenuLayout>

      {/* CodeMirror */}
      <Write path='/Write' />

      {/* AIサポート機能 */}
      <MenuLayout path='/AiSupport'>
        <AiSupport />
      </MenuLayout>

      {/* UI設定 */}
      <MenuLayout path='/UiPreference'>
        <UiPreference />
      </MenuLayout>

      <MenuLayout path='/management/ArticleTheme'>
        <ArticleTheme />
      </MenuLayout>
      <MenuLayout path='/management/ArticleQuestion'>
        <ArticleQuestion />
      </MenuLayout>
      <MenuLayout path='/management/SystemSetting'>
        <SystemSetting />
      </MenuLayout>
      <MenuLayout path='/management/UserManage'>
        <UserManage />
      </MenuLayout>
      <MenuLayout path='/management/Maintenance'>
        <Maintenance />
      </MenuLayout>

      <Checkout path='/Checkout' />
      <Album path='/Album' />
      <Pricing path='/Pricing' />
      <SignIn path='/SignIn' />
      <SignInSide path='/SignInSide' />
      <SignUp path='/SignUp' />
      <StickyFooter path='/StickyFooter' />
      {/* <Profile path="/profile/:user?" /> */}
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
