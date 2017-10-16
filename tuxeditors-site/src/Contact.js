import React, { Component } from 'react';
import { Well } from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
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
        );
    }
}


export default Contact;

                