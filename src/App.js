import React from 'react'
import Recipe from './components/recipe'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Switch>
      <div className="container">
        <Route to="/" exact component={Recipe} />
        <Route to="/recipe" exact component={Recipe} />
      </div>
    </Switch>
  );
}

export default App