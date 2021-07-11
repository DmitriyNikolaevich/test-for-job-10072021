import React from 'react'
import { Route, Switch } from 'react-router'
import { Entrance } from './Components/Entrance'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { Result } from './Components/Result'
import { Tasks } from './Components/Tasks'
import s from './App.module.css'
const App = () => {

  return (
    <div>
      <Header />
      <main className={s.mainBlock}>
        <Switch>
          <Route render={() => <Tasks />} path={'/tasks'} />
          <Route render={() => <Result />} path={'/result'} />
          <Route render={() => <Entrance />} path={'/'} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

export default App
