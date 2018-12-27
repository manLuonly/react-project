import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import City from './views/City';
class App extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/city" component={City}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
