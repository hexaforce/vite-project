import { Component, h, render } from 'preact'
import { Router, route } from 'preact-router'
import MenuLayout from '@/MenuLayout'
import Album from '@/contents/Album'
import Pricing from '@/contents/Pricing'
import SignIn from '@/contents/SignIn'
import SignInSide from '@/contents/SignInSide'
import SignUp from '@/contents/SignUp'
import StickyFooter from '@/contents/StickyFooter'
import Article from '@/contents/Article'
import Content from '@/contents/dashboard/DashboardContent'

/** Stateless app */
const App = () => (
  <div class='app'>
    <Router>
      <MenuLayout path='/'>
        <Content />
      </MenuLayout>
      <MenuLayout path='/Album2'>
        <Album />
      </MenuLayout>
      <MenuLayout path='/Pricing2'>
        <Pricing />
      </MenuLayout>
      <MenuLayout path='/Article'>
        <Article />
      </MenuLayout>
      <SignIn path='/SignIn' />
      <SignInSide path='/SignInSide' />
      <SignUp path='/SignUp' />
      <StickyFooter path='/StickyFooter' />
      {/* <Profile path="/profile/:user?" /> */}
      <Error type='404' default />
    </Router>
  </div>
)

/** fall-back route (handles unroutable URLs) */
const Error = (props: any) => (
  <section class='error'>
    <h2>Error {props.type}</h2>
    <p>It looks like we hit a snag.</p>
    <pre>{props.url}</pre>
  </section>
)

render(<App />, document.body)
