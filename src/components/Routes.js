import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import About from './About';
import Contact from './Contact';
import Bot from './Bot';
import Jobly from './Jobly';
import HOS from './HOS';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/bot" render={() => <Bot />} />
        <Route exact path="/jobly" render={() => <Jobly />} />
        <Route exact path="/hos" render={() => <HOS />} />
        <Route render={() => <HomePage />} />
      </Switch>
    );
  }
}

export default Routes;
