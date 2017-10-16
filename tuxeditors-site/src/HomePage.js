import React, { Component } from 'react';
import { Well } from 'react-bootstrap';

import Navigation from './Navigation';
import Banner from './Banner';
import CommitList from './CommitList';
import ConceptualArchitecture from './ConceptualArchitecture';
import ConcreteArchitecture from './ConcreteArchitecture';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Banner />
                {window.location.pathname === '/' &&
                    <CommitList />
                }
                {window.location.pathname === '/conceptual' &&
                    <ConceptualArchitecture />
                }
                {window.location.pathname === '/concrete' &&
                    <ConcreteArchitecture />
                }
                {window.location.pathname === '/discussions' &&
                    <center>
                        <h3 id="discussions">Discussions</h3>
                        <h4>Meeting #1 - Sept 28:</h4>
                        <p>Discussed website design and layout. Git and version control was taught to unfamiliar members.</p>
                    </center>
                }
                <center>
                    <h3>Contact Us</h3>
                    <Well style={{ 'maxWidth': '75%' }}>
                        <p>Andrew Lazenka - <a href="mailto:14ajl3@queensu.ca">Email</a></p>
                        <p>Hyun Heo - <a href="mailto:12hh13@queensu.ca">Email</a></p>
                        <p>Renée Rosario - <a href="mailto:15rmr1@queensu.ca">Email</a></p>
                        <p>Rory Bell - <a href="mailto:rory.bell@queensu.ca">Email</a></p>
                        <p>Simon Pan - <a href="mailto:11ycp1@queensu.ca">Email</a></p>
                        <p>Noam McGregor - <a href="mailto:13njam@queensu.ca">Email</a></p>
                    </Well>
                </center>
            </div>
        );
    }
}


export default HomePage;
