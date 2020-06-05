import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import About from './about';
import Contact from './contact';
import Projects from './projects';
import Team from './team';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/about" component={About}/>
        <Route path="/team" component={Team}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/contact" component={Contact}/>
    </Switch>
)

export default Main;