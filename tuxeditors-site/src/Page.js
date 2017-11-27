import React, { Component } from 'react';
import {
    Switch,
    Route
  } from 'react-router-dom';

import Banner from './Banner';
import Contact from './Contact';
import Navigation from './Navigation';
import CommitList from './CommitList';
import ConceptualArchitecture from './ConceptualArchitecture';
import ConcreteArchitecture from './ConcreteArchitecture';
import Discussions from './Discussions';
import Proposed from './Proposed';

class Page extends Component {
    render() {
        return (
            <main>
                <Navigation />
                <Banner />
                <Switch>
                    <Route exact path='/' component={CommitList} />
                    <Route path='/conceptual' component={ConceptualArchitecture} />
                    <Route path='/concrete' component={ConcreteArchitecture} />
                    <Route path='/discussions' component={Discussions} />
                    <Route path='/proposed' component={Proposed} />
                </Switch>
                <Contact />
            </main>
        );
    }
}


export default Page;
