import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Start from './Start'
import ScoreBoard from './ScoreBoard'

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Start} />
        <Route path="/scoreboard" component={ScoreBoard} />
      </Router>
    </>
  )
}

export default App
