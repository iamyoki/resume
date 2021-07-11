/**
 * Routes
 */

import { Router } from '@reach/router'
import SelfIntroduction from 'presentations/SelfIntroduction'
import HomePage from './containers/HomePage'
import NotfoundPage from './containers/NotfoundPage'
import PageWrapper from './containers/PageWrapper'
import SecondPage from './containers/SecondPage'

function Routes() {
  return (
    <Router id='router'>
      <SelfIntroduction path='/' />
      <PageWrapper path='/'>
        <HomePage path='/home' label='Home' />
        <SecondPage path='second' label='Second' />
        <NotfoundPage default />
      </PageWrapper>
    </Router>
  )
}

export default Routes
