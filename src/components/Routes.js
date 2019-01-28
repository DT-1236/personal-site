import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import About from './About';
// import Portfolio from './Portfolio';
import Contact from './Contact';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/about" render={() => <About />} />
        {/* <Route exact path="/portfolio" render={() => <Portfolio />} /> */}
        <Route exact path="/contact" render={() => <Contact />} />
        <Route render={() => <HomePage />} />
      </Switch>
    );
  }
}

export default Routes;
