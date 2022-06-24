import { Component, h, render } from 'preact'
import { Router, route } from 'preact-router'
import MenuLayout from '@/MenuLayout'
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
      <MenuLayout path='/ThemeSelectio'>
        <ThemeSelectio />
      </MenuLayout>
      <MenuLayout path='/'>
        <ArticleList />
      </MenuLayout>
      <Write path='/Write' />
      <MenuLayout path='/Album2'>
        <Album />
      </MenuLayout>
      <Pricing path='/Pricing' />
      <MenuLayout path='/Pricing2'>
        <Pricing />
      </MenuLayout>
      <MenuLayout path='/Content'>
        <Content />
      </MenuLayout>
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
