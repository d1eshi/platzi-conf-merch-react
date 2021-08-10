import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { Home, Checkout, Information, Payment, Success, NotFound } from './pages/index.js'
import Layout from './components/Layout'
import './App.css'
import { ListProvider } from './context/ListContext'

function App() {
  return (
    <BrowserRouter>
      <ListProvider>
        <Layout>
          <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={Checkout} path="/checkout" />
            <Route exact component={Information} path="/checkout/information" />
            <Route exact component={Payment} path="/checkout/payment" />
            <Route exact component={Success} path="/checkout/success" />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </ListProvider>
    </BrowserRouter>
  )
}

export default App
