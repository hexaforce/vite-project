import { Component, h, render } from 'preact'
import { Router, route } from 'preact-router'
import Album from '@/contents/Album'
import Pricing from '@/contents/Pricing'
import SignIn from '@/contents/SignIn'
import SignInSide from '@/contents/SignInSide'
import SignUp from '@/contents/SignUp'
import StickyFooter from '@/contents/StickyFooter'
import Dashboard from '@/contents/dashboard/Dashboard'

// const { h, Component, render } = preact; /** @jsx h */
// const { Router, route } = preactRouter;

// history.replaceState(0, 0, '/');  // jsfiddle url defaults to `/_display`

// function search(query) {
//   route(`/profile?q=${encodeURIComponent(query)}`);
// }

/** Stateless app */
const App = () => (
  <div class='app'>
    {/* <Header /> */}
    <Router>
      {/* <Home path='/' /> */}
      <Album path='/Album' />
      <Pricing path='/Pricing' />
      <SignIn path='/SignIn' />
      <SignInSide path='/SignInSide' />
      <SignUp path='/SignUp' />
      <StickyFooter path='/StickyFooter' />
      <Dashboard path='/' />
      {/* <Profile path="/profile/:user?" /> */}
      <Error type='404' default />
    </Router>
  </div>
)

/** demo header nav+search */
// const Header = () => (
//   <header>
//     <nav>
//       <a href='/'>Home</a>
//       <a href='/Album'>Album</a>
//       <a href='/Pricing'>Pricing</a>
//       <a href='/SignIn'>SignIn</a>
//       <a href='/SignInSide'>SignInSide</a>
//       <a href='/SignUp'>SignUp</a>
//       <a href='/StickyFooter'>StickyFooter</a>
//       {/* <a href="/profile">Profile</a>
//       <a href="/profile/john">John</a> */}
//       <a href='/asdf'>Error</a>
//     </nav>
//     {/* <input type="search" placeholder="Search..." onSearch={e => search(e.target.value)} /> */}
//   </header>
// )

/** our index route */
class Home extends Component {
  setText = (e: any) => {
    this.setState({ text: e.target.value })
  }
  render({ }, { text = 'Some Text' }) {
    return (
      <section class='home'>
        <input value={text} onInput={this.setText} />
        <div>In caps: {text.toUpperCase()}</div>
      </section>
    )
  }
}

/** fall-back route (handles unroutable URLs) */
const Error = (props: any) => (
  <section class='error'>
    <h2>Error {props.type}</h2>
    <p>It looks like we hit a snag.</p>
    <pre>{props.url}</pre>
  </section>
)

render(<App />, document.body)
