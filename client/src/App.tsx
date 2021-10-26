import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Feed from './pages/Feed'
import Profile from './pages/Profile'

import Header from './components/Header'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <main className='content'>
          <Switch>
            <Route component={Feed} path='/' exact />
            <Route component={Profile} path='/profile' exact />
            <Redirect to='/' />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
