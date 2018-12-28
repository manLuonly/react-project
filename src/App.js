import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import City from './views/City';
class App extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          {/* 当匹配不上city时,就匹配根 */}
        <Route path="/city" component={City}></Route>
        <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
